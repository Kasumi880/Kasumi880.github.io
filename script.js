// Autimatically update age
document.getElementById('year').textContent = new Date().getFullYear();

// Navigation opening/ Closing
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if(toggle){
  toggle.addEventListener('click', () => {
    const open = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Demo sending message
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = new FormData(form).get('name');
  document.querySelector('.result').textContent = `Thank you, ${name}!`;
  form.reset();
});