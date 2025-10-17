/* ============================================================
   funciones.js
   Botón contador de días hasta la feria (1 enero 2026)
   ============================================================ */
(function () {
  "use strict";

  function calcularDiasRestantes() {
    var hoy = new Date();
    var feria = new Date(2026, 0, 1); // Mes 0 = enero
    var diferencia = feria.getTime() - hoy.getTime();
    var dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  }

  function mostrarMensaje() {
    var dias = calcularDiasRestantes();
    var mensaje;

    if (dias > 1) {
      mensaje = "Faltan " + dias + " días para la feria";
    } else if (dias === 1) {
      mensaje = "¡Mañana es la feria!";
    } else if (dias === 0) {
      mensaje = "¡Hoy es la feria!";
    } else {
      mensaje = "La feria ya pasó hace " + Math.abs(dias) + " días.";
    }

    alert(mensaje);
  }

  // Inicializar cuando cargue el DOM
  function init() {
    var boton = document.getElementById("btn-feria");
    if (boton) {
      boton.onclick = mostrarMensaje;
    }
  }

  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", init);
  } else {
    window.onload = init;
  }
}());
