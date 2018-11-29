let arrayData = [];
let result = 0;
// Create an array of 10,000 numbers
for(let i=0; i<10000; i++){
  elem = Math.floor(Math.random() * 1000);
  arrayData.push(elem);
}
console.log("Length of the created array: ", arrayData.length);
console.log("Execution time for 10000 loops");

// for loop
console.time('for loop');
for(let j=0; j<=10000; j++){
  for(let l=0; l<arrayData.length; l++){
    result += arrayData[l];
  }
  // console.log(result);
  result = 0;
}
console.timeEnd('for loop');

// for Of loop
console.time('for of');
for(let j=0; j<=10000; j++){
  for(let element of arrayData){
    result += element;
  }
  // console.log(result);
  result = 0;
}
console.timeEnd('for of');

// forEach loop
console.time('forEach');
for(let j=0; j<=10000; j++){
  arrayData.forEach(element => {
    result += element;
  });
  // console.log(result);
  result = 0;
}
console.timeEnd('forEach');

// while loop
console.time('while');
for(let j=0; j<=10000; j++){
  let l = 0;
  while(l < arrayData.length){
    result += arrayData[l];
    l++;
  }
  // console.log(result);
  result = 0;
}
console.timeEnd('while');

// reduce loop
console.time('reduce');
const arrayAddition = (accumulatedSum, currentValue) => accumulatedSum + currentValue;
for(let j=0; j<=10000; j++){
  result = arrayData.reduce(arrayAddition);
  // console.log(result);
  result = 0;
}
console.timeEnd('reduce');

