var rec = new webkitSpeechRecognition();
var inputEn = document.querySelector("#en");
var inputUz = document.querySelector("#uz");
var enWords = ["white", "red", "green", "yellow"];
var uzWords = ["oq", "qizil", "yashil", "sariq"];
var indexNum;
var reWordsSec = document.querySelector(".re-word");
var reBtn = document.querySelector(".re-Btn");

var reEng = document.querySelector(".js-message");
var reUzb = document.querySelector("#reuzb");
var ansTeg = document.querySelector(".javob");

var inputchek = document.querySelector("#input-gam");

rec.onerror = function (err) {
  alert(err, "error");
  console.log(err, "error");
};

rec.onend = function () {
  console.log("Aloqa tugadi");
};

function enSpeak() {
  rec.lang = "en-En";
  rec.start();

  rec.onresult = function (evt) {
    var command = evt.results[0][0].transcript;
    if (command == "open bro") {
      inputchek.checked = "true";
    } else {
      inputEn.value = command;
    }
  };
}

function uzSpeak() {
  rec.lang = "uz-Uz";
  rec.start();

  rec.onresult = function (evt) {
    var command = evt.results[0][0].transcript;

    inputUz.value = command;
  };
}

function addWord() {
  enWords.push(inputEn.value);
  uzWords.push(inputUz.value);
  inputEn.value = "";
  inputUz.value = "";
  //   alert(enWords);
  //   alert(uzWords);
}

function reWords() {
  indexNum = Math.round(Math.random() * enWords.length);
  reEng.textContent = enWords[indexNum];
  ansTeg.textContent = "😉Lug'atlarni tezlik bilan yod oling!";
  ansTeg.style.backgroundColor = "black";
  reUzb.value = "";
  reUzb.style.color = "black";
  reUzb.style.border = "2px solid #03afff";
  reUzb.style.backgroundColor = "white";
}

function reBtnfunc() {
  if (reUzb.value == "") {
    rec.lang = "uz-Uz";
    rec.start();

    rec.onresult = function (evt) {
      var command = evt.results[0][0].transcript;
      var reWordsSec = document.querySelector(".re-word");

      if (command == uzWords[indexNum]) {
        reUzb.value = command;
        ansTeg.textContent = `${command} - Tog'ri javob ✅ `;
        reUzb.style.backgroundColor = "#0ee647";
      } else {
        reUzb.value = command;
        ansTeg.textContent = `${command} - Xato javob ❌, Tog'ri javob : ${uzWords[indexNum]} `;
        reUzb.style.color = "black";
        reUzb.style.border = "2px solid #e03d48";
        reUzb.style.backgroundColor = "#e03d48";
      }
    };
  } else {
    if (reUzb.value == uzWords[indexNum]) {
      ansTeg.textContent = `${reUzb.value} - Tog'ri javob ✅ `;
      reUzb.style.backgroundColor = "#0ee647";
    } else {
      ansTeg.textContent = `${reUzb.value} - Xato javob ❌, Tog'ri javob : ${uzWords[indexNum]} `;
      reUzb.style.color = "black";
      reUzb.style.border = "2px solid #e03d48";
      reUzb.style.backgroundColor = "#e03d48";
    }
  }
}

function anotherBtn() {
  rec.lang = "en-En";
  rec.start();

  rec.onresult = function (evt) {
    var command = evt.results[0][0].transcript;
    if (command == "open bro") {
      inputchek.checked = "true";
    } else {
      // inputEn.value = command;
    }
  };
}
