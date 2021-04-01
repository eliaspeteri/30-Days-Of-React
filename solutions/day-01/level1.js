// 1.
const empty = [];

// 2.
const sixElements = [0, 1, 2, 3, 4, 5];

// 3.
console.log("ex. 3");
console.log(sixElements.length);

// 4.
console.log("ex. 4");
console.table([
    sixElements.indexOf(0),
    sixElements.indexOf(Math.floor(sixElements.length / 2)),
    sixElements.lastIndexOf(sixElements.length - 1),
]);

// 5.
console.log("ex. 5");
const mixedDataTypes = [1, "2", { number: 3 }, 4, 5, "6"];
console.log(`mixedDataTypes.length: ${mixedDataTypes.length}`);

// 6.
console.log("ex. 6");
const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
];

// 7.
console.log("ex. 7");
console.log(itCompanies);

// 8.
console.log("ex. 8");
console.log(`Number of companies in itCompanies: ${itCompanies.length}`);

// 9.
console.log("ex. 9");
console.table([
    itCompanies[0],
    itCompanies[Math.floor(itCompanies.length / 2)],
    itCompanies[itCompanies.length - 1],
]);

// 10.
console.log("ex. 10");
itCompanies.forEach((company) => {
    console.log(company);
});

// 11.
console.log("ex. 11");
itCompanies.forEach((company) => {
    console.log(company.toUpperCase());
});

// 12.
console.log("ex. 12");
console.log(itCompanies.join(", "));

// 13.
console.log("ex. 13");
var company = "Facebook";
if (itCompanies.includes(company)) {
    console.log(itCompanies[itCompanies.indexOf("Facebook")]);
} else {
    console.log(`${company} not found`);
}

// 15.
console.log("ex. 15");
console.log(itCompanies.sort());

// 16.
console.log("ex. 16");
console.log(itCompanies.reverse());

// 17.
console.log("ex. 17");
console.log(
    itCompanies.slice(Math.floor(itCompanies.length / 2), itCompanies.length)
);

// 18.
console.log("ex. 18");
console.log(itCompanies.slice(0, Math.ceil(itCompanies.length / 2)));

// 19. UGLY METHOD
console.log("ex. 19");
console.log(
    itCompanies
        .slice(0, Math.floor(itCompanies.length / 2))
        .concat(
            itCompanies.slice(
                Math.ceil(itCompanies.length / 2),
                itCompanies.length
            )
        )
);

// 20.
console.log("ex. 20");
itCompanies.splice(0, 1);
console.log(itCompanies);

// 21.
console.log("ex. 21");
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

// 22.
console.log("ex. 22");
itCompanies.splice(itCompanies.length - 1, 1);
console.log(itCompanies);

// 23.
console.log("ex. 23");
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
