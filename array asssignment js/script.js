document.write("<h1 style='text-align:center'> Arrays Assignment </h1>")

// 1. Declare an empty array using JS literal notation to store student names in future.
var emptyArray = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var emptyArrays = new Array();

// 3. Declare and initialize a strings array.
var stringArray = ["taha", "helloworld", "saif"];

// 4. Declare and initialize a numbers array.
var numberArray = [100, 200, 300, 400, 500];

// 5. Declare and initialize a boolean array.
var booleanArray = [true, false];

// 6. Declare and initialize a mixed array.
var mixedArray = ["taha", 100, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];

document.write("<div style='border:1px solid blue'>");
document.write("<h1>Qualifications:</h1>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<h1>" + (i + 1) + ") " + qualifications[i] + "</h1>");
}
document.write("</div>");

// 8. Write a program to store 3 student names in an array. Take another array to store scores of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students.
var studentNames = ["Michael", "John", "Tony"];
var studentMarks = [320, 230, 480];
var totalMarks = 500;

document.write("<div style='border:1px solid blue'>");
for (var i = 0; i < studentNames.length; i++) {
    var percentages = (studentMarks[i] / totalMarks) * 100;
    document.write("<h2>Score of " + studentNames[i] + " is " + studentMarks[i] + ". Percentage: " + percentages.toFixed(0) + "%</h2>");
}
document.write("</div>");

// 9. Initialize an array with color names. Display the array elements in your browser.
var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink'];

document.write("<div style='font-family: Arial, sans-serif; font-size: 16px; color: #333; padding: 5px; margin: 5px 0;'>");
document.write("<h1>Color Names</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// a. Add color to the beginning
var newColor = prompt("What color do you want to add to the beginning?");
if (newColor) {
    colors.unshift(newColor);
}
document.write("<h1>Updated list of Color Names after adding one color to the beginning:</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// b. Add color to the end
newColor = prompt("What color do you want to add to the end?");
if (newColor) {
    colors.push(newColor);
}
document.write("<h1>Updated list of Color Names after adding one color to the end:</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// c. Add two more colors to the beginning
var newColor1 = prompt("Enter the first color you want to add to the beginning:");
var newColor2 = prompt("Enter the second color you want to add to the beginning:");
if (newColor1) {
    colors.unshift(newColor1);
}
if (newColor2) {
    colors.unshift(newColor2);
}
document.write("<h1>Updated list of Color Names after adding two colors to the beginning:</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// d. Delete the first color in the array
colors.shift();
document.write("<h1>Updated list of Color Names after removing the first color:</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// e. Delete the last color in the array
colors.pop();
document.write("<h1>Updated list of Color Names after removing the last color:</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// f. Add a color at a specific index
var index = parseInt(prompt("Enter the index at which you want to add a color:"));
newColor = prompt("Enter the color name you want to add at index " + index + ":");
if (!isNaN(index) && index >= 0 && index <= colors.length && newColor) {
    colors.splice(index, 0, newColor);
} else {
    alert("Invalid index or color!");
}
document.write("<h1>Updated list of Color Names after adding a color at index " + index + ":</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");

// g. Delete color(s) at a specific index
index = parseInt(prompt("Enter the index at which you want to delete color(s):"));
var deleteColorCount = parseInt(prompt("Enter the number of colors you want to delete:"));
if (!isNaN(index) && !isNaN(deleteColorCount) && index >= 0 && index < colors.length && deleteColorCount > 0) {
    colors.splice(index, deleteColorCount);
} else {
    alert("Invalid index or number of colors!");
}
document.write("<h1>Updated list of Color Names after deleting " + deleteColorCount + " color(s) from index " + index + ":</h1>");
document.write("<ul style='list-style-type: none;'>");
for (var i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ul>");
document.write("</div>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
document.write("<div style='border:1px solid blue; padding:10px; width:100%'>");
var studentScores = [320, 230, 480, 120];
document.write("<h1> Score of Students : " + studentScores + "<br>" + "</h1>");

for (var i = 0; i < studentScores.length - 1; i++) {
    for (var j = 0; j < studentScores.length - i - 1; j++) {
        if (studentScores[j] > studentScores[j + 1]) {
            var temp = studentScores[j];
            studentScores[j] = studentScores[j + 1];
            studentScores[j + 1] = temp;
        }
    }
}
document.write("<h1> Ordered Score of Students : " + studentScores + "</h1>");

// Another method of question 10
studentScores.sort((a,b) => a-b);
document.write("<h1> Ordered Score of Students : " + studentScores + "</h1>");


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("<div style='border:1px solid blue; padding:20px; width:100%'>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1> Cities List: " + "<br>" + cities + "</h1>");

var selectedCities = cities.slice(2, 4);
document.write("<h1> Selected Cities List: " + "<br>" + selectedCities + "</h1>");
document.write("</div>");

// 12. Write a program to create a single string from the below mentioned array: var arr = ["This ", " is ", " my ", " cat"]; (Use array’s join method).
document.write("<div style='border:1px solid blue; padding:20px; width:100%'>");
var array = ["This", "is", "my", "cat"];
document.write("<h1>Array: " + "<br>" + array + "</h1>");
var string = array.join(' ');
document.write("<h1> String: " + "<br>" + string + "</h1>");
document.write("</div>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
document.write("<div style='border:1px solid blue; padding:20px; width:350px'>");
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h3> Devices: " + "<br>" + devices + "</h3><br>");

for (var i = 0; i < devices.length; i++) {
    document.write("<h3> Out: " + "<br>" + devices[i] + "</h3>");
}
document.write("</div>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out)

document.write("<div style='border:1px solid blue; padding:20px; width:350px'>");

var reverseDevices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h3> Devices:"+"<br>");
document.write(reverseDevices.join(", ") + "</h3><br>");

for (var i = reverseDevices.length - 1; i >= 0; i--) {
    document.write("<h3> Out: <br>" + reverseDevices[i] + "</h3>");
}

document.write("</div>");



// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony, Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<div style='border:1px solid blue; padding:20px; width:100%'>");
document.write("<label for='manufacturer'>Phone Manufacturers:</label>");
document.write("<select id='manufacturer' name='manufacturer'>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}

document.write("</select>");
document.write("</div>");
