document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("bday");
  const valore = input.value;


  const dataInserita = new Date(valore);
  const oggi = new Date();

  const giornoInserito = dataInserita.getDate();
  const meseInserito = dataInserita.getMonth(); // 0 = gennaio
  const giornoOggi = oggi.getDate();
  const meseOggi = oggi.getMonth();

  if (giornoInserito === giornoOggi && meseInserito === meseOggi) {
    
console.log("Tanti auguri!");
    // Cambia lo sfondo della pagina
    document.querySelector("#myForm").style.opacity = "0.1";
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/06/58/aa/0658aad98543b5d8e51b73282672cb0b.jpg')";

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  } 

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


  fetch("https://script.google.com/macros/s/AKfycbxZCq2d8nyPdzH0CnDRNN6LRgMtfY9p9xikCpR9Pns6_dqpoHEnmQut2gxxkXkzMxtn2g/exec", {
    method: "POST",
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(response => {
    alert("Messaggio inviato con successo!");
  })
  .catch(error => {
    alert("Message is flying to Luca!");
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

const radioPineapplePizza = document.getElementById('AnanasPizza');

radioPineapplePizza.addEventListener('click', () => {
  if (radioPineapplePizza.checked) {
    alert("You are not my friend anymore..");
    radioPineapplePizza.disabled = true;
    radioPineapplePizza.checked = false;
    document.getElementById('pizza').checked = true;
  }
});

