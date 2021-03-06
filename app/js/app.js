var app = (function(document, $) {
  'use strict';
  var docElem = document.documentElement,
    _userAgentInit = function() {
      docElem.setAttribute('data-useragent', navigator.userAgent);
    },
    _init = function() {
      $(document).foundation();
      _userAgentInit();
    };
  return {
    init: _init
  };
})(document, jQuery);

(function() {
  'use strict';
  app.init();
})();


// CSS layout debuger
// var myFunction = function(a) {
//   'use strict';
//   [].forEach.call(
//     document.querySelectorAll(a),
//     function(b) {
//       b.style.outline = '1px solid #' +
//         (~~(Math.random() * (1 << 24)))
//         .toString(16);
//     });
// };
// myFunction('*');


// Arregla error de posicionamiento de modal
$(function() {
  'use strict';
  $('.close-reveal-modal').click(function() {
    $(document).foundation('reveal', 'reflow');
  });
});


// CERRAR DROPDOWN al pulsar flechas del carrusel_________________________________________________________________________________
$('.orbit-prev, .orbit-next').click(function() {
  'use strict';
  if ($('.f-dropdown').hasClass('open')) {
    Foundation.libs.dropdown.close($('.f-dropdown.open'));
  }
});


// Deshabilita en otros select la opción seleccionada en un select________________________________________________________________
$('.selected select').on('change', function() {
  'use strict';
  $('.selected select').find('option').prop('disabled', false);
  $('.selected select').each(function() {
    $('.selected select').not(this).find('option[value="' + this.value + '"]').prop('disabled', true);
  });
});


// OPWEB Cargar contenido de las pestañas de "Situación actual" por Ajax__________________________________________________________
// $(document).ready(function() {
//     'use strict';
//     $('dl.tabs dd a').click(function() {
//         var split = $(this.href.split('#'));
//         var target = split[1];
//         if (!$('#' + target).hasClass('loaded')) {
//             $('#' + target).load(target + '.html', function() {
//                 $(this).foundation('reflow');
//             });
//             $('#' + target).addClass('loaded');
//         }
//     });
//     $('#wait').ajaxStart(function() {
//             $(this).show();
//         })
//         .ajaxComplete(function() {
//             $(this).hide();
//         });
// });
// $(window).load(function() {
//     'use strict';
//     $('#tab1').load('tab1.html');
// });


// OPWEB acordeón - Acordeón fondo azul en tabla de Business case_________________________________________________________________
$(document).ready(function() {
  'use strict';
  $('.accor').find('.accor-toggle').click(function() {
    $(this).parent('tr').next('.accor-content').slideToggle(300);
    $(this).toggleClass('active');
  });
});


// VALIDACIÓN de formularios. Se pasa a utils.js__________________________________________________________________________________
// $(document).foundation({
//     abide: {
//         patterns: {
//             day_month_year: /\d\d\/\d\d\/\d\d\d\d/,
//         }
//     },
//     offcanvas: {
//         close_on_click: true
//     }
// });


// OCULTAR avisos (alert-box) tras 5 segundos_____________________________________________________________________________________
$(function() {
  'use strict';
  $('.alert-box').delay(5000).fadeOut('slow');
});


// MOSTRAR/OCULTAR offcanvas onfocus______________________________________________________________________________________________
$(function() {
  'use strict';
  $('.off-canvas-head select').focus(function() {
    $('.off-canvas-wrap').addClass('offcanvas-overlap');
  });
  $('.off-canvas-list li:last-child a').focusout(function() {
    $('.off-canvas-wrap').removeClass('offcanvas-overlap');
  });
});


// Offcanvas con submenu desplegable
// $(document).foundation();
// $('.off-canvas-submenu').hide();
// $('.off-canvas-submenu-call').click(function() {
//   'use strict';
//   var icon = $('.off-canvas-submenu').is(':visible') ? '<i class="fa fa-caret-down"></i>' : '<i class="fa fa-caret-up"></i>';
//   $('.off-canvas-submenu').slideToggle('fast');
//   $(this).find('span').html(icon);
// });


// Configuracion para Dropzone - http://www.dropzonejs.com/
Dropzone.options.dropContrato = {
  paramName: 'contrato', // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  maxFiles: 2,
  addRemoveLinks: true,
  acceptedFiles: '.doc, .docx',
  dictDefaultMessage: 'Arrastre aquí el contrato o pulse para buscarlo.',
  dictFallbackMessage: 'Su navegador no soporta drag and drop para anexar el contrato.',
  dictFallbackText: 'Por favor use el siguiente formulario para anexar el contrato.',
  dictFileTooBig: 'El archivo pesa demasiado ({{filesize}}Mb). Tamaño máximo: {{maxFilesize}}Mb.',
  dictInvalidFileType: 'No se pueden anexar archivos de este tipo.',
  dictResponseError: 'Se ha producido un error (código: {{statusCode}}).',
  dictCancelUpload: 'Cancelar',
  dictCancelUploadConfirmation: '¿Seguro que desea cancelar la operación?',
  dictRemoveFile: 'Eliminar',
  dictMaxFilesExceeded: 'No puede anexar más archivos.'
};


