/**
 * Navegaci�n entre pantallas
 */

/**
 * Enlazo a pantalla inicial de Puesto TI
 */
function enlaza_puestoTICB(link){
	// Genero la llamada al servlet con el par�metro
	var href_busqueda = 'opwebServlet?opcion=puestoTI&accion=officeCarga';
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;
	href_busqueda += '&direccion='+document.getElementById('direccion').value;

	// Actualizo la direcci�n del enlace
	var anchor = document.getElementById(link).href = href_busqueda;
}

function enlaza_puestoTI(link,accion){
	// Genero la llamada al servlet con el par�metro
	var href_busqueda = 'opwebServlet?opcion=puestoTI&accion='+accion;
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;

	// Actualizo la dirección del enlace
	var anchor = document.getElementById(link).href = href_busqueda;
}


/**
 * Enlazo a pantalla inicial de Puestos Fijos
 */
function enlaza_puestos_fijosCB(link){
	//Obtengo la conectividad seleccionada para guardarla.
	var comboConect = document.getElementById('conectividad');
	var valorConect = comboConect.options[comboConect.selectedIndex].value;
	// Obtengo el valor del campo de texto con la cantidad de puestos fijos
	var numFijos = document.getElementById("out-sl-pues-fijo").value;
	var numMoviles = document.getElementById("out-sl-pues-movi").value;
	// Genero la llamada al servlet con el parámetro
	var href_busqueda = 'opwebServlet?opcion=puestosFijos&accion=cargaInicial&numFijos='+numFijos+'&numMoviles='+numMoviles;
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;
	href_busqueda += '&pro_cant='+document.getElementById('out-sl-productiv').value;
	href_busqueda += '&pro_prod='+document.getElementById('out-sl-productiv').getAttribute("data-producto");
	href_busqueda += '&pres_cant='+document.getElementById('out-sl-presencia').value;
	href_busqueda += '&pres_prod='+document.getElementById('out-sl-presencia').getAttribute("data-producto");
	href_busqueda += '&seg_cant='+document.getElementById('out-sl-seguridad').value;
	href_busqueda += '&seg_prod='+document.getElementById('out-sl-seguridad').getAttribute("data-producto");
	href_busqueda += '&conectiv='+valorConect;

	// Actualizo la dirección del enlace
	var anchor = document.getElementById(link).href = href_busqueda;
}

/**
 * Enlazo a pantalla inicial de puestos fijos.
 */
function enlaza_puestos_fijos(link){
	// Genero la llamada al servlet con el parámetro
	var href_busqueda = 'opwebServlet?opcion=puestosFijos&accion=navegacionPF';
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;

	// Actualizo la dirección del enlace
	var anchor = document.getElementById(link).href = href_busqueda;
}

/**
 * Enlazo a pantalla inicial de accesorios.
 */
function enlaza_accesorios(link){
	// Genero la llamada al servlet con el parámetro
	var href_busqueda = 'opwebServlet?opcion=accSede&accion=guardaPM';
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;

	// Actualizo la dirección del enlace
	var anchor = document.getElementById(link).href = href_busqueda;
}


/**
 * Enlazo a pantalla inicial de Puestos Móviles
 */
function enlaza_puestos_movilesCB(link,valor){
	var numMoviles;

	//Obtengo la conectividad seleccionada para guardarla.
	var comboConect = document.getElementById('conectividad');
	var valorConect = comboConect.options[comboConect.selectedIndex].value;

	if (valor!=-1){
		// Obtengo el valor del campo de texto con la cantidad de puestos móviles
		numMoviles = document.getElementById("out-sl-pues-movi").value;
		}
	else {
		numMoviles = valor;
	}

	var numFijos = document.getElementById("out-sl-pues-fijo").value;

	// Genero la llamada al servlet con el parámetro
	var href_busqueda = 'opwebServlet?opcion=puestoMovil&accion=listaPuestos&recarga=off&numFijos='+numFijos+'&numRegistros='+numMoviles;
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;
	href_busqueda += '&pro_cant='+document.getElementById('out-sl-productiv').value;
	href_busqueda += '&pro_prod='+document.getElementById('out-sl-productiv').getAttribute("data-producto");
	href_busqueda += '&pres_cant='+document.getElementById('out-sl-presencia').value;
	href_busqueda += '&pres_prod='+document.getElementById('out-sl-presencia').getAttribute("data-producto");
	href_busqueda += '&seg_cant='+document.getElementById('out-sl-seguridad').value;
	href_busqueda += '&seg_prod='+document.getElementById('out-sl-seguridad').getAttribute("data-producto");
	href_busqueda += '&conectiv='+valorConect;


	for (var i=0; i < numMoviles; i++){
		href_busqueda += '&borrado'+i+'=N';
	}
	if (valor!=-1){
		if (document.getElementById('ruedaPM').value == "S"){
			href_busqueda += '&ruedaRoja=S';
			}else{
				href_busqueda += '&ruedaRoja=N';
			}
	}
	else{
		href_busqueda += '&ruedaRoja=N';
	}

	// Actualizo la dirección del enlace
	var anchor = document.getElementById(link).href = href_busqueda;

}

