/*1.
Divide the employee age by null and handle the error. Also if the error occurs divide it by 2 and print it.*/

const employeesJson = [
    {
        "name": "Ankita",
        "age": 26
    },
    {
        "name": "Chhaya",
        "age": 40
    },
    {
        "name": "Samir",
        "age": 45
    },
    {
        "name": "Purabi",
        "age": 50
    },
    {
        "name": "Ananya",
        "age": 60
    }
]

let jsonLength = employeesJson.length;

for (let i = 0; i < jsonLength; i++) {
    try {
        console.log(`Dividing the employee age by null`)
            (employeesJson[i].age)/ null
    } 
    catch (e) {
        console.log(`Previous age is  ${employeesJson[i].age}`);
        let result = employeesJson[i].age / 2;
        console.log(`After dividing age by 2 is ${result}`);
    }
}