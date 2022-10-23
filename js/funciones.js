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

        var divNoComentario = document.getElementById("noComentario");
        if (divNoComentario != null) {
            divNoComentario.remove();
        }
        imprimirComentario();

        document.getElementById("cmbNomUsuario").value = "";
        document.getElementById("selectPeliculas").value = "0";
        document.getElementById("cmbComentario").value = "";
        var arRadioBtn = document.getElementsByName("estrellas");

        for (var ii = 0; ii < arRadioBtn.length; ii++) {
            var radButton = arRadioBtn[ii];
            radButton.checked = false;
        }
    }
}


function imprimirComentario() {
    var usuario = document.getElementById("cmbNomUsuario").value;
    var pelicula = document.getElementById("selectPeliculas");
    var peliculaTexto = pelicula.options[pelicula.selectedIndex].text;
    var comentario = document.getElementById("cmbComentario").value;
    let calificacion = $('input[name="estrellas"]:checked').val();

    var estrellas = "";


    switch (calificacion) {
        case '1':
            estrellas = "★";
            break;
        case '2':
            estrellas = "★★";

            break;

        case '3':
            estrellas = "★★★";

            break;
        case '4':
            estrellas = "★★★★";

            break;
        case '5':
            estrellas = "★★★★★";
            break;

        default:
            break;
    }


    

    var coment = document.getElementById("accordion");

    coment.innerHTML = "<div class='card'><div class='card-header' id='headingOne'>" +
        "<h5 class='mb-0'>" +
        "<button class='btn btn-link' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>" +
        peliculaTexto +
        "</button>" +
        "</h5>" +
        "</div>" +
        "<div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>" +
        "<div class='card-body'>" +
        "<div class='list-group'>" +
        "<a  class='list-group-item list-group-item-action flex-column align-items-start'>" +
        "<div class='d-flex w-100 justify-content-between'>" +
        "<h5 class='mb-1'>" + usuario + "</h5>" +
        "<small>3 days ago</small>" +
        "</div>" +
        "<p class='mb-1'>" + comentario + "</p>" +
        "<small><label class='estrellacoment' >" + estrellas + "</label></small>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

}