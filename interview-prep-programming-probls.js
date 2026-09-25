/**********************************************************************************/
// function minRooms(intervals){
//     // console.log('intervals', intervals);
//     // console.log('intervals[0][0]',intervals[0][0]);
//     // console.log('intervals[0][1]',intervals[0][1]);
//     if (intervals.length < 2) return intervals.length;
//     intervals.sort((a,b) => {
//         // console.log('a', a);
//         // console.log('b', b);
//         return a[0] - b[0];
//     });
//     console.log('intervals after sort', intervals);
//     console.log('intervals[0][1]',intervals[0][1]); 
//     let roomTime = [intervals[0][1]];
//     console.log('roomTime', roomTime);


//     for (let i = 1; i < intervals.length; i++){
//         let [start, end] = [...intervals[i]];
//         console.log('start',start);
//         console.log('end',end);
//         let earliest = Math.min(...roomTime);

//         if (start < earliest){
//         roomTime.push(end);
//         }else{
//         roomTime[roomTime.indexOf(earliest)] = end;
//         }
//     }
//     return roomTime.length;
// }

// let intervals = [[0,30],[1,5],[2,3],[7,10],[5,6]];
// console.log('intervals berore sort', intervals);
// console.log("Room needed", minRooms(intervals));

/**********************************************************************************/

//     },
//     {
//         id: 'html',
//         dependencies: ['javascript', 'oo']
//     }
// ];

// var depArr = [];   

// function findDep(className, classes)  {
//     for (var i = 0; i < classes.length; i++ ){
//         if (classes[i].id == className){
//             if (classes[i].dependencies.length == 0){
//                 if (!(depArr.includes(classes[i].id)))
//                     depArr.push(classes[i].id);
//             }
//             else{
//                 for (var j = 0; j < classes[i].dependencies.length; j++) {
//                     if (!(depArr.includes(classes[i].dependencies[j])))
//                         depArr.push(classes[i].dependencies[j]);
//                     findDep(classes[i].dependencies[j], classes);
//                 }
//             }
//         }
//     }
// }

// var classToTake = "oo";
// findDep(classToTake, classes)
// console.log(`Dependencies for ${classToTake}: `, depArr);


/**********************************************************************************/

// let courses = [
//     {
//         id:50,
//         course: "Algebra"
//     },
//     {
//         id: 51,
//         course: "Math" 
//     }, 
//     {
//         id:50,
//         course: "History"
//     },
//     {
//         id: 52,
//         course: "Biology"
//     },
//     {
//         id: 50,
//         course: "Chemestry"
//     }
// 
// ];

// input coureses
// output
// [
//      {
//          id:50,
//          courses: ["Algebra", "History", "Chemestry"]
//      }
//
// ]

/**********************************************************************************/

// var test = "I am outside";

// function logIn(){
//     var test = "I am inside";
//     console.log(test);
//     // var test = "I am inside";
// }

// logIn();


/**********************************************************************************/
// var a = [
//     {divisor: 1, dividen: 2}, 
//     {divisor: 2, dividen: 1}, 
//     {divisor: 3, dividen: 4},
//     {divisor: 4, dividen: 3}, 
//     {divisor: 5, dividen: 6},
//     {divisor: 6, dividen: 5},
//     {divisor: 7, dividen: 8},
//     {divisor: 8, dividen: 7},
//     {divisor: 3, dividen: 1}, 
//     {divisor: 5, dividen: 1}
// ];

// function countReciprocal(a){
//     var match = 0;
//     for (var k = 0; k < a.length; k++) {
//         var currentEl = k; // it grabs the k-th element
//         for (var i = k + 1; i < a.length; i++){
//             if (a[currentEl].divisor == a[i].dividen && a[currentEl].dividen == a[i].divisor)
//                 match++;
//         }
//     }
//     return match;
// }

// console.log("countReciprocal", countReciprocal(a));

/***************************************** Practice 6 *****************************************/
//rite a function that will loop through a list of integers and print the index of each element after a 3 second delay.

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function 
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }


// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   // using the ES6 let syntax, it creates a new binding every single time the function is called
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

/***************************************** Practice 7 *****************************************/

//How does this works?
// var fullname = 'John Doe';
// var obj = {
//    fullname: 'Colin Ihrig',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test);

// console.log(test.call(obj.prop));

/***************************************** Practice 8 *****************************************/
// OBJECT CREATION
// The Factory Pattern 
// function createPerson(name, age, job){
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log(this.name);
//     };
//     return o;
// }

// var person1 = createPerson('Nicholoas', 29, 'Software Engineer');
// person1.sayName();
//////////////////////////
// function gizmo(id){
//     return {
//         id: id,
//         toString: function(){
//             return "gizmo: " + this.id;
//         }
//     };
// }

// function hoozit(id) {
//     var that = gizmo(id);
//     that.test = function (testid){
//         return testeid === this.id;
//     };
//     return that;
// }

