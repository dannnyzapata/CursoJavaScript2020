const hacerTarea = (tarea, callback) => {
	
	setTimeout(()=>{
		console.log(`Haciendo la tarea ${tarea}`)
		}, 8000);
	callback();
}

hacerTarea("Derecho Informatico", ()=>{
	console.log("Jugar Rainbow Six");
})
