const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let sum = 0;

const addNumbers = function (sum, numsLeft, completionCb) {
  if (numsLeft === 0) {
    reader.close();
    return completionCb(sum); 
  }

  // let total = sum;
  // let countDown = numsLeft; 

  if (numsLeft > 0){
  let val = 0

  reader.question("Give me all your numbers!", (answer) => {
    val = parseInt(answer);
    sum += val;
    // console.log(val);
    console.log(sum);
    addNumbers(sum, numsLeft - 1, completionCb);
  });

    
 
  };
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));