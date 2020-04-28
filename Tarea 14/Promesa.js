function Promesas(){
	const Tiempo = () => {console.log("Haciendo la instruccion")}
	
	const limpiarCuarto = () =>{
		return new Promise((resolve,reject) => {
			
			setTimeout(function(){document.getElementById('demo').innerHTML = "Actualmente estamos: Limpiar Cuarto" ;			
			resolve(hacerTarea());},1)
			
		})	
	}	
	
	const  hacerTarea = () => {
		return new Promise((resolve, reject) => {	
			setTimeout(function(){document.getElementById('demo').innerHTML = "Actualmente estamos: Haciendo Tarea";			
			resolve(Antro());},5000)
			
		})			
		
	}
	const  Antro = () => {
		return new Promise((resolve, reject) => {		
			setTimeout(function(){resolve("Actualmente estamos: En el Antro");},9000)		
			
		})			
		
	}
	
			
	limpiarCuarto()
	.then( res => {
		
		return res;
	})
	.then(res => {
		
		document.getElementById('demo').innerHTML = (res)
		
	})
	
}

