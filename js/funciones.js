function validaCampos() {
    var usuario = document.getElementById("cmbNomUsuario").value;
    var pelicula = document.getElementById("selectPeliculas").value;
    var comentario = document.getElementById("cmbComentario").value;
    let calificacion = $('input[name="estrellas"]:checked').val();
    //alerta
    //Alertas
    var alertas = 0;
    const divUsuario = document.getElementById("divUsuario");
    alertas = divUsuario.getElementsByClassName('texto-error').length;

    //Validar usuario
    if (usuario == '' || usuario == null || usuario.length <= 3) {
        if (alertas <= 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divUsuario.appendChild(div);

        }
    }
    else {
        if (alertas == 1) {
            divUsuario.removeChild(divUsuario.lastChild);

        }

    }

    //alertas
    alertas = 0;
    const divPeliculas = document.getElementById("divPeliculas");
    alertas = divPeliculas.getElementsByClassName('texto-error').length;
    //validar peliculas
    if (pelicula == '' || pelicula == null || pelicula == 0) {
        if (alertas == 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divPeliculas.appendChild(div);

        }
    }
    else {
        if (alertas == 1) {
            divPeliculas.removeChild(divPeliculas.lastChild);
        }


    }
    alertas = 0;
    const divComentarios = document.getElementById("divComentarios");
    alertas = divComentarios.getElementsByClassName('texto-error').length;

    //validar comentarios

    if (comentario == '' || comentario == null) {
        if (alertas == 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divComentarios.appendChild(div);

        }
    }
    else {
        if (alertas == 1) {
            divComentarios.removeChild(divComentarios.lastChild);
        }
    }

    alertas = 0;
    const divCalificacion = document.getElementById("divCalificacion");
    alertas = divCalificacion.getElementsByClassName('texto-error').length;
    //validar calificacion
    if (calificacion == '' || calificacion == null || calificacion == 0) {
        if (alertas == 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divCalificacion.appendChild(div);
        }
    }
    else {
        if (alertas == 1) {
            divCalificacion.removeChild(divCalificacion.lastChild);
        }
    }

    var formulario = document.getElementById("formulario");
    alertas = formulario.getElementsByClassName("texto-error").length;
    if (alertas > 0) {
        alert("error");
    }
    else {
        alert("todo correcto");
        var divNoComentario = document.getElementById("noComentario");
        divNoComentario.remove();
    }
}


function imprimirComentario() {

}
