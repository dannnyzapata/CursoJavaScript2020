var dinero = 0;
var Todo;

var dinero2 = 0;
var Todo2;

var dinero3 = 0;
var Todo3;

var dinero4 = 0;
var Todo4;

var dinero5 = 0;
var Todo5;

var dinero6 = 0;
var Todo6;
function Empezar() {
	//Cada 6 minutos debe subir 5 pesos 
    var image = document.getElementById('myImage');
	
	this.inUse = true;	
	toggle();	
	
	function toggle(){
	var image = document.getElementById('myImage');
	if (this.inUse && image.src.match("apagado")){
		encender();
	}else{
		apagar();
	}			
}

function encender(){
	document.getElementById('tfinal').innerHTML = " ";
	document.getElementById('total').innerHTML = "0$";
	this.inUse = true;
	var image = document.getElementById('myImage');
	image.src = "Encendido.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	
	document.getElementById('hora').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	const incremento = () => {dinero = dinero + 5; document.getElementById('total').innerHTML = dinero.toString();}
	Todo = setInterval(incremento,360000);
}

function apagar(){
	this.inUse = false;
	var image = document.getElementById('myImage');
	image.src = "apagado.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	clearInterval(Todo);
	document.getElementById('tfinal').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	document.getElementById('total').innerHTML = dinero.toString();
	dinero = 0;
}				
}

function Empezar2() {
	//Cada 6 minutos debe subir 5 pesos 
	

    var image = document.getElementById('myImage2');
	
	this.inUse = true;	
	toggle();	
	
	function toggle(){
	var image = document.getElementById('myImage2');
	if (this.inUse && image.src.match("apagado")){
		encender();
	}else{
		apagar();
	}			
}

function encender(){
	document.getElementById('tfinal2').innerHTML = " ";
	document.getElementById('total2').innerHTML = "0$";
	this.inUse = true;
	var image = document.getElementById('myImage2');
	image.src = "Encendido.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	
	document.getElementById('hora2').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	const incremento = () => {dinero2 = dinero2 + 5; document.getElementById('total2').innerHTML = dinero2.toString();}
	Todo2 = setInterval(incremento,360000);
}

function apagar(){
	this.inUse = false;
	var image = document.getElementById('myImage2');
	image.src = "apagado.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	clearInterval(Todo2);
	document.getElementById('tfinal2').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	document.getElementById('total2').innerHTML = dinero2.toString();
	dinero2 = 0;

}			
	
}

function Empezar3() {
	//Cada 6 minutos debe subir 5 pesos 
    var image = document.getElementById('myImage3');
	this.inUse = true;	
	toggle();	
	function toggle(){
	var image = document.getElementById('myImage3');
	if (this.inUse && image.src.match("apagado")){
		encender();
	}else{
		apagar();
	}			
}

function encender(){
	document.getElementById('tfinal3').innerHTML = " ";
	document.getElementById('total3').innerHTML = "0$";
	this.inUse = true;
	var image = document.getElementById('myImage3');
	image.src = "Encendido.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	
	document.getElementById('hora3').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	const incremento = () => {dinero3 = dinero3 + 5; document.getElementById('total3').innerHTML = dinero3.toString()+ "$";}
	Todo3 = setInterval(incremento,360000);
}

function apagar(){
	this.inUse = false;
	var image = document.getElementById('myImage3');
	image.src = "apagado.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	clearInterval(Todo3);
	document.getElementById('tfinal3').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	document.getElementById('total3').innerHTML = dinero3.toString() + "$";
	dinero3 = 0;
}				
}

function Empezar4() {
	//Cada 6 minutos debe subir 5 pesos 
	

    var image = document.getElementById('myImage4');
	
	this.inUse = true;	
	toggle();	
	
	function toggle(){
	var image = document.getElementById('myImage4');
	if (this.inUse && image.src.match("apagado")){
		encender();
	}else{
		apagar();
	}			
}

function encender(){
	document.getElementById('tfinal4').innerHTML = " ";
	document.getElementById('total4').innerHTML = "0$";
	this.inUse = true;
	var image = document.getElementById('myImage4');
	image.src = "Encendido.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	
	document.getElementById('hora4').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	const incremento = () => {dinero4 = dinero4 + 5; document.getElementById('total4').innerHTML = dinero4.toString()+ "$";}
	Todo4 = setInterval(incremento,360000);
}

function apagar(){
	this.inUse = false;
	var image = document.getElementById('myImage4');
	image.src = "apagado.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	clearInterval(Todo4);
	document.getElementById('tfinal4').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	document.getElementById('total4').innerHTML = dinero4.toString() + "$";
	dinero4 = 0;

}			
	
}


function Empezar5() {
	//Cada 6 minutos debe subir 5 pesos 
    var image = document.getElementById('myImage5');
	this.inUse = true;	
	toggle();	
	function toggle(){
	var image = document.getElementById('myImage5');
	if (this.inUse && image.src.match("apagado")){
		encender();
	}else{
		apagar();
	}			
}

function encender(){
	document.getElementById('tfinal5').innerHTML = " ";
	document.getElementById('total5').innerHTML = "0$";
	this.inUse = true;
	var image = document.getElementById('myImage5');
	image.src = "Encendido.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	
	document.getElementById('hora5').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	const incremento = () => {dinero5 = dinero5 + 5; document.getElementById('total5').innerHTML = dinero5.toString()+ "$";}
	Todo5 = setInterval(incremento,360000);
}

function apagar(){
	this.inUse = false;
	var image = document.getElementById('myImage5');
	image.src = "apagado.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	clearInterval(Todo5);
	document.getElementById('tfinal5').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	document.getElementById('total5').innerHTML = dinero5.toString() + "$";
	dinero5 = 0;
}				
}

function Empezar6() {
	//Cada 6 minutos debe subir 5 pesos 
	

    var image = document.getElementById('myImage6');
	
	this.inUse = true;	
	toggle();	
	
	function toggle(){
	var image = document.getElementById('myImage6');
	if (this.inUse && image.src.match("apagado")){
		encender();
	}else{
		apagar();
	}			
}

function encender(){
	document.getElementById('tfinal6').innerHTML = " ";
	document.getElementById('total6').innerHTML = "0$";
	this.inUse = true;
	var image = document.getElementById('myImage6');
	image.src = "Encendido.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	
	document.getElementById('hora6').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	const incremento = () => {dinero6 = dinero6 + 5; document.getElementById('total6').innerHTML = dinero6.toString()+ "$";}
	Todo6 = setInterval(incremento,360000);
}

function apagar(){
	this.inUse = false;
	var image = document.getElementById('myImage6');
	image.src = "apagado.png";
	var hora = new Date();
	var cadena = "";
	var cadena2;
	clearInterval(Todo6);
	document.getElementById('tfinal6').innerHTML = cadena2 = cadena.concat(hora.getHours()," : ",hora.getMinutes()," : ",hora.getSeconds());
	document.getElementById('total6').innerHTML = dinero6.toString() + "$";
	dinero6 = 0;

}			
	
}
