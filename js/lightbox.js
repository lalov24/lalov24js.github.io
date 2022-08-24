//Aqui vamos a hacer el trabajo para que salgan las imagenes
//Como vemos, seleccionamos todo lo que es img-galeria
const imagenes = document.querySelectorAll(".img-galeria");
const ImagenesLigth = document.querySelector('.agregarimagen');
//Aqui seleccionaremos al contenedor de lightbox
const contenedorLight = document.querySelector('.imagenlight');
//Aqui lo ponemos para cambiar la opacidad
const hamburger1= document.querySelector(".hamburger");

//La immprimimos por consola a ver si los selecciona
console.log(imagenes);
console.log(ImagenesLigth);
console.log(contenedorLight);

//Crearemos una funcion para que cada ves que imagenes es usado haga esta funcion
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
      //Obtenemos el atributo de esta clase, el cual es el src
        aparecerImagen(imagen.getAttribute('src'));

    });
});
//Aqui cerraremos imageneligh, el contenedor
contenedorLight.addEventListener('click', e => {
    if(e.target !== ImagenesLigth){
        contenedorLight.classList.toggle('show');
        ImagenesLigth.classList.toggle('showImage');
        //Aqui cambiamos el css de la opacidad del menu 
        hamburger1.style.opacity = '1';
    }
})



//Aqui se hace la funcion para que el atributo ImagenesLigth.src lo tome imagen y lo suba
const aparecerImagen = (imagen => {
    ImagenesLigth.src = imagen ;
    //Esto va a quitar y poner el show, o sea va a mostrar
    contenedorLight.classList.toggle('show');
    ImagenesLigth.classList.toggle('showImage');
    //Para que se pueda ver
    hamburger1.style.opacity = '0';
});