// var newGizmo = gizmo(1);
// console.log(newGizmo.toString());
// console.log(newGizmo);
// var newHoozit = hoozit(2);
// console.log(newHoozit.toString());
// console.log(newHoozit);


// /////////
// function identity(x){
//     return x
// }

// function add(a,b){
//     return a + b;
// }
// function mul(a,b) {
//     return a*b;
//}
// function identity(x){
//     return function (){
//         return x
//     }
// }

// function addf(x){
//     return function (y){
//         return x + y;
//     }
// }
// console.log(addf(2)(4))

// function applyf(binary){
//     return function (x){
//         return function (y){
//             return binary(x,y);
//         }
//     }
// }
// addf = applyf(add);
// addf(3)(4);
// console.log(applyf(mul)(5)(6));




/***************************************** Practice 9 *****************************************/

// const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {

//   setTimeout(function() {

//     console.log(`Index is ${i}. Value is ${arr[i]}`);

//   }, 0);

// }

/***************************************** Practice 10 *****************************************/

// var var1 = "I am var1 on global";
// var obj = {
//     var1: "I am var1 inside obj",
//     displayVar1: function(){
//         setTimeout(function(){
//             return this.var1;
//         },1000);
//     }
// }

// console.log("var1", obj.var1);

/***************************************** Practice 11 *****************************************/

// function baz(){
//     // call-stack is: 'baz'
//     // so, our call-site is in the global scope
//     console.log('baz');
//     bar(); // <-- call-site for 'bar'
// }
// function bar(){
//     // call-stack is : 'baz' -> 'bar'
//     // so, our call-site is in 'baz'
//     console.log('bar');
//     foo(); // <-- call-site for 'foo'
// }
// function foo(){
//     // call-stack is: 'baz' -> 'bar' -> 'foo'
//     // so, our call-site is in 'bar'
//     console.log('foo');
// }
// baz(); // <-- call-site for 'baz'

/***************************************** Practice 12 *****************************************/

//function calling another function
// function wrap(execute){
//      try{
//         execute();
//     }  catch (e){
//         console.log(e.name + ': ' + e.message);
//     }
// }
// 
// var errorExec = wrap(function(){
//     throw new Error('Error Fermin');
// });
// errorExec;
// 
// var resultExec = wrap(function(){
//     return 'Result'
// });
// 
// console.log(errorExec && errorExec());      // null
// console.log(errorExec && resultExec());     // "Resut"
//
// console.log(typeof throw new Error('Error'));

/***************************************** Practice 13 *****************************************/

// compressing strings
// aaa: a3
// aabbbcc: a2b3c2
// aaccbb: a2c2b2
/*
let strInput = "aaccbaaa";

function count(strInput){
var hasArr ={};
    for (let i = 0; i < strInput.length; i++){
        if (hasArr[strInput[i]] == null){
            hasArr[strInput[i]] = 1;
        }else{ 
            hasArr[strInput[i]] += 1;
        }
        // console.log(strInput);
    }

    let keysArr = Object.keys(hasArr);
    let valsArr = Object.values(hasArr);
    var output = "";
    for (let i = 0; i < keysArr.length; i++){
        output += keysArr[i] + valsArr[i];
    }

    console.log(output)
}

count(strInput);
*/

/***************************************** Practice 14 *****************************************/

/*
let str = 'aaaaabbbbbcccccaaaaa';
let compressBad = (str) => {
    let compressedString = '';
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++){
        countConsecutive++;
        // If next character is diffrent than current, append this char to result 
        if (i+1 >= str.length || str[i] != str[i + 1]){
            compressedString += '' + str[i] + countConsecutive;
            countConsecutive = 0;
        }
    }
    return compressedString.length <  str.length ? compressedString : str;
}
console.log(compressBad(str));
*/

/***************************************** Practice 15 *****************************************/

// let str = 'aaaaabbbbbcccc';


// const h = {}    // h[a] = 5
//                 // h[b] = 5

// for (let i = 0; i < str.length; i++){
//     if(h[str[i]] === undefined){
//         h[str[i]] = 1
//     }else {
//         h[str[i]] += 1
//     }
// }

// let result= '';
// for (let key in h){
//     result += `${key}${h[key]}`
// }

// console.log('result =>', result)

// let compressedString = '';
// let compress = (str) => {
//     let repeatCount = 0
//     for(let i  = 0; i < str.length; i++) {
//         repeatCount++;
    
//         if (str[i] != str[i+1] || i + 1 >= str.length){
//             compressedString += str[i]+repeatCount;
//             repeatCount = 0;
//         }
    
//     }
//     return compressedString.length >= str.length ? str : compressedString;

// }
// console.log(compress(str));

/***************************************** Practice 16 *****************************************/

