// 1.
// console.log("ex. 1");
// console.log(`Enter your age.`);
// process.stdin.setEncoding("utf-8");
// process.stdin.on("readable", () => {
//     let age = process.stdin.read();
//     age >= 18
//         ? console.log(`You are old enough to drive.`)
//         : console.log(`You are left with ${18 - age} years to drive.`);
//     process.exit();
// });

// 2.
// let myAge = 22;
// console.log("ex. 2");
// console.log(`Enter your age.`);
// process.stdin.on("readable", () => {
//     let age = process.stdin.read();
//     let diff = myAge - age;
//     if (diff > 0) {
//         console.log(`You are ${diff} years younger than me.`);
//     } else if (diff < 0) {
//         console.log(`You are ${Math.abs(diff)} years older than me.`);
//     } else {
//         console.log(`You're as old as me!`);
//     }
//     process.exit();
// });

// 3.
// console.log("ex. 3");
// let a = 4;
// let b = 3;
// if (a > b) {
//     console.log(`${a} is greater than ${b}.`);
// } else console.log(`${b} is greater than ${a}`);

// a > b
//     ? console.log(`${a} is greater than ${b}.`)
//     : console.log(`${b} is greater than ${a}`);

// 4.
console.log("ex. 4");
console.log(`Enter a number:`);
process.stdin.setEncoding("utf-8");
let number = 0;
process.stdin.on("readable", () => {
    number = process.stdin.read();
    number % 2 === 0
        ? console.log(`${number} is an even number.`)
        : console.log(`${number} is an odd number.`);
});
