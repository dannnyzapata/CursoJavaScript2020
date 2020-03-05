function Conseguir(){
	var name = document.getElementById("nombre").value;
	var sex = document.getElementById("sexo").value;
	Genero(name,sex);
}

function Genero(name, sex) {

    var Saludo= sex=='H' ?  `Bienvenido ${name}!` : sex=='M' ? `Bienvenida ${name}!` : `Bienvenide ${name}!`;
	
	
    console.log(Saludo);
    document.getElementById('demo').innerHTML = Saludo;

}

