// 1.
// console.log("ex. 1");
// let grade = 49;
// if (grade >= 80) {
//     console.log("Grade is A.");
// } else if (70 <= grade && grade <= 79) {
//     console.log("Grade is B.");
// } else if (60 <= grade && grade <= 69) {
//     console.log("Grade is C.");
// } else if (50 <= grade && grade <= 59) {
//     console.log("Grade is D.");
// } else {
//     console.log("Grade is F.");
// }

// 2.
// console.log("ex. 2");
// console.log("Enter a month.");
// process.stdin.setEncoding("utf-8");
// process.stdin.on("readable", () => {
//     let season = process.stdin.read();
//     if (/\bSeptember\b|\bOctober\b|\bNovember\b/.test(season))
//         console.log("The season is Autumn.");
//     else if (/\bDecember\b|\bJanuary\b|\bFebruary\b/.test(season))
//         console.log("The season is Winter.");
//     else if (/\bMarch\b|\bApril\b|\bMay\b/.test(season))
//         console.log("The season is Spring.");
//     else if (/\bJune\b|\bJuly\b|\bAugust\b/.test(season))
//         console.log("The season is Summer.");
//     else console.log("Invalid input.");
//     process.exit();
// });

// 3.
console.log("ex. 3");
process.stdin.setEncoding("utf-8");
console.log("What is the day today?");
process.stdin.on("readable", () => {
    let day = process.stdin.read();
    if (
        /\bMonday\b|\bTuesday\b|\bWednesday\b|\bThursday\b|\bFriday\b/.test(day)
    )
        console.log(`${day} is a working day.`);
    else if (/\bSaturday\b|\bSunday\b/.test(day))
        console.log(`${day} is a weekend.`);
    else console.log("Invalid input.");
    process.exit();
});
