/* 2. 
Add a function to return list of employees that contains "am" in his name. Add it in separate file and import it to call in another file.*/

let employeesJson = [{

        "name": "Ankita",
        "age": "26",
        "id": "1"
    },
    {
        "name": "Chhaya",
        "age": "40",
        "id": "2"
    },
    {
        "name": "Samir",
        "age": "45",
        "id": "3"
    },
    {
        "name": "Purabi",
        "age": "50",
        "id": "4"
    },
    {
        "name": "Ananya",
        "age": "60",
        "id": "5"
    }
]

let nameList = ["am"];

let employeeName = employeesJson.filter(employee => employee.name.indexOf(nameList) > -1);

export {employeeName};