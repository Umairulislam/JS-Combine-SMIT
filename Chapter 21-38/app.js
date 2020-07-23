// // CHAPTER # 21-25
// // TASK NO 1
// var first_name = prompt("Enter your First Name: ");
// var last_name = prompt("Enter your Last Name: ");
// var fullName = first_name + " " + last_name;
// document.write("Welcome! " + fullName);


// // TASK NO 2
// var mobile_model = prompt("Enter your favourite mobile phone model: ");
// var length_of_str = mobile_model.length;
// document.write("My favourite phone is: " + mobile_model + "<br>" + "Length of string: " + length_of_str);


// // TASK NO 3
// var a = "Pakistani";
// var index_of_n = a.indexOf("n");
// document.write("String: " + a + "<br>" + "Index of 'n': " + index_of_n);


// // TASK NO 4
// var a = "Hello World";
// var lastIndex_of_l = a.lastIndexOf("l");
// document.write("String: " + a + "<br>" + "Last index of 'l': " + lastIndex_of_l);


// // TASK NO 5
// var a = "Pakistani";
// var character_at_3 =  a.charAt(3);
// document.write("String: " + a + "<br>" + "Character at index 3: " + character_at_3);


// // TASK NO 6
// var first_name = prompt("Enter your First Name: ");
// var last_name = prompt("Enter your Last Name: ");
// var fullName = first_name.concat(" " + last_name);
// document.write("Welcome! " + fullName);


// // TASK NO 7
// var city = "Hyderabad"
// var new_city = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>" + "After replacement: " + new_city);


// // TASK NO 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var new_message = message.replace(/and/g, "&");
// document.write(new_message);


// // TASK NO 9
// var value = "472"
// var new_value = Number(value);
// document.write("Value: " + value + "<br>" + "Type: " + typeof value + "<br>" + "Value: " + new_value + "<br>" + 
// "Type: " + typeof new_value);


// // TASK NO 10
// var a = prompt("Enter a word: ");
// var capitalize_input = a.toUpperCase();
// document.write("User input: " + a + "<br>" + "Upper case: " + capitalize_input);



// // TASK NO 11
// var a = prompt("Enter a word: ");
// var title_input = a.slice(0,1).toUpperCase() + a.slice(1);
// document.write("User input: " + a + "<br>" + "Title case: " + title_input);


// // TASK NO 12
// var num = 35.36;
// var str = num.toString();
// var dot_remove = str.replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + dot_remove);


// // TASK NO 13
// var username = prompt("Enter Username: ");
// var check = false;
// for(var i = 0; i < username.length; i++){
//     if(username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 64){
//         document.write(username.bold());
//         alert("Please Enter valid username");
//         check = true;
//     }
// }
// if(!check){
//     document.write(username.bold());
//     alert("Username is valid");
// }


// // TASK NO 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am: ");
// var check = false;
// for(var i = 0; i < A.length; i++){
//     if(A[i] === search.toLowerCase()){
//         document.write(search + " is available at index " + i + " in our bakery");
//         check = true;
//         break;
//     }
// }
// if(!check){
//     document.write("We are sorry. " + search + " is " + "not available".bold() + " in our bakery")
// }


// // TASK NO 15
// var password= prompt("Enter your password");
// var num= false; var alph= false;
// document.write("<br><br>Entered password: " + password);


// if(password.charCodeAt(0)>= 48 && password.charCodeAt(0)<= 57){
//     document.write("<br>Password cannot begin with a number");
//     document.write("<br>Plz enter a valid password")
// }
// else if(password.length < 6){
//     document.write("<br>Password length cannot be less than 6");
//     document.write("<br>Plz enter a valid password");

// }
// else {
//     for(var i=1 ; i< password.length; i++){
//         if(password.charCodeAt(i)>= 48 && password.charCodeAt(i)<= 57){
//             num= true;
//             break;
//         }
//     }
//     for(var i=1 ; i< password.length; i++){
//         if((password.charCodeAt(i)>= 65 && password.charCodeAt(i)<= 90)||(password.charCodeAt(i)>= 97 && password.charCodeAt(i)<= 122)){

