//git

Letter = function () {

  this.letter = 'a';
  this.isGuessed = false;


  this.check = () => {

    if(this.isGuessed) {
      return this.letter;
    } else {
      return '_';
    }

  }

  this.guess = (char) => {

    if(char === this.letter) {
      this.isGuessed = true;
    }
  }

}


let letter = new Letter;
letter.guess('a');
console.log(letter.isGuessed)


module.exports = Letter;