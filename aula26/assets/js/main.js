function envio () {
    const form = document.querySelector(".form")
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const peso = document.querySelector(".peso").value;
        const altura = document.querySelector(".altura").value;
        let imc = peso / altura ** 2

        let resultado;
        imc = parseFloat(imc.toFixed("1"))
        if (imc < 18.5){
            resultado = "Magreza"
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado = "Normal"
        }else if (imc >= 25.0 && imc <= 29.9) {
            resultado = "Sobrepeso I"}
        else if (imc >= 30.0 && imc <= 39.9) {
            resultado = "Obesidade II"
        }else if(imc >= 40){
            resultado = "Obesidade grave III"
        }
        document.querySelector(".resultado").innerHTML = `${resultado} com Imc de ${imc.toFixed("2")}`;
    })
}
envio()