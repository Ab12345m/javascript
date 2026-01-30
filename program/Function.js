//TODO:arrow Function
// const sum = (a, b) => {
//     console.log(a + b);
    
// }
// sum(2, 2);

// function countVowel(str) {
//     let count = 0;


//     for (const char of str) {

//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }

//     }
//     console.log(count);
// }


//TODO:For each


// let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//     console.log(val*val);
// })


//TODO:Map method


// let nums = [1, 2, 3];

// nums.map((val) => {
//     console.log(val);
// })


//TODO:filtter method

// let arr = [1, 2, 3, 4, 5];

// let newrr=arr.filter((val) => {
//     return val % 2 == 0;
// })
// console.log(newrr);

//TODO:reduce method

// let arr = [5, 6, 7, 1, 0];

// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(output);


// let marks = [87, 93, 92, 90, 80];

// let newmarks=marks.filter((val) => {
//     return val >= 90;
// })

// console.log(newmarks);


let n = prompt("Enter a number");
let arr = [];

for (let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr);


let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum", sum);

let factorial = arr.reduce((res, curr) => {
return res * curr;

});

console.log("Factorial=", factorial);


