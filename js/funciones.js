
var cmbNumUsuario = document.getElementById("cmbNomUsuario");
var cmbComentario = document.getElementById("cmbComentario");
var selectPeliculas = document.getElementById("selectPeliculas");
var arRadioBtn = document.getElementsByName("estrellas");
var idComentario = 0;
localStorage.clear();
let listaComentario = JSON.parse(localStorage.getItem('LC'));

document.body.onload = function () {
    cmbNumUsuario.value = "lizeth";
    selectPeliculas.value = "6";
    cmbComentario.value = "esta chida";
    var arRadioBtn = document.getElementsByName("estrellas");
    
    for (var ii = 0; ii < arRadioBtn.length; ii++) {
        var radButton = arRadioBtn[ii];
        radButton.checked = true;
    }
}




function validaCampos() {
    let usuario = cmbNumUsuario.value;
    let pelicula = selectPeliculas.value;
    let comentario = cmbComentario.value;
    let calificacion = $('input[name="estrellas"]:checked').val();

    //textosError
    var textosError = 0;
    const divUsuario = document.getElementById("divUsuario");
    textosError = divUsuario.getElementsByClassName('texto-error').length;

    //Validar usuario
    if (usuario == '' || usuario == null || usuario.length <= 3) {
        if (textosError <= 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divUsuario.appendChild(div);

        }
    }
    else {
        if (textosError == 1) {
            divUsuario.removeChild(divUsuario.lastChild);

        }

    }

    //textosError
    textosError = 0;
    const divPeliculas = document.getElementById("divPeliculas");
    textosError = divPeliculas.getElementsByClassName('texto-error').length;
    //validar peliculas
    if (pelicula == '' || pelicula == null || pelicula == 0) {
        if (textosError == 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divPeliculas.appendChild(div);

        }
    }
    else {
        if (textosError == 1) {
            divPeliculas.removeChild(divPeliculas.lastChild);
        }


    }
    textosError = 0;
    const divComentarios = document.getElementById("divComentarios");
    textosError = divComentarios.getElementsByClassName('texto-error').length;

    //validar comentarios

    if (comentario == '' || comentario == null) {
        if (textosError == 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divComentarios.appendChild(div);

        }
    }
    else {
        if (textosError == 1) {
            divComentarios.removeChild(divComentarios.lastChild);
        }
    }

    textosError = 0;
    const divCalificacion = document.getElementById("divCalificacion");
    textosError = divCalificacion.getElementsByClassName('texto-error').length;
    //validar calificacion
    if (calificacion == '' || calificacion == null || calificacion == 0) {
        if (textosError == 0) {

            let div = document.createElement("div");
            div.textContent = "Valor requerido*";
            div.className = "texto-error";
            divCalificacion.appendChild(div);
        }
    }
    else {
        if (textosError == 1) {
            divCalificacion.removeChild(divCalificacion.lastChild);
        }
    }

    var formulario = document.getElementById("formulario");
    textosError = formulario.getElementsByClassName("texto-error").length;
    if (textosError <= 0) {
        var divNoComentario = document.getElementById("noComentario");
        if (divNoComentario != null) {
            divNoComentario.remove();
        }

        if (listaComentario != null) {
            idComentario = listaComentario.length + 1;
        }
        else {
            idComentario = 1;
        }
        //comentarios
        guardarLocalStorage(usuario, pelicula, comentario, calificacion);

        limpiarcampos();

    }
}

function limpiarcampos() {
    cmbNomUsuario.value = "";
    selectPeliculas.value = "0";
    cmbComentario.value = "";

    for (var ii = 0; ii < arRadioBtn.length; ii++) {
        var radButton = arRadioBtn[ii];
        radButton.checked = false;
    }
}
function guardarLocalStorage(usuario, pelicula, comentario, calificacion) {
    
    let objectComentario = {
        idComentario: idComentario,
        usuario: usuario,
        pelicula: pelicula,
        comentario: comentario,
        calificacion: calificacion
    }


    if (listaComentario === null) {
        listaComentario = [];
        listaComentario.push(objectComentario);
        localStorage.setItem('LC', JSON.stringify(listaComentario));
        console.log(JSON.stringify(listaComentario));
    }
    else {
        listaComentario.push(objectComentario);
        localStorage.setItem('LC', JSON.stringify(listaComentario));
        console.log(JSON.stringify(listaComentario));
    }


}


//COMENTAR
function imprimirComentario() {
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
        "<div class= 'justify-content-end'>" +
        "<button type='button' style='margin: 10px'onclick='editarComentario(" + idComentario + ")' class='btn btn-warning'>Editar</button>" +
        "<button type='button' class='btn btn-danger'>Eliminar</button>" +
        "  </div> " +
        "</div>" +
        "<div  name='nameComentarios' id='divTextoComentario" + idComentario + "'>" +
        "<p class='mb-1'>" + comentario + "</p>" +
        "<small><label class='estrellacoment' >" + estrellas + "</label></small>" +
        "</div>" +
        "<div id='comentario" + idComentario + "'></div>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
}


//boton editar
function editarComentario(nuComentario) {
    var usuario = document.getElementById("cmbNomUsuario").value;
    var pelicula = document.getElementById("selectPeliculas");
    var peliculaTexto = pelicula.options[pelicula.selectedIndex].text;
    var comentario = document.getElementById("cmbComentario").value;
    let calificacion = $('input[name="estrellas"]:checked').val();


    var edit = document.getElementById("comentario" + nuComentario);
    edit.innerHTML =
        "<form>" +
        "<div class='form-group' id='comentariosEdit'>" +
        "<label for='exampleInputEmail1'>Comentario</label>" +
        "<input type='text' class='form-control' id='comentarioEdit'  placeholder='Escribe lo que piensas'></input>" +
        "<label for='exampleInputEmail1'>Calificación<span style='color: red;'>*</span></label>" +

        "<p class='clasificacion'>" +
        "<input id='calValUnoEdit' type='radio' name='estrellasEdit' value='5'>" +
        "<label class='estrella' for='calValUnoEdit'>★</label>" +
        "<input id='calValDosEdit' type='radio' name='estrellasEdit' value='4'>" +
        "<label class='estrella' for='calValDosEdit'>★</label>" +
        "<input id='calValTresEdit' type='radio' name='estrellasEdit' value='3'>" +
        "<label class='estrella' for='calValTresEdit'>★</label>" +
        "<input id='calValCuatroEdit' type='radio' name='estrellasEdit' value='2'>" +
        "<label class='estrella' for='alValCuatroEdit'>★</label>" +
        "<input id='calValCincoEdit' type='radio' name='estrellasEdit' value='1'>" +
        "<label class='estrella' for='calValCincoEdit'>★</label>" +
        "</p>" +
        "</div>" +
        "<button type='submit' class='btn btn-primary'>Actualizar</button>" +
        "</form>";

    var divTextoComentario = document.getElementById("divTextoComentario" + nuComentario);
    var textoComentarioEdit = divTextoComentario.getElementsByTagName("p")[0].innerHTML;
    document.getElementById("comentarioEdit").value = textoComentarioEdit;
    divTextoComentario.innerHTML = "";

}
