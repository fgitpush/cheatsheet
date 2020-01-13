1. Case sensitive language
2. Single line comments //
3. Multiline comments /*    */
4. variables: var
Example,
var x = 5;
var y = 6;
var z = x + y;
5. Datatypes
A. Strings,
B. Numbers,
C. Booleans
D. Arrays
E. Objects

6. == value comparision and === is value and datatype comparision
7. Undefined: Declared but no value inserted
var carName;
console.log(carName);
8. Redeclare: if declared using var, you can redeclare the variables.
9. ** Exponent
10. % Modulus
11. Shorthands:
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
12. Comparisions:
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
13. &&	logical and
||	logical or
!	logical not
14. Typepof
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
15. Null. Null is an object which has nothing. If you do datatype of null, it will be object.
16. person = null;    // Now value is null, but type is still an object
17. Difference betweeen undifned and null. Undefined and null have same value i.e nothing but have different datatype
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
18. Data structures: 
A. Function
B. Object
19. Variable function:
You can have a function give value to a variable.
var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
The value of x will be 12.
20. Five datatypes:
string
number
boolean
null
undefined
21. Object key-value pairs:
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

firstName	John
lastName	Doe
age	50
eyeColor	blue

22. Different ways to create object:
1. using new
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
2. Create a json object
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

23. var x = person;  // This will not create a copy of person.
24. For loop:
var person = {fname:"John", lname:"Doe", age:25};

for (x in person) {
  txt += person[x];
}
25. Add something to object by '.'
person.nationality = "English";
26. Delete from object:
delete person.age;   // or delete person["age"];
27. Getters and setters
28. There are prototype classes already builtin which you can use
Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
29. Setting default values of functions
function (a=1, b=1) {
  // function code
}
30. Apply: https://www.w3schools.com/js/js_function_apply.asp
31. Closures: Localize global variables with https://www.w3schools.com/js/js_function_closures.asp
32. DOM Manipulation
33. BOM Manipulation
34. JS Ajax
35. JS JSON
Source: https://www.w3schools.com/js/js_window.asp
