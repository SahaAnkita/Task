/*3. 
Take another paramter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with unit as Lac*/

let employeesJson = [
    {
        "name": "Ankita",
        "age": "26",
        "id": "1",
        "salary": 510000
    },
    {
        "name": "Chhaya",
        "age": "40",
        "id": "2",
        "salary": 520000
    },
    {
        "name": "Samir",
        "age": "45",
        "id": "3",
        "salary": 525000
    },
    {
        "name": "Purabi",
        "age": "50",
        "id": "4",
        "salary": 515000
    },
    {
        "name": "Ananya",
        "age": "60",
        "id": "5",
        "salary": 530000
    }
]

let employeeSalary = employeesJson.map(item => ({
    name: item.name,
    resultSalary: `item.salary * 0.00001 lac`
}));
console.log(employeeSalary);


