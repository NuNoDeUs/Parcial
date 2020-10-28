var cd1_1=document.getElementById('d1_1');
var cd1_2=document.getElementById('d1_2');
var cd1_3=document.getElementById('d1_3');
var cd2_1=document.getElementById('d2_1'); 
var cd2_2=document.getElementById('d2_2'); 
var cd3_1=document.getElementById('d3_1'); 
var cda_t=document.getElementById('dtopo');
var cda_e=document.getElementById('delefante');
var cda_m=document.getElementById('dmico');
var cpa_t=document.getElementById('adtopo');
var cpa_e=document.getElementById('adelefante');
var cpa_m=document.getElementById('admico');

var atopo=function () {
	cda_t.className="topoa";
	cpa_t.play();
	setTimeout(pagina2,3000);

}

var pararmico=function	() {
	
}


var aelefante=function () {
	cda_e.className="elefantea";
	cpa_e.play();
	setTimeout(pagina2,3000);

}

var amico=function () {
	cda_m.className="micoa";
	cpa_m.play();
	setTimeout(pagina2,6000);

}

var pagina2=function () {
	
	cd1_1.className="oculto";
	cd1_2.className="oculto";
	cd1_3.className="oculto";
	cd2_1.className="pri2";
	cd2_2.className="fin";
	cda_t.className="topo";
	cda_e.className="elefante";
	cda_m.className="mico";

}

var pagina3=function () {
	
	cd2_1.className="oculto";
	cd2_2.className="oculto";
	cd3_1.className="pri3";

}