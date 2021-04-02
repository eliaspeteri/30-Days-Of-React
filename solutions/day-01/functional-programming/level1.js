const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

// 1.
console.log("ex. 1");
products.forEach((product) => {
    console.log(product.price);
});

// 2.
console.log("ex. 2");
products.forEach((product) => {
    console.log(
        `The price of ${product.product} is ${
            product.price === " " || product.price === ""
                ? "unknown"
                : product.price
        }.`
    );
});

// 3.
console.log("ex. 3");
let sum = 0.0;
products.forEach((product) => {
    product.price === " " || product.price === ""
        ? null
        : (sum += product.price);
});
console.log(sum);

// 4.
console.log("ex. 4");
const prices = products.map((product) => {
    return product.price;
});
console.log(prices);
