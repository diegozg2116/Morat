const canciones = [
{ nombre: "Acuerdate de mi", archivo: "acuerdate.mp3" },
{ nombre: "A Dónde Vamos", archivo: "Adondevamos.mp3" },
{ nombre: "Al Aire", archivo: "aire.mp3" },
{ nombre: "Amor con Hielo", archivo: "hielo.mp3" },
{ nombre: "Besos en Guerra", archivo: "besos.mp3" },
{ nombre: "Causa Perdida", archivo: "causaperdida.mp3" },
{ nombre: "Cuando el Amor se Escapa", archivo: "escapa.mp3" },
{ nombre: "Cuando Nadie Ve", archivo: "nadieve.mp3" },
{ nombre: "Cuánto Me Duele", archivo: "cuantoduele.mp3" },
{ nombre: "En un Sólo Día", archivo: "dia.mp3" },
{ nombre: "Faltas Tú", archivo: "faltastu.mp3" },
{ nombre: "La Correcta", archivo: "correcta.mp3" },
{ nombre: "23", archivo: "23.mp3" },
{ nombre: "Maldita Costumbre", archivo: "costumbre.mp3" },
{ nombre: "Mi Suerte", archivo: "misuerte.mp3" },
{ nombre: "Mi Nuevo Vicio", archivo: "vicio.mp3" },
{ nombre: "Mi Vida Entera", archivo: "entera.mp3" },
{ nombre: "Nunca Al Revés", archivo: "nunca.mp3" },
{ nombre: "Porfa no te vayas", archivo: "porfa.mp3" },
{ nombre: "Primeras Veces", archivo: "primeras.mp3" },
{ nombre: "Por si no te Vuelvo a Ver", archivo: "ver.mp3" },
{ nombre: "Otras se pierden", archivo: "pierden.mp3" },
{ nombre: "Ya no Estás Tú", archivo: "noestas.mp3" }

];

let indiceActual = 0;
let audio = new Audio();
let botones = [];

const lista = document.getElementById("listaCanciones");
const btnSiguiente = document.getElementById("btnSiguienteGlobal");

// Crear los elementos de la lista
canciones.forEach((cancion, index) => {
const div = document.createElement("div");
div.className = "cancion";

const contenedorTexto = document.createElement("span");
contenedorTexto.className = "info";

const titulo = document.createElement("span");
titulo.className = "titulo";
titulo.textContent = cancion.nombre;

contenedorTexto.appendChild(titulo);

const btn = document.createElement("button");
btn.textContent = "▶ Reproducir";
btn.dataset.index = index;

  // 👉 Primero el texto, luego el botón
div.appendChild(contenedorTexto); 
div.appendChild(btn);             

lista.appendChild(div);
botones.push(btn);

btn.addEventListener("click", () => {
    if (indiceActual === index && !audio.paused) {
audio.pause();
btn.textContent = "▶ Reproducir";
    } else {
        reproducirCancion(index);
    }
    });
});

function reproducirCancion(index) {
audio.pause();
indiceActual = index;
audio = new Audio(canciones[indiceActual].archivo);
audio.play();

botones.forEach((b, i) => {
    b.textContent = i === index ? "⏸ Pausar" : "▶ Reproducir";
});

audio.onended = () => {
    siguienteCancion();
};
}

function siguienteCancion() {
let siguiente = (indiceActual + 1) % canciones.length;
reproducirCancion(siguiente);
}

btnSiguiente.addEventListener("click", () => {
siguienteCancion();
});

