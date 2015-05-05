/* PRICING
 * FICHERO DE UTILIDADES JAVASCRIPT PARA EL MODULO DE FUSION
 * SOFTWARE AG ESPAÑA, 2015
 */ 

/**
 * PATTERNS EXTRA PARA LAS VALIDACIONES DE FOUNDATION ABIDE
 */
$(document)
  .foundation({
	abide : {
	  patterns: {
		day_month_year: /\d\d\/\d\d\/\d\d\d\d/,
		dashes_only: /^[0-9-]*$/,
		ip_address: /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		telefonos: /^([0,6,7,8,9]{1}[0-9]{8})$|^([0]{1}[0-9]{12})$/,
		telefonoTitular: /^([8,9]{1}[0-9]{8})$/, 
		telefonoMovil: /^([6,7+]{1}[0-9]{8})$/,
		mail: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		cif : /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/,
		IBAN_ES : /^ES[0-9]{2}$/,
		dni : /^ (([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))$/
		
	  }
	},
	offcanvas: {
		close_on_click: true
	}
  });

// RCAC - Function para inhabilitar la navegación por los botones del navegador. 
jQuery(document).ready(function($) {
	var url = document.URL; 
	if (window.history && window.history.pushState) {
		window.history.pushState('forward', null, url);

		$(window).on('popstate', function() {
			window.history.pushState('forward', null, url);
		});
	}
});

// ARRAY CON LOS OBJETOS MENSAJES
var vMensajes = [];

/**
 * OBJETO QUE REPRESENTA UN MENSAJE
 */
var Mensaje = function(t, m, a)
{
	this.Tipo = t;
	this.Mensaje = m;
	if (a == null || a == "NaN" || a == "")
		a = "";
	this.Acciones = a;  
}

/**
 * función que muestra un mensaje al usuario.
 * Muestra una ventana modal con el mensaje
 * @param mensaje Cadena del mensaje
 * @param tipo Tipo de mensaje
 * @param acc Cadena con las acciones recomendadas que puede hacer el usuario
 * @returns Un alert con el mensaje
 */
function mensaje(mensaje, tipo, acc)
{       
	sTipMen = 'un Error';
	switch (tipo) {
		case 1 : 
			sTipMen = 'una Información'; 
			break; 
		case 2 : 
			sTipMen = 'un Aviso'; 
			break;
		case 3 : 
			sTipMen = 'un Error'; 
			break;
		default:
			tipo = 3;
			sTipMen = 'un Error'; 
			break; 
	}
	
	// BORRAMOS EL CONTENIDO DEL DIV DE MENSAJES
	$('#aviso').empty();
	sCadena = '<h2>Se ha producido ' + sTipMen + '<a class="close-reveal-modal" title="Cerrar"><i class="fa fa-times"></i></a></h2>' + cuerpoMensaje(new Mensaje(tipo, mensaje, acc));
	// MODIFICAMOS EL CONTENIDO
	$('#aviso').append(sCadena);    
	// MOSTRAMOS EL ERROR
	$('#aviso').foundation('reveal', 'open');    
}


/**
 * 
 * @param motivo
 */
function ponEspera(motivo)
{
	var sCadEspera = '<h2>Por favor, manténgase a la espera</h2><div class="informac row"><div class="medium-2 small-3 columns text-center"><i class="fa fa-cog fa-spin"></i></div><div class="medium-10 small-9 columns"><p>' + motivo + '</p><p>Este proceso puede durar unos minutos.</p></div></div>';
	// MODIFICAMOS EL CONTENIDO
	$('#espera').empty();
	$('#espera').append(sCadEspera);
	$('#espera').foundation('reveal', 'open');
}

/** CREA UN MENSAJE DE INFORMACION **/
function MensajeInformacion(men, acc)
{
	vMensajes.push(new Mensaje(1, men, acc));
}

function MensajeAviso(men, acc)
{
	vMensajes.push(new Mensaje(2, men, acc));
}

function MensajeError(men, acc)
{
	vMensajes.push(new Mensaje(3, men, acc));
}


/**
 * RECORRE EL ARRAY DE MENSAJES Y LOS MUESTRA A TRAVES DE UN DIV OCULTO
 */
function MuestraMensajes()
{
	// BORRAMOS EL CONTENIDO DEL DIV DE MENSAJES
	$('#aviso').empty();
	// CABECERA
	var sCadena = '<h2>Se ha producido aviso(s) <a class="close-reveal-modal" title="Cerrar"><i class="fa fa-times"></i></a></h2>'; 
	
	$.each( vMensajes, function( index, value ){
		sCadena += cuerpoMensaje(value);
	}); 
	
	// MODIFICAMOS EL CONTENIDO
	$('#aviso').append(sCadena);    
	// MOSTRAMOS EL ERROR
	$('#aviso').foundation('reveal', 'open');   
	// VACIAMOS EL ARRAY
	vMensajes = [];
}

/**
 * DEVUELVE EL CUERPO DE UN MENSAJE PARA MOSTRAR
 * @param value
 * @returns {String}
 */
function cuerpoMensaje(value)
{
	var sCadCuerpo="";
	
	switch (value.Tipo) {
	case 1 : 
		sCadCuerpo += '<div class="informac row"><div class="medium-2 small-3 columns text-center"><i class="fa fa-info-circle"></i></div><div class="medium-10 small-9 columns"><p>La aplicación informa de:</p><span>' + value.Mensaje + '</span>';
		if (value.Acciones != "")
			sCadCuerpo += '<p>Informacion adicional:</p><span>' + value.Acciones + '</span>';
		sCadCuerpo += '</div></div>';       
		break;
	case 2 : 
		sCadCuerpo += '<div class="aviso row"><div class="medium-2 small-3 columns text-center"><i class="fa fa-exclamation-circle"></i></div><div class="medium-10 small-9 columns"><p>La aplicación avisa de:</p><span>' + value.Mensaje + '</span>';
		if (value.Acciones != "")
			sCadCuerpo += '<p>Acciones recomendadas:</p><span>' + value.Acciones + '</span>';
		sCadCuerpo += '</div></div>';
		break;
	case 3 : 
		sCadCuerpo += '<div class="modal-error row"><div class="medium-2 small-3 columns text-center"><i class="fa fa-exclamation-triangle"></i></div><div class="medium-10 small-9 columns"><p>La aplicación ha sufrido el siguiente error:</p><span>' + value.Mensaje + '</span>';
		if (value.Acciones != "")
			sCadCuerpo += '<p>Acciones recomendadas:</p><span>' + value.Acciones + '</span>';
		sCadCuerpo += '</div></div>';
		break;
	default: void(0);
	}
	return sCadCuerpo;
}



/**
 * Muestra una ventana de confirmación y llama a la función especificada con el resultado
 * 
 * @param mensaje Texto con la pregunta a mostrar al usuario
 * @param metodo método javascript que recibe un booleano con la acción de usuario
 */
function confirmar(mensaje, metodo)
{
	$('#new-ofert').empty();    
	var sCadena = '<h2>Confirme la acción<a class="close-reveal-modal" title="Cerrar"><i class="fa fa-times"></i></a></h2><form class="row" action="action"><div class="medium-12 columns text-center">' +
			'<p>' + mensaje + '</p><div class="row botonera"><div class="large-12 columns text-right">' +
			'<button type="button" class="close-reveal-modal radius func-secondary tiny" title="Cancelar" onClick="javascript:cerrarConfirmacion();'+metodo+'(false)">Cancelar</button>' +
			'<button type="button" class="radius tiny" title="Confirmar" autofocus onClick="javascript:cerrarConfirmacion();'+metodo+'(true)">Confirmar</button></div></div></div></form>';

	// MODIFICAMOS EL CONTENIDO
	$('#new-ofert').append(sCadena);    
	// MOSTRAMOS EL ERROR
	$('#new-ofert').foundation('reveal', 'open');   

}


/**
 * 
 * @param mensaje
 * @param metodo
 */
function confirmarAccesorios(mensaje, metodo)
{
	$('#new-ofert').empty();    
	var sCadena = '<h2>Información<a class="close-reveal-modal" title="Cerrar"><i class="fa fa-times"></i></a></h2><form class="row" action="action"><div class="medium-12 columns text-center">' +
			'<p>' + mensaje + '</p><div class="row botonera"><div class="large-12 columns text-right">' +
			'<button type="button" class="radius tiny" title="Confirmar" autofocus onClick="javascript:cerrarConfirmacion();'+metodo+'(true)">Confirmar</button></div></div></div></form>';

	// MODIFICAMOS EL CONTENIDO
	$('#new-ofert').append(sCadena);    
	// MOSTRAMOS EL ERROR
	$('#new-ofert').foundation('reveal', 'open');   
}

/**
 * CIERRA LA VENTANA DE CONFIRMACION
 */
function cerrarConfirmacion(){
	$('#new-ofert').foundation('reveal', 'close');
}


/**
 * AÑADE FILAS A UNA TABLA
 * @param $tabla
 * @param cols
 */
function nuevaFila($tabla,cols){
	$row = $('<tr/>');
	for(i=0; i<cols.length; i++){
		$col = $('<td/>');
		$col.append(cols[i]);
		$row.append($col);
	}
	$tabla.append($row);
}


function nuevaFila($tabla,cols,id){
	$row = $('<tr id=\'' + id + '\'/>');
	for(i=0; i<cols.length; i++){
		$col = $('<td/>');
		$col.append(cols[i]);
		$row.append($col);
	}
	$tabla.append($row);
}


/**
 * BLOQUEA TODOS LOS CAMPOS INPUTS DE UNA PANTALLA
 */
function bloquear(){
	$('#formulario input, select, radio, check').attr("disabled","disabled");
}

/**
 * REFRESCA UNA PESTAÑA
 * @param target
 */
function refrescarPestaña(target)
{
	$('#' + target).load("CInicio?pesta=" + target, function() {
		$(this).foundation('reflow');
	});
	$('#' + target).addClass('loaded');
}



//LLamadas ajax para los  requiere, obliga, incompatible

function obligaPL(coProducto, tabla, oferta, sede, svaPadre, tipoTi, unidades, movimiento)
{
	 $.ajax({
			url:'/newOpweb/opwebServlet',
			type:'POST',
			data: 'isJSON=1&opcion=llamadaPL&accion=obliga&coProducto='+coProducto+'&tabla='+tabla+'&oferta='+oferta+'&sede='+sede+'&svaPadre='+svaPadre+'&tipoTi='+tipoTi+'&unidades='+unidades+'&movimiento='+movimiento,
			dataType: 'json',
			success: function( json ) {
				console.log("obligaPL JSON");
				//habria que pintar el nuevo precio del carrito 
			}
		});
}

function requierePL(coProducto, tabla, oferta, sede)
{
		$.ajax({
			url:'/newOpweb/opwebServlet',
			type:'POST',
			data: 'isJSON=1&opcion=llamadaPL&accion=requiere&coProducto='+coProducto+'&tabla='+tabla+'&oferta='+oferta+'&sede='+sede,
			dataType: 'json',
			success: function( json ) {
				console.log("requierePL JSON");
				$.each(json.PL, function(texto, desc){
					if (desc!=null && desc!="null"){
						mensaje(desc, 1, "");
						
					}
			   }); 
			}
		});

}

function incompatiblePL(coProducto, tabla, oferta, sede)
{ 
		$.ajax({
			url:'/newOpweb/opwebServlet',
			type:'POST',
			data: 'isJSON=1&opcion=llamadaPL&accion=incompatible&coProducto='+coProducto+'&tabla='+tabla+'&oferta='+oferta+'&sede='+sede,
			dataType: 'json',
			success: function( json ) {
				console.log("incompatiblePL JSON");
				console.log(json);
				$.each(json.PL, function(texto, desc){
					if (desc!=null && desc!="null"){
						requiere = true;
						mensaje(desc, 1, "incompatiblePL");
					}
			   });
			}
		});
}

function hecmvoaoPL(coProducto, unidades)
{ 
		$.ajax({
			url:'/newOpweb/opwebServlet',
			type:'POST',
			data: 'isJSON=1&opcion=llamadaPL&accion=hecmvoao&coProducto='+coProducto+'&unidades='+unidades,
			dataType: 'json',
			success: function( json ) {
				console.log("hecmvoaoPL JSON");
				$.each(json.PL, function(texto, desc){
					console.log("valor: "+desc);
					if (desc!=null && desc!="sin texto"){
						mensaje(desc, 1, null);
					}
			   });
			}
		});
}

function hecpopaoPL(coProducto, unidades)
{ 
		$.ajax({
			url:'/newOpweb/opwebServlet',
			type:'POST',
			data: 'isJSON=1&opcion=llamadaPL&accion=hecpopao&coProducto='+coProducto+'&unidades='+unidades,
			dataType: 'json',
			success: function( json ) {
				console.log("hecpopaoPL JSON");
				$.each(json.PL, function(texto, desc){
					console.log("valor: "+desc);
					if (desc!=null && desc!="sin texto"){
						console.log("Sacamos mensaje de hecpopaoPL");
						mensaje(desc, 1, "hecpopaoPL");
					}
			   });
			}
		});
}
var primeraCarga = false;

function guardaDatosAccSede(url) {
	$.ajax({
		url:'/newOpweb/opwebServlet',
		type:'POST',
		data: url,
		success: function() {
			setTimeout(function(){
				primeraCarga = true;
				cargaConfiguracion();
			}, 1000);
		}
	}); 
}

function cargaSubSegmentos() {  
	var segment = $("#segmentos").val();
	var options = document.getElementById("subsegmentos").options.length;
	var value = ""; 
	
	$(document.getElementById('subsegmentos').options).each(function(index, option) {
		if( option.value.substring(0,2) != segment ) {
			$(option).hide();
		}else{
			if (value == "") value = $(option).val();
			$(option).show();
		}
	  });
	$("#subsegmentos").val(value);
}

/**
 * llamadasPLs
 * @param coProducto
 * @param tabla
 * @param ofer
 * @param sede
 * @param unidades
 * @param movimiento
 * @param pv
 * @param svaPadre
 * @param tipoTI
 */
function llamadasPLs(coProducto, tabla, ofer, sede, unidades, movimiento, pv,svaPadre,tipoTI)
{
	console.log("postventa: "+pv);
	if(movimiento!="D")
	{
		requierePL(coProducto, tabla, ofer, sede);  
	}
	if(unidades > 0 || movimiento!="D")
	{ //En una baja no hay que llamar al PL de incompatibilidades.
		incompatiblePL(coProducto, tabla, ofer, sede);
	}
	//Comprobacion necesaria para dispositivos fijos.
	if (coProducto== "F01_045"){
		obligaPL('F01_001', tabla, ofer, sede, '0', 4, 1,'D');
	} else {
		obligaPL(coProducto, tabla, ofer, sede,svaPadre,tipoTI,unidades,movimiento);
	}
	if (pv=='PV')
	{ //Sólo ejecutamos esto en una postventa.
		hecmvoaoPL(coProducto, unidades);
		hecpopaoPL(coProducto, unidades);
	}
	
}



/**
 * MUESTRA LA LISTA DE SEDES DE UNA OFERTA
 */
function mostrar_sedes_oferta()
{
	// http://localhost:8080/newOpweb/opwebServlet?opcion=sedes&accion=Sede&CIF=A28389880&Oferta=740

	if ( ($('#CIF') == undefined || $('#CIF') == null) || ($('#COOFERTA') == undefined || $('#COOFERTA') == null))
	{
		mensaje("Falta un parámetro para mostrar la lista de sedes.", 3);
	}
	else
	{
		window.location.assign("opwebServlet?opcion=sedes&accion=Sede&CIF="+$('#CIF').val()+"&COOFERTA="+$('#COOFERTA').val());
	}
}


function validaDNICIF(campo){
	var RegExDNI = /^ (([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))$/;
	
	if ((campo.value.match(RegExDNI)) && (campo.value!='')) {
		 alert("es un DNI");
		$("#"+campo+"Error").html("DNI NO VALIDO");
		$("#"+campo).attr("pattern", "dni");
	 }else{
		
			 alert("ES UN CIF");
			 $("#"+campo+"Error").html("CIF NO VALIDO");
			 $("#"+campo).attr("pattern", "cif");
		 
	 }
}
