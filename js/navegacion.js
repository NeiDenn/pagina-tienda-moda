const crearNavegacion = () =>{
    let nav = document.querySelector('.barradenavegacion');

    nav.innerHTML = `
    <div class="navegacion">
            <img src="./img/logotipo.png" class="logotipo" alt="">
            <div class="elementosdenavegacion">
                <div class="busqueda">
                    <input type="text" class="cajadebusqueda" placeholder="buscar marca, producto">
                    <button class="botondebusqueda">Buscar</button>
                </div>
                <a href="registrarse.html"><img src="img/usuario.jpg" alt=""></a>
                <a href="carrito.html"><img src="img/carrito.png" alt=""></a>
            </div>
    </div>
        <ul class="contenedordeenlaces">
            <li class="elementodeenlace"><a href="index.html" class="enlace">Inicio</a></li>
            <li class="elementodeenlace"><a href="mujeres.html" class="enlace">Mujeres</a></li>
            <li class="elementodeenlace"><a href="producto.html" class="enlace">Hombres</a></li>
            <li class="elementodeenlace"><a href="niños.html" class="enlace">Niños</a></li>
            <li class="elementodeenlace"><a href="accesorios.html" class="enlace">Accesorios</a></li>
        </ul>
    
    ` ;

}

crearNavegacion();