// ORDENAR tablas - FooTable - http://fooplugins.com/plugins/footable-jquery/_____________________________________________________
$(function() {
  'use strict';
  $('.sortable').footable();

  $('.sortable').click(function() {
    $(document).foundation('equalizer', 'reflow');
  });
});


// MULTISELECT 2__________________________________________________________________________________________________________________
$('.multi-select2').multipleSelect({
  //filter: true,
  selectAllText: 'Todos',
  allSelected: 'Todos seleccionados',
  countSelected: '# de % seleccionados',
});


// CALENDARIOS - Pickadate - http://amsul.ca/pickadate.js/________________________________________________________________________
// Translation
$.extend($.fn.pickadate.defaults, {
  monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  today: 'Hoy',
  clear: 'Borrar',
  close: 'Cerrar',
  firstDay: 1,
  format: 'dd/mm/yyyy',
  formatSubmit: 'dd/mm/yyyy',
  labelMonthNext: 'Mes siguiente',
  labelMonthPrev: 'Mes anterior',
  labelMonthSelect: 'Seleccione un mes',
  labelYearSelect: 'Seleccione un año',
  selectMonths: true
});

// Calendario con límite de fechas SIN FUTURO para buscador con filtro
$('.calendario').pickadate({
  selectYears: 74,
  min: -27028,
  max: true
});

// Calendario con límite de fechas SIN PASADO para notificaciones
$('.calendario2').pickadate({
  selectYears: 10,
  min: true,
  max: 3653
});

// Calendario sin límite de fechas para informes y pedido
$('.calendario3').pickadate({
  selectYears: 74,
  min: -27028,
  max: 27028
});


// SELECIONAR todos los checkboxes de una tabla y DESTACA TR al pulsar checkbox___________________________________________________
$('#checkAll').click(function() {
  'use strict';
  $('table input:checkbox').not(this).prop('checked', this.checked);
  if ($(this).is(':checked')) {
    $('tbody td :checkbox').parent().parent().addClass('selected');
  } else {
    $('tbody td :checkbox').parent().parent().removeClass('selected');
  }
});

$('tbody td :checkbox').change(function() {
  'use strict';
  if ($(this).is(':checked')) {
    $(this).parent().parent().addClass('selected');
  } else {
    $(this).parent().parent().removeClass('selected');
  }
});


// RANGE SLIDER - noUiSlider - 7.0.10 - http://refreshless.com/nouislider/________________________________________________________

// $('.slider').noUiSlider({
//  start: [0],
//  step: 1,
//  range: {
//    'min': [0],
//    'max': [10]
//  },
//  format: wNumb({
//    decimals: 0
//  })
// });

// Output de Accesorios
// $('#sl-oper-auto').Link('lower').to($('#out-sl-oper-auto'));
// $('#sl-nume-adic').Link('lower').to($('#out-sl-nume-adic'));
// $('#sl-puer-adic').Link('lower').to($('#out-sl-puer-adic'));
// $('#sl-punt-cabl').Link('lower').to($('#out-sl-punt-cabl'));
// $('#sl-wifi-avan').Link('lower').to($('#out-sl-wifi-avan'));
//Output de Configuración basica de sede
// $('#sl-pues-fijo').Link('lower').to($('#out-sl-pues-fijo'));
// $('#sl-pues-movi').Link('lower').to($('#out-sl-pues-movi'));
// $('#sl-productiv').Link('lower').to($('#out-sl-productiv'));
// $('#sl-presencia').Link('lower').to($('#out-sl-presencia'));
// $('#sl-seguridad').Link('lower').to($('#out-sl-seguridad'));


$('.slider1').noUiSlider({
  start: [1],
  step: 1,
  range: {
    'min': [0],
    'max': [100]
  },
  format: wNumb({
    decimals: 0
  })
});
$('.slider2').noUiSlider({
  start: [1],
  step: 1,
  range: {
    'min': [0],
    'max': [10]
  },
  format: wNumb({
    decimals: 0
  })
});
$('.sliderFijos').noUiSlider({
  start: [1],
  step: 1,
  range: {
    'min': [0],
    'max': [10]
  },
  format: wNumb({
    decimals: 0
  })
});
$('.slider3').noUiSlider({
  start: [1],
  step: 1,
  decimals: 0,
  range: {
    'min': [0],
    'max': [96]
  },
  format: wNumb({
    decimals: 0
  })
});
$('.slider4').noUiSlider({
  start: [1],
  step: 1,
  range: {
    'min': [0],
    'max': [100]
  },
  format: wNumb({
    decimals: 0
  })
});
$('.slider5').noUiSlider({
  start: [1],
  step: 1,
  range: {
    'min': [0],
    'max': [16]
  },
  format: wNumb({
    decimals: 0
  })
});
$('.slider').noUiSlider({
  start: [1],
  step: 1,
  decimals: 0,
  range: {
    'min': [0],
    'max': [20]
  },
  format: wNumb({
    decimals: 0
  })
});


