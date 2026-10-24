'use strict';
const fs = require('node:fs'), path = require('node:path');
const target = path.join(__dirname, 'release', 'Lumen Docs');
fs.mkdirSync(target, { recursive: true });
for (const file of ['theme.css', 'manifest.json', 'README.md', 'LICENSE']) fs.copyFileSync(path.join(__dirname, file), path.join(target, file));
console.log('Built standalone Lumen Docs theme (no runtime JavaScript).');
