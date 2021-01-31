window.onload = function(name){
    chooseYogaPose();
}

var yogaPoses = ["yoga/1.png", "yoga/2.png", "yoga/3.png", "yoga/4.png", "yoga/5.png", "yoga/6.png", "yoga/7.png", "yoga/8.png"]
var refreshid = null;
var timeGiven = 45;

function chooseYogaPose(){
    document.getElementById("yogaTimer").innerHTML = timeGiven;
    clearInterval(refreshid);
    yogaCounter(timeGiven);
    var randomNum = Math.floor(Math.random() * (yogaPoses.length));
    if (document.getElementById("yogaPose") != null) {
        document.getElementById("yogaPose").src = yogaPoses[randomNum];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById("resetYogaPose") != null) {
      document.getElementById("resetYogaPose").addEventListener("click", chooseYogaPose);
    }
  });

  function yogaCounter(counter){
      refreshid =
      setInterval( function(){
          counter--;
          if (counter >= 0){
              document.getElementById("yogaTimer").innerHTML = counter;
          }
          if (counter == 0){
            document.getElementById("yogaTimer").innerHTML = "Complete!";
          }
      }, 1000);

  }