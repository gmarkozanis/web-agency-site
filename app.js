(function(){
  const btn = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if(btn && menu){
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav] a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if(href === path) a.classList.add('active');
  });
})();