//             alph= true;
//             break;
//         }
//     }
//     if(num && alph){
//         document.write("<br>Valid Password");

//     }
//     else{
//         document.write("<br>Invalid Password");
//     }
// }


// // TASK NO 17
// document.write("<br><br>");
// var university= "University of Karachi";
// var split=university.split(" ");
// for(var i=0; i< split.length; i++){
//     document.write(split[i]+ "<br>");

// }


// // TASK NO 18
// var userInput= prompt("Enter any word to display it's last character");
// var lastChar= userInput.slice(userInput.length-1);
// document.write("<br><br>user input: "+userInput+ "<br>Lasr character of input: "+ lastChar);


// var sentence= "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for(var j=0; j< sentence.length ; j++)
// {
//     if(sentence.slice(j, j+3).toLowerCase() === "the")
//     count++;
// }
// document.write("<br><br>Text: "+ sentence + "<br>There are "+ count + " occurrence(s) of word 'the'");



// // CHAPTER # 26-30
// // TASK NO 1
// var input = +prompt("Enter any positive integer");
// document.write("number:" + input);
// document.write("<br>round off value: " + Math.round(input));
// document.write("<br>floor value: " + Math.floor(input));
// document.write("<br>ceil value: " + Math.ceil(input));


// // TASK NO 2
// var input2 = +prompt("Enter any negative integer");
// document.write("<br><br>number:" + input2);
// document.write("<br>round off value: " + Math.round(input2));
// document.write("<br>floor value: " + Math.floor(input2));
// document.write("<br>ceil value: " + Math.ceil(input2));


// // TASK NO 3
// var abs = +prompt("Enter number to find absolute");
// document.write("<br><br>The absolute value of " + abs + " is " + Math.abs(abs));


// // TASK NO 4
// var dice = Math.random();
// var numbr = (dice * 6) + 1;
// var round = Math.floor(numbr);
// document.write("<br><br> Random number" + round);


// // TASK NO 5
// var coin= Math.random();
// var coinNum= (coin*2)+1;
// var roundCoin= Math.floor(coinNum);
// if(roundCoin==1)
// document.write("<br><br> "+ roundCoin+" <br>Random coin value:Heads" );
// else
// document.write("<br><br> "+ roundCoin+" <br>Random coin value:Tails" );


// // TASK NO 6
// var num = Math.random();
// var hund = (num * 100) + 1;
// var round = Math.floor(hund);
// document.write("<br><br> Random number between 1 and 100:" + round);


// // TASK NO 7
// var weight= prompt("Enter your weight");
// var convert= parseFloat(weight);
// document.write("<br>Your Weight is "+convert+ " kilograms");


// // TASK NO 8
// var secret = Math.random();
// var numbr = (secret * 10) + 1;
// var round = Math.floor(numbr);
// var userInput= +prompt("Enter number");
// if(round== userInput){
//     document.write("<br><br>Congratulations! you enter correct number");

// }
// else{
//     document.write("<br><br>Please try again");
// }



// // CHAPTER # 31-34
// // TASK NO 1
// var current= new Date();
// document.write(current);


// // TASK NO 2
// var months=["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];
// var currentMonth= current.getMonth();
// document.write("<br><br>Current Month: "+ months[currentMonth]);


// // TASK NO 3
// var days=["Sun","Tue","Wed","Thu","Fri","Sat"];
// var currentDay= current.getDay();
// document.write("<br><br>Today is "+ days[currentDay]);


// // TASK NO 4
// var current= new Date();
// var currentDay= current.getDay();
// if(currentDay== 0 || currentDay== 6){
//     document.write("<br><br>Today is fun day");
// }    
// else{ 
//     document.write("<br><br>Today is working day");
// }


