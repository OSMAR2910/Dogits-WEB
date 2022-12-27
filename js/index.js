//Crarga
window.onload = function () {
    var contenedor = document.getElementById('logo_load');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}
//Aniscroll
const info = document.getElementById("info");
const serv = document.getElementById("serv");
const gale = document.getElementById("gale");
const cont = document.getElementById("cont");

const cargarImagen = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
    });
}

const observador  = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '400px 0px 300px 0px',
    threshold: 1.0
});

observador.observe(info);
observador.observe(serv);
observador.observe(gale);
observador.observe(cont);
//Modal1
const abrirmodal = document.querySelector("#button_ag_abrir");
const cerrarmodal = document.querySelector("#button_ag_cerrar");
const modal = document.querySelector("#modal1");

abrirmodal.addEventListener("click",()=>{
    modal.showModal();
}
)
cerrarmodal.addEventListener("click",()=>{
    modal.close();
}
)
//QRDOGITS.NETLIFY.APP-sERVICIOS.HTML

const code = document.getElementById('code');

new QRCode(code, 'dOGIts.netlifY.App&nDIS.HTML');
//Playvid
var fondo = document.getElementById("vid");
var sound = document.getElementById("aud");
function playPause() {
    if(sound.paused)
          sound.play();
          else
          sound.pause();
    if(fondo.paused)
          fondo.play();
          else
          fondo.pause();
          
}