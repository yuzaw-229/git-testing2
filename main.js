

let number = 5;

if (number >= 0) {
    console.log("Positive");
}
else {
    console.log("Negative");
}




let votingAge = 20;
let nationality = true;

if (votingAge >= 18 && nationality == true) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}




let amount = 60;

if (amount >= 50) {
    console.log("Free Delivery");
}
else {
    console.log("Delivery Fee: $5");
}




let movieAge = 20;

if (movieAge >= 0 && movieAge <= 12) {
    console.log("$5");
}
else if (movieAge >= 13 && movieAge <= 17) {
    console.log("$8");
}
else if (movieAge >= 18 && movieAge <= 59) {
    console.log("$12");
}
else if (movieAge >= 60) {
    console.log("$7");
}
else {
    console.log("Invalid age");
}




let speed = 70;

if (speed < 40) {
    console.log("Too Slow");
}
else if (speed >= 40 && speed <= 80) {
    console.log("Normal Speed");
}
else if (speed >= 81 && speed <= 100) {
    console.log("Fast");
}
else {
    console.log("Speeding");
}



let bmi = 22;

if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
}
else if (bmi >= 30) {
    console.log("Obese");
}

let month = Number(prompt("Enter a number (1-12):"));

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

let choice = Number(prompt(
    "Choose an option:\n" +
    "1. Check Balance\n" +
    "2. Deposit\n" +
    "3. Withdraw\n" +
    "4. Exit"
));

switch (choice) {
    case 1:
        console.log("Check Balance");
        break;
    case 2:
        console.log("Deposit");
        break;
    case 3:
        console.log("Withdraw");
        break;
    case 4:
        console.log("Exit");
        break;
    default:
        console.log("Invalid choice");
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let num = Number(prompt("Enter a number:"));
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log("Factorial =", factorial);

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("John");

function square(number) {
    return number * number;
}

let result = square(5);

console.log(result);

function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEven(10));
console.log(isEven(7));