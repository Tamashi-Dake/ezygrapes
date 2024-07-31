// copyFile.js
const fs = require('fs');
const path = require('path');

const sourceFile = 'dist/grapes.min.js';
const targetDir = path.join('plugins', 'preset-webpage', 'lib');
const targetFile = path.join(targetDir, 'grapes.min.js');

try {
  const data = fs.readFileSync(sourceFile);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetFile, data);
  console.log('File copied successfully.');
} catch (err) {
  console.error('Error copying file:', err);
  process.exit(1);
}
