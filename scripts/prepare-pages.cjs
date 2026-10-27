/**
 * Build a GitHub Pages snapshot from a local static site dist.
 * Usage: node scripts/prepare-pages.cjs "C:\path\to\site\dist"
 */
const fs=require('node:fs'), path=require('node:path');
const source=path.resolve(process.argv[2]||'');
const repo=path.resolve(__dirname,'..'),dest=path.join(repo,'docs');
if (!process.argv[2]||!fs.existsSync(path.join(source,'index.html'))) {console.error('Usage: node scripts/prepare-pages.cjs <path-to-site-dist>');process.exit(2)}
const wanted=new Set(), stats={files:0,texts:0,bytes:0};
function keep(rel){
  if(rel.startsWith('downloads/'))return rel==='downloads/illustrations-insights-originales-20261026.zip';
  return !/\.cjs$/i.test(rel)&& !/(^|\/)\.(?:DS_Store|gitignore)$/.test(rel);
}
function convert(text,rel){
  if(!/\.(?:html|css|js)$/i.test(rel))return text;
  text=text.replace(/(["'])\/(?!\/|therow2\/)/g,'$1/therow2/');
  text=text.replace(/url\(\s*(["']?)\/(?!\/|therow2\/)/g,'url($1/therow2/');
  if(rel.endsWith('.html'))text=text.replace(/\bsrcset=(["'])(.*?)\1/gs,(full,q,value)=>'srcset='+q+value.replace(/(^|,\s*)\/(?!\/|therow2\/)/g,'$1/therow2/')+q);
  return text;
}
function walk(folder){
 for(const entry of fs.readdirSync(folder,{withFileTypes:true})){
   if(entry.isDirectory()&&['node_modules','.git'].includes(entry.name))continue;
   const full=path.join(folder,entry.name);
   if(entry.isDirectory()){walk(full);continue}
   if(!entry.isFile())continue;
   const rel=path.relative(source,full).replace(/\\/g,'/');
   if(!keep(rel))continue;
   wanted.add(rel);
   const target=path.join(dest,...rel.split('/'));
   fs.mkdirSync(path.dirname(target),{recursive:true});
   const isText=/\.(?:html|css|js)$/i.test(rel);
   const content=isText?Buffer.from(convert(fs.readFileSync(full,'utf8'),rel),'utf8'):fs.readFileSync(full);
   fs.writeFileSync(target,content);
   stats.files++;stats.bytes+=content.length;if(isText)stats.texts++;
 }
}
walk(source);
function prune(folder){
 for(const e of fs.readdirSync(folder,{withFileTypes:true})){
   const full=path.join(folder,e.name);
   if(e.isDirectory()){prune(full);if(!fs.readdirSync(full).length)fs.rmdirSync(full);continue}
   const rel=path.relative(dest,full).replace(/\\/g,'/');
   if(rel!=='.nojekyll'&&!wanted.has(rel))fs.unlinkSync(full);
 }
}
prune(dest);
fs.writeFileSync(path.join(dest,'.nojekyll'),'');
console.log(JSON.stringify({...stats,articles:fs.readdirSync(path.join(dest,'insights')).filter(x=>x.endsWith('.html')&&x!=='index.html').length,zip:fs.existsSync(path.join(dest,'downloads','illustrations-insights-originales-20261026.zip'))}));
