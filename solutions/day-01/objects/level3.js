// 1.
console.log("ex. 1");
const personAccount = {
    firstName: "",
    lastName: "",
    incomes: [
        {
            income: 0.0,
            description: "",
        },
    ],
    expenses: [
        {
            expense: 0.0,
            description: "",
        },
    ],
    totalIncome: () => {},
    totalExpense: () => {},
    accountInfo: () => {},
    addIncome: () => {},
    addExpense: () => {},
    accountBalance: () => {},
};

// console.log(personAccount);

const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];

// 2a.
console.log("ex. 2a");
const newUser = {
    username: "Elias",
    email: "elias@elias.com",
    password: "12345",
};

const signUp = (newUser) => {
    console.log(`${newUser.username}, ${newUser.email}`);
    for (const user in users) {
        // Check if user exists
        if (
            newUser.username === users[user].username ||
            newUser.email === users[user].email
        ) {
            console.log("User already exists.");
            break;
        }
        // If not, add to the database
        else {
            users.push(newUser);
            console.log("User added to the database.");
            break;
        }
    }
};

signUp(newUser);

// 2b.
console.log("ex. 2b");

const signIn = (returningUser) => {
    for (const user in users) {
        if (
            (users[user].email === returningUser.email ||
                users[user].username === returningUser.username) &&
            users[user].password === returningUser.password
        ) {
            console.log("Logged in succesfully.");
            break;
        }
    }
};

signIn(newUser);

// 3a.
console.log("ex. 3a");

const rating = { userId: "fg12cy", rate: 1 };

const rateProduct = (rating, productId) => {
    for (const product in products) {
        if (products[product]._id === productId) {
            products[product].ratings.push(rating);
            console.log(products[product].ratings);
            break;
        } else {
            console.log("Unable to add rating.");
        }
    }
};

rateProduct(rating, "eedfcf");

// 3b.
console.log("ex. 3b");

const averageProductRating = (productId) => {
    for (const product in products) {
        if (products[product]._id === productId) {
            let sum = 0.0;
            for (const rating in products[product].ratings) {
                sum += products[product].ratings[rating].rate;
            }
            console.log(sum / products[product].ratings.length);
            break;
        }
    }
};

averageProductRating("eedfcf");

// 4.
console.log("ex. 4");
const likeProduct = (userId, productId) => {
    for (const product in products) {
        // Check the given product by their ID
        if (products[product]._id === productId) {
            console.log(`Product: ${products[product]._id}`);
            if (products[product].likes.length === 0) {
                products[product].likes.push(userId);
                console.log(products[product].likes);
                break;
            }
            // Iterate through likes in likes array
            for (like in products[product].likes) {
                // If user already liked, splice out the like from likes array
                if (products[product].likes[like] === userId) {
                    console.log("User already liked, removing like.");
                    products[product].likes.splice(
                        products[product].likes.indexOf(userId),
                        1
                    );
                }
                // Else push the userId to likes array
                else {
                    products[product].likes.push(userId);
                    console.log("Liked product!");
                }
            }
        }
    }
    console.table(products);
};

likeProduct("zwf8md", "aegfal");
