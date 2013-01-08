require(['jquery', 'controllers/nim', 'libs/bootstrap'], function($, Nim) {
  // $.getJSON('assets/loseTable.json', function(data) {
  //   $.each(data, function(key, val) {
  //     console.log("key=" + key + " " + "val=" + val);
  //   })
  // });

  $("[rel=tooltip]").tooltip({trigger: 'manual'});
  Nim.start();
});
