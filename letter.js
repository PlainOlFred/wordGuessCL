// Letter.js` *should not* `require` any other files.

Letter = function () {

  this.blank = '?';
  this.isUsed = false;


  this.guess = () => {

    if(guess) {
      return 'letter'
    } else {
      return this.blank;
    }

  };

  this.check = (char) => {

    

  }

}


let letter = new Letter;
module.exports = letter;