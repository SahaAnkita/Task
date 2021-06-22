/*2. 
Use the class in index file to create few employees and use the functions in class on them*/

export default class Employee {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
export function employeeName(employees, ab) {
    employees.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase())
            return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1;
        return 0;
    })
    return employees;
}
