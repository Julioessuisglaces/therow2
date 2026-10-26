(function(){
const items=[{"title":"À qui s’adressent ces prestations ?","id":"question-1"},{"title":"Quelle est la différence entre Conseiller, Planifier et Diriger ?","id":"question-2"},{"title":"Dois-je déjà disposer d’une équipe marketing ?","id":"question-3"},{"title":"Les prestations comprennent-elles la production de contenus ou de campagnes ?","id":"question-4"},{"title":"Comment se déroule un premier échange ?","id":"question-5"},{"title":"Quels sont les honoraires et les engagements ?","id":"question-6"},{"title":"Comment demander des études de cas ?","id":"question-7"},{"title":"Comment vous contacter ?","id":"question-8"}];
function base(){return location.pathname.startsWith('/therow2/')?'/therow2/':'/therow2/'}
function init(){
const header=document.querySelector('body>header');if(!header)return;
const nav=header.querySelector('nav[aria-label="Informations"]');if(!nav)return;
const btn=document.createElement('button');btn.type='button';btn.className='search-open';btn.textContent='Recherche';btn.setAttribute('aria-haspopup','dialog');btn.setAttribute('aria-expanded','false');nav.prepend(btn);
const box=document.createElement('div');box.className='site-search';box.hidden=true;
box.innerHTML='<div class="site-search__row"><label for="site-search-input">Recherche</label><button type="button" class="site-search__close" aria-label="Fermer la recherche">×</button></div><input type="search" id="site-search-input" placeholder="Rechercher une question" autocomplete="off" aria-label="Rechercher dans les questions fréquentes"><p class="site-search__hint">Questions fréquentes</p><div class="site-search__results" role="list"></div>';
header.after(box);const input=box.querySelector('input'),results=box.querySelector('.site-search__results');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function render(){const term=normalize(input.value.trim());const found=items.filter(item=>!term||normalize(item.title).includes(term));results.replaceChildren();for(const item of found.slice(0,8)){const a=document.createElement('a');a.href=base()+'questions-frequentes.html#'+item.id;a.textContent=item.title;a.setAttribute('role','listitem');results.append(a)}if(!found.length){const p=document.createElement('p');p.textContent='Aucune question trouvée.';results.append(p)}}
function close(){box.hidden=true;btn.setAttribute('aria-expanded','false');document.body.classList.remove('search-visible')}
function open(){box.hidden=false;btn.setAttribute('aria-expanded','true');document.body.classList.add('search-visible');render();input.focus()}
btn.addEventListener('click',()=>box.hidden?open():close());box.querySelector('.site-search__close').addEventListener('click',close);input.addEventListener('input',render);document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const mobile=document.querySelector('.mobile-menu-panel nav');if(mobile){const a=document.createElement('button');a.type='button';a.className='mobile-search-open';a.textContent='Recherche';mobile.prepend(a);a.addEventListener('click',()=>{document.querySelector('.mobile-menu-toggle')?.click();open()})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();