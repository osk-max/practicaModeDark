// Funcion que va a cambiar una clase en nuestro body para identificar modo osc o modo claro
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Con el toggle sino tiene una clase la crea y si la tiene creada la borra
  btnSwitch.classList.toggle("active"); // Activar el estado active
});
