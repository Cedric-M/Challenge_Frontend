function loadXMLHttpRequest(buttonID) {

  var playerNb = document.getElementById(buttonID).value;
  var guessedNb = document.getElementsByClassName("player" + playerNb)[0].value;
  var params = "player=" + playerNb + "&guess=" + guessedNb;

  // var url = "https://cors-anywhere.herokuapp.com/http://www.drukzo.nl.joao.hlop.nl/challenge.php";
  // This line goes through the CORS error, but you can't properly play with it
  
  var url = "https://www.drukzo.nl.joao.hlop.nl/challenge.php";

  var xhr = new XMLHttpRequest();
  
  xhr.onload = function() {
     var obj = JSON.parse(xhr.responseText);

     if(obj.guess == "Bingo!!!"){
              var buttons = document.getElementsByClassName("button-submit");
              for (var i = 0, len = buttons.length; i < len; i++) {
                buttons[i].disabled = true;
              }
     }
     document.getElementById("response" + playerNb).innerHTML = obj.guess;
  }
  console.log(url+"?"+params);
  
  xhr.open("GET", url+"?"+params, true);
  xhr.send(params);
}