/* 
 * Your previous Ruby content is preserved below:
 *
 *
 * # Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
 *  
 *  # Example 1: Here
 *  # Input: arr = [1,2,2,1,1,3] 
 *  # Output: true
 *  # Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 *
 *  # Example 2: 
 *  # Input: arr = [1,2] -> 1-1, 2-1 (false because #occurences are repeating)
 *  # Output: false
 *
 *  # Example 3:
 *  # Input: arr = [-3,0,1,-3,1,1,1,-3,10,0],-> -3-3, 0-2, 1-4, 10-1, true
 *  # Output: true
 *
 *  # arr = [1,1,1,1]
 *  # arr = [1,1,1,1, 2,2,2,2] 
 *
 *  # a 
 *
 *  # a = [1,2,2,1,1,3]
 *  # h = {}
 *
 *  # a.each { |i|
 *  #   if h[i].nil?
 *  #     h[i]= 1
 *  #   else
 *  #     h[i] = h[i] + 1
 *  #   end
 *  # }
 *   */
// let arr = ['a','a', 'a', 'b', 'b',  'c', ];

// let arr = ['a','b','c'];
// console.log(arr);
// let h = {};
// for (let i = 0; i < arr.length; i++){
//     if (h[arr[i]] == null){
//         h[arr[i]] = 1;
//     }else{
//         h[arr[i]] += 1;
//     }
// }

// console.log(h);
// let temp = {}

// let trueOrFalseFunc = (h) =>{
//     for (let i in h){
//         if (temp[h[i]] == null){
//             temp[h[i]] = 1; 
//         }else{
//             temp[h[i]] += 1;
//         }

//     }
// console.log(temp);
//     for (let i in temp){
//         if (temp[i] > 1) {
//             return false
//         }
//     }
//     return true
// }
// console.log(trueOrFalseFunc(h));
/***************************************** Practice 17 *****************************************/
// remove duplicates

// let  str = '1223345'
// let occurance = {}; // occurance[1] = 1
//                     // occurance[2] = 2
//                     // occurance[3] = 2
//                     // occurance[4] = 1

// for (let i = 0; i < str.length; i++){
//     console.log('occurance[str[i]]', occurance[str[i]])
//     if(occurance[str[i]] == undefined){
//         occurance[str[i]] = 1;
//     }else{
//         occurance[str[i]] += 1;
//     }
// }
// console.log('str =>', str)
// console.log('occurance =>', occurance)
// let result = '';
// for(let i in occurance){
//     if(occurance[i] > 1){
//         result += i;
//     }
// }
// console.log('result', result)

// let arr = ['a', 'b', 'c']
// let obj = {a:1, b:2, c:3 }
// // for(let key in obj){ //iterates over the keys
// // // for(let key in arr){ //iterates over the keys
// //     console.log(key, '=>', obj[key])
// //     // console.log(key, '=>', arr[key])
// // }


// for(let value of obj){ //iterates over the values
// // for(let value of arr){ //iterates over the keys
//     console.log(value)
//     // console.log(value)
// }    

/***************************************** Practice 17 *****************************************/
/***************************************** Practice 17 *****************************************/
// Parenthesis Matching
// input:
// arr = ["(){}[]", "{}()[]"]

// output:
// arr = ["YES", "NO"]

// function arrayOfValues(arrayOfBraces){
//     let returnAr = [];
//     arrayOfBraces.forEach( str => {
//         let isBalancedParenthesis = (str) => {
//             return !str.split('').reduce((uptoPrevChar, thisChar) => {
//                 if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
//                     return ++uptoPrevChar;
//                 } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
//                     return --uptoPrevChar;
//                 }
//                 return uptoPrevChar;
//             }, 0);
//         }
//         console.log(isBalancedParenthesis);
//         if (isBalancedParenthesis(str)){
//             returnAr.push('YES');
//         }else{
//             returnAr.push('NO');
//         }
//     });
//     return returnAr;
// }
// 
// let ar = ['(){}[]', '(){}['];
// console.log(arrayOfValues(ar));

/***************************************** Practice 18 *****************************************/
// <?php
// function isValid($coordinates){
//     $ar = [];
//     foreach ($coordinates as $coordinate){
//         $coordinate = explode(",", $coordinate);
// 
//         $latitude = str_replace('(', '', $coordinate[0]);
// 
//         $longitude = str_replace(')', '', trim($coordinate[1]) );
// 
// 
//         $latitude_regx = '/^(\+|-)?(?:90(?:(?:\.0{1,8})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,8})?))$/';
// 
//         $longitude_regx = '/^(\+|-)?(?:180(?:(?:\.0{1,8})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,8})?))$/';
// 
//         if (preg_match($latitude_regx, $latitude)) {
//             if (preg_match($longitude_regx, $longitude)) {

/***************************************** Practice 19 *****************************************/

// let wait = (time) => new Promise(function(resolves, rejects){
//     setTimeout(resolves("resolved"), time);
// });

// wait(1000).then((m)=>console.log(m));

/***************************************** Practice 20 *****************************************/

// Time T|Robo|Scientists
// ravel!|ts T| Discovere
//       |ook |d Portal t
//       |Over|o Mars    
//       | Cit|          
//       |y   |          

// const newsTitles = [
//     "Time Travel!",
//    "Robots Took Over City",
//     "Scientists Discovered Portal to Mars"
// ]

// const widths = [3, 4];

