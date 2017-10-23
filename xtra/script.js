var num=0;
function data(){
	document.getElementById("data").innerHTML =  "Data: " + Date();
	document.getElementById("botao1").innerHTML = "Cliques: "+(num+1);
	num=num+1;
}
