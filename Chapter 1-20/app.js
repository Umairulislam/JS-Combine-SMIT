// **************************** Chapter 1 ****************************************** //
// // Task 1
// alert ('Greetings!');

// // Task 2
// alert('Error! Please Enter a valid password.');

// // Task 3
// alert('Welcome to JS land... \r\nHappy Coding');

// // Task 4
// alert('Welcome to JS land... ');

// var check = document.createElement('input');
// check.type = 'checkbox';
// checkbox.id = "id";
// var lable = document.createElement('label');
// lable.htmlFor = 'id';
// lable.appendChild(document.createTextNode('Prevent this page from creating additional dialogs.'))
// var myDiv = document.getElementById('myDiv');
// myDiv.appendChild(check);
// myDiv.appendChild(lable);
// confirm(myDiv) 

// // Task 5
// alert('Hello........I can run Javascript through my web browsers console');

// Task 6 and 7 in index.html





// ******************************** Chapter 2 ***********************//
// // Task 1
// var username = 'Username';

// // Task 2
// var myName = "Umair ul islam";

// // Task 3
// var message = 'Hello world';
// alert(message);

// // Task 4
// var students_name = "Umair ul islam";
// alert(students_name);

// var students_age = "18 years old";
// alert(students_age);

// var course = "Web and Hybrid application development";
// alert(course);

// // Task 5
// var pizza = 'pizza';
// var str = ""
// for(var i = 0; pizza.length > 0; i++){
//     str += pizza;
//     str += "\n";
//     pizza = pizza.slice(0,-1);
// }
// alert(str);

// // Task 6
// var email = "umairulislam09@gmail.com";
// console.log("My email address is"+ " " + email);

// // Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book" + " " + book);

// // Task 8
// document.write("Yah! I can write HTML content through JavaScript");

// // Task 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"; 
// alert(pattern);


// *********************************** Chapter 3 ****************************//

// // Task 1
// var age = 18
// alert("I am " + age + " years old")

// Task 2 krna hai


// // Task 3
// var birth_year = 2001;
// document.write("My birth year is" + " " + birth_year);
// var type = typeof(birth_year);
// document.write("\n Data type of my decleared variable is "+ type);

// //Task 4
// var name = window.prompt("Enter Your Name:");
// var product = window.prompt("Enter The Product You Want to Buy:");
// var quantity = window.prompt("Enter How Many Quantities:");
// document.write(name + " " + "ordered " + quantity + " " +  product + " "+ "on XYZ Clothing store");


// **************************************** Chapter 4 *****************************//

// Task 1
// var var1="value1",var2 = "value2", var3="value3";

// // Task 2
// // **Legal variables **
// var var1 = value;
// var var_1 = value;
// var variableOne = value;
// var variable-one = value;
// var variable = value;

// // **Illeagal variables **
// var 1var = value;
// var vari 1 = value;
// var var = value
// var variable#$$%% = value;
// var print = value;

// // Task 3
// document.write("<h1>Rules for naming JS variables</h1><br>")

// document.write(" Variable names can only contain letter , $ , _  and number<br>")

// document.write(" Variables must begin with a _ , $ , name <br>")

// document.write("Variable names are case sensitive <br>")

// document.write("Variable names should not be JS keywords False <br>")



// **************************************** Chapter 5 *************************//

// // Task 1

// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var sum = num1 + num2;
// document.write("The sum of " + n1 + " and " + n2 + " is " + sum);

// // Task 2

// Subtraction
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var sub = num1 - num2;
// document.write("The subraction of " + n1 + " and " + n2 + " is " + sub);

// Multiply
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var mul = num1 * num2;
// document.write("The product of " + n1 + " and " + n2 + " is " + mul);

// Division
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var div = num1 + num2;
// document.write("The division of " + n1 + " and " + n2 + " is " + div);

// Modulus
// var num1 = prompt("Enter first no:");
// var num2 = prompt("Enter second no:");
// var mod = num1 + num2;
// document.write("The modulus of " + n1 + " and " + n2 + " is " + mod);


// // Task 3
// var variable;
// document.write("<br><br>Value after variable declaration is " + variable);
// variable = 5;
// document.write("<br>Initial value is ", variable++);
// document.write("<br>Value after increment is " + variable);
// document.write("<br>Value after addition is " + (variable+7));
// document.write("<br>Value after decrement is " + --variable);
// document.write("<br>The remainder is " + variable%3)


// // Task 4

