(function(){
  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name=document.getElementById('cName').value.trim();
      var email=document.getElementById('cEmail').value.trim();
      var msg=document.getElementById('cMsg').value.trim();
      var ok = name && msg && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if(!ok){ alert('Please fill all fields correctly.'); return; }
      document.getElementById('contactMsg').style.display='block';
      form.reset();
    });
  }
  var headers=document.querySelectorAll('#faq .header');
  headers.forEach(function(h){
    h.addEventListener('click', function(){
      var p = h.nextElementSibling; if(p){ p.classList.toggle('show'); }
    });
  });
})();

