/*3. 
Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself)
Anything below 50 is F*/

let grade = 67;

switch (true) {

    case (grade >= 80 && grade<=100):
        document.write(`Your grade is A`); // If score is 80 or greater
        break;

    case (grade >= 70 && grade<=79):
        document.write(`Your grade is B`); // If score is 70 or greater
        break;

    case (grade >= 60 && grade<=69):
        document.write(`Your grade is C`); // If score is 60 or greater
        break;

    case (grade >= 50 && grade<=59):
        document.write(`Your grade is D`); // If score is 50 or greater
        break;

    default:
        document.write(`Your grade is F`); // Anything 50 or below is failing
}