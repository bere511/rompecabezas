var piezas = document.getElementsByClassName('movil');

var tamWidh = [134,192,134,163,134,163,134,192,134,163,134,163,134,192,134];
var tamHeight = [100,100,100,100,100,202,202,202,202,202,100,100,100,100,100];

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


var origX = [200,318,440,558,677,200,257,377,497,587,200,318,438,468,588];
var origY = [150,150,150,150,150,250,250,250,250,250,450,450,450,450,450];

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