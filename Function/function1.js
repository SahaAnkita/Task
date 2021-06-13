/*2. 
Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.*/

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
function employeeAge(employees, ageNumber) { 
 
   return employees.filter(employees => employees.age < ageNumber);
 
   }
 
console.log(employeeAge(employees,45));

