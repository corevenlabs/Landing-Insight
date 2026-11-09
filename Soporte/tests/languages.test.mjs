import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { contentForLanguage, languageForPath, metadata } from '../src/i18n/support.mjs';
const source = JSON.parse(readFileSync(new URL('../src/data/landing.json', import.meta.url)));
const walk = node => typeof node === 'string' ? [node] : [node, ...(node.children || []).flatMap(walk)];
const nodes = content => Object.values(content).flatMap(walk);
const fixed = new Set(['by','Insight The City','ES','EN','PT','↗','info@insightthecity.com','01 / ITC','02 / ITC','03 / ITC','ITC CLUB','FAQ / ITC CLUB','© 2026 Eventland LLC · Insight The City']);

test('direct routes, reloads, aliases and trailing slashes select the intended language', () => {
 for (const [path, lang] of [['/es/soporte/','es'],['/soporte','es'],['/en/support/','en'],['/support','en'],['/pt/suporte','pt'],['/pt/suporte/','pt']]) assert.equal(languageForPath(path),lang);
});
test('every visible Spanish sentence is translated, preserving the original layout and contact address', () => {
 for (const lang of ['en','pt']) {
  const original=nodes(source), translated=nodes(contentForLanguage(lang));
  assert.equal(translated.length,original.length);
  original.forEach((n,i)=>{
   const t=translated[i];
   if (typeof n==='string') { if(n.trim() && !fixed.has(n)) assert.notEqual(t,n,`Missing ${lang}: ${n}`); }
   else { assert.equal(t.tag,n.tag); assert.equal(t.attrs?.class,n.attrs?.class); }
  });
  assert.equal(translated.filter(x=>typeof x==='object'&&x.attrs?.lang&&x.attrs?.['aria-current']==='page')[0].attrs.lang,lang);
  for(const n of translated.filter(x=>typeof x==='object'&&x.attrs?.href?.startsWith('mailto:'))){
   assert.ok(n.attrs.href.startsWith('mailto:info@insightthecity.com'));
   assert.ok(!decodeURIComponent(n.attrs.href.replaceAll('+',' ')).includes('Ayuda con'));
  }
  assert.notEqual(metadata[lang].title,metadata.es.title);
 }
});
test('localization does not mutate the Spanish source or its language selector',()=>{
 const before=JSON.stringify(source);contentForLanguage('en');contentForLanguage('pt');
 assert.equal(JSON.stringify(source),before);
 assert.ok(nodes(contentForLanguage('es')).includes('¿La app es gratuita?'));
 const selector=nodes(contentForLanguage('es')).filter(x=>typeof x==='object'&&x.attrs?.lang);
 assert.equal(selector.filter(x=>x.attrs['aria-current']==='page').length,1);
 assert.equal(selector.find(x=>x.attrs['aria-current']==='page').attrs.lang,'es');
});
