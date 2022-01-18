//Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

const toggleCase = (str) => {
  let result = "";
  let isToggle = false;
  for (let i = 0; i < str.length; i++) {
    if (isToggle) {
      isToggle = false;

      let code = str.charCodeAt(i);
      if (code > 96 && code < 123) {
        result += String.fromCharCode(code - 32);
      } else if (code > 64 && code < 91) {
        result += String.fromCharCode(code + 32);
      } else {
        result += strp[i];
      }
    } else {
      result += str[i];
      if (str[i] === " ") {
        isToggle = false;
      } else {
        isToggle = true;
      }
    }
  }
  return result;
};

toggleCase("gossssod afternoon");
