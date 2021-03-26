// function enviarFormulario() {
//     var nomecliente = document.getElementById(`nomecliente`).nodeValue;
//     var tipocachorro = document.getElementById(`tipocachorro`).nodeValue;
//     var nomecachorro = document.getElementById(`nomecachorro`).nodeValue;

//     return false;
// }

// function enviarFormulario(formulario) {   
//     var linha = "str";

//     for(i=0; i<formulario.length-1; i++) {
//         linha += "<td>" + formulario[i].value + "<td>";
//     }

//     linha += "</tr>";

//     document.getElementsByTagName("tbody")[0].innerHTML += linha;

//  document.getElementsByTagName("tbody")[0].innerHTML += linha;
//     "<tr>\
//         <td>\
//             " + formulario.nomecliente.value + "\
//         </td>\
//         <td>\
//             " + formulario.tipocachorro.value + "\
//         </td>\
//         <td>\
//             " + formulario.tipocachorro.value + "\
//         </td>\
//     </tr>"

 document.querySelector("table").setAttribute(`style`, `display: inline-block`);
 document.getElementsByTagName("tbody")[0].innerHTML += linha;
    `<tr>\
        <td>\
            ${formulario.nomecliente.value}
        </td>\
        <td>\
            ${formulario.tipocachorro.value}
        </td>\
        <td>\
            ${formulario.nomecachorro.value}
        </td>\
    </tr>`

    return false;
}

