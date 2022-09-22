// function functionName(parameters){code to be executed}
let usersName;

function greetUser() {
let usersName = prompt("Hi there, what is your name?");
if (usersName == "") {
    usersName = prompt("Please enter your name!");
//document.write("Hi " + usersName + "welcome to my traveling page!!");
}
console.log(usersName);
document.write("Hi " + usersName + " welcome to my traveling page!!");
return usersName;
}

greetUser();


//function above is done!

let travelQuest = prompt ("Do you like to travel?")
console.log(travelQuest)

if (travelQuest == "Yes") or ("yes")
alert("Great, Let me help you then!");

// New Function begins with a loop

let userQuest;
function userAnswer(){
  let userQuest = prompt("What's your favorite Destination France, Greece or Italy?");
  while(userQuest == ""){
    userQuest= prompt("Please try again");
  }
  console.log(userQuest);
  confirm("Did you say " + userQuest + "?");
  document.write("Perfect, let's check out some interesting things about " + userQuest);
}
userAnswer();

// My loop ended above

let travelQuestion = prompt ("Do you like to travel?")
console.log(travelQuestion)

if (travelQuestion == "Yes") or ("yes")
alert("Great, Let me help you then!");
    

let userQuestion = prompt ("Would you like to know more about Greece, France or even Italy?")
console.log(userQuestion)

if(userQuestion == "Yes") or ("yes")
alert("You are in the right place..")


let lastQuestion = prompt ("I am about to show you the most beautiful destinations. Are you ready?")
console.log(lastQuestion)

if (lastQuestion == "Yes") or ("yes")
alert("You got it!!");

function rateMyPage(){
    let rating = prompt('How much do you like traveling from 1-10');
    console.log(rating);

    for (let i = 0; i < rating; i++){
        console.log(i);
        document.write("<img style='width:100px;' src='istockphoto-1319947943-170667a.jpeg' alt='blow mind pic' />");
    }
   
}






















//console.log (greetUser()); 
//let yourName = greetUser();
//console.log("Your name here:")



















//function customAlert(){
    //if (usersName == "Kassie") {
     // alert("Hi, there");
   // } else if (usersName == "Ben") {
   // alert("Tas are the best");
   // } else if (usersName == "Aaron"){
  //      alert("TAs are the best!");
   // } else if (usersName == "Joey") {
          //  alert("Tas are the best!");
   // } else{ 
         //       alert("Welcome to Class 6, Javascript");
          //  }
        
    

    


// create a rule; inside the parenthesis is parameters
//function addTwoNumbers(ny1, num2){
//return num1 + num2;
//}
// numbers isnide the parenthesis here is arguements
//addTwoNumbers(5, 10);






//__________________________________________________________________________


// loops ifinite loop (baddd.)

// let i = 1;
// while(true){
//     console.log(i);
//     i==;
// }





