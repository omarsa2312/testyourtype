var startTime, endTime;
function playgame() {
  var dat = new Date();

  startTime = dat.getTime();
}

function endgame() {
  var dat = new Date();

  endTime = dat.getTime();
}

const arr = [
  "If life were predictable it would cease to be life, and be without flavor.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "I will be able to crack the interview"
];

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var s1 = document.getElementById("msg");

  var idx = Math.floor(Math.random() * arr.length);

  s1.innerText = arr[idx];

  var intxt = btn.innerText;

  if (intxt == "Start") {
    btn.innerText = "Done";
    playgame();
  } else {
    btn.innerText = "Start";
    endgame();

    let newtxt = document.getElementById("typeArea").value;

    let newarr1 = newtxt.split(" ");
    let newarr2 = arr[idx].split(" ");

    var cnt = newarr1.length;

    var mis = newarr2.length - newarr1.length;

    for (var i = 0; i < cnt; i++) {
      if (newarr1[i] != newarr2[i]) {
        mis++;
      }
    }

    var val1 = (endTime - startTime) / 1000;
    var speed = Math.round(60 * (cnt / val1));
    let fintxt =
      "Your Typing speed is " +
      speed +
      " words per minute " +
      "You mistyped " +
      mis +
      " words out of " +
      newarr2.length +
      " words.";
    s1.innerText = fintxt;
  }
});
