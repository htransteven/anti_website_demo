function toggleSize(name){
  var container = $("#" + name);
  if(container.hasClass("expand")){
      container.removeClass("expand");
      container.addClass("shrink");
  } else if (container.hasClass("shrink")) {
      container.removeClass("shrink");
      container.addClass("expand");
  }
}

var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel(direction) {

  var carousel = $(".carousel");
  var angle, prevAngle;

  // Loop
  /*
  if(direction == "left"){
    if(selectedIndex == -1){
      selectedIndex = 1;
    } else {
      selectedIndex--;
    }
  } else {
    if(selectedIndex == 1){
      selectedIndex = -1;
    } else {
      selectedIndex++;
    }
  }
  */

  prevAngle = selectedIndex / cellCount * 360;

  if(direction == "left"){
    if(selectedIndex != -1){
      selectedIndex--;
    }
  } else {
    if(selectedIndex != 1){
      selectedIndex++;
    }
  }

  angle = selectedIndex / cellCount * 360;

  carousel.css("transition", "transform 0.5s");
  carousel.css("transform", 'translate(-50%, -50%) translateZ(100vw) rotateY(' + prevAngle + 'deg)');
  setTimeout(function(carousel) {
    carousel.css("transition", "transform 0.25s");
    carousel.css("transform", 'translate(-50%, -50%) translateZ(100vw) rotateY(' + angle + 'deg)');
  }, 500, carousel);
  setTimeout(function(carousel) {
    carousel.css("transform", 'translate(-50%, -50%) translateZ(150vw) rotateY(' + angle + 'deg)');
  }, 1000, carousel);

}

function rotateSkyBox(direction) {

  var containers = 4;

  var angle;
  angle = selectedIndex / containers * 360;

  $(".Skybox-rotor-y").css("transition", 'transform 0.25s');
  setTimeout(function() {
    $(".Skybox-rotor-y").css("transform", 'rotateY(' + angle + 'deg)');
  }, 500);

}
