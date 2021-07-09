/*2.
Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function*/


function printNumbers(m,n) {
    let timer = setInterval(() => {
        console.log(m++);
        if (m > n) {
            clearInterval(timer);
        }
    }, 100);
}
console.log(printNumbers(1,10));