const range = document.getElementById('range');
  const valore = document.getElementById('range-value');

  // Mostra valore iniziale
  valore.textContent = range.value;

  // Aggiorna quando l'utente muove lo slider
  range.addEventListener('input', () => {
    valore.textContent = range.value;
  });