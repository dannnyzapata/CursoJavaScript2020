const Mayor = () =>{	
	var edad = document.getElementById('edad').value;	
	var siono = "Text"; 	
		const revisarEdad = () => {
		 return new Promise((resolve,reject) => {
			if(edad>=18){
				siono = "Eres Mayor de Edad, bienvenido";
				resolve(siono);				
			}			
			else{
				siono = "Eres Menor de Edad, no hay acesso";
				reject(siono);								
			}			
		})		
		}		
		revisarEdad()
			.then( res => {
			document.getElementById('demo').innerHTML = (res)			
			})
			.catch( res => {
			document.getElementById('demo').innerHTML = (res)			
			})	
}


