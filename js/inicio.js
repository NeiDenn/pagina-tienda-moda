const contenedoresdeproducto = [...document.querySelectorAll('.contenedordeproducto')];
const btnsiguiente = [...document.querySelectorAll('.btnsiguiente')];
const btnanterior = [...document.querySelectorAll('.btnanterior')];

contenedoresdeproducto.forEach((item, i) =>{
    let dimensionesdelcontenedor = item.getBoundingClientRect();
    let anchodelcontenedor = dimensionesdelcontenedor.width;

    btnsiguiente[i].addEventListener('click', () =>{
        item.scrollLeft += anchodelcontenedor;
    })

    btnanterior[i].addEventListener('click', () =>{
        item.scrollLeft -= anchodelcontenedor;
    })
})