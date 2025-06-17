function agregartarea(){

    let tarea = document.createElement('div');
    tarea.textContent = "Tarea";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una nueva tarea, que horror :(");  
}
function agregarensayo(){

    let tarea = document.createElement('div');
    tarea.textContent = "Ensayo";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una tarea tipo ensayo");  
}
function agregarcuestionario(){

    let tarea = document.createElement('div');
    tarea.textContent = "Cuestionario";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una tarea tipo cuestionario");  
}
function agregarficha(){

    let tarea = document.createElement('div');
    tarea.textContent = "Ficha";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una tarea tipo Ficha");  
}
function agregarreporte(){

    let tarea = document.createElement('div');
    tarea.textContent = "Reporte";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una tarea tipo Reprte");  
}
function agregaresquema(){

    let tarea = document.createElement('div');
    tarea.textContent = "Esquema";

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Creaste una tarea tipo Esquema");  
}
function agregarpersonal(){

    let tarea = document.createElement('div');
    tarea.innerHTML = '<img src="../Statics/media/img/argentiros.jpg" class="item-img">';

    tarea.className = "nuevatarea";

    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(tarea); 
    console.log("Añadiste una Imagen");  
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

info=document.getElementById("info");
    toggle=document.getElementById("toggle");
 
    toggle.addEventListener("click",()=>{
        isHidden=info.style.display==="none";
        info.style.display=isHidden? "block":"none";
        toggle.textContent=isHidden? "Ocultar":"Tipos de tareas";
        console.log("Se mostraron/ocultaron los tipos de tareas");
    });