function enlaza_puestos_moviles(link){
	var numMoviles;

	// Genero la llamada al servlet con el parámetro
	var href_busqueda = 'opwebServlet?opcion=puestoMovil&accion=navegacionPM';
	href_busqueda += '&CUC='+document.getElementById('CUC').value;
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	href_busqueda += '&COSEDE='+document.getElementById('COSEDE').value;

	// Actualizo la dirección del enlace
	var anchor = document.getElementById(link).href = href_busqueda;

}

function cargarSliders(registrosfijos,registrosmovil,registrosizquierda,registroscentro,registrosderecha){
	var primeroFijo = document.getElementById("sl-pues-fijo").firstChild;
	var segundoFijo = primeroFijo.firstChild;
	segundoFijo.style.left = registrosfijos * 5 + "%";
	document.getElementById("out-sl-pues-fijo").value = registrosfijos;

	var primeroMovil = document.getElementById("sl-pues-movi").firstChild;
	var segundoMovil = primeroMovil.firstChild;
	segundoMovil.style.left = registrosmovil * 5 + "%";
	document.getElementById("out-sl-pues-movi").value = registrosmovil;

	var primeroProd = document.getElementById("sl-productiv").firstChild;
	var segundoProd = primeroProd.firstChild;
	segundoProd.style.left = registrosizquierda * 5 + "%";
	document.getElementById("out-sl-productiv").value = registrosizquierda;

	var primeroPres = document.getElementById("sl-presencia").firstChild;
	var segundoPres = primeroPres.firstChild;
	segundoPres.style.left = registroscentro * 5 + "%";
	document.getElementById("out-sl-presencia").value = registroscentro;

	var primeroSeg = document.getElementById("sl-seguridad").firstChild;
	var segundoSeg = primeroSeg.firstChild;
	segundoSeg.style.left = registrosderecha * 5 + "%";
	document.getElementById("out-sl-seguridad").value = registrosderecha;
}
function volverSedes(boton){
	console.log("hola");
	var href_busqueda = 'opwebServlet?opcion=sedes&accion=Sede';
	href_busqueda += '&CIF='+document.getElementById('CIF').value;
	href_busqueda += '&COOFERTA='+document.getElementById('COOFERTA').value;
	// Actualizo la dirección del enlace
	//document.location.href = href_busqueda;
	var anchor = document.getElementById(boton).href = href_busqueda;
}

/**
 *  Función que llama al resumen.
 */

function llamarResumen(boton)
{
	var valor = document.getElementById("COOFERTA").value;
	var CIF = document.getElementById("CIF").value;
	var CUC = document.getElementById("CUC").value;
	var href_pedido= 'opwebServlet?opcion=resumenOfer&accion=resumen&COOFERTA='+valor+'&COSEDE=0&CIF='+CIF+'&CUC='+CUC;
	var anchor = document.getElementById(boton).href = href_pedido;
}
function llamarResumenCB(boton)
{
	var numSedes = 0;
	if (boton != 'tramitacion'){
	var table = document.getElementById("tablaSedes");
	// Número de registros (sedes) de la tabla
		numSedes = table.rows.length - 1;
	}
	else {
		numSedes = 1;
	}
	if(numSedes>0){
	var valor = document.getElementById("COOFERTA").value;
	var CIF = document.getElementById("CIF").value;
	var CUC = document.getElementById("CUC").value;
	var href_pedido= 'opwebServlet?opcion=resumenOfer&accion=resumen&COOFERTA='+valor+'&COSEDE=0&CIF='+CIF+'&CUC='+CUC;
	var anchor = document.getElementById(boton).href = href_pedido;

	}
	else{
		mensaje("No existen sedes para mostrar el resumen", 2, "");
	}
}

function volverSedesEliminar(boton)
{
	var valor = document.getElementById("COOFERTA").value;
	if (valor =='X')
	{
		var href_pedido= 'opwebServlet';
	}
	else
	{
		var CIF = document.getElementById("CIF").value;
		var CUC = document.getElementById("CUC").value;
		var href_pedido= 'opwebServlet?opcion=ofertas&accion=borradoOfVacia&COOFERTA='+valor+'&COSEDE=0';
	}
		var anchor = document.getElementById(boton).href = href_pedido;
}

