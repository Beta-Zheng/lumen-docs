'use strict';

const fs = require('node:fs');
const path = require('node:path');

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8'));
const versions = JSON.parse(fs.readFileSync(path.join(__dirname, 'versions.json'), 'utf8'));
if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) throw new Error('Use an x.y.z version');
if (versions[manifest.version] !== manifest.minAppVersion) throw new Error('Update versions.json');

const output = path.join(__dirname, 'release', manifest.version);
const installation = path.join(output, manifest.name);
fs.mkdirSync(installation, { recursive: true });

// Standalone files are required as GitHub Release assets.
for (const file of ['theme.css', 'manifest.json']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(output, file));
}

// The folder is convenient for manual installation and offline documentation.
for (const file of ['theme.css', 'manifest.json', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(installation, file));
}
fs.cpSync(path.join(__dirname, 'screenshots'), path.join(installation, 'screenshots'), { recursive: true });
console.log(`Built Lumen Docs ${manifest.version} in release/${manifest.version}/`);
