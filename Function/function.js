/*1. 
Create a function that takes a number and prints all even numbers upto that number*/

let printEven = () => {
    for (let i = 0; i <= 20; i++) {
      if (i % 2 === 0) {
        document.write(`Even Numbers: ${i}</br>`);
      }
    }
  }
  printEven();