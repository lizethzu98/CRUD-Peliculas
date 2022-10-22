function validaCampos() {
    var usuario = document.getElementById("cmbNomUsuario").value;
    var pelicula = document.getElementById("selectPeliculas").value;
    var comentario = document.getElementById("cmbComentario").value;
    let calificacion = $('input[name="estrellas"]:checked').val();
    //alerta
    alert(calificacion);
    //ERROR
    const div = document.createElement("div");
    div.textContent = "Valor requerido*";
    div.className = "texto-error";

    //Alertas
    var alertas = 0;
    const divUsuario = document.getElementById("divUsuario");
    alertas = divUsuario.getElementsByClassName('texto-error').length;

    //Validar usuario
    if (usuario == '' || usuario == null || usuario.length <= 3) {
        if (alertas <= 0) {
            divUsuario.appendChild(div);
        }
    }
    else 
    { 
        if  (alertas == 1){
                divUsuario.removeChild(divUsuario.lastChild);

        }
       
    }
    //alertas
    const divPeliculas = document.getElementById("divPeliculas");
    alertas = divPeliculas.getElementsByClassName('texto-error').length;
    //validar peliculas
    if (pelicula == '' || pelicula == null || pelicula == 0 ){
        if (alertas == 0){
            divPeliculas.appendChild(div);
        }
    }
    else{
        if (alertas == 1 ){
            divPeliculas.removeChild(divPeliculas.lastChild);
        }
         

    }

    const divComentarios = document.getElementById("divComentarios");
    alertas = divComentarios.getElementsByClassName('texto-error').length;

    //validar comentarios

    if (comentario == '' || comentario == null){
        if (alertas == 0 ){
            divComentarios.appendChild(div);
        }
    }
else {
    if(alertas == 1 ){
        divComentarios.removeChild(divComentarios.lastChild);
    }
}


const divCalificacion = document.getElementById("divCalificacion");
    alertas = divCalificacion.getElementsByClassName('texto-error').length;
//validar calificacion
if(calificacion == '' || calificacion == null || calificacion == 0){
    if (alertas == 0 ){
        divCalificacion.appendChild(div);
    }
}
else{
    if (alertas == 1){ 
        divCalificacion.removeChild(divCalificacion.lastChild);
    }
}


}

