const 
  inquirer = require('inquirer');






inquirer
  .prompt([
    {
      type: 'input',
      name: 'letter',
      message : 'Enter guess'
    }
    
    
  ])
  .then(answers => {
    console.log(answers.letter)
  });