import { countries } from "./countries";
// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
// min
let min = Math.min(...ages);
// max
let max = Math.max(...ages);
// median
let median = 0;
let half = Math.floor(ages.length / 2);
if (ages.length % 2) median = ages[half];
else median = (ages[half - 1] + ages[half]) / 2.0;
// average
let sum = 0.0;
for (var i in ages) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(
    `min:${min}\nmax:${max}\nmedian:${median}\naverage:${average}\nrange:${
        max - min
    }\nmin-average:${Math.abs(min - average).toFixed(
        1
    )}\nmax-average:${Math.abs(max - average).toFixed(1)}`
);

// countries 1.
console.table(countries.slice(0, 10));

// countries 2.
if (countries.length % 2) {
    console.table(countries.splice(countries.length / 2, 1));
} else {
    console.table(countries.splice(countries.length / 2 - 1, 2));
}

// countries 3.
console.log(countries.length);
console.log(Math.ceil(countries.length / 2));
// if countries.length even
if (countries.length % 2 == 0) {
    console.table(countries.slice(0, countries.length / 2));
    console.table(countries.slice(countries.length / 2, countries.length));
    // else if odd
} else {
    console.table(countries.slice(0, Math.ceil(countries.length / 2)));
    console.table(
        countries.slice(Math.ceil(countries.length / 2), countries.length)
    );
}
