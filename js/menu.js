//Estamos seleccionando a las clases y poniendolas como constantes, fijar los .ham.. y el .menu..
const hamburger= document.querySelector(".hamburger");
const menu= document.querySelector(".menu");
//Vemos en consola si nos esta seleccionando lo que le pedimos
//console.log(menu);
//console.log(hamburger);

//Estamos haciendo oir al click, y luego se hara una funcion de flecha  
hamburger.addEventListener('click', ()=>{
    //Mandará una alerta, que sera click
    //alert("click");
    //Al menu seleccionara las clases, toggle es para que tome y ponga 
    //Es decir, cada vez que le de click le pondrás y quitaras la clase que le puse
    menu.classList.toggle("spread");

});

window.addEventListener('click', e=>{
    //Solo por curiosidad
    /*Esto indica en consola lo que le estas dando click   
    console.log(e.target);*/


    //Aqui es si la clase menu contiene a Spread y e(element) target que es cualquiera es diferente a menu entonces
    //aqui es donde cerraremos el menu spread
    if(menu.classList.contains ("spread") && e.target != menu && e.target != hamburger){
        //Hara el proceso contrario
        menu.classList.toggle("spread");
    }
})
