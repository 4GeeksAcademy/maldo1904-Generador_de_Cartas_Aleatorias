/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arreglos de símbolos y números
  const simbolos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Función para generar la carta
  function generarCarta() {
    const arriba = document.querySelector(".par");
    const en_medio = document.querySelector(".pm");
    const abajo = document.querySelector(".pab");

    const simboloa = simbolos[Math.floor(Math.random() * simbolos.length)];
    const numeroa = numeros[Math.floor(Math.random() * numeros.length)];

    arriba.textContent = simboloa;
    en_medio.textContent = numeroa;
    abajo.textContent = simboloa;

    // Cambiar el color según el símbolo
    if (simboloa === "♦" || simboloa === "♥") {
      arriba.style.color = "red";
      abajo.style.color = "red";
    } else {
      arriba.style.color = "black";
      abajo.style.color = "black";
    }
  }

  const boton = document.querySelector(".btn-cambiar");
  boton.addEventListener("click", generarCarta);

  generarCarta();
};
