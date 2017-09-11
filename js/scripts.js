if(true){
  let x = 10;
  document.write("x = " + x + "<br />");
}

// redefine CONST in scope
const PI = 3.14159;
if(true){
  const PI = 2.13;
  document.write("PI = " + PI + "<br />");
}
document.write("PI = " + PI + "<br />");

// type of
document.write(typeof true + "<br />");
document.write(typeof 3.14 + "<br />");
document.write(typeof "string" + "<br />");
document.write(typeof Symbol() + "<br />");
document.write(typeof {a:1} + "<br />");
document.write(typeof [1,2,3] + "<br />");
document.write(typeof undefined + "<br />");


// strings
let fName = "Rich";
let lName = "Garrick";
document.write(`${fName} ${lName}<br />`);

let num1 = 10;
let num2 = 5;
document.write(`10 * 5 = ${num1 * num2}<br />`);

function doMath(strings, ...values) {
  if(strings[0] == 'Add'){
    document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]} <br />`);
  } else if (strings[0] === 'Sub'){
    document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]} <br />`);
  } else if (strings[0] === 'Mul'){
    document.write(`${values[0]} * ${values[1]} = ${values[0] * values[1]} <br />`);
  } else if (strings[0] === 'Div'){
    document.write(`${values[0]} / ${values[1]} = ${values[0] / values[1]} <br />`);
}
}

doMath `Add${10} ${20}`;
doMath `Sub${10} ${20}`;
doMath `Mul${10} ${20}`;
doMath `Div${10} ${20}`;

// iterate through let
for (let c of fName) {
  document.write(`${c}<br />`);
}

// repeat string
document.write("Hello ".repeat(3) + "<br />");

document.write(fName.startsWith("Ri") + "<br />");
document.write(fName.endsWith("ch") + "<br />");
document.write(fName.includes("ic") + "<br />");

let multilineStr = `This is
a multiline
string`;
document.write(`${multilineStr}<br />`);


// functions
function getSum(num1 = 1, num2 = 1){
  document.write(`${num1} + ${num2} = ${num1 + num2}<br />`);
  document.write(`${num1} - ${num2} = ${num1 - num2}<br />`);
  document.write(`${num1} * ${num2} = ${num1 * num2}<br />`);
  document.write(`${num1} / ${num2} = ${num1 / num2}<br />`);
}

getSum(6,3);

function getSumMore(...vals){
  let sum = 0;
  for (let i = 0, len = vals.length; i < len; i++) {
    sum += vals[i]
  }
  document.write(`The sum is ${sum}<br />`);
}
getSumMore(1,2,3,4);

let vals = [1,2,3,4,5,6,7,8,9,10]
getSumMore(...vals);

let difference = (num1, num2) => num1 - num2;
document.write(`5 - 10 = ${difference(5,10)}<br />`);

let mult = (num1, num2) => {
  let product = num1 * num2;
  document.write(`${num1} * ${num2} = ${product}<br />`);
}
mult(5,50);

let valArr = [1,2,3,4,5,6,7,8,9,10];

let sumVals = valArr.reduce((a,b) => a + b);
document.write(`Sum : ${sumVals}<br />`);

let evens = valArr.filter(v => v % 2 == 0);
  document.write(`Evens : ${evens}<br />`);

let odds = valArr.filter(v => v % 2 !== 0);
  document.write(`Odds : ${odds}<br />`);

let doubles = valArr.map(v => v * 2);
document.write(`Doubles : ${doubles}<br />`);

// objects
function createAnimal(name, owner){
  return {
    name,
    owner,
    getInfo2(){
      return `${this.name} is owned by ${this.owner}`
    },
    address: {
      street: '123 Main St',
      city: 'Portland'
    }
  };
}

var spot = createAnimal("Spot", "Doug");
document.write(`${spot.getInfo2()}<br />`);
document.write(`${spot.name} is at ${spot.address.street}<br />`);
document.write(`${Object.getOwnPropertyNames(spot).join(" ")}<br />`);

let {name, owner} = spot;
document.write(`Name : ${name}<br />`);

let {address} = spot;
document.write(`Address : ${address.street}<br />`);

let favNums = [2.718, .4566, 23.234];

let[,,chaos] = favNums;
document.write(`Chaos : ${chaos}<br />`);

let [, ...last2] = favNums;
document.write(`2nd Num : ${last2[0]}<br />`);

let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];
document.write(`Val2 : ${val2}<br />`);

//calsses
class Mammal{
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  set name(name){
    this._name = name;
  }

  static makeMammal(name){
    return new Mammal(name);
  }

  getInfo(){
    return `${this.name} is a mammal`;
  }
}

let monkey = new Mammal("Fred");
monkey.name = "Mark";
document.write(`Mammal : ${monkey.name}<br />`);

let chipmunk = Mammal.makeMammal("Chipper");
document.write(`Mammal 2 : ${chipmunk.name}<br />`);

class Marsupial extends Mammal{
  constructor(name, hasPouch){
    super(name);
    this._hasPouch = hasPouch;
  }

  get hasPouch(){
    return this._hasPouch;
  }

  set hasPouch(hasPouch){
    this._hasPouch = hasPouch;
  }

  getInfo(){
    return `${this.name} is a mursupial`;
  }

}

let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br />`);

document.write(`${chipmunk.getInfo()}<br />`);
document.write(`${kangaroo.getInfo()}<br />`);

function getClass(classType){
  if(classType == 1){
    return Mammal;
  } else {
    return Marsupial;
  }
}

class Koala extends getClass(2){
  constructor(name){
    super(name);
  }
}

let carl = new Koala("Carl");
document.write(`${carl.getInfo()}<br />`);
































// hi
