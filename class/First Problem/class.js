/*1. 
Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.*/

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get employeeResult() {
        return this.employeeAge;
    }
    employeeAge(employees, ageNumber) {

        return employees.filter(employees => employees.age < ageNumber);

    }
}
let employees = []
employees[0] = {
    name: "Ankita",
    age: 26
}
employees[1] = {
    name: "Chhaya",
    age: 17
}
employees[2] = {
    name: "Samir",
    age: 45
}
employees[3] = {
    name: "Purabi",
    age: 50
}
employees[4] = {
    name: "Ananya",
    age: 60
}

console.log(employeeAge(employees, 45));