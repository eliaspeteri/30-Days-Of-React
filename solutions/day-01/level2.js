// 1.
import { countries } from "./countries";
import { webTechs } from "./webTechs";

// 2. INCOMPLETE
console.log("ex. 2");
let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
const words = text.split(" ");
console.log(words);
console.log(words.length);

// 3.
console.log("ex. 3");
const allergic = true;
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart[0] !== "Meat") shoppingCart.unshift("Meat");
if (shoppingCart[shoppingCart.length - 1] !== "Sugar")
    shoppingCart.push("Sugar");
if (allergic) {
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// 4.
console.log("ex. 4");
if (countries.indexOf("Ethiopia") !== -1) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
    table;
}

// 5.
console.log("ex. 5");
if (webTechs.indexOf("Sass") !== -1) {
    console.log("Sass is a CSS preprocess.");
} else {
    webTechs.push("Sass");
    console.table(webTechs);
}

// 6.
console.log("ex. 6");
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
