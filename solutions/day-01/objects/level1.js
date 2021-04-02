// 1.
let dog = {};

// 2.
console.log("ex. 2");
console.log(dog);

// 3.
dog.name = "Woofington";
dog.legs = 4;
dog.color = "Brown";
dog.age = 5;
dog.bark = () => {
    return "woof woof";
};

// 4.
console.log("ex. 4");
console.log(dog);
console.log(dog.bark());

// 5.
dog.breed = "Pomeranian";
dog.getDogInfo = () => {
    return `name:${dog.name} legs:${dog.legs} color:${dog.color} age:${
        dog.age
    } bark:${dog.bark()} breed:${dog.breed}`;
};