// var cost_of_movie_ticket = 600;
// var no_of_tickets = 5;
// document.write("<br><br>Total cost to buy " + no_of_tickets + " tickets to a movie is " + cost_of_movie_ticket + "PKR")


// // Task 5
// var no = prompt("Enter a number:");
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// ************************************* Chapter 6-9 **************************** //

// // Task 1
// var a = prompt("Enter value of a:");
// document.write("<br><br>Result:");
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>............................");
// document.write("<br><br>The value of ++a is: ",++a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a++ is:",a++);
// document.write("<br>The value of a is:",a);
// document.write("<br><br>The value of --a is: ",--a);
// document.write("<br>The value of a is: ",a);
// document.write("<br><br>The value of a-- is: ",a--);
// document.write("<br>The value of a is: ",a);

// // Task 2
// var a = 2, b = 1;
// document.write("<br><br>a is ",a);
// document.write("<br>b is ",b);
// var result = --a - --b + ++b + b--;
// // --a = 1
// // --a - --b = 1
// // --a - --b + ++b = 2
// // --a - --b + ++b + b-- = 3
// document.write("<br>Result is ",result);


// // Task 3

// var name = prompt("Enter your name: ");
// alert("Hello " + name + " Welcome to our site!!!")


// // Task 4

// var no = prompt("Enter a number:");
// if(no === ""){
//     no = 5
// }
// for(var i = 1 ; i<11; i++){
//     document.write("<br>" + no + "   x    " + i + "    =    " + "    " + (no*i))
// }


// // Task 5
////// Table in HTML file //////
// var subs = document.getElementsByClassName("sub");
//     var total_m = document.getElementsByClassName("total");
//     var obtained_m = document.getElementsByClassName("obtained");
//     var percentage = document.getElementsByClassName("percentage")

//     var total_total = document.getElementById("total_total");
//     var total_obtained = document.getElementById("total_obtained");
//     var avg_percent = document.getElementById("avg_percent");

//     var total_list = [];
//     var obtained_list = [];
//     var percent_list = [];

//     for(i = 0; i < subs.length; i++){

//         var subject = prompt("Enter subject name:");
//         subs[i].innerHTML = subject;

//         var total_n = parseInt(prompt("Enter total marks"));
//         total_m[i].innerHTML = total_n;
//         total_list.push(total_n);

//         var obtained_n = parseInt(prompt("Enter Obtained marks"));
//         obtained_m[i].innerHTML = obtained_n;
//         obtained_list.push(obtained_n)

//         var percent = parseFloat((obtained_n/total_n)*100);
//         percentage[i].innerHTML = percent;
//         percent_list.push(percent);
        
//     }
//     // Sum of total, obtained and percentage
//     var sum_total = total_list.reduce(function(a, b){
//         return a + b;
//     }, 0);
//     total_total.innerHTML = sum_total;

//     var sum_obtained = obtained_list.reduce(function(a,b){
//         return a+b;
//     },0);
//     total_obtained.innerHTML = sum_obtained;

//     var sum_percent = percent_list.reduce(function(a,b){
//         return a + b;
//     },0);
//     avg_percent.innerHTML = (sum_percent/(percent_list.length));



// ******************************** Chapter 9-11 ******************************** //

// // Task 1
// var city = prompt("Enter your city name").toUpperCase();
// if(city == "KARACHI"){
//     alert("Welcome to the city of lights")
// }

// // Task 2
// var gender = prompt("Enter your gender").toUpperCase();
// if(gender === 'MALE'){
//     alert('Good Morning Sir');
// }else if(gender === 'FEMALE'){
//     alert("Good Morning Ma'am")
// }

// // Task 3
// var color = prompt("Enter color of traffic signal").toUpperCase();
// if(color === "RED"){
//     alert("Must Stop")
// }else if(color === "YELLOW"){
//     alert("Ready To Move")
// }else if(color === "GREEN"){
//     alert("Move Now")
// }

// // Task 4
// var fuel = prompt("Enter fuel in litre");
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }

// // Task 5
// a
// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// } 

// // b
// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }if(c === 14){
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }

// // e
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// // f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }


// // Task 6
// var sub1 = prompt("Enter marks of sub1");
// var total1 = prompt("Enter total marks of sub1");

// var sub2 = prompt('Enter marks of sub2');
// var total2 = prompt("Enter total marks of sub2");

// var sub3 = prompt("Enter marks of sub3");
// var total3 = prompt("Enter total marks of sub3");

// var obt = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
// var total = parseInt(total1) + parseInt(total2) + parseInt(total3);

// var percentage = (obt/total) * 100;

