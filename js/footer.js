const crearFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        
    <div class="contenidodefooter">
    <img src="./img/logotipo.png" class="logo" alt="">
    <div class="contenedorfooterul">
        <ul class="categoria">
            <li class="titulodecategoria">Hombres</li>
            <li><a href="#" class="enlacedefooter">Camisetas</a></li>
            <li><a href="#" class="enlacedefooter">Sudaderas</a></li>
            <li><a href="#" class="enlacedefooter">Camisas</a></li>
            <li><a href="#" class="enlacedefooter">Jeans</a></li>
            <li><a href="#" class="enlacedefooter">Pantalones</a></li>
            <li><a href="#" class="enlacedefooter">Zapatillas</a></li>
            <li><a href="#" class="enlacedefooter">Casuales</a></li>
            <li><a href="#" class="enlacedefooter">Formales</a></li>
            <li><a href="#" class="enlacedefooter">Deportivos</a></li>
            <li><a href="#" class="enlacedefooter">Reloj</a></li>
        </ul>
        <ul class="categoria">
            <li class="titulodecategoria">Mujeres</li>
            <li><a href="#" class="enlacedefooter">Camisetas</a></li>
            <li><a href="#" class="enlacedefooter">Sudaderas</a></li>
            <li><a href="#" class="enlacedefooter">Camisas</a></li>
            <li><a href="#" class="enlacedefooter">Jeans</a></li>
            <li><a href="#" class="enlacedefooter">Pantalones</a></li>
            <li><a href="#" class="enlacedefooter">Zapatillas</a></li>
            <li><a href="#" class="enlacedefooter">Casuales</a></li>
            <li><a href="#" class="enlacedefooter">Formales</a></li>
            <li><a href="#" class="enlacedefooter">Deportivos</a></li>
            <li><a href="#" class="enlacedefooter">Reloj</a></li>
        </ul>
        </div>
        </div>
        <p class="titulodefooter">Acerca de la empresa</p>
        <p class="info">Hacemos ropa única inspirada en lo retro - vintage para las almas rebeldes, que buscan marcar la diferencia con su estilo.
        <br>
        <br>
        Nuestra Historia
        <br>
        <br>
        En el 2019, inspirados en la estética vintage y el movimiento musical y cultural indie/alternativo, nace una marca peruana y sostenible con una propuesta diferente que busca vestir a una generación joven, independiente e inconforme con lo establecido para hacerlos sentir únicos y libres.</p>
        <p class="info">Email Marie@gmail.com, TiendaOnlineMarie@gmail.com</p>
        <p class="info">Telefono - 913 934 954, 923 543 543</p>
        <div class="contenedorsocial">
        <div>
        <a href="" class="enlacesocial">Terminos y Condiciones</a>
        <a href="" class="enlacesocial">Privacidad de la pagina</a>
        </div>
        <div>
        <a href="" class="enlacesocial">Instagram</a>
        <a href="" class="enlacesocial">Facebook</a>
        <a href="" class="enlacesocial">Twitter</a>
        </div>
        </div>
        <p class="creditofooter"> © Marie 2023, La Mejor Tienda De Ropa En Línea. Todos los derechos reservados.</p>
    `;
}

crearFooter();