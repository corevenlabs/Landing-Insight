import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { metadata } from '../src/i18n/support.mjs';
const dist = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', dist), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
for (const [path, language] of [['es/soporte/','es'], ['en/support/','en'], ['pt/suporte/','pt']]) {
  const directory = new URL(path, dist);
  await mkdir(directory, { recursive: true });
  const localized = html.replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(metadata[language].title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${escape(metadata[language].description)}$2`);
  await writeFile(new URL('index.html', directory), localized);
}
