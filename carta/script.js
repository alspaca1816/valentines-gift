function seguirA(id) {
    document.querySelectorAll(".screen").forEach(s=> {
        s.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    if (id === 'flores') {
        dibujarFlores();
    }
}

function escuchar() {
    const audio = document.getElementById("audioCarta");

    if (audio.paused) {
        audio.play().catch(e => console.log(e));
    } else {
        audio.pause();
    }
}

const unPoetaFecha = new Date("2025-09-05");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - unPoetaFecha;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById("tiempo").innerText = `${dias} días, ${horas} horas y ${minutos} minutos de un poeta feliz.`;
}

setInterval(actualizarContador,1000);
actualizarContador();

function dibujarFlores() {
    const canvas = document.getElementById("canvasFlores");
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada con mucho amor");
});