$('#sl-oper-auto').Link('lower').to($('#out-sl-oper-auto')),
  $('#sl-nume-adic').Link('lower').to($('#out-sl-nume-adic')),
  $('#sl-puer-adic').Link('lower').to($('#out-sl-puer-adic')),
  $('#sl-punt-cabl').Link('lower').to($('#out-sl-punt-cabl')),
  $('#sl-wifi-avan').Link('lower').to($('#out-sl-wifi-avan')),
  $('#sl-pues-fijo').Link('lower').to($('#out-sl-pues-fijo')),
  $('#sl-pues-movi').Link('lower').to($('#out-sl-pues-movi')),
  $('#sl-productiv').Link('lower').to($('#out-sl-productiv')),
  $('#sl-presencia').Link('lower').to($('#out-sl-presencia')),
  $('#sl-seguridad').Link('lower').to($('#out-sl-seguridad')),
  $('#sl-pues-conecti').Link('lower').to($('#out-sl-pues-conecti')),

  // De Roberto para sliders
  $('#sl-pues-fijo, #sl-pues-movi, #sl-productiv, #sl-presencia, #sl-seguridad, #sl-pues-conecti').change(function() {
    'use strict';
    $(document).ready(calculaImporteOferta());
  });


// jqueryUI autocomplete__________________________________________________________________________________________________________
// MIO
// $(function() {
//     'use strict';

//     $('#city').autocomplete({
//         source: function(request, response) {
//             $.ajax({
//                 url: 'http://gd.geobytes.com/AutoCompleteCity',
//                 dataType: 'jsonp',
//                 data: {
//                     q: request.term
//                 },
//                 success: function(data) {
//                     response(data);
//                 }
//             });
//         },
//         minLength: 3,
//     });
// })


$(document).ready(function() {
  'use strict';
  var item = [];
  $('#busca_oferta').autocomplete({
    source: function(request, response) {
      var textToSearch = $('#busca_oferta').val();
      $.ajax({
        url: '/newOpweb/opwebServlet?opcion=autocompletar&matricula=' + document.forms.formbusqueda.matricula.value + '&q=' + textToSearch,
        dataType: 'json',
        success: function(data) {
          console.log(item.length);
          response(data.items);
        },
        error: function(jqXHR, textStatus) {
          console.log(textStatus);
        }
      });
    },
    search: function(event) {
      return $.isNumeric(event.target.value) ? !1 : void 0;
    },
    select: function(event, ui) {
      $('#busca_oferta').val(ui.item.label);
      return false;
    },
    minLength: 5,
    autoFocus: !0
  });


  $('input[id=identificador]').autocomplete({
    source: function(request, response) {
      var textToSearch = $('input[name=nueva_oferta]').val();
      $.ajax({
        url: '/newOpweb/opwebServlet?opcion=autocompletar&matricula=' + $('#matricula').val() + '&q=' + textToSearch + '&oferta=S',
        dataType: 'json',
        success: function(data) {
          console.log(item.length);
          response(data.items);
        },
        error: function(jqXHR, textStatus) {
          console.log(textStatus);
        }
      });
    },
    search: function(event) {
      return $.isNumeric(event.target.value) ? !1 : void 0;
    },
    select: function(event, ui) {
      $('input[name=nueva_oferta]').val(ui.item.value);
      return false;
    },
    minLength: 5,
    autoFocus: !0
  });
});


// $(document).ready(function() {
//     'use strict';
//     var item = [];

//     $('#busca_oferta').autocomplete({
//         source: function(request, response) {
//             var textToSearch = $('#busca_oferta').val();
//             $.ajax({
//                 url: '/newOpweb/opwebServlet?opcion=autocompletar&matricula=' + document.forms['formbusqueda']['matricula'].value + '&q=' + textToSearch,
//                 dataType: 'json',
//                 success: function(data) {
//                     console.log(item.length);
//                     response(data.items);
//                 },
//                 error: function(jqXHR, textStatus, errorThrown) {
//                     console.log(textStatus);
//                 }
//             });
//         },

//         search: function(event, ui) {
//             if ($.isNumeric(event.target.value)) {
//                 return false;
//             } else {}
//         },

//         select: function(event, ui) {
//             document.forms['formbusqueda']['id'].value = (ui.item.value);
//             document.forms['formbusqueda']['isCIF'].value = false;
//             return false;
//         },
//         minLength: 5,
//         autoFocus: true
//     });
// });


//Nuevo editable-select
// $('.editable').selectize({
//     persist: true,
//     create: true,
//     plugins: {
//         'disable_options': {
//             disableOptions: [1, 2]
//         }
//     }
// });


// Editable-select________________________________________________________________________________________________________________
$('.editable').editableSelect();
