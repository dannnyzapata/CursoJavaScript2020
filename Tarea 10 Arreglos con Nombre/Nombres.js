const Agregar = () =>{
	
	var node = document.createElement("li");
	var texti = document.getElementById("texto").value;
	node.innerHTML = texti; 
	document.getElementById("lista").appendChild(node);	
	document.getElementById("texto").value=' ';
}

