define(['jquery'], function($) {
  function render(params) {
    var msg = params.msg;
    var type = params.type;
    var $msgDiv = null;

    switch (type) {
      case 'turn':
        $msgDiv = $('#turn-msg');
        break;
      case 'error':
        $msgDiv = $('#error-msg');
        break;
    }

    if ($msgDiv != null) {
      $msgDiv.text(msg);

      if (type == 'error') {
        $msgDiv.fadeIn().delay(1500).fadeOut();
      }
    }
  }

  return {
    render: render
  };
});