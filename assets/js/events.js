// ========== FILTER EVENTS ==========
function filterEvents(category) {
  const cards = document.querySelectorAll('#eventGrid .card');
  cards.forEach(card => {
    if(category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// attach click listeners to filter buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const category = e.target.dataset.category || 'all';
    filterEvents(category);
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// ========== RSVP FORM ==========
const rsvpForm = document.getElementById('rsvpForm');
if(rsvpForm){
  rsvpForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('rsvpMsg').style.display = 'block';
    rsvpForm.reset();
  });
}

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth'}));