// // Step 1: Slice each title into chunks based on width
// const chunks = titles.map((title, i) => {
//   const chunked = [];
//   for (let j = 0; j < title.length; j += widths[i]) {
//     chunked.push(title.slice(j, j + widths[i]));
//   }
//   return chunked;
// });

// // Step 2: Find the max number of rows
// const arrLength = chunks.map(arr => arr.length)
// const maxRows = Math.max(...arrLength);

// // Step 3: Print row by row
// for (let row = 0; row < maxRows; row++) {
//   let line = '';
//   for (let col = 0; col < chunks.length; col++) {
//     line += (chunks[col][row] || '').padEnd(widths[col], ' ') + '|';
//   }
//   console.log(line);
// }

/*******************************************************************************************************************************************/

// function reverseString(str){
//     let reversedStr = '';
//     for (let char of str){
//         console.log(reversedStr)
//         reversedStr = char + reversedStr;
//     }
//     return reversedStr;
// }
// console.log(
//     `reverseString('fermin') =>`,
//     reverseString('fermin')
// )


/*******************************************************************************************************************************************/
//A shallow copy in JavaScript is a copy of an object where only the top-level properties are duplicated. 
// If the original object contains nested objects, the shallow copy will reference the same nested objects, 
// not clone them. This means changes to nested objects in the copy will also affect the original.

// const original = {
//     name: 'Fermin',
//     address: {
//       city: 'San Jose'
//     }
//   };
  
//   const shallowCopy = { ...original };
  
//   shallowCopy.name = 'Ortega';              // OK - changes only the copy
//   shallowCopy.address.city = 'Milpitas';    // ⚠️ changes *both*!
  

//   console.log(original.name); // Fermin - because it's the same object reference
//   console.log(shallowCopy.name)

//   console.log(original.address.city); // Milpitas - because it's the same object reference
//   console.log(shallowCopy.address.city); // Milpitas

// function generateFibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
// }

// console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*******************************************************************************************************************************************/

// function modifiedFibonacci(t1, t2, n) {
//     let sequence = [t1, t2];

//     for (let i = 2; i < n; i++) {
//         const nextValue = sequence[i - 2] + Math.pow(sequence[i - 1], 2);
//         sequence.push(nextValue);
//     }
//     return sequence;
// }

// console.log(modifiedFibonacci(0, 1, 5)); // [0, 1, 1, 2, 5]

/*******************************************************************************************************************************************/

// function isPalindrome(str) {    
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

/*******************************************************************************************************************************************/

// function factorial(n) {
//     if (n < 0) return undefined; // Factorial is not defined for negative numbers
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120

/*******************************************************************************************************************************************/

// function findMissingRanges(nums, lower, upper) {
//     const result = [];
//     let prev = lower - 1;
  
//     for (let i = 0; i <= nums.length; i++) {
//       const curr = i < nums.length ? nums[i] : upper + 1;
//       if (curr - prev >= 2) {
//         result.push(formatRange(prev + 1, curr - 1));
//       }
//       prev = curr;
//     }
  
//     return result;
//   }
  
//   function formatRange(start, end) {
//     return start === end ? `${start}` : `${start}->${end}`;
//   }
  
//   // Example usage:
//   const nums = [0, 1, 3, 50, 75];
//   console.log(findMissingRanges(nums, 0, 99));
//   //['2', '4->49', '51->74', '76->99']

/*******************************************************************************************************************************************/

// function getSecondLargest(arr) {
//     let first = -Infinity, second = -Infinity;

//     for (let current of arr) {
//         if (current > first) {
//             // Shift down the values
//             second = first;
//             first = current;
//         } else if (current > second && current < first) {
//             second = current;
//         } 
//     }

//     // If third remains -Infinity, it means there aren't enough distinct elements
//     return second === -Infinity ? -1 : second;
// }

// const arr = [12, 20, 35, 35, 1, 10, 33, 1];
// console.log(getSecondLargest(arr));

/*******************************************************************************************************************************************/

// function getThirdLargest(arr) {
//     let first = -Infinity, second = Infinity, third = -Infinity;

//     for (let current of arr) {
//         if (current > first) {
//             // Shift down the values
//             third = second;
//             second = first;
//             first = current;
//         } else if (current > second && current < first) {
//             // Update second and third
//             third = second;
//             second = current;
//         } else if (current > third && current < second) {
//             // Update third
//             third = current;
//         }
//     }

//     // If third remains -Infinity, it means there aren't enough distinct elements
//     return third === -Infinity ? -1 : third;
// }
// const arr2 = [12,35 ,35,35, 1, 10, 33, 1];
// console.log(getThirdLargest(arr2));

/*******************************************************************************************************************************************/
 
// in an query array of strings, find the number of times the strings in the query array are present in the names array.
// the query string cannot match the names string. 
// for example:
// names = ['jackson', 'jacques', 'jack']
// query = ['jack']
// the output should be array [1] because 'jackson' start with 'jack'. But 'jack' cannot match the entire string 'jack'.
// function findCompletePrefixes(names, query) {
//     let arr = [];
//     let counter = 0;

