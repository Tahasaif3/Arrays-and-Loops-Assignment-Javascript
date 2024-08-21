document.write("<h1 style='text-align:center'> Array and Loops Assignment </h1>")

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multiDimesionalArray1 = [[]];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:
var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
document.write("<div style='border:2px solid black; text-align:center; width:200px; margin:10px auto; padding:20px; font-family:Arial,sans-serif; font-size:24px; background-color:#f9f9f9; align-items:center';>")
for (var i=0; i<matrix.length;i++){
    for (var a=0; a<matrix[i].length;a++) {
        document.write(matrix[i][a] + ' ');
    }
    document.write("<br>")
}
document.write("</div>")

// 3. Write a program to print numeric counting from 1 to 10.

document.write("<div style='border:2px solid blue; text-align:left; width:100px; margin:20px auto; padding:20px; font-family:Arial,sans-serif; font-size:24px; background-color:#f9f9f9'>");
for (var i=1; i<=10;i++){
    document.write(i + "<br>")
}
document.write("</div>");

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

document.write("<div style='border: 2px solid blue; text-align:left;width:390px; margin:10px auto; padding:20px; font-family:Arial, sans-serif;font-size:24px; background-color:#f9f9f9'; align-items: center;'>")
var tableNumber = parseInt(prompt("What number's multiplication table do you want to print?",0));
var tablelength = parseInt(prompt("Enter Length of Multiplication table.",0));
document.write("<h1> Multiplication table of " + tableNumber + " Length " + tablelength + "</h1>")

for (var i=1; i<=tablelength; i++){
   document.write("<h3>" + tableNumber + " x " + i + " = " + tableNumber * i + "<h3>");
}
document.write("</div>");

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”];

document.write("ِ<div style='border:2px solid lightblue; width:350px; margin:10px auto; padding:20px; font-weight:bold; font-family:Arial , sans-serif; font-size:24px;'>")
let fruits = ["apple", "banana", "mango", "orange","strawberry"];
for (var i=0;i<fruits.length;i++){
    document.write(fruits[i] + "<br>");
}
document.write("<br>")
for (var a=0; a<fruits.length;a++){
    document.write("Elements at index " + a + " is " + fruits[a] + "<br>");
}
document.write("</div>");

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("ِ<div style='border:2px solid lightblue; width:400px; margin:10px auto; padding:20px; font-weight:bold; font-family:Arial , sans-serif; font-size:24px;'>")
// a. Counting:
document.write("<h2>Counting: </h2>");
for(var i=1; i<=15; i++){
    document.write(i + (i<15 ?"," :""));
}
document.write("<br>");

// b. Reverse Counting:
document.write("<h2> Reverse Counting: </h2>");
for(var i=10; i>=1; i--){
    document.write(i + (i>1 ?"," :""));
}
document.write("<br>");

// c. Even:
document.write("<h2> Even: </h2>");
for (var i=0; i<=20;i+=2){
    document.write(i + (i < 20 ? "," : ""));
}
document.write("<br>");

// d. Odd:
document.write("<h2> Odd: </h2>");
for (var i=1;i<=20;i+=2){
    document.write(i + (i < 19 ? "," : ""));
};
document.write("<br>");

// e. Series:
document.write("<h2> Series: </h2>");
for (var i=1; i<=10;i++){
    document.write((2 * i) + "k" + (i < 10 ? "," : ""));
}

document.write("</div>");

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

document.write("<div style='border: 1px solid lightblue; width: 400px; margin: 20px auto; padding: 20px; font-family: Arial, sans-serif; text-align: center;'>");
var dishes = ["cake", "apple pie", "cookie", "chips", "patties"];  
var userPrompt = prompt("Welcome to my Bakery, what do you want to order sir/mam:");  
var index = dishes.indexOf(userPrompt.toLowerCase());

if (index !== -1) {  
    document.write("<h1 style='font-size: 24px; margin: 0;'> " + userPrompt + " is available at index " + index + " in our bakery.</h1>");  
} else {  
    document.write("<h1 style='font-size: 24px; margin: 0;'> We are sorry, " + userPrompt + " is not available in our bakery.</h1>");  
};
document.write("</div>");





// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].

document.write("<div style='border: 2px solid lightblue; padding: 20px; text-align: center; background-color: white; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); border-radius: 10px; width: 450px; margin: 0 auto;'>");  
var number = [24, 53, 78, 91, 12];  
var largest = 0;  

document.write("<h1>Array items: " + number + "</h1>");

for (var i = 0; i < number.length; i++) {  
    if (number[i] > largest) {  
        largest = number[i];  
    }  
}  
document.write("<br>");  
document.write("<h1>The Largest number is: " + largest + "</h1>");  
document.write("</div>");


// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

document.write("<div style='border: 2px solid lightblue; padding: 20px; text-align: center; background-color: white; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); border-radius: 10px; width: 450px; margin: 0 auto;'>");  
var number = [24, 53, 78, 91, 12];  
var smallest = number[0];

document.write("<h1>Array items: " + number + "</h1>");

for (var i = 1; i < number.length; i++) {  
    if (number[i] < smallest) {  
        smallest = number[i];  
    }  
}  
document.write("<br>");  
document.write("<h1>The Smallest number is: " + smallest + "</h1>");  
document.write("</div>");


// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.

document.write("<div style='border: 2px solid lightgreen; padding: 20px; text-align: center; background-color: white; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); border-radius: 10px; width: 450px; margin: 0 auto;'>");  

document.write("<h1>Multiples of 5 from 1 to 100:</h1><h2>");  

for (var i = 5; i <= 100; i += 5) {  
    document.write(i + (i < 100 ? ", " : ""));
};

document.write("</h2></div>");