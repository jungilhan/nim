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

  function init() {
    $inputA.val(0);
    $inputB.val(0);
    $inputC.val(0);
  }

  (function bindEvent() {
    require(['controllers/nimcontroller'], function(NimController){
      $('#subtract').click(function() {
        var currentA = Number($heapA.text());
        var currentB = Number($heapB.text());
        var currentC = Number($heapC.text());
        var subtractA = $inputA.val();
        var subtractB = $inputB.val();
        var subtractC = $inputC.val();

        NimController.onsubtract({a: currentA, b: currentB, c: currentC},
          {a: subtractA, b: subtractB, c: subtractC});

        init();
      });

      $('#new').click(function() {
        $('#subtract').show();
        $('#new').hide();
        NimController.start();
      });
    }); // require    
  })(); // bindEvent

  return {
    render: render,
    newGame: newGame
  };
});