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

  var angle;

  console.log("Starting Index = " + selectedIndex);

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
  angle = selectedIndex / cellCount * 360;

  console.log("Index = " + selectedIndex + "\n " + direction);

  carousel.css("transform", 'translate(-50%, -50%) translateZ(100vw)');
  setTimeout(function(carousel) {
    carousel.css("transform", 'translate(-50%, -50%) translateZ(100vw) rotateY(' + angle + 'deg)');
  }, 750, carousel);
  setTimeout(function(carousel) {
    carousel.css("transform", 'translate(-50%, -50%) translateZ(150vw) rotateY(' + angle + 'deg)');
  }, 1250, carousel);

}
