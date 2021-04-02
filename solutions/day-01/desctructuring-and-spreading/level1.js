const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    job: "Instructor and Developer",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Python",
        "D3.js",
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (person) => {
    const {
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages,
    } = person;
    const [html, css, js, react, redux, node, mongodb, python, d3js] = skills;
    const [amh, eng, fin] = languages;
    console.log(
        `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${html}, ${css}, ${js}, ${react}, ${redux}, ${node},${mongodb}, ${python} and ${d3js}. He speaks ${amh}, ${eng} and a little bit of ${fin}`
    );
};

getPersonInfo(person);
