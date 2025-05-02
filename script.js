document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    nome: e.target.nome.value,
    email: e.target.email.value,
    messaggio: e.target.messaggio.value
  };

  fetch("https://script.google.com/macros/s/AKfycbxZCq2d8nyPdzH0CnDRNN6LRgMtfY9p9xikCpR9Pns6_dqpoHEnmQut2gxxkXkzMxtn2g/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    alert("Messaggio inviato con successo!");
  })
  .catch(error => {
    alert("Errore nell'invio!");
    console.error(error);
  });
});







const range = document.getElementById('range');
  const valore = document.getElementById('range-value');

  // Mostra valore iniziale
  valore.textContent = range.value;

  // Aggiorna quando l'utente muove lo slider
  range.addEventListener('input', () => {
    valore.textContent = range.value;
  });