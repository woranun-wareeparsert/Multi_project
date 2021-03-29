var object1 = document.getElementById("object1");
var object2 = document.getElementById("object2");
var object3 = document.getElementById("object3");
var object4 = document.getElementById("object4");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var count = 0;
var topscore = 0;

function end() {
  object1.style.animation = "none";
  object2.style.animation = "none";
  object3.style.animation = "none";
  object4.style.animation = "none";
}

  setInterval(function gameplay(x) {
    document.addEventListener("keypress", function correct(event) {
      console.log(event.key);
      x = event.key;

      let check1 = parseInt(
        window.getComputedStyle(object1).getPropertyValue("top")
      );
      let check2 = parseInt(
        window.getComputedStyle(object2).getPropertyValue("top")
      );
      let check3 = parseInt(
        window.getComputedStyle(object3).getPropertyValue("top")
      );
      let check4 = parseInt(
        window.getComputedStyle(object4).getPropertyValue("top")
      );
      if (count > topscore)
      {
        topscore = count;
      }
      if (count < -25) {
        end();
        document.getElementById("txt").innerHTML = "คะแนนสูงสุดของคุณ!!!";
        document.getElementById("score").innerHTML = topscore;
      }
      if (x == "a" && check1 > -130 && check1 < -30) {
        console.log("Hit1");
        document.getElementById("txt").innerHTML = "Hit";
        count++;
        document.getElementById("score").innerHTML = count;
        document.getElementById("type").innerHTML = "ชนิด 1";
      } else if (x == "s" && check2 > -230 && check2 < -130) {
        console.log("Hit2");
        document.getElementById("txt").innerHTML = "Hit";
        count++;
        document.getElementById("score").innerHTML = count;
        document.getElementById("type").innerHTML = "ชนิด 2";
      } else if (x == "d" && check3 > -330 && check3 < -230) {
        console.log("Hit3");
        document.getElementById("txt").innerHTML = "Hit";
        count++;
        document.getElementById("score").innerHTML = count;
        document.getElementById("type").innerHTML = "ชนิด 3";
      } else if (x == "f" && check4 > -430 && check4 < -330) {
        console.log("Hit4");
        document.getElementById("txt").innerHTML = "Hit";
        count++;
        document.getElementById("score").innerHTML = count;
        document.getElementById("type").innerHTML = "ชนิด 4";
      } else if (
        check1 > -30 ||
        check2 > -130 ||
        check3 > -230 ||
        check4 > -330
      ) {
        console.log("Miss btn");
        document.getElementById("txt").innerHTML = "Miss";
        document.getElementById("score").innerHTML = count;
        count--;
      }
    });
  }, 5000);

  function restart()
  {
    window.location.reload();
  }