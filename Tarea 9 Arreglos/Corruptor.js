function Corrupt(){
	var texti = document.getElementById("texto").value;
	
	
	const Corr = (texti)  => texti.split('').reverse().join('');	
    document.getElementById('demo').innerHTML = Corr(texti);
}