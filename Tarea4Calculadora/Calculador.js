function Sumar() {

    var operando1 = parseInt(document.getElementById("numero1").value)
    var operando2 = parseInt(document.getElementById("numero2").value) 
    var result = operando1 + operando2
    console.log(result)
    document.getElementById('demo').innerHTML = result

}

function Restar() {

    var operando1 = parseInt(document.getElementById("numero1").value)
    var operando2 = parseInt(document.getElementById("numero2").value) 
    var result = operando1 - operando2
    console.log(result)
    document.getElementById('demo').innerHTML = result
    

}

function Dividir() {

    var operando1 = parseInt(document.getElementById("numero1").value)
    var operando2 = parseInt(document.getElementById("numero2").value) 
    var result = operando1 / operando2
    console.log(result)
    document.getElementById('demo').innerHTML = result

}

function Multiplicar() {

    var operando1 = parseInt(document.getElementById("numero1").value)
    var operando2 = parseInt(document.getElementById("numero2").value) 
    var result = operando1 * operando2
    console.log(result)
    document.getElementById('demo').innerHTML = result

}