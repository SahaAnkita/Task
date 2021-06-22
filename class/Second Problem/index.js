/*2. 
Use the class in index file to create few employees and use the functions in class on them*/

import Employee, {employeeName} from "./class1.js";

let employees = [];
employees.push(new Employee('Ankita', 26, 1));
employees.push(new Employee('Chhaya', 17, 2));
employees.push(new Employee('Samir', 45, 3));
employees.push(new Employee('Purabi', 50,4));
employees.push(new Employee('Ananya', 60, 5));

console.log(employeeName(employees, 'name'));