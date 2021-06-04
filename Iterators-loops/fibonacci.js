/*2. 
Print fibbonaci series upto first 10 numbers.*/

// by for loop

// let fibarray = [0,1];

// for (let i = 2; i <= 10; i++){
//  fibarray.push(fibarray[i-2] + fibarray[i-1]);
// }
// document.write(fibarray);

// by while loop

// let fibarray = [0,1];
// let i = 2;

// while(i <= 10) {
//     fibarray.push(fibarray[i-2] + fibarray[i-1]);
//     i++;
// }
// document.write(fibarray);

// by do..while loop

let fibarray = [0, 1];
let i = 2;

do {
    fibarray.push(fibarray[i - 2] + fibarray[i - 1]);
    i++;
} while (i <= 10);

document.write(fibarray);