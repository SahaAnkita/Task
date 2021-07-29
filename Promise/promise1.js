/*2. 
Create another promisified function that sorts this employee list from above response by name. Chain it to above promise*/

const employees = [{
        name: "Ankita",
        age: 26,
        id: 1,
        salary: 510000
    },
    {
        name: "Chhaya",
        age: 40,
        id: 2,
        salary: 520000
    },
    {
        name: "Samir",
        age: 45,
        id: 3,
        salary: 525000
    },
    {
        name: "Purabi",
        age: 50,
        id: 4,
        salary: 515000
    },
    {
        name: "Ananya",
        age: 60,
        id: 5,
        salary: 530000
    }
]

function funcEmp() {
    return new Promise((resolve, reject) => {

        if (employees != undefined) {
            console.log(`Employees are present`)
            resolve(employees);
        } else {
            console.log(`Employees are not present`)
            reject();
        }

    })
}

funcEmp().then(function (employeeList) {
    console.log(`sorting employees`);
    return employeeList.sort(sortByEmployeeName);
}).then(function (message) {
    setTimeout(() => {
        console.log(message)
    }, 2000)
})

function sortByEmployeeName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    return 0;
}