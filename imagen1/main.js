var piezas = document.getElementsByClassName('movil');

var tamWidh = [134,130,130,100,100,100,100,100,100,100,100,120,100,100,100];
var tamHeight = [130,134,130,100,100,90,100,100,100,80,80,90,100,105,100];

for (var i = 0; i < piezas.length; i++) {
	piezas[i].setAttribute("widht", tamWidh[i]);
	piezas[i].setAttribute("height", tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
	piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt)
{
	elementSelect = reordenar(evt);
	currentX = evt.clientX;
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}

function moverElemento(evt)
{
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x", currentPosx);
	elementSelect.setAttribute("y", currentPosy);
	currentX = evt.clientX;
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt)
{
	if (elementSelect != 0) 
	{
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}

var entorno = document.getElementById('entorno');

function reordenar(evt)
{
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}


var origX = [285,375,498,285,390,505,280,404,509,284,408,511,284,397,515];
var origY = [100,100,100,225,225,225,325,322,310,424,421,410,503,501,500];

function iman()
{
	for(var i=0;i<piezas.length;i++)
	{
		if(Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15)
		{
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}