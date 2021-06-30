/*2.
Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function*/

function printNumbers(m, n) {

    for (let i = m; i <= n; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

console.log(printNumbers(1, 20));