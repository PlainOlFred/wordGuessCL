

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