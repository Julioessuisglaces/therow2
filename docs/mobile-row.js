(function(){
function init(){
const header=document.querySelector('body>header'),footer=document.querySelector('footer');if(!header||!footer)return; const newsletterButton=footer.querySelector('.footer__news .footer__field button');if(newsletterButton){const updateLabel=()=>{newsletterButton.textContent=window.matchMedia('(max-width:767px)').matches?'S’abonner':'>';};updateLabel();window.addEventListener('resize',updateLabel);}
const linkData=[['Conviction','/therow2/#conviction'],['Services','/therow2/#services'],['Insights','/therow2/insights/index.html'],['À propos','/therow2/#julien'],['Contact','/therow2/contact.html'],['Engagement','/therow2/engagement.html'],['Questions fréquentes','/therow2/questions-frequentes.html'],['Conditions générales','/therow2/conditions-generales.html'],['Confidentialité','/therow2/privacy-policy.html']];
const btn=document.createElement('button');btn.className='mobile-menu-toggle';btn.type='button';btn.setAttribute('aria-label','Ouvrir le menu');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','mobile-menu');btn.innerHTML='<span></span><span></span><span></span>';header.prepend(btn);
const panel=document.createElement('div');panel.id='mobile-menu';panel.className='mobile-menu-panel';const nav=document.createElement('nav');nav.setAttribute('aria-label','Navigation mobile');linkData.forEach(([name,href])=>{const a=document.createElement('a');a.href=href;a.textContent=name;nav.append(a)});panel.append(nav);header.after(panel);
const close=()=>{panel.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Ouvrir le menu');document.body.classList.remove('mobile-menu-open')};
btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';if(open)close();else{panel.classList.add('is-open');btn.setAttribute('aria-expanded','true');btn.setAttribute('aria-label','Fermer le menu');document.body.classList.add('mobile-menu-open')}});
panel.addEventListener('click',e=>{if(e.target.closest('a'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const fl=document.createElement('nav');fl.className='mobile-footer-links';fl.setAttribute('aria-label','Navigation de pied de page');
[['Conviction','/therow2/#conviction'],['Services','/therow2/#services'],['Insights','/therow2/insights/index.html'],['À propos','/therow2/#julien'],['Contact','/therow2/contact.html'],['Engagement','/therow2/engagement.html'],['Questions fréquentes','/therow2/questions-frequentes.html'],['LinkedIn','https://www.linkedin.com/in/julienioset/'],['Conditions générales','/therow2/conditions-generales.html'],['Politique de confidentialité','/therow2/privacy-policy.html']].forEach(([name,href])=>{const a=document.createElement('a');a.textContent=name;a.href=href;fl.append(a)});
const grid=footer.querySelector('.footer__grid');grid?.append(fl);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
