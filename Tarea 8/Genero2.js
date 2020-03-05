function Conseguir(){
	var name = document.getElementById("nombre").value;
	var sex = document.getElementById("sexo").value;
	
	const Genero = (name,sex)  => sex=='H' ?  `Bienvenido ${name}!` : sex=='M' ? `Bienvenida ${name}!` : `Bienvenide ${name}!`;	
    document.getElementById('demo').innerHTML = Genero(name,sex);
}


	



