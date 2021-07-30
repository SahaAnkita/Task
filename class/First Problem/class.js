/*1. 
Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.*/

class EmployeeList {
    constructor(employeeArray) {
        this.list = employeeArray;
    }
    sortEmployees() {
        return this.list.sort(sortByString)
    }

    sortByString(a, b) {
        let comparison = 0;
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            comparison = 1;
        } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            comparison = -1;
        }
        return comparison;
    }

}

const employees = [{
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

const obj1 = new EmployeeList(employees);

console.log(obj1.sortEmployees);
