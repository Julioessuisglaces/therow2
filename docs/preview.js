const status=document.querySelector('#preview-status');let timer;
function notice(text){status.textContent=text;status.hidden=false;clearTimeout(timer);timer=setTimeout(()=>status.hidden=true,6000);}
document.querySelectorAll('.toggle').forEach(button=>button.addEventListener('click',()=>{const panel=document.getElementById(button.getAttribute('aria-controls'));const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));panel.hidden=open;button.textContent=open?'Détails':'Fermer';}));
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();notice('Maquette — aucune donnée n’est envoyée.');}));
document.querySelectorAll('a').forEach(link=>{if(link.href.includes('meetings-eu1.hubspot.com')||link.href.startsWith('mailto:')||link.href.startsWith('tel:')||link.getAttribute('href')==='#'){link.addEventListener('click',event=>{event.preventDefault();notice('Maquette — cette fonction n’est pas connectée.');});}});
document.querySelector('#langue').addEventListener('change',event=>{notice('Maquette — seule la version française est disponible.');event.target.value='fr';});
// Match original header threshold and fade; preserve current header dimensions.
const header=document.querySelector('header');
const updateHeader=()=>header.classList.toggle('nav--solid',window.scrollY>40);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
