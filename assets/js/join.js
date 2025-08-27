(function(){
  var form=document.getElementById('joinForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name=document.getElementById('joinName').value.trim();
    var email=document.getElementById('joinEmail').value.trim();
    var type=document.getElementById('joinType').value;
    var ok = name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && type;
    if(!ok){ alert('Please fill all fields correctly.'); return; }
    document.getElementById('joinMsg').style.display='block';
    form.reset();
  });
})();