// document.write("<h1>Mark Sheet</h1><br><br><br>");
// document.write("Obtained Marks = ",obt);
// document.write("<br>Total Marks = ",total);
// document.write("<br>Percentage = ", percentage);

// if (percentage >= 80){
//     document.write("<br>Grade = A one");
//     document.write("<br>Remarks = Excellent")
// }else if(percentage >= 70){
//     document.write("<br>Grade = A");
//     document.write("<br>Remarks = Good")
// }else if(percentage >= 60){
//     document.write("<br>Grade = B");
//     document.write("<br>Remarks = You Need To Improve")
// }else if(percentage < 60){
//     document.write("<br>Grade = Fail");
//     document.write("<br>Remarks = Sorry")
// }

// // Task 7
// var sec_number = 5;
// var user_input_number = prompt("Enter number");
// if (user_input_number === sec_number){
//     alert("Bingo! Correct answer");
// }else if (user_input_number === (sec_number+1)){
//     alert("Close enough to the correct answer")
// }

// // Task 8
// var number = prompt("Enter a number");
// if (number%3 === 0){
//     alert("This number is divisible by 3")
// }

// // Task 9
// var number = prompt("Enter a number");
// if (number%2 === 0){
//     alert('Even')
// }else if(number%2 !== 0){
//     alert('Odd')
// }

// // Task 10
// var temp = prompt("Enter temperature");
// if(temp > 40){
//     alert('It is too hot outside.')
// }else if(temp > 30){
//     alert('The Weather today is Normal.')
// }else if(temp > 20){
//     alert("Today's weather is cool.")
// }else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// // Task 11
// var fno = parseInt(prompt("Enter first no"));
// var lno = parseInt(prompt("Enter  second number"));
// var operator = prompt("Enter operator");
// if(operator === "+"){
//     alert('The sum is ' + (fno + lno));
// }else if(operator === "-"){
//     alert('The sum is ' + (fno - lno));
// }else if(operator === "*"){
//     alert('The sum is ' + (fno * lno));
// }else if(operator === "/"){
//     alert('The sum is ' + (fno/lno));
// }else if(operator === "%"){
//     alert('The sum is ' + (fno%lno));
// }





// ************************************** Chapter 12-13 ******************************//

// // Task 1
// var letter = prompt("Enter a letter");
// if("abcdefghijklmnopqrstuvwxyz".indexOf(letter) > -1){
//     alert("This is lowercase")
// }else if("ABCDEFGHIJKLMNOPQURSTUVWXYZ".indexOf(letter) > -1){
//     alert("This is uppercase")
// }



// // Task 2
// var no1 = parseInt(prompt("Enter 1st number"));
// var no2 = parseInt(prompt("Enter 2nd number"));
// if(no1> no2){
//     alert("1st number is greater");
// }else if(no2 > no1){
//     alert("2nd number is greater");
// }else if(no1 === no2){
//     alert("Both numbers are same");
// }

// // Task 3
// var number = prompt("Enter a number");
// if (number > 0){
//     alert("number is positive")
// }else if(number < 0){
//     alert("number is negative")
// }else if(number === 0){
//     alert("number is equal to zero")
// }

// // Task 4
// var str = prompt("Enter a letter").toLowerCase();
// if("aeiou".indexOf(str)> -1){
//     alert("True")
// }else{
//     alert("False")
// }

// // Task 5
// var pas = "12345";
// var pas1 = prompt("Enter pasword 1");
// if (pas1 === pas){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Pasword")
// }

// // Task 6
// var greeting;
// var hour = 13;
// if(hour < 18){ 
//     greeting = "Good day";
// }
// else{
//      greeting = "Good evening";
// }

// // Task 7
// var time = parseInt(prompt("Enter time in 24hr format"));
// if(time >= 0000 && time < 1200){
//     alert("Good Morning")
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night")
// }





// *********************************** Chapter 14-16 ****************************** //

// // Task 1
// var students_list = new Array();

// // Task 2
// var students_list = new Array();

// // Task 3
// var string_array = ['a' , 'b' , 'c'];

// // Task 4
// var number_array = [1,2,3];

// / Task 5
// var bolean_array = [ true, false, false, true];

// // Task 6
// var mixed_array = ['a', 1, 1.1, true];

// // Task 7
// var degree = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phill', 'Ph.D'];
// for(i = 0; i< degree.length; i++){
    // document.write("<br>",i+1,") ",degree[i]);
// }

