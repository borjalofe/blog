#!/usr/bin/env node
/**
 * Layout + frontmatter contract for content/.
 * OFM linting is handled separately by markdownlint-obsidian.
 */

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_ROOT = path.join(ROOT, "content");

const COLLECTIONS = ["pages", "posts", "projects", "talks"];
const LOCALES = ["en", "es"];

const REQUIRED_DIRS = COLLECTIONS.flatMap((collection) =>
  LOCALES.map((locale) => path.join(CONTENT_ROOT, collection, locale)),
);

/** Optional post fields from borjalofe-web Astro schema. */
const POST_OPTIONAL = {
  description: "string",
  pubDate: "dateish",
  updatedDate: "dateish",
  heroImage: "string",
  reference: "string",
  canonicalURL: "string",
};

const errors = [];

function fail(message) {
  errors.push(message);
}

function parseFrontmatter(raw, filePath) {
  if (!raw.startsWith("---")) {
    fail(`${filePath}: missing YAML frontmatter (expected opening ---)`);
    return null;
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    fail(`${filePath}: missing YAML frontmatter closing ---`);
    return null;
  }

  const yaml = raw.slice(3, end).replace(/^\r?\n/, "");
  const data = {};

  for (const line of yaml.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) {
      // Nested / multiline YAML is out of scope for this minimal parser.
      continue;
    }
    const [, key, rawValue] = match;
    data[key] = unquote(rawValue.trim());
  }

  return data;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function isDateish(value) {
  if (typeof value !== "string" || !value) return false;
  const t = Date.parse(value);
  return !Number.isNaN(t);
}

async function walkMarkdown(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkMarkdown(full)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function partsOf(filePath) {
  const rel = path.relative(CONTENT_ROOT, filePath);
  const [collection, locale, ...rest] = rel.split(path.sep);
  return { collection, locale, basename: path.basename(filePath, ".md"), rest };
}

async function validateFile(filePath) {
  const rel = path.relative(ROOT, filePath);
  const raw = await readFile(filePath, "utf8");
  const data = parseFrontmatter(raw, rel);
  if (!data) return null;

  if (typeof data.title !== "string" || !data.title.trim()) {
    fail(`${rel}: frontmatter.title is required (non-empty string)`);
  }

  const { collection, locale, basename } = partsOf(filePath);

  if (collection === "posts") {
    for (const [key, kind] of Object.entries(POST_OPTIONAL)) {
      if (!(key in data)) continue;
      const value = data[key];
      if (kind === "string" && typeof value !== "string") {
        fail(`${rel}: frontmatter.${key} must be a string`);
      }
      if (kind === "dateish" && !isDateish(value)) {
        fail(`${rel}: frontmatter.${key} must be a parseable date`);
      }
    }

    if (typeof data.reference === "string" && data.reference.trim()) {
      if (locale === "en" && data.reference !== basename) {
        fail(
          `${rel}: frontmatter.reference must be the English slug (expected "${basename}")`,
        );
      }
    }
  }

  return { rel, collection, locale, basename, data };
}

function validatePostReferences(posts) {
  const enBySlug = new Map();
  for (const post of posts) {
    if (post.locale !== "en") continue;
    const slug = post.data.reference?.trim() || post.basename;
    enBySlug.set(slug, post);
  }

  for (const post of posts) {
    if (post.locale !== "es") continue;
    const ref = post.data.reference?.trim();
    if (!ref) {
      fail(
        `${post.rel}: frontmatter.reference is required on es posts (English slug)`,
      );
      continue;
    }
    if (!enBySlug.has(ref)) {
      fail(
        `${post.rel}: frontmatter.reference "${ref}" must match an English post slug under content/posts/en/`,
      );
    }
  }
}

async function main() {
  for (const dir of REQUIRED_DIRS) {
    try {
      const s = await stat(dir);
      if (!s.isDirectory()) fail(`${path.relative(ROOT, dir)}: not a directory`);
    } catch {
      fail(`${path.relative(ROOT, dir)}: missing required directory`);
    }
  }

  let markdownFiles = [];
  try {
    markdownFiles = await walkMarkdown(CONTENT_ROOT);
  } catch {
    fail("content/: cannot read content tree");
  }

  if (markdownFiles.length === 0) {
    fail("content/: expected at least one .md file");
  }

  const posts = [];
  for (const file of markdownFiles) {
    const meta = await validateFile(file);
    if (meta?.collection === "posts") posts.push(meta);
  }
  validatePostReferences(posts);

  if (errors.length) {
    console.error("Content contract failed:\n");
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }

  console.log(
    `Content contract OK (${markdownFiles.length} markdown file(s), ${REQUIRED_DIRS.length} locale dirs).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
