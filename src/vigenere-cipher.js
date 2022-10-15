const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(word, key) {
    if (!word || !key) {
      throw new Error("Incorrect arguments!");
    }

    function upperCase(letter) {
      let l = letter.charCodeAt();
      return l > 64 && l < 91 ? true : false;
    }
    function newLetter(n, m) {
      return ((n % m) + m) % m;
    }
    word = word.toUpperCase();
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < word.length; i++) {
      let A = 65;
      if (upperCase(word[i])) {
        let WordSym = word[i].charCodeAt(0) - A;
        let KeySym = key[keyIndex % key.length].toUpperCase().charCodeAt() - A;
        let UpperLetter = newLetter(WordSym + KeySym, 26);
        result += String.fromCharCode(UpperLetter + A);
        keyIndex++;
      } else {
        result += word[i];
      }
    }
    if (this.flag == false) {
      result = result.split("").reverse().join("");
    }
    return result;
  }
  decrypt(word, key) {
    if (!word || !key) {
      throw new Error("Incorrect arguments!");
    }

    function upperCase(letter) {
      let l = letter.charCodeAt();
      return l > 64 && l < 91 ? true : false;
    }
    function newLetter(n, m) {
      return ((n % m) + m) % m;
    }
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < word.length; i++) {
      let A = 65;
      if (upperCase(word[i])) {
        let WordSym = word[i].charCodeAt(0) - A;
        let KeySym = key[keyIndex % key.length].toUpperCase().charCodeAt() - A;
        let UpperLetter = newLetter(WordSym - KeySym, 26);
        result += String.fromCharCode(UpperLetter + A);
        keyIndex++;
      } else {
        result += word[i];
      }
    }
    if (this.flag == false) {
      result = result.split("").reverse().join("");
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
