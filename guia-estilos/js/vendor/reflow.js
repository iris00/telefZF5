jQuery(window).load(function() {
  'use strict';
  setTimeout(function() {
    $(document).foundation('equalizer', 'reflow');
  }, 100);
});

$('.accordion, .acord').on('toggled', function () {
  'use strict';
  $(document).foundation('equalizer', 'reflow');
});