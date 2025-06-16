function agregartarea(){

    let tarea = document.createElement('div');
    tarea.textContent = "Tarea";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una nueva tarea, que horror :(");  
}

function eliminartarea(){

    let contenedor = document.getElementById("contenedor");
    let tareaborra = contenedor.firstElementChild;
    if(tareaborra)
    {
        contenedor.removeChild(tareaborra);
        console.log("Borraste una tarea :D");
    }   
}
