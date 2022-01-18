//Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

const toggleCase = (str) => {
  let result = "";
  let isToggle = false;
  for (let i = 0; i < str.length; i++) {
    if (isToggle) {
      isToggle = false;
      result += toggle(str[i]);
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

const toggle = (char) => {
  let code = char.charCodeAt(0);
  if (code > 96 && code < 123) {
    return String.fromCharCode(code - 32);
  } else if (code > 64 && code < 91) {
    return String.fromCharCode(code + 32);
  } else {
    return strp[i];
  }
};

toggleCase("gossssod afternoon");
