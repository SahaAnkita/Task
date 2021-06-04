/*3. 
Print all the keys and values of employee object used in first problem*/

// for in is used in object

let employeeDetails = {
    Name : "Ankita Saha",
    Email : "sahaankita757@gmail.com",
    Age : 26,
    Address : "Serampore,Hooghly",
    Phone : 8910016556,
    Gender : "Female",
    MarriageStatus : "Single",
};

for (let details in employeeDetails){
    document.write(`<b>Property</b> is: ${details} and <b>Value</b> is: ${employeeDetails[details]} </br>`);
}

// for of is used in array

let onlyDetails = ["Ankita Saha", "sahaankita757@gmail.com", 26, "Serampore,Hooghly", 8910016556, "Female", "Single"];

for (let n of onlyDetails) {
    document.write(`${n} </br>`);
}