// scripts/build.js
// Скрипт сборки интерактивной шпаргалки в единый bundle.js без ES-модулей
// Это позволяет запускать проект локально по протоколу file:/// во всех браузерах.

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const filesToBundle = [
  join(ROOT, 'js', 'components', 'quiz-data-details.js'),
  join(ROOT, 'js', 'components', 'quiz-data.js'),
  join(ROOT, 'js', 'components', 'intro.js'),
  join(ROOT, 'js', 'components', 'quiz-step.js'),
  join(ROOT, 'js', 'components', 'result.js'),
  join(ROOT, 'js', 'app.js')
];

function build() {
  console.log('📦 Сборка bundle.js...');
  let combinedCode = '';

  for (const filePath of filesToBundle) {
    let content = readFileSync(filePath, 'utf8');

    // Удаляем все импорты
    content = content.replace(/import\s+[\s\S]*?\s+from\s+['"].*?['"];?/g, '');

    // Удаляем экспорт дефолтной/именованной разметки
    content = content.replace(/export\s+const\s+/g, 'const ');
    content = content.replace(/export\s+function\s+/g, 'function ');
    content = content.replace(/export\s+\{\s*[\s\S]*?\s*\};?/g, '');

    combinedCode += `\n// --- Source: ${filePath.replace(ROOT, '')} ---\n` + content + '\n';
  }

  const bundledCode = `(function () {
  'use strict';
${combinedCode}
})();
`;

  writeFileSync(join(ROOT, 'js', 'bundle.js'), bundledCode, 'utf8');
  console.log('✅ bundle.js успешно собран!');
}

build();
