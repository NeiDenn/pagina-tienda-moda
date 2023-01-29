// cambio de images js

const imagenesdeproducto = document.querySelectorAll(".imagendeproductos img");
const imagenesdeproductoSlide = document.querySelector(".image-slider");

let activarImagenSlide = 0;

imagenesdeproducto.forEach((item, i) => {
    item.addEventListener('click', () => {
        imagenesdeproducto[activarImagenSlide].classList.remove('active');
        item.classList.add('active');
        imagenesdeproductoSlide.style.backgroundImage =  `url('${item.src}')`;
        activarImagenSlide = i;
    })
})

// botnos de tamaño js

const tamañobtns = document.querySelectorAll('.tamañoradiobtn')
let checkBtn = 0;

tamañobtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        tamañobtns[checkBtn].classList.remove('check')
        item.classList.add('check');
        checkBtn = i;
    })
})