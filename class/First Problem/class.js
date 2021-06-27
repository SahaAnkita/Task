/*1. 
Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.*/


class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    sortByEmployeeName(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    }

}


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

console.log(employees.sort(Employee.sortByEmployeeName));
