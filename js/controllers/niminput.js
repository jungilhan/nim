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

  function onchange($this, heap) {
    if ($this.val() == '') {      
      return;
    }

    if ($this.val() == '0') {
      $this.val('');
    }

    switch ($this.attr('id')) {
      case 'nim-input-a':
        $this.attr('data-original-title', (heap.a - $this.val()));        
        $this.tooltip('show');
        break;
      case 'nim-input-b':
        $this.attr('data-original-title', (heap.b - $this.val()));
        $this.tooltip('show');
        break;
      case 'nim-input-c':
        $this.attr('data-original-title', (heap.c - $this.val()));
        $this.tooltip('show');
        break;
    }
  }

  return {
    start: start,
    onfocus: onfocus,
    onkeypress: onkeypress,
    onchange: onchange
  };
});