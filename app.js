console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, `FIZZBUZZ`);
    }

    else if(i % 3 == 0) {
        console.log(i, `FIZZ`);
    }

    else if (i % 5 == 0 ) {
        console.log(i, `BUZZ`)
    }

    else {
        console.log(i);
    }

}


// Exercise 3: Repeat with While and Do/While
console.log("EXERCISE 3:\n==========\n");

let i = 1;
while (i < 100) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
}



let k = 1;
while (k < 200) {
    if (k % 3 == 0 && k % 5 == 0) {
        console.log(k, `FIZZBUZZ`);
    }

    else if(k % 3 == 0) {
        console.log(k, `FIZZ`);
    }

    else if (k % 5 == 0 ) {
        console.log(k, `BUZZ`)
    }

    else {
        console.log(k);
    }
    k++;
}




let j = 1;
do {
    if (j % 2 == 1) {
        console.log(j);
    }
    j++;
}
while (j < 150);



let m = 1;
do {
    if (m % 3 == 0 && m % 5 == 0) {
        console.log(m, `FIZZBUZZ`);
    }

    else if(m % 3 == 0) {
        console.log(m, `FIZZ`);
    }

    else if (m % 5 == 0 ) {
        console.log(m, `BUZZ`)
    }

    else {
        console.log(m);
    } 
    m++;
}
while (m < 250);



// Exercise 4: Find Value
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i == value) {
       console.log(`Found ${value}!`);
       break;
    }
    if (i == n) {
        console.log(`Did not find ${value} within the range 1 to ${n}.`);  
    }
  }



  // Exercise 5: Bonus FIZZBUZZ
console.log("EXERCISE 5:\n==========\n");
  
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let finish = Math.round(Math.random() * (100 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start, finish);
console.log(fizzDivisor, buzzDivisor)

for (let i = start; i <=finish; i++) {

    let answer = ``;

    if (i % fizzDivisor == 0) {
        answer += `FIZZ`;
    }

    if (i % buzzDivisor == 0) {
        answer += `BUZZ`;
    }

    console.log(`${i} ${answer}`);
    

}
