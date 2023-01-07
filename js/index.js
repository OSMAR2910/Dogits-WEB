//Crarga
window.onload = function () {
    var contenedor = document.getElementById('logo_load');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}
//Aniscroll cont
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
//Aniscroll nav
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var ag = document.querySelector("#ag");
    var bp = document.querySelector("#BP");
    header.classList.toggle("abajo", window.scrollY>0);
    ag.classList.toggle("abajo", window.scrollY>0);
    bp.classList.toggle("abajo", window.scrollY>0);
})
//Modal1
const abrirmodal1 = document.querySelector("#button_ag_abrir");
const cerrarmodal1 = document.querySelector("#button_ag_cerrar");
const modal1 = document.querySelector("#modal1");

abrirmodal1.addEventListener("click",()=>{
    modal1.showModal();
}
)
cerrarmodal1.addEventListener("click",()=>{
    modal1.close();
}
)

const code = document.getElementById('code');

new QRCode(code, 'dOGIts.netlifY.App&nDIS.HTML');
//Modal2
const abrirmodal2 = document.querySelector("#button_ge_abrir");
const cerrarmodal2 = document.querySelector("#button_ge_cerrar");
const modal2 = document.querySelector("#modal2");

abrirmodal2.addEventListener("click",()=>{
    modal2.showModal();
}
)
cerrarmodal2.addEventListener("click",()=>{
    modal2.close();
}
)
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