
// Q. Check Evenor Odd number
function isEvenOrOdd(number) {
    if(number%2 == 0) {
        console.log(`${number} is even`);
    }
    else{
        console.log(`${number} is odd`);
    }

}

isEvenOrOdd(6);

// Q Check Age for Voting number
function checkage(num) {
    if (num<18) {
        console.log(`${num} is not vaild of Voting`);
    }
    else{
        console.log(`${num} is vaild of Voting`);
    }
}

checkage(20)

// Q. Check  a number is positive and negative
function postiveornavgtive(num) {
    if (num<0) {
        console.log(`${num} this is negative`);
    }
    else if(num>0)
        console.log(`${num} this is positive`);
    
    else{
        console.log(`${num} this is "nutrual"`);
    }
}

postiveornavgtive(-1);

// Q Check a Largest number in num1 and num2
function findlargestnum(num1, num2) {
    if(num1<num2) {
        console.log(`${num1} is smaller than ${num2}`);
    }
    else if(num1>num2) {
        console.log(`${num1} is grater then ${num2}`);
    }
    else{
        console.log(`${num1} is equal to ${num2}`);
    }
}

findlargestnum(30,30)
findlargestnum(18,30)
findlargestnum(30,15)

// Q Check a  largest number in num1 and num2 and num3
function findLargest(num1,num2,num3) {
    if (num1>num2 && num1>num3) {
        console.log(`${num1} is Largest number then ${num2} & ${num3}`);
    }
    else if(num2>num3){
        console.log(`${num2} is Largest number then ${num1} & ${num3}`);
    }
    else{
        console.log(`${num3} is Largest number then ${num1} & ${num2}`);
    }
}
findLargest(10,50,90)
findLargest(20,50,9)
findLargest(9,1,7)

// Q Check if a triangle is equilateral, scalene, or isosceles

function findTringal(side1,side2,side3) {
    if (side1==side2 && side1==side3) {
        console.log("Equilateral Tringal");
    }
    else if(side1==side2||side2==side3||side3==side1){
        console.log(`isosceles`);
    }
    else{
        console.log(`scalene`);
    }
}
findTringal(10,50,90)
findTringal(15,15,15)
findTringal(5,5,3)

function CheckInRange(num, start, end) {
    if (num>=start && num<=end) {
        console.log(`${num} is Between the range ${start} and ${end}`);
    }
    else{
        console.log(`${num} is Out of Range of the numbeer range ${start} and ${end}`);
    }
}
CheckInRange(100,50,90)
CheckInRange(30,60,9)
CheckInRange(90,60,30)

function findGrade(name, marks) {

    if(marks >= 90 && marks <= 100){
      console.log(`${name} you have received S grade`)
    }
    else if(marks >= 80 && marks < 90){
      console.log(`${name} you have received A grade`)
    }
    else if(marks >= 70 && marks < 80){
      console.log(`${name} you have received B grade`)
    }
    else if(marks >= 60 && marks < 70){
      console.log(`${name} you have received C grade`)
    }
    else if(marks >= 50 && marks < 60){
      console.log(`${name} you have received D grade`)
    }
    else if(marks >= 40 && marks < 50){
      console.log(`${name} you have received E grade`)
    }
    else if(marks >= 0 && marks <40){
      console.log(`${name} you have Failed`)
    }
    else{
      console.log(`Invalid marks of ${marks}`)
    }
  }
  
  findGrade("John Doe", 91) //"John Doe you have received S grade"
  findGrade("John Doe", 85) //"John Doe you have received A grade"
  findGrade("John Doe", 73) //"John Doe you have received B grade"
  findGrade("John Doe", 53) //"John Doe you have received D grade"
  findGrade("John Doe", 20) //"John Doe you have Failed"
  findGrade("John Doe", 120) //"Invalid marks of 120"