(function(){
  if(location.pathname!=='/therow2/'&&location.pathname!=='/therow2/index.html')return;
  const form=document.querySelector('footer .footer__news');
  if(!form)return;
  document.body.classList.add('home-newsletter-popup');
  const close=document.createElement('button');
  close.type='button';close.className='newsletter-close';
  close.setAttribute('aria-label','Fermer la fenêtre newsletter');
  close.textContent='×';
  close.addEventListener('click',()=>document.body.classList.add('newsletter-dismissed'));
  form.appendChild(close);
})();