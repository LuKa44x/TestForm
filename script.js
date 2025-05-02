document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
    bday: e.target.bday.value,
    phone: e.target.phone.value,
    state: e.target.state.value,
    city: e.target.city.value,
    address: e.target.address.value,
    message: e.target.message.value,
    file: e.target.file.value,
    color: e.target.color.value,
    select: e.target.select.value,
    range: e.target.range.value,
    food: e.target.food.value,
    checkbox: e.target.checkbox.checked
  };
  console.log("Dati inviati:", data);

  fetch("https://script.google.com/macros/s/AKfycbxZCq2d8nyPdzH0CnDRNN6LRgMtfY9p9xikCpR9Pns6_dqpoHEnmQut2gxxkXkzMxtn2g/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    alert("Messaggio inviato con successo!");
  })
  .catch(error => {
    alert("Message flying to Luca!");
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