//     for (let i = 0; i < query.length; i++) {
//         for (let j = 0; j < names.length; j++) {
//             if (names[j].startsWith(query[i] ) && query[i] !== names[j]) {
//                 counter++;
//             }
//         }
//         arr.push(counter);
//         counter = 0;
//     }
//     return arr;
// }
// let names =['jackson', 'jacques', 'jack', 'fermin', 'fernando'];
// let query = ['jack', 'fer'];

// console.log(findCompletePrefixes(names, query)); // Output: "jack"

/*******************************************************************************************************************************************/

// const people = [
//     { name: 'cohn', age: 25 },
//     { name: 'aane', age: 30 },
//     { name: 'back', age: 35 },
//     { name: 'zzzz', age: 1 }
// ];

// people.sort((a, b) => {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
    
//     if (nameA > nameB) return 1;
//     if (nameA < nameB) return -1;
//     return 0;
// });
// console.log(people);

/*******************************************************************************************************************************************/

// const employees = [
//   { id: 3, name: "Seven", department: { name: "vehicle" }},
//   { id: 1, name: "Andrew", department: { name: "energy" } },
//   { id: 2, name: "Lucas", department: { name: "energy" } },
//   { id: 1, name: "Andrew", department: { name: "energy" } },
// ];



// const unique = {};
// for (const emp of employees) {
//   unique[emp.id] = emp; // This will overwrite duplicates
// }
// console.log(unique);
// const result = Object.values(unique);

// console.log(result);


/*******************************************************************************************************************************************/
// for in
// Iterates over the keys
// Works for both objects && arrays
// const arr = ['a', 'b', 'c']
// for(let key in arr){
// 	console.log(key, '=>', arr[key]) 
// 	// 0 => a
// 	// 1 => b
// 	// 3 => c
// }

// const obj = {a:1, b:2, c:3}
// for(let key in obj){
// 	console.log(key, '=>', obj[key]) 
// 	// a => 1
// 	// b => 2
// 	// c => 3
// }

// const arr = ['a', 'b', 'c']
// console.log('keys =>', Object.keys(arr));
// console.log('values =>', Object.values(arr));
// console.log('entries =>', Object.entries(arr));
// for (let [key, value] of Object.entries(arr)) {
//   console.log(key, '=>', value);
//   // 0 => a
//   // 1 => b
//   // 2 => c
// }
// for(let value of arr){
// 	console.log(value)
// 	// a
// 	// b
// 	// c
// }

// const obj = {a:1, b:2, c:3};
// console.log('keys =>', Object.keys(obj));
// console.log('values =>', Object.values(obj));
// console.log('entries =>', Object.entries(obj));
// for (let [key, values] of Object.entries(obj) ){
//   console.log(key, '=>', values);
// }

// const obj = {a:1, b:2, c:3}
// for(let [key, value] of Object.entries(obj)){
// 	console.log(key, '=>', value)
// }


/*******************************************************************************************************************************************/
// Given an arr[] consisting of only 0s and 1s, the task is to find the maximum number of consecutive 1s or 0s in the array.

