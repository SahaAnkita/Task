/*3. 
Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.*/

let employees = [{
        name: 'Ankita',
        age: 26,
        id: 1
    },
    {
        name: 'Chhaya',
        age: 40,
        id: 2
    },
    {
        name: 'Samir',
        age: 45,
        id: 3
    },
    {
        name: 'Purabi',
        age: 50,
        id: 4
    },
    {
        name: 'Ananya',
        age: 60,
        id: 5
    }
]

function employeeName(employees, ab) {
    employees.sort ((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;
    })
    return employees;
}
console.log(employeeName(employees,'name'));