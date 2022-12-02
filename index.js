#!/usr/bin/env node
const { join, sep } = require('path');
const { symlink, existsSync } = require('fs');

const findLookupPaths = () => {
  const pathSegments = process.cwd().split(sep);
  const lookupPaths = [];

  for (let i = 0; i < pathSegments.length - 1; i++) {
    const path = join(...pathSegments.slice(0, i + 1), 'node_modules');
    lookupPaths.push(path);
  }

  lookupPaths.reverse();

  return lookupPaths;
};

const findParentModules = (paths = []) => {
  for (let path of paths) {
    if (existsSync(path)) return path;
  }
};

const linkPath = join(process.cwd(), 'node_modules');
const lookupPaths = findLookupPaths();
const parentModules = findParentModules(lookupPaths);

if (parentModules) {
  symlink(parentModules, linkPath, 'dir', () => {
    console.log(
      `[NML]: Linked \x1b[36m${linkPath}\x1b[0m to parent \x1b[36m${parentModules}\x1b[0m.`,
    );
  });
} else {
  console.log('[NML]: No parent with node_modules found.');
}
