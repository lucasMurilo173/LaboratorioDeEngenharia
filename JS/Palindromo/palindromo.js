var palavra = document.getElementById("verificar");
palavra.addEventListener("click", ePalindromo, false);

function ePalindromo() {
    let texto = document.getElementById('texto').value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textInvertido = inverter(textoSemEspaco);

    if (textoSemEspaco == textInvertido)
        alert(texto + " é um palíndromo!") 
    else
        alert(texto + " não é um palíndromo") 
}

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}