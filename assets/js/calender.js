// Highlight today
const today = new Date();
const date = today.getDate();

document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.table tbody td');
  cells.forEach(cell => {
    if(cell.textContent == date) {
      cell.classList.add('today');
    }
  });
});
