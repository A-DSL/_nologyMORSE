"use strict";

//Translate the alphabet (case-insensitive) and the 10 1-digit numbers into morse code, and vice versa.
var morseButton = document.querySelector(".morsebutton");
var engButton = document.querySelector(".englishbutton");
var tlOutput = document.querySelector(".translationoutput");

var toMorse = function toMorse() {
  //Store textarea HTML's current value (string).
  var form = document.querySelector(".formtext").value; //Turn string into array.

  var formArray = form.split(""); //Use if/else to translate into morse.

  var morseArray = formArray.map(function (c) {
    if (c.toLowerCase() == "a") {
      return ".-";
    } else if (c.toLowerCase() == "b") {
      return "-...";
    } else if (c.toLowerCase() == "c") {
      return "-.-.";
    } else if (c.toLowerCase() == "d") {
      return "-..";
    } else if (c.toLowerCase() == "e") {
      return ".";
    } else if (c.toLowerCase() == "f") {
      return "..-.";
    } else if (c.toLowerCase() == "g") {
      return "--.";
    } else if (c.toLowerCase() == "h") {
      return "....";
    } else if (c.toLowerCase() == "i") {
      return "..";
    } else if (c.toLowerCase() == "j") {
      return ".---";
    } else if (c.toLowerCase() == "k") {
      return "-.-";
    } else if (c.toLowerCase() == "l") {
      return ".-..";
    } else if (c.toLowerCase() == "m") {
      return "--";
    } else if (c.toLowerCase() == "n") {
      return "-.";
    } else if (c.toLowerCase() == "o") {
      return "---";
    } else if (c.toLowerCase() == "p") {
      return ".--.";
    } else if (c.toLowerCase() == "q") {
      return "--.-";
    } else if (c.toLowerCase() == "r") {
      return ".-.";
    } else if (c.toLowerCase() == "s") {
      return "...";
    } else if (c.toLowerCase() == "t") {
      return "-";
    } else if (c.toLowerCase() == "u") {
      return "..-";
    } else if (c.toLowerCase() == "v") {
      return "...-";
    } else if (c.toLowerCase() == "w") {
      return ".--";
    } else if (c.toLowerCase() == "x") {
      return "-..-";
    } else if (c.toLowerCase() == "y") {
      return "-.--";
    } else if (c.toLowerCase() == "z") {
      return "--..";
    } else if (c == "1") {
      return ".----";
    } else if (c == "2") {
      return "..---";
    } else if (c == "3") {
      return "...--";
    } else if (c == "4") {
      return "....-";
    } else if (c == "5") {
      return ".....";
    } else if (c == "6") {
      return "-....";
    } else if (c == "7") {
      return "--...";
    } else if (c == "8") {
      return "---..";
    } else if (c == "9") {
      return "----.";
    } else if (c == "0") {
      return "-----";
    } else {
      return c;
    }
  });
  tlOutput.innerHTML = morseArray.join(" ");
};

var toHuman = function toHuman() {
  //Store textarea HTML's current value (Morse string).
  var form = document.querySelector(".formtext").value; //Turn string into array (seperate by /).

  var formArray = form.split(" "); //Use if/else to translate into English.
  //Use if/else to translate into morse.

  var engArray = formArray.map(function (c) {
    if (c.toLowerCase() == ".-") {
      return "a";
    } else if (c.toLowerCase() == "-...") {
      return "b";
    } else if (c.toLowerCase() == "-.-.") {
      return "c";
    } else if (c.toLowerCase() == "-..") {
      return "d";
    } else if (c.toLowerCase() == ".") {
      return "e";
    } else if (c.toLowerCase() == "..-.") {
      return "f";
    } else if (c.toLowerCase() == "--.") {
      return "g";
    } else if (c.toLowerCase() == "....") {
      return "h";
    } else if (c.toLowerCase() == "..") {
      return "i";
    } else if (c.toLowerCase() == ".---") {
      return "j";
    } else if (c.toLowerCase() == "-.-") {
      return "k";
    } else if (c.toLowerCase() == ".-..") {
      return "l";
    } else if (c.toLowerCase() == "--") {
      return "m";
    } else if (c.toLowerCase() == "-.") {
      return "n";
    } else if (c.toLowerCase() == "---") {
      return "o";
    } else if (c.toLowerCase() == ".--.") {
      return "p";
    } else if (c.toLowerCase() == "--.-") {
      return "q";
    } else if (c.toLowerCase() == ".-.") {
      return "r";
    } else if (c.toLowerCase() == "...") {
      return "s";
    } else if (c.toLowerCase() == "-") {
      return "t";
    } else if (c.toLowerCase() == "..-") {
      return "u";
    } else if (c.toLowerCase() == "...-") {
      return "v";
    } else if (c.toLowerCase() == ".--") {
      return "w";
    } else if (c.toLowerCase() == "-..-") {
      return "x";
    } else if (c.toLowerCase() == "-.--") {
      return "y";
    } else if (c.toLowerCase() == "--..") {
      return "z";
    } else if (c == ".----") {
      return "1";
    } else if (c == "..---") {
      return "2";
    } else if (c == "...--") {
      return "3";
    } else if (c == "....-") {
      return "4";
    } else if (c == ".....") {
      return "5";
    } else if (c == "-....") {
      return "6";
    } else if (c == "--...") {
      return "7";
    } else if (c == "---..") {
      return "8";
    } else if (c == "----.") {
      return "9";
    } else if (c == "-----") {
      return "0";
    } else {
      return c;
    }
  });
  tlOutput.innerHTML = engArray.join("");
};

morseButton.addEventListener("click", function () {
  toMorse();
});
engButton.addEventListener("click", function () {
  toHuman();
});