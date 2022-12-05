let elementos = [];
let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", function () {

    let valor = document.getElementById("valores").value;
    elementos.push(valor.toString());

    let oldOL = document.getElementById("list");
    if (oldOL !== null)
   { document.body.removeChild(oldOL); }

    elementos.sort();

    let elementoOL = document.createElement("OL");
    elementoOL.setAttribute("id", "list");
    elementos.forEach(element => {
        let elementoLI = document.createElement("LI");
        let elementBR = document.createElement("BR");
        let textNode = document.createTextNode(element);
        elementoLI.appendChild(textNode);
        elementoOL.appendChild(textNode);
        elementoOL.appendChild(elementBR);
    });

    document.body.appendChild(elementoOL);
});