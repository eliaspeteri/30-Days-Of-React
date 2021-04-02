import users from "./users";
// 1.
console.log("ex. 1");
let mostSkilledUser = users.Alex;
console.log(mostSkilledUser);
for (const user in users) {
    users[user].skills.length > mostSkilledUser.skills.length
        ? (mostSkilledUser = users[user])
        : null;
}
console.log(`Most skilled user:${mostSkilledUser.email}`);

// 2.
console.log("ex. 2");
let numLoggedIn = 0;
let pointsGreaterThan50 = 0;
for (const user in users) {
    users[user].isLoggedIn ? (numLoggedIn += 1) : null;
    users[user].points >= 50 ? (pointsGreaterThan50 += 1) : null;
}
console.log(`Number of users logged in:${numLoggedIn}`);
console.log(`Number of users with more than 50 points:${pointsGreaterThan50}`);

// 3.
console.log("ex. 3");
const MERN = [];
for (const user in users) {
    if (
        /\bMongoDB\b/.test(users[user].skills.toString()) &&
        /\bExpress\b/.test(users[user].skills.toString()) &&
        /\bReact\b/.test(users[user].skills.toString()) &&
        /\bNode\b/.test(users[user].skills.toString())
    )
        MERN.push(user);
}
console.log(MERN);

// 4.
console.log("ex. 4");
users.Elias = { email: "elias@elias.com", age: 22, isLoggedIn: true };
console.log(users.Elias);

// 5.
console.log("ex. 5");
console.log(Object.keys(users));

// 6.
console.log("ex. 6");
console.log(Object.values(users));

// 7.
// Can't find a countries object
