/*1. 
Take an array of objects of employees created above and print those employees whose age is less than 50.*/

let employees = [{
        name: 'Ankita',
        age: 26
    },
    {
        name: 'Chhaya',
        age: 40
    },
    {
        name: 'Samir',
        age: 45
    },
    {
        name: 'Purabi',
        age: 50
    },
    {
        name: 'Ananya',
        age: 60
    }
]

let employeesDetails = employees.filter(function (employees) {
    return employees.age <= 50
})

console.log(employeesDetails)
