function filterEvents(type){
  var cards=document.querySelectorAll('#eventGrid .card');
  cards.forEach(function(card){
    var match = type==='all' || card.getAttribute('data-category')===type;
    card.style.display = match ? '' : 'none';
  });
}