// function maxConsecutiveCount(arr){
//     let maxCount =0, count =1;

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] === arr[i-1]){
//             count++;
//         }else{
//             maxCount = Math.max(maxCount, count);
//             count = 1;
//         }
//     }
//     maxCount = Math.max(maxCount, count);
//     return maxCount;
// }

/*******************************************************************************************************************************************/

// Given an integer Array, find a maximum product of a triplet in the array. 

// example: arr[] = [10, 3, 5, 6, 20]
// output : 1200
// explanation: Muiltiplication of 10, 6 and 20 gives the maximum product which is 1200.

// function maxProductTriplet(arr) {
//     let n = arr.length;

//     if (n < 3) return null; // Not enough elements for a triplet

//     let maxProduct = -Infinity;

//     for (let i = 0; i < n - 2; i++) {
//         for (let j = i + 1; j < n - 1; j++) {
//             for (let k = j + 1; k < n; k++) {
//                 let product = arr[i] * arr[j] * arr[k];
//                 maxProduct = Math.max(maxProduct, product);
//             }
//         }
//     }
//     return maxProduct;
// }


/*******************************************************************************************************************************************/

// A subarray is a contiguous segment of an array. Given an array of integers, 
// determine the sum of all elments across all subarrays of that array. 
// Example a three element array [4,5,6] can be made into the following subarrays:

// 1. element subarrays: [4], [5], [6]
// 2  element subarrays: [4,5], [5,6]
// // 3 element subarray: [4,5,6]
// // The sum of all elements across all subarrays is 4 + 5 + 6 + (4 + 5) + (5 + 6) + (4 + 5 + 6) = 4 + 5 + 6 + 9 + 11 + 15 = 50

/*******************************************************************************************************************************************/
// remove duplicates from an Array
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
console.log(
    'new Set(arr)',
    new Set(arr)
)
console.log(uniqueArr); // [1, 2, 3, 4, 5]

/*******************************************************************************************************************************************/
// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 6];
// let uniqueArr = {};
// for (let i = 0; i < arr.length; i++) {
//     if (uniqueArr[arr[i]] === undefined) {
//         uniqueArr[arr[i]] = 1;
//     } else {
//         uniqueArr[arr[i]] += 1;
//     }
// }
// // console.log(uniqueArr); // { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2 }
// // unique[6] = 1

// for (let key in uniqueArr){
//     if (uniqueArr[key] <= 1) {
//         console.log(`Element ${key} occurs ${uniqueArr[key]} times`);
//     }
// }


/*******************************************************************************************************************************************/


// let arr = [1, 2, 3, 4, 5, 1, 2, 3];
// let uniqueSet = [...new Set(arr)];
// console.log(uniqueSet); // [1, 2, 3, 4, 5]
// let uniqueArr2 = Array.from(uniqueSet); 

/*******************************************************************************************************************************************/
// let arr = [
//     {
//         id: 1,
//         name: 'Fermin',
//         age: 30
//     },
//     {
//         id: 1,
//         name: 'Fermin',
//         age: 30
//     },
//     {
//         id: 3,
//         name: 'Ortega',
//         age: 25
//     },
//     {
//         id: 4,
//         name: 'John',
//         age: 35
//     }
// ]

// let unique = {};
// for (let i = 0; i < arr.length; i++) {
//     unique[arr[i].id] = arr[i];
// }

// let values = Object.values(unique)
// console.log(values); 
 

/*******************************************************************************************************************************************/

// let arr = [1, 2, 3, 4, 5];

// function reverser(arr, k) {
//     for (let i = 0; i < arr.length; i += k) {
//         let left = i;
//         let right = Math.min(i + k - 1, arr.length - 1);

//         while (left < right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//         console.log(arr);
//     }
//     // return arr;
// }
// console.log(reverser(arr, 3)); // [3, 2, 1, 6, 5, 4, 9, 8, 7, 10]

/*******************************************************************************************************************************************/

//     if (arr[i] % 2 !== 0) {
// function maxConsecutiveCount(arr) {
//     let maxCount = 0, count = 0, prev = -1;

//     for (let num of arr) {
//         // If the current number is the same as the previous number
//         if ((prev ^ num) === 0) {
//             count++;
//         } else {
//             // Update maxCount and reset count
//             maxCount = Math.max(maxCount, count);
//             count = 1;
//         }
//         prev = num;
//     }

//     return Math.max(maxCount, count)
/*******************************************************************************************************************************************/


// Write a function to convert a string to number without using any bult-in functions like parseInt or Number.
// for example '153' should return 153, and '0' should return 0.

// function stringToNumber(str) {
//     let num = 0;
//     for (let char of str ) {
//         let number = char.charCodeAt(0) - '0'.charCodeAt(0);
//         console.log('number =>', number)
//         num = num * 10 + number; // Shift the previous number by one digit to the left and add the new digit
//     }
//     return num;
// }
// console.log(stringToNumber('153')); // 153

/*******************************************************************************************************************************************/
// Write a function that takes a string and returns the sum of the alphanumeric characters in the string.
// For example, the string 'hello123' should return 58, because h=8, e=5, l=12, o=15, 1=1, 2=2, 3=3, so 8+5+12+12+15+1+2+3 = 58. Use charCodeAt

// Note: The function should ignore any non-alphanumeric characters
// console.log('a'.charCodeAt(0)); // 97
// console.log('b'.charCodeAt(0)); // 98

// function alphaNumSum(str) {
//     let sum = 0;
//     for (let char of str) {
//         if (char >= 'a' || char <= 'z') {
//             sum += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // 'a' = 1, 'b' = 2, ..., 'z' = 26
//         } else if (char >= '0' && char <= '9') {
//             sum += char.charCodeAt(0) - '0'.charCodeAt(0); // '0' = 0, '1' = 1, ..., '9' = 9
//         }
//     }
//     return sum;
// }
// console.log(
//     `alphaNumSum('hello123')`,
//     alphaNumSum('hello123'),

// ); // 58


// console.log(alphaNumSum('hello123')); // { a: 1, b: 2, c: 3 } 
//8+5+12+12+15+1+2+3 = 58

/*******************************************************************************************************************************************/

// function rotateArrRight(arr){ //right rotate
//     let n = arr.length;
//     let last = arr[n - 1];
//     for (let i = n - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = last;
//     return arr;
// }
// console.log(
//     `rotateArrRight([1, 2, 3, 4, 5])`,
//     rotateArrRight([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]

/*******************************************************************************************************************************************/
// function rotateArrLeft(arr){ //left rotate
//     let n = arr.length;
//     let first = arr[0];
//     for (let i = 0; i < n - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[n - 1] = first;
//     return arr;
// }


/*******************************************************************************************************************************************/
// Given an array of integers, find the next greater element for each element in the array.
// The next greater element for an element x is the first greater element on the right side of x in the array.
// If there is no greater element on the right side of x, then the next greater element for x is -1.
// For example, if the input array is [4, 5, 2, 25], then the output should be [5, 25, 25, -1].
// The time complexity of the solution should be O(n).


// function nextGreaterElements(arr) {
//   let result = new Array(arr.length).fill(-1);
//   let stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     // While stack is not empty and current element is greater
//     while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
//       let index = stack.pop();
//       result[index] = arr[i];
//     }
//     stack.push(i);
//   }

//   return result;


// }
// // Example usage:
// let arr = [4, 5, 2, 25];
// console.log(nextGreaterElements(arr)); // [5, 25, 25, -1]


/*******************************************************************************************************************************************/

// /*
// Implement a mock of cd (change directory) command on Unix. 
// The code doesn't have to change actual directories, just return the new path after cd was executed.


// The function takes two arguments (current working directory and directory to change to), and returns 
// the output directory as if cd command was executed. There's no filesystem underneath; all paths are valid.

// Example table of inputs and outputs:

// | cwd      | cd (arg)       | output
// | -------- | -------------- | ------
// | /        | foo            | /foo
// | /baz     | /bar           | /bar
// | /foo/bar | ../../../../.. | /
// | /x/y     | ../p/../q      | /x/q
// | /x/y     | /p/./q         | /p/q

// | "", null, -> return empty ""
// | No max 
// | assume it's just alphabet and / and . (no numbers, -, etc.) 

// */

/*******************************************************************************************************************************************/




// /*
// Description
// Implement a function to merge 3 sorted integer arrays.

// Question Statement
// Question Statement
// Implement a function to merge 3 sorted integer arrays. 
// The output should be another sorted integer array consisting of all integers from the 3 input arrays. 
// The input arrays may have duplicates, but the output array shouldn't have any duplicate.
// Question 
// Give an example and emphasize that duplicates are removed in the output
// A: [-100, -10, -1, -1, 0, 0, 0, 1, 1, 5]
// B: [-90, -2, 0, 0, 0, 3, 5, 5]
// C: [-20, -1, 0, 0, 1, 4, 4]

// Output: [-100, -90, -20, -10, -2, -1, 0, 1, 3, 4, 5]

/*******************************************************************************************************************************************/
// you are given two non-empty linked lists representing two non-negative integers.
// The digits are sorted in reverse order , and each of their nodes contains a single digit.
// Add the two numbers and return it as a linked list.

// input l1: [2, 4, 3]
// input l2: [5, 6, 4]
// output: [7, 0, 8]
// given a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent.retun the answer in any order.
// a mapping of digit to letters (just like on the telephone buttons) is given below. 
// note that 1 does not map to any letters.
// input digits = "23"
// output = ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// example 2:
// input digits = ""
// output = []


/*******************************************************************************************************************************************/


// given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// If the target is not found in the array, return [-1, -1].
// you must write an algorithm with O(log n) runtime complexity.
// example 1:
// input: nums = [5,7,7,8,8,10], target = 8
// output: [3,4]
// example 2:
// input: nums = [5,7,7,8,8,10], target = 6
// output: [-1,-1]


/*******************************************************************************************************************************************/
// let array1 = ['val', 'area', 'index', 'data']
// let array2= ['data', 'index', 'volume', 'ten']

// function findUniqueElements(array1, array2){
//   let combined = [...array1, ...array2];
//   let set = new Set(combined);
//   let uniqueElements = Array.from(set);
//   let commElements = findCommonElements(array1, array2);
//   // Find intersection (elemdents in both arrays)
//   const intersection = uniqueElements.filter(item => !commElements.includes(item));
  
//   // Return unique intersection elements
//   return intersection;


// }
// console.log('findUniqueElements', findUniqueElements(array1, array2))


// function findCommonElements(array1, array2){
//     let tempArray = [];
//     let current;

// 	for(let i = 0; i < array1.length; i++){
//         current = i;
//         for (let j = 0; j < array2.length; j++){
//             if (array1[current] === array2[j]){
//                 tempArray.push(array2[j]);
//             }
//         }
//     }
//   return tempArray;
// }

// console.log(
//     'findCommonElements(array1, array2) =>',
//     findCommonElements(array1, array2)
// )

/*******************************************************************************************************************************************/

// console.log('Start'); // Start

// Promise.resolve().then(() => console.log('Promise 1'));

// setTimeout(() => console.log('Timeout 1'), 0);

// Promise.resolve().then(() => console.log('Promise 2'));

// setTimeout(() => console.log('Timeout 2'), 0);

// console.log('End');

// Start
// End 
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

/*******************************************************************************************************************************************/

// const obj = {a:1, b:2, c:3}
// const arr = ['foo', 'bar', 'feer', 'baz']

// for(let key in obj)
//   console.log('key =>', key, 'value =>', obj[key]);


/*******************************************************************************************************************************************/

// function reverseString(str) {
//     tempString = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         tempString += str[i];
//     }
//     return tempString;
// }
// console.log(reverseString('hello')); // 'olleh'

// function reverseKeepPosition(str) {
//     const wordsArr = str.split(" ")
//     const reverseWords = wordsArr.map(el => reverseString(el))
//     return reverseWords.join(" ");
// }

// console.log(reverseKeepPosition('hello world')); // 'olleh'

/*******************************************************************************************************************************************/

// function selectionSort(arr){
//     let N = arr.length;
//     for (let i = 0; i < N; i++){
//         let lowest = i;
//         for (let j = i+1; j < N; j++){
//             if(arr[j] > arr[lowest]) lowest = j
//         }
//         [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
//     }
//     return arr;
// }

// function insertionSort(arr)
// {
//     let N = arr.length;
//     for (let i = 1; i < N; i++){
//         for (let j = i; j > 0 && arr[j] < arr[j-1]; j--){
//             [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
//         }
//     }
//     return arr;
// }

/*******************************************************************************************************************************************/

// let arr = [1,6,1,2,12];

// console.log(
//     'arr =>',
//     arr
// )
// console.log(
//     'insertionSort(arr) =>',
//     insertionSort(arr)
// )   
// console.log(
//     'selectionSort(arr) =>',
//     selectionSort(arr)
// )

// function compareFn(a, b){
//     if (a > b){
//         return 1
//     }else if (a < b){
//         return -1
//     }else{
//         return 0
//     }
// }
// console.log(
//     'arr.sort(compareFn)',
//     arr.sort(compareFn)
// )

/*******************************************************************************************************************************************/

    //       6
    //      / \
    //     8    9
    //    / \  / \
    //   5   4 1  3

/*******************************************************************************************************************************************/

// function that max current chars
// aabbbaa retun b becuase repeated 3 times
// aabbbccccaa return c becuase repeated 4 times
// yyyzzyyyaaa return ya becuase repeated 3 times

// function maxCr(str){
//     if (!str) return '';

//     let maxCount= 0;
//     let result = '';
//     let currentChar = str[0];
//     let currentCount = 1;

=======
//     let result = '';
//     let maxCount= 0;

//     let currentChar = str[0];
//     let currentCount = 1;

>>>>>>> 59f55dc9df452ffeab9a35150be2e85be9a536ed
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] === currentChar) {
//             currentCount++;
//         } else {
//             if (currentCount > maxCount) {
//                 maxCount = currentCount;
//                 result = currentChar;
//             } else if (currentCount === maxCount) {
//                 result += currentChar;
//             }
//             currentChar = str[i];
//             currentCount = 1;
//         }
//     }
//     if (currentCount > maxCount) {
//         result = currentChar;
//     }else if (currentCount === maxCount) {
//         result += currentChar;
//     }

//     let newStr = [...new Set(result)].join('');
//     return newStr;




// }

// console.log(
//     maxCr('yyyzzyyyaaa')

// )
// console.log(
// maxCr('aabbbccccaa')
// )

/*******************************************************************************************************************************************/

function longestEvenWord(str){
    let words = str.split(" ");
    let result = "00";
    let maxLength = 0;
    for (let word of words) {
        if (word.length % 2 === 0 && word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}

console.log(longestEvenWord('You can do it'));
console.log(longestEvenWord('You can doo iti'));

/*******************************************************************************************************************************************/
/*
Reported Toptal problems

A few problems that show up repeatedly in public candidate-report aggregations are:

Image Smoother — Easy
Matrix/2D array traversal
Calculate the average of neighboring cells.
Good practice for boundary conditions and nested loops.
Airplane Seat Assignment Probability — Medium
Probability + dynamic programming/recursion.
Tests whether you can identify the state and reason about recursive outcomes.
String Compression II — Hard
Dynamic programming + strings.
Find the minimum compressed length after deleting up to k characters.
This is substantially harder than a typical "easy" string problem.
*/

/*
Toptal's own algorithm interview material also emphasizes topics such as:
Hash tables
Binary search
Sorting
Divide and conquer
Recursion
Complexity analysis
Perfect hashing
Matrix/geometry problems
Rectangle intersection
Anagram detection
Fast exponentiation
*/

/*
Given your Senior Full-Stack/React/TypeScript background, I would focus on these patterns rather than trying to memorize Toptal-specific questions:
Priority	Topic	Example
🔴 High	Hash Map	Two Sum, anagrams, frequency counting
🔴 High	Arrays	Two pointers, sliding window
🔴 High	Matrix	Image Smoother, spiral traversal
🔴 High	Strings	String compression, substring problems
🔴 High	Binary Search	Search/optimization problems
🔴 High	Recursion	Tree/graph traversal
🟠 Medium	Dynamic Programming	1D/2D DP
🟠 Medium	Linked Lists	Reverse, cycle detection
🟠 Medium	Stack/Queue	Valid parentheses, monotonic stack
🟠 Medium	Trees	DFS/BFS
🟠 Medium	Graphs	BFS/DFS, shortest path
🟡 Lower	Probability/Math	Airplane Seat Assignment
*/