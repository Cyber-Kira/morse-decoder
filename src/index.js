const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const pair = {
  10: ".",
  11: "-",
};

function decode(exp) {
  let temp = [];
  let result = "";

  const expressionArray = exp.split("");

  for (let i = 0; i <= expressionArray.length; i++) {
    temp.push(expressionArray[i]);

    if ((i + 1) % 10 === 0) {
      const regExp = /(10)|(11)|(\*){10}/gm;
      const h = temp.join("").match(regExp);
      if (h[0] === "**********") result += " ";
      else {
        h.map((c) => {
          result += pair[c];
        });
        result += " ";
      }

      temp = [];
    }
  }
  return result
    .trim()
    .split(" ")
    .map((h) => (h === "" ? " " : MORSE_TABLE[h]))
    .join("");
}

module.exports = {
  decode,
};
