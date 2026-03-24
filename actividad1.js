let playerage = prompt("Ingresa tu edad para acceder al videojuego:");


if (playerage < 13) {
  alert("No podes jugar");
} else if (playerage < 18 && playerage > 12) {
  alert("Podes jugar con autorizacion de un mayor");
} else {
  alert("Podes jugar sin restricciones");
}