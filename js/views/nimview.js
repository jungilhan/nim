define(['jquery'], function($) {
  var $heapA = $('#nim-heap-a');
  var $heapB = $('#nim-heap-b');
  var $heapC = $('#nim-heap-c');
  var $inputA = $('#nim-input-a');
  var $inputB = $('#nim-input-b');
  var $inputC = $('#nim-input-c');

  function render(params) {
    var heap = params.heap;
    $heapA.text(heap.a);
    $heapB.text(heap.b);
    $heapC.text(heap.c);
  }

  function newGame() {
    $('#subtract').hide();
    $('#new').show();
  }

  function initInput() {
    $inputA.val(0);
    $inputB.val(0);
    $inputC.val(0);
    $inputA.tooltip('hide');
    $inputB.tooltip('hide');
    $inputC.tooltip('hide');
  }

  function subtract() {
    $('#subtract').click();
  }

  (function bindEvent() {
    require(['controllers/nim', 'controllers/niminput'], function(Nim, NimInput){
      $('#subtract').click(function() {
        var currentA = Number($heapA.text());
        var currentB = Number($heapB.text());
        var currentC = Number($heapC.text());
        var subtractA = $inputA.val();
        var subtractB = $inputB.val();
        var subtractC = $inputC.val();

        Nim.onsubtract({a: currentA, b: currentB, c: currentC},
          {a: subtractA, b: subtractB, c: subtractC});

        NimInput.start();
      });

      $('#new').click(function() {
        $('#subtract').show();
        $('#new').hide();
        Nim.start();
      });

      $('input[type="number"]').focus(function() {
        NimInput.onfocus($(this));
      });

      $('input[type="number"]').keypress(function(event) {
        NimInput.onkeypress($(this), event);
      });

      $('input[type="number"]').on('keyup change click', function() {
        var currentA = Number($heapA.text());
        var currentB = Number($heapB.text());
        var currentC = Number($heapC.text());
        NimInput.onchange($(this), {a: currentA, b: currentB, c: currentC});
      });
    }); // require    
  })(); // bindEvent

  return {
    render: render,
    newGame: newGame,
    initInput: initInput,
    subtract: subtract
  };
});