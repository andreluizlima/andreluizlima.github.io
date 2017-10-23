var altura = document.getElementById("altura1");
var cintura = document.getElementById("cintura1");
var pescoco = document.getElementById("pescoco1");
var quadril = document.getElementById("quadril1");
var b1 = document.getElementById("br1");
var b2 = document.getElementById("br2");
var tx = document.getElementById("texto");
var resposta = document.getElementById("resposta");
var gender = document.getElementById("gender1");

var calcH = function(){
	var x = (86.01 * Math.log10(cintura.value - pescoco.value) - 70.041 * Math.log10(altura.value) + 30.3);
	var y = parseFloat(Math.round(x * 100) / 100).toFixed(2);
	resposta.innerHTML = y + " %";
}
var calcM = function(){
	var log1 = Math.log10(parseInt(cintura.value) + parseInt(quadril.value) - parseInt(pescoco.value));
	var log2 = Math.log10(altura.value);
	console.log(log1);
	console.log(log2);
	var x = 163.205 * log1 - 97.684 * log2 - 104.912;
	console.log(x);
	var y = parseFloat(Math.round(x * 100) / 100).toFixed(2);
	resposta.innerHTML = y + " %";
}

function att(){
	if(gender.checked){
		b1.hidden = true;
		b2.hidden = true;
		quadril.hidden = true;
		texto.hidden = true;
	}else{		
		b1.removeAttribute("hidden");
		b2.removeAttribute("hidden");		
		quadril.removeAttribute("hidden");
		texto.removeAttribute("hidden");
	}
}

function calculo() {
	if(gender.checked){
		calcH();
	}else{		
		calcM();
	}
}

function about(){
	alert("Aplicativo para calcular o BF aproximado");
}