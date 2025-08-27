const joinForm = document.getElementById('joinForm');
const joinMsg = document.getElementById('joinMsg');

joinForm.addEventListener('submit', function(e){
  e.preventDefault();
  joinMsg.style.display = 'block';
  joinForm.reset();
});
