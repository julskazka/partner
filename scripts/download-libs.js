// scripts/download-libs.js
// Скачивание библиотеки html2pdf.js для полной автономной работы без интернета

import { writeFileSync } from 'fs';
import { get } from 'https';
import { join } from 'path';

const url = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
const dest = join(process.cwd(), 'js', 'html2pdf.bundle.min.js');

console.log(`🌐 Скачивание html2pdf.bundle.min.js из CDN...`);

get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    writeFileSync(dest, data, 'utf8');
    console.log(`✅ Библиотека сохранена локально: js/html2pdf.bundle.min.js`);
  });
}).on('error', (err) => {
  console.error(`❌ Ошибка скачивания:`, err.message);
  process.exit(1);
});
