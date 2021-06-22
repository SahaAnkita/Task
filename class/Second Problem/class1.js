/*2. 
Use the class in index file to create few employees and use the functions in class on them*/


export default function Class1(name, age) {
    this.name = name;
    this.age = age;
}

let employees = [];
employees.push(new Class1('Ankita', 26));
employees.push(new Class1('Chhaya', 17));
employees.push(new Class1('Samir', 45));
employees.push(new Class1('Purabi', 50));
employees.push(new Class1('Ananya', 60));

console.log(employees);
