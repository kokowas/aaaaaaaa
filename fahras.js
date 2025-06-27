function toggleUnit(unitNumber) {
  const content = document.getElementById('content' + unitNumber);
  const btn = document.getElementById('btn' + unitNumber);

  if (content.classList.contains('show')) {
    content.classList.remove('show');
    btn.textContent = '▼';
  } else {
    content.classList.add('show');
    btn.textContent = '▲';
  }
}
