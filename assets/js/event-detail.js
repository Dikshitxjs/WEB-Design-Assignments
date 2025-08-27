(function(){
  var form=document.getElementById('rsvpForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name=document.getElementById('rsvpName');
    var email=document.getElementById('rsvpEmail');
    var ok = name.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    if(!ok){ alert('Please enter a valid name and email.'); return; }
    document.getElementById('rsvpMsg').style.display='block';
    form.reset();
  });
})();

