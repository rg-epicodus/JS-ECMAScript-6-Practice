// Symbols
let capital = Symbol("State Capital");

let oregon = {};
oregon[capital] = "Salem";
document.write(`Capital of OR : ${oregon[capital]}<br />`);
document.write(`Symbol Capital : ${capital.toString()}<br />`);

let employNum = Symbol.for("Employee Number");

let bobSmith = {};
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 11;

document.write(`Bob : ${bobSmith[employNum]}<br />`);
document.write(`Sally : ${sallyMarks[employNum]}<br />`);

//array
let array1 = Array.of(1,2,3);
let array2 = Array.from("word");
let array3 = Array.from(array1, (value) => value * 2);

for (let val of array1) document.write(`Array Val : ${val}<br />`);
for (let val of array2) document.write(`Array Val : ${val}<br />`);
for (let val of array3) document.write(`Array Val : ${val}<br />`);

//sets
var randSet = new Set();
randSet.add(10);
randSet.add("Word");

document.write(`Has 10 : ${randSet.has(10)}<br />`);
document.write(`Set Size : ${randSet.size}<br />`);

randSet.delete(10);
for (let val of randSet) document.write(`Set Val : ${val}<br />`);


//maps
var randMap = new Map();
randMap.set("key1", "Random String");
randMap.set("key2", 10);

document.write(`key1 : ${randMap.get("key1")}<br />`);
document.write(`key2 : ${randMap.get("key2")}<br />`);
document.write(`Map Size : ${randMap.size}<br />`);

randMap.forEach(function(value, key) {
  document.write(`${key} : ${value}<br />`);
})

//promises
var p1 = Promise.resolve("Resolve Me");

p1.then((res) => document.write(`${res}<br />`));

// reloads page with new resolve msg uncomment to run
// var p2 = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve('Resolve Me 2'), 2000);
// });
//
// p2.then((res) => document.write(`${res}<br />`));

let randVal = 18;
var p3 = new Promise(function(resolve, reject) {
  if(randVal == 6){
    resolve("Good Value");
  } else {
    reject("Bad Value");
  }
});

p3.then((val) => document.write(`${val}<br />`),
(err) => document.write(`${err}<br />`));

let newRandVal = 18;
var p4 = new Promise(function(resolve, reject) {
  if(newRandVal <= 17){
    throw new Error("Can't Vote");
  } else {
    resolve("Can Vote");
  }
});

p4.then((val) => document.write(`${val}<br />`))
.catch((err) => document.write(`${err.message}<br />`));
