//MINIMUM
// 1) Ask age
// const age = +prompt('How old are you?', '');
// if (age >= 0 && age <= 11) {
//     alert('Hello, kid!');
// } else if (age >= 12 && age <= 17) {
//     alert ('Hello, teenager!');
// } else if (age >= 18 && age <= 59) {
//     alert ('Hello, adult!');
// } else if (age >= 60 && age <= 100) {
//     alert ('Hello, granpa!');
// } else {
//     alert ('Something wrong...');
// }

// 2) Special symnbols
// const number = +prompt('Enter number to have symbol of it\'s button', '');
// switch(number) {
//     case 0: alert (')');
//     break;
//     case 1: alert ('!');
//     break;
//     case 2: alert ('@');
//     break;
//     case 3: alert ('#');
//     break;
//     case 4: alert ('$');
//     break;
//     case 5: alert ('%');
//     break;
//     case 6: alert ('^');
//     break;
//     case 7: alert ('&');
//     break;
//     case 8: alert ('*');
//     break;
//     case 9: alert ('(');
//     break;
//     default: alert ('You should enter a number from 0 to 9...');
// }

// 3) Count value in range
// const numberOne = +prompt('Enter first value');
// const numberTwo = +prompt('Enter second value');
// let sum = 0;
// for (let i=numberOne; i <= numberTwo; i++) {
//     sum += i;
// }
// alert(`Result of summing in this range: ${sum} `);

// function oddEvenNumber(num) {
//     const arr = String(num).split('');
//     let odd = 0;
//     let even = 0;
//     arr.forEach(elem => {
//         if (elem % 2 == 0) {
//             even++;
//          } else {
//             odd++;
//         }
//         return odd, even;
//     });
//     return {odd, even};
// }

// oddEvenNumber(12356);

// 1) Count result and variables values
let a = 10,
    b = 20,
    c = 30;
    let resultOne = a++ - --b - c++;
                // 10 - 20-1 - 30 = -39 
                // a = 11, b = 19, c=31
console.log(resultOne);
let resultTwo = a + b++ - ++c;
            // 11 + 19 - 32 = -2 
            // a = 11, b = 20, c=32
console.log(resultTwo);
let resultThree= a++ - (--b - c++);
            // 11 - (19 - 32) = 11 - -13 = 24 
            // a =  12, b = 19, c=33
console.log(resultThree);

// 2) Спросить у пользователя интервал чисел в пределах от 0 до 100, 
// и вывести квадрат этих чисел  в консоль , которые деляться на 3.
// Если ввели не число, то попросить ввести число. 

const firstRangeValue = +prompt('Enter first value from 0 to 100');
const secondRangeValue = +prompt('Enter second value from 0 to 100');
if  (firstRangeValue < 0 || firstRangeValue > 100 ||
    secondRangeValue < 0 || secondRangeValue > 100) {
    alert('Enter correct value from 0 to 100');
} else if (isNaN(firstRangeValue) || isNaN(secondRangeValue)) {
    alert('You should enter number');
} else {
    for(let i = firstRangeValue; i<= secondRangeValue; i++) {
        if((Math.pow(i, 2) % 3 !== 0)) {
            continue;
        } else {
            console.log((Math.pow(i, 2) / 3));
        }
    }
}


// 3) Перепишите код, заменив цикл FOR на WHILE, без изменения поведения цикла.
// for(let i = 0 ; i  <=8; i++) {
//     console.log(i);
// }

let i = 0;
while (i<= 8){
    console.log(i);
    i++;
}

// 4) Спросить у пользователя интервал чисел в пределах от 1 до 30, 
// и вывести в консоль простые числа в указанном интервале.
// Например  клиент ввёл 2 и 10 , в консоль должно вывести  2, 3, 5, 7

const primeValueFirst = prompt('Enter first value from 1 to 30');
const primeValueSecond = prompt('Enter second value  from 1 to 30');

if (primeValueFirst < 1 || primeValueFirst > 30 ||
    primeValueSecond < 1 || primeValueSecond > 30) {
    alert('Enter correct value from 1 to 30');
} else {
    for (let i = primeValueFirst; i <= primeValueSecond; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime == true && i > 1) {
            console.log(i);
        }
    }
}

