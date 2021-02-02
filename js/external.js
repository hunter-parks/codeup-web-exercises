

console.log ("Hello from External JavaScript");
// here we can welcome them into the website
alert ("Welcome to my Website");
// Here we can communicate within the user inout to make a dynamic message
var YourFavoriteColor = prompt("What is your favortie color? ");
console.log("What is your favorite color " + YourFavoriteColor);
alert("Cool, " + YourFavoriteColor  + " is my favorite color too!");

// Exercise 3 Question 1
// here we can ask how long they're renting and they're total payment
// LM= 3
//BB= 5
//H = 1
pricepermovie = 3
var LM = prompt("how long are you renting the Little Mermaid movie? ");
var BB = prompt( "How long are you renting Brother Bear movie? ");
var H = prompt( "How long are you renting Hercules movie? ");

var totalpay = (LM*pricepermovie)  + (BB* pricepermovie) + (H* pricepermovie);
console.log(totalpay)
alert(("Thank you, your total payment will be $ ") + totalpay);
alert("Thank you for your purchase, Please visit again!");

// Exercise 3 Question 2
// Here we are setting up variables and prompts to ask the User how many hours they work at a certain company and what their total payment would be from all three companies
// Facebook = 10 hours
// Amazon = 4 hours
// Google = 6 hours
Fpays = 350
Apays= 380
Gpays = 400
var Facebook = prompt("How many hours did you work this week at Facebook?");
var Amazon = prompt("How many hours did you work this week at Amazon?");
var Google = prompt("How many hours did you work this week at Google ?");
var Fullpayment = (Facebook* Fpays) + (Amazon* Apays) + (Google* Gpays);
console.log (Fullpayment)
alert("The total payment of every company listed is $ " + Fullpayment);

//Exercise 3 Question 4
var morethan2 = true;
var notexpired = true;
var pr