// // TASK NO 5
// var current= new Date();
// if(current.getDate() <=15){
//     document.write("<br><br>First fifteen days of the month");
// }
// else {
//     document.write("<br><br>Last days of the month");
// }


// // TASK NO 6
// var current= new Date();
// document.write("<br><br>Current Date: "+ current);
// document.write("<br>Elapsed milliseconds since January 1, 1970: "+ current.getTime());
// document.write("<br>Elapsed minutes since January 1, 1970: "+ (current.getTime()/(1000*60*60)));



// // TASK NO 7
// var current= new Date();
// if(current.getHours < 12){
//     document.write("<br><br>It's AM");
// }
// else 
// document.write("<br><br>It's PM");


// // TASK NO 8
// var later= new Date(2020, 11, 31);
// document.write("<br><br>Later date: " + later);


// // TASK NO 9
// var ramadan= new Date(2015, 5, 18);
// var totalMill= current.getTime()- ramadan.getTime();
// document.write("<br><br>"+(totalMill/(1000*60*60*24)));


// // TASK NO 10
// var start= new Date(2015,0,1);
// var refDate= new Date(2015,11,5,22,16,54);
// document.write("<br><br>On reference date:"+refDate+" "+(refDate.getTime()-start.getTime())+"seconds have passed since beginning of 2015");


// // TASK NO 11
// var current= new Date();
// var ahead= new Date();
// ahead.setHours(current.getHours()-1);
// document.write("<br><br>current date: "+ current +" 1 hour ago, it was "+ ahead);


// // TASK NO 12        
// var back= new Date();
// back.setFullYear(current.getFullYear()-100);
// alert("current date: "+ current +" 100 years back, it was "+ back);


// // TASK NO 13
// var age=+prompt("Enter your age");
// var birth= new Date();
// birth.setFullYear(birth.getFullYear()-age);
// document.write("<br><br>Your age is "+ age+"<br>Your birth year is "+ birth.getFullYear());


// // TASK NO 14
// var customer= prompt("Enter customer name");
// var month=new Date();
// var units= +prompt("Enter number of units");
// var charges= +prompt("Enter charges per unit");
// var surcharge= +prompt("Enter late payment surcharge")

// document.write("<br><br><h1>K-Electric Bill</h1><br><br>Customer Name: <b>"+ customer+ "Customer</b><br>Month: <b>"+ months[month.getMonth()]+"</b><br>Number of units: <b>"+units+"</b><br>Charges per unit: <b>"+charges+"</b><br><br>");
// var amount=netAmount(units,charges);
// var gross= grossAmount(amount,surcharge);
// document.write("<br><br>Net Amount Payabe (within Due Date): <b>"+ amount +"</b><br>Late payment surcharge: <b>"+surcharge+"</b><br>Gross Amount Payable(after Due Date): <b>"+gross+"</b>");
// function netAmount(units, charges){
//     var payable=units*charges;
//     return payable;
    
// }
// function grossAmount(netAmount,surcharge){
//     var gross=netAmount*surcharge;
//     return gross;
// }



// // CHAPTER # 35-38
// // TASK NO 1
// function currentDate(){
//     var func= new Date();
//     document.write("<br><br>"+func);
// }
// currentDate();


// // TASK NO 2
// function greet(){
//     var first= prompt("Enter First name");
//     var last= prompt("Enter Last name");
//     alert("Hello "+ first+ " "+ last);
// }
// greet();


// // TASK NO 3
// var first= +prompt("Enter first number to add");
// var second= +prompt("Enter second number to add");
// var result=add(first,second);
// alert(result);
// function add(first, second){
//     return first+second;
// }


// // TASK NO 4
// var num1=7;
// var num2= 4;
// var operator= "-";
// var ans=calc(num1,num2,operator);
// document.write("<br><br>"+ans);

// function calc(num1,num2,operator){
//     if(operator== "+"){
//         return num1+num2;
//     }
//     else if(operator=="-"){
//         return num1-num2;
//     }
//     else if(operator=="/"){
//         return num1/num2;
//     }
//     else 
//         return "Illegal operator"
// }


