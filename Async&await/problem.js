// Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.
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

function funcEmp(index) {
    return new Promise(function (resolve, reject) {

        if (employees != undefined) {
            console.log(`Employees are present`)
            resolve();
        } else {
            console.log(`Employees are not present`)
            reject();
        }

    })
}


let result = async () => {
    await funcEmp() 
        let i = 0;
        const interval = setInterval(() => {
            console.log(employees[i]);
            i++;
            if (i >= employees.length) {
                clearInterval(interval)
            }
        }, 1000)
    }

result();