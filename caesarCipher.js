function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const strArray = str.split("");
  let result = "";
  strArray.forEach((letter) => {
    if (alphabetArray.includes(letter)) {
      const index = alphabetArray.indexOf(letter);
      let newIndex = index + shift;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      result += alphabetArray[newIndex];
    } else {
      result += letter;
    }
  });
  return result;
}

module.exports = caesarCipher;