// // TASK NO 5
// var sq= 4;
// var sqRes= square(sq);
// document.write("<br><br>Square of "+ sq +"is "+ sqRes);

// function square(sq){
//     return sq*sq;
// }


// // TASK NO 6
// var fact=5;
// var result= factorial(5);
// document.write("<br><br>Factorial of "+fact +"is " + result);

// function factorial(fact){
//     var res=1;
//     for(var i=1; i<=fact; i++){
//         res*=i;
//     }
//     return res;
// }


// // TASK NO 7
// var start= 1;
// var end = 12;
// counting(start,end);
// document.write("<br><br>");
// function counting(start,end){
//     for(var i=start; i<=end; i++){
//         document.write(i+",");
//     }
// }


// // TASK NO 8
// var base= +prompt("Enter base value");
// var perp= +prompt("Enter perpendicular value");
// calculateHypotenuse(base,perp);


// function calculateHypotenuse(base,perp){
//    var b= calculateSquare(base);
//     var p= calculateSquare(perp);
//     var h= b+p;
//     document.write("<br><br>hypotenuse<sup>2</sup>: "+ h);
// }
// function calculateSquare(abc){
//     return abc*abc;
// }


// // TASK NO 9
// area(3,5);
// var a=3; 
// var b=5;
// area(a,b);

// function area(a,b){
//     document.write("<br><br>Area of Rectangle is: "+ a*b)
// }


// // TASK NO 10
// var palin= "madam";
// checkPalindrome(palin);
// function checkPalindrome(palin){
//     var length= palin.length-1;
//     var check=false;
//     for(var i=0 ; i< palin.length/2 ; i++){
//         if(palin.charAt(i)== palin.charAt(length--)){
//             check=true;
//         }
//         else 
//             check=false;
//             break;

//     }
//     if(check){
//         document.write("<br><br>It is a palindrome");
//     }
//     else 
//         document.write("<br><br>Not a palindrome");
           
// }


// // TASK NO 11
// var example= "the quick brown fox";
// upperCase(example);

// function upperCase(example){
//     var newString=example.charAt(0).toUpperCase();;
    
//     for(var i=1; i< example.length; i++){
//         if(example.charAt(i)==" "){
//             newString += " ";
//             newString += example.charAt(i+1).toUpperCase();
//             i++;
//         }
//         else
//             newString += example.charAt(i);
//     }
//     document.write("<br><br>"+ newString);
// }


// // TASK NO 12
// var line="Web Development Tutorial";
// longestWord(line);

// function longestWord(line){
//     var lengthPre=0;
//     var lengthNew=0;
//     var word="";
//     var newWord="";
//     for(var i=0;i< line.length;i++){
        
//         if(line.charAt(i)==" "){
            
//             if(lengthPre< lengthNew)
//             lengthPre=lengthNew;
//             lengthNew=0;
//             newWord=word;
//             word="";
//         }
//         else if(i==--line.length){
//             word+= line.charAt(i);
//             lengthPre=lengthNew;
//             lengthNew=0;
//             newWord=word;
//             word="";
        
//         }
//         else
//             word += line.charAt(i);
//             lengthNew++;
//     }

//     document.write("<br><br>Longest word is "+newWord);
// }


// // TASK NO 13
// var occurence="JSResourceS.com";
// count(occurence,'o');

// function count(occurence,letter){
//     var occur=0;
//     for(var i=0;i< occurence.length;i++){
//         if(occurence.charAt(i).toLowerCase()== 'o'){
//             occur++;
//         }
//     }
//     document.write("<br><br>it occurs "+ occur+ " times")
// }


// // TASK NO 14
// var radius= 4;
// calcCircumference(radius);
// calcArea(radius);

// function calcCircumference(radius){
//     document.write("<br><br>Circumference is "+ (2*3.142*radius));
// }


// function calcArea(radius){
//     document.write("<br><br>Area is "+ (3.142*radius*radius));
// }