/*1. 
Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.*/


class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
Employee.prototype.toString = function () {
    return `Name: ${this.name} Age: ${this.age}`;
};

let employees = [];
employees.push(new Employee('Ankita', 26));
employees.push(new Employee('Chhaya', 17));
employees.push(new Employee('Samir', 45));
employees.push(new Employee('Purabi', 50));
employees.push(new Employee('Ananya', 60));

function employeeName(employees, ab) {
    employees.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;
    })
    return employees;
}

function employeeAge(employees, ageNumber) {

    return employees.filter(employees => employees.age < ageNumber);

}

console.log(employeeName(employees, 'name'));

console.log(employeeAge(employees, 50));