// // Task 8
// var name_array = ["Umair ul islam", "Obaid", "Ezan"];
// var score_array = [400,350,450];
// var percent_array = [(400/500)*100, (350/500)*100, (450/500)*100];
// for(i = 0; i < name_array.length; i++){
//     document.write("<br><br>Score of ",name_array[i], " is ", score_array[i] , ". Percentage is: ", percent_array[i]);
// }

// // Task 9
// var color = ['red', 'green', 'blue'];
// document.write("<br>The array before addition");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_first = prompt("Enter color to put in begining");
// document.write("<br>The array after adding color in beginning");
// color.unshift(color_first);
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i])
// }

// var color_last = prompt("Enter color to put in begining");
// color.push(color_first);
// document.write("<br>The array after adding color in end");
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }

// document.write("<br>The array after adding more colors");
// color.unshift("black", 'white', 'pink');
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }


// document.write("<br>The array after deleting first color");
// color.splice(0,1)
// for(i = 0; i < color.length; i++){
//     document.write('<br>',color[i]);
// }




// // Task 10
// var marks = [200,400,100,300];
// document.write("<br>Score of students: ")
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// marks.sort();

// document.write("<br>Ordered Scores of Students: ");
// for(i = 0; i < marks.length; i++){
//     document.write(marks[i] + "  ")
// }

// // Task 11
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// document.write("<br>List of cities: ")
// for(i = 0; i < cities.length; i++){
//     document.write(cities[i] + " ");
// }

// document.write("<br>Selected cities: " ,cities.slice(2,4))

// // Task 12
// var list = ['This',"is",'my','cat'];
// document.write("<br>Array<br>",list);
// document.write("<br>String<br>",list.join(" "));

// // Task 13
// var devices = [];
// devices.unshift('keyboard');
// devices.unshift('mouse');
// devices.unshift('monitor');
// devices.unshift('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }

// // Task 14
// var devices = [];
// devices.push('keyboard');
// devices.push('mouse');
// devices.push('monitor');
// devices.push('printer');

// document.write("<br>Devices");
// document.write("<br>",devices);

// for(i = 0 ; i < devices.length; i++){
//     document.write("<br>Out:<br>",devices[i]);
// }

// // Task 15
// solution at index.html page


// ********************************* Chapter 17-20 ***************************** //
// // Task 1
// var array_0f_array = [[] , [] , [] , []];

// // Task 2
// var array = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];
// document.write("<br>")
// for(i = 0; i < array.length; i++){
//     for(j = 0; j < array[i].length; j++){
//         document.write(array[i][j]," ");
//     }
//     document.write("<br>")
// }

// // Task 3
// for(i = 0; i<11; i++){
//     document.write("<br>",i, "<br>");
// }

// // Task 4
// var number = parseInt(prompt("Enter number for multiplicaiton"));
// var length = parseInt(prompt("Enter length of multiplicaiton table"));

// for(i = 1; i< (length+1);i++){
//     document.write("<br>" + number + "   x    " + i + "    =    " + "    " + (number*i))
// }

// // Task 5
// var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawerry'];
// for(i = 0; i < fruits.length ; i++){
    // document.write(fruits[i], "<br>")
// }
// for(i = 0; i < fruits.length ; i++){
    // document.write("Element at index ", i , " is " , fruits[i] , "<br>");
// }

// // Task 6
// document.write("Counting<br>");
// for(i = 1; i < 16; i++){
//     document.write(i," ")
// }

// document.write("<br>Reverse Counting<br>");
// for(i = 10; i > 0; i--){
//     document.write(i," ");
// }

// document.write("<br>Even<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 === 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Odd<br>");
// for(i = 0; i < 21; i++){
//     if(i%2 !== 0){
//         document.write(i," ")
//     }
// }

// document.write("<br>Series<br>");
// for(i = 0; i < 11; i++){
//     document.write(2*i,"K ")
// }

// // Task 7
// var items = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var order = prompt("Welcome to pre to pro bakery! What do you want to order");
// if(items.indexOf(order) > -1){
//     document.write("<br><br>",order," is available at index", items.indexOf(order), " in our bakery")
// }else{
//     document.write("<br><br>We are sorry ", order, " is not available in our bakery")
// }

// // Task 8
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Largest number: ", num[num.length - 1]);

// // Task 9
// var num = [24, 53, 78, 91, 12];
// document.write("<br>Array items: ", num);
// num.sort();
// document.write("<br>Smallest number: ", num[0]);

// // Task 10
// document.write("<br>")
// for(i = 0; i < 101; i++){
//     if(i%5 === 0){
//         document.write(i,", ")
//     }
// }











