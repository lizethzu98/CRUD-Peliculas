document.body.onload = function () {
    document.getElementById("cmbNomUsuario").value = "lizeth";
    document.getElementById("selectPeliculas").value = "6";
    document.getElementById("cmbComentario").value = "esta chida";
    var arRadioBtn = document.getElementsByName("estrellas");

    for (var ii = 0; ii < arRadioBtn.length; ii++) {
        var radButton = arRadioBtn[ii];
        radButton.checked = true;
    }
}

//id de comentario
var idComentario = 0;

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

        //comentarios
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


    idComentario = idComentario + 1;

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
        "<div class= 'justify-content-end'>" +
        "<button type='button' style='margin: 10px'onclick='editarComentario("+idComentario+")' class='btn btn-warning'>Editar</button>" + 
        "<button type='button' class='btn btn-danger'>Eliminar</button>" +
        "  </div> " +
        "</div>" +
        "<div id='divTextoComentario"+idComentario+"'>"+
        "<p class='mb-1'>" + comentario + "</p>" +
        "<small><label class='estrellacoment' >" + estrellas + "</label></small>" +
        "</div>"+
        "<div id='comentario"+idComentario+"'></div>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
}



function editarComentario(nuComentario) {
    var usuario = document.getElementById("cmbNomUsuario").value;
    var pelicula = document.getElementById("selectPeliculas");
    var peliculaTexto = pelicula.options[pelicula.selectedIndex].text;
    var comentario = document.getElementById("cmbComentario").value;
    let calificacion = $('input[name="estrellas"]:checked').val();


    var edit = document.getElementById("comentario"+nuComentario);
    edit.innerHTML = 
  "<form>"+
    "<div class='form-group'>"+
      "<label for='exampleInputEmail1'>Comentario</label>"+
      "<input type='text' class='form-control' id='comentarioEdit'  placeholder='Escribe lo que piensas'>"+
      "<label for='exampleInputEmail1'>Calificación<span style='color: red;'>*</span></label>"+

      "<p class='clasificacion'>"+
          "<input id='calValUnoEdit' type='radio' name='estrellasEdit' value='5'>"+
          "<label class='estrella' for='calValUnoEdit'>★</label>"+
          "<input id='calValDosEdit' type='radio' name='estrellasEdit' value='4'>"+
          "<label class='estrella' for='calValDosEdit'>★</label>"+
          "<input id='calValTresEdit' type='radio' name='estrellasEdit' value='3'>"+
          "<label class='estrella' for='calValTresEdit'>★</label>"+
          "<input id='calValCuatroEdit' type='radio' name='estrellasEdit' value='2'>"+
          "<label class='estrella' for='alValCuatroEdit'>★</label>"+
          "<input id='calValCincoEdit' type='radio' name='estrellasEdit' value='1'>"+
          "<label class='estrella' for='calValCincoEdit'>★</label>"+
      "</p>"+
    "</div>"+
    "<button type='submit' class='btn btn-primary'>Actualizar</button>"+
  "</form>";

    var  divTextoComentario = document.getElementById("divTextoComentario"+nuComentario);
    var textoComentarioEdit = divTextoComentario.getElementsByTagName("p")[0].innerHTML;
    document.getElementById("comentarioEdit").value = textoComentarioEdit;

    divTextoComentario.innerHTML="";
  


}
