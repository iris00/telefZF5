/**
 * Extend the picker to get “from” and “to” date functionality.
 */
$(document).ready(function() {
  'use strict';
  var from_$input = $('.desde').pickadate(),
    from_picker = from_$input.pickadate('picker');

  var to_$input = $('.hasta').pickadate(),
    to_picker = to_$input.pickadate('picker');

  // Check if there’s a “from” or “to” date to start with.
  if (from_picker.get('value')) {
    to_picker.set('min', from_picker.get('select'));
  }
  if (to_picker.get('value')) {
    from_picker.set('max', to_picker.get('select'));
  }

  // When something is selected, update the “from” and “to” limits.
  from_picker.on('set', function(event) {
    if (event.select) {
      to_picker.set('min', from_picker.get('select'));
    } else if ('clear' in event) {
      to_picker.set('min', false);
    }
  });

  to_picker.on('set', function(event) {
    if (event.select) {
      from_picker.set('max', to_picker.get('select'));
    } else if ('clear' in event) {
      from_picker.set('max', false);
    }
  });

//__________________________________________________________________________________

  var from_$input2 = $('.desde2').pickadate(),
    from_picker2 = from_$input2.pickadate('picker');

  var to_$input2 = $('.hasta2').pickadate(),
    to_picker2 = to_$input2.pickadate('picker');

  // Check if there’s a “from” or “to” date to start with.
  if (from_picker2.get('value')) {
    to_picker2.set('min', from_picker2.get('select'));
  }
  if (to_picker2.get('value')) {
    from_picker2.set('max', to_picker2.get('select'));
  }

  // When something is selected, update the “from” and “to” limits.
  from_picker2.on('set', function(event) {
    if (event.select) {
      to_picker2.set('min', from_picker2.get('select'));
    } else if ('clear' in event) {
      to_picker2.set('min', false);
    }
  });

  to_picker2.on('set', function(event) {
    if (event.select) {
      from_picker2.set('max', to_picker2.get('select'));
    } else if ('clear' in event) {
      from_picker2.set('max', false);
    }
  });

//__________________________________________________________________________________

  var from_$input3 = $('.desde3').pickadate(),
    from_picker3 = from_$input3.pickadate('picker');

  var to_$input3 = $('.hasta3').pickadate(),
    to_picker3 = to_$input3.pickadate('picker');

  // Check if there’s a “from” or “to” date to start with.
  if (from_picker3.get('value')) {
    to_picker3.set('min', from_picker3.get('select'));
  }
  if (to_picker3.get('value')) {
    from_picker3.set('max', to_picker3.get('select'));
  }

  // When something is selected, update the “from” and “to” limits.
  from_picker3.on('set', function(event) {
    if (event.select) {
      to_picker3.set('min', from_picker3.get('select'));
    } else if ('clear' in event) {
      to_picker3.set('min', false);
    }
  });

  to_picker3.on('set', function(event) {
    if (event.select) {
      from_picker3.set('max', to_picker3.get('select'));
    } else if ('clear' in event) {
      from_picker3.set('max', false);
    }
  });

//__________________________________________________________________________________

  var from_$input4 = $('.desde4').pickadate(),
    from_picker4 = from_$input4.pickadate('picker');

  var to_$input4 = $('.hasta4').pickadate(),
    to_picker4 = to_$input4.pickadate('picker');

  // Check if there’s a “from” or “to” date to start with.
  if (from_picker4.get('value')) {
    to_picker4.set('min', from_picker4.get('select'));
  }
  if (to_picker4.get('value')) {
    from_picker4.set('max', to_picker4.get('select'));
  }

  // When something is selected, update the “from” and “to” limits.
  from_picker4.on('set', function(event) {
    if (event.select) {
      to_picker4.set('min', from_picker4.get('select'));
    } else if ('clear' in event) {
      to_picker4.set('min', false);
    }
  });

  to_picker4.on('set', function(event) {
    if (event.select) {
      from_picker4.set('max', to_picker4.get('select'));
    } else if ('clear' in event) {
      from_picker4.set('max', false);
    }
  });

//__________________________________________________________________________________

  var from_$input5 = $('.desde5').pickadate(),
    from_picker5 = from_$input5.pickadate('picker');

  var to_$input5 = $('.hasta5').pickadate(),
    to_picker5 = to_$input5.pickadate('picker');

  // Check if there’s a “from” or “to” date to start with.
  if (from_picker5.get('value')) {
    to_picker5.set('min', from_picker5.get('select'));
  }
  if (to_picker5.get('value')) {
    from_picker5.set('max', to_picker5.get('select'));
  }

  // When something is selected, update the “from” and “to” limits.
  from_picker5.on('set', function(event) {
    if (event.select) {
      to_picker5.set('min', from_picker5.get('select'));
    } else if ('clear' in event) {
      to_picker5.set('min', false);
    }
  });

  to_picker5.on('set', function(event) {
    if (event.select) {
      from_picker5.set('max', to_picker5.get('select'));
    } else if ('clear' in event) {
      from_picker5.set('max', false);
    }
  });
});
