/*1. 
Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.*/
 
class Employee {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }


    sortByEmployeeName(a, b) {
        let comparison = 0;
    
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            comparison = 1;
        } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            comparison = -1;
        }
        return comparison;
    }

}

const obj1 = new Employee('Ankita', 26, 1);
const obj2 = new Employee('Chhaya', 40, 2);
const obj3 = new Employee('Samir', 45, 3);
const obj4 = new Employee('Purabi', 50,4);
const obj5 = new Employee('Ananya', 60, 5);

console.log(obj1.sortByEmployeeName);

// const employees = [{
//     name: 'Ankita',
//     age: 26,
//     id: 1
// },
// {
//     name: 'Chhaya',
//     age: 40,
//     id: 2
// },
// {
//     name: 'Samir',
//     age: 45,
//     id: 3
// },
// {
//     name: 'Purabi',
//     age: 50,
//     id: 4
// },
// {
//     name: 'Ananya',
//     age: 60,
//     id: 5
// }
// ]

// console.log(employees.sort(sortByEmployeeName));
