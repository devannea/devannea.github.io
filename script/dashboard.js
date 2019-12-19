$(function() {

    let $list = $('#TD-list');
    //Store variable $list
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  
});

var x = document.getElementById("demo");
        function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude; 
        }

var gameMarker = "X";

function changeMarkerToX(){
    gameMarker = "X";
    // console.log("The X button was clicked!")
}

function changeMarkerToO(){
    gameMarker = "O";
    // console.log("The O button was clicked!")
}

function placeMark(divID){
    var box = document.getElementById(divID);
    box.innerHTML = gameMarker;
}