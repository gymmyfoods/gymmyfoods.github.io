const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
menuToggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');
}));

document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.getElementById('contact-form');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const subject=`GYMMY FOODS enquiry — ${d.get('topic')}`;
  const body=[
    `Name: ${d.get('name')}`,
    `Company: ${d.get('company')||'-'}`,
    `Email: ${d.get('email')}`,
    `Topic: ${d.get('topic')}`,
    '',
    d.get('message')
  ].join('\n');
  window.location.href=`mailto:hello.gymmyfoods@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
