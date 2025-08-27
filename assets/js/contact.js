// Contact form submit
const contactForm = document.getElementById('contactForm');
const contactMsg = document.getElementById('contactMsg');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  contactMsg.style.display = 'block';
  contactForm.reset();
});

// FAQ accordion
const headers = document.querySelectorAll('.accordion .header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const panel = header.nextElementSibling;
    header.classList.toggle('active');
    
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Back-to-top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
