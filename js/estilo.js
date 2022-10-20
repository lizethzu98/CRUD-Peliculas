function pintar(){



    divMostrarUI.innerHTML=''



    suscriptores.forEach((element)=>{

        let divCard = document.createElement('div');

        let titulo = document.createElement('h2')

        let parrafo = document.createElement('p')

        let texto = document.createTextNode(element.nombre);

        let textoParrafo = document.createTextNode(element.telefono);

        titulo.appendChild(texto);

        parrafo.appendChild(textoParrafo);

        divCard.appendChild(titulo);

        divCard.appendChild(parrafo)

        divMostrarUI.appendChild(divCard);

    })

}