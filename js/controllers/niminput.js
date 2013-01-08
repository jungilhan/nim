define(['views/nimview', 'views/messageview'], function(NimView, MessageView) {
  function start() {
    NimView.initInput();
  }
  
  function onfocus($this) {
    $this.val('');
  }

  function onkeypress($this, event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == 13) {
      NimView.subtract();
    }
  }

  return {
    start: start,
    onfocus: onfocus,
    onkeypress: onkeypress
  };
});