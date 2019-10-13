
const 
  letter = require('./letter')
  

const Word = function(arr) {

  this.currentWord = arr.map(element => (new letter(element)).toString()).join(' ');
  console.log(this.currentWord)

  this.check = function(char) {
    letter.guess.call(this, char)
    
  }




}

