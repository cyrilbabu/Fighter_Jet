var score = 0;

var bullets = [];
var bulletsNo = 0;
var bulletLoc = 30;

var villens = [];
var villensNo = 2;
var villenLoc = 1;

var jetLoc = 11;

$(".left").click(function(){
  if (jetLoc === 1){
    jetLoc = jetLoc;
  }
  else{
    jetLoc = jetLoc - 1;
  };
  $(".jet").css("grid-column-start", jetLoc);
});

$(".right").click(function(e){
  if (jetLoc === 20){
    jetLoc = jetLoc;
  }
  else{
    jetLoc = jetLoc + 1;
  };
   $(".jet").css("grid-column-start", jetLoc);
});

$(document).keydown(function(e){
    if (e.which == 37) {
      if (jetLoc === 1){
        jetLoc = jetLoc;
      }
      else{
        jetLoc = jetLoc - 1;
      };
      $(".jet").css("grid-column-start", jetLoc);
      return false;
    };

    if (e.which == 39) {
      if (jetLoc === 20){
        jetLoc = jetLoc;
      }
      else{
        jetLoc = jetLoc + 1;
      };
       $(".jet").css("grid-column-start", jetLoc);
       return false;
    };

    if (e.which == 13) {
      location.reload();
      return false;
    };
});


setInterval(function(){
  var n = Math.floor(Math.random()*18+2);
  $(".game").append("<div class='villen villen" + villensNo +"' style='grid-row-start: 2; grid-column-start: "+n+";'></div>")
  villens.push("villen"+villensNo);
  villensNo = villensNo + 1;
  villenLoc = villenLoc + 1;
  for (var i=0; i < villens.length; i++){
    $("."+ villens[i]).css("grid-row-start", villenLoc - i);
  };
  for (var i=0; i < villens.length; i++){
    if( $("."+ villens[i]).css('grid-row-start') == "29"){
      $(".game").remove();
      $(".body").append("<div class='gameOver'><p>GAME OVER</p></div>");
    };
  };
},700);


setInterval(function(){
  if (bulletLoc !== 0){
    bulletLoc = bulletLoc - 1;
  };
  $(".game").append("<div class='bullet bullet" + bulletsNo +"' style='grid-row-start: 29; grid-column-start: "+jetLoc+";'></div>")
  bullets.push("bullet" + bulletsNo);
  bulletsNo = bulletsNo + 1;
  if (bulletsNo > 30){
    bullets.shift();
  };

  for (var i=0; i < bullets.length; i++){
    $("."+ bullets[i]).css("grid-row-start", (bulletLoc + i)-1);
  };

},300);

setInterval(function(){
  for(var j=0; j < bullets.length; j++){
    for(var k=0; k < villens.length; k++){
      if ($("."+ villens[k]).css('grid-row-start') === $("."+ bullets[j]).css('grid-row-start') && $("."+ villens[k]).css('grid-column-start') === $("."+ bullets[j]).css('grid-column-start')){
        $("."+ villens[k]).remove();
        $("."+ bullets[j]).remove();
      };
    };
  };
},50);
