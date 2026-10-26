const menu = document.querySelector('.menu');
const navigation = document.querySelector('.mobile-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.hidden=true;menu.textContent='Menu';}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));navigation.hidden=open;menu.textContent=open?'Menu':'Fermer';});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
document.querySelector('.invitation').addEventListener('click',()=>{document.querySelector('.preview-note').hidden=false;});
