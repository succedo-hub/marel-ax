import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('public/vendor', { recursive: true });
for (const [source, destination] of [
  ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/vendor/bootstrap.min.css'],
  ['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/vendor/bootstrap.bundle.min.js'],
  ['node_modules/bootstrap/LICENSE', 'public/vendor/bootstrap-LICENSE.txt'],
]) await copyFile(source, destination);
