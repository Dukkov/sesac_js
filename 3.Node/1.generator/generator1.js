const names = ["John", "Jane", "Michael", "Emily", "William", "Olivia"];
const gender = ["male", "female"];
const cities = ["Seoul", "Daejeon", "Daegu", "Busan", "Sejong", "Yongin"];
const district = ["jung-gu", "dong-gu", "buk-gu", "nam-gu", "seo-gu"];

function generateName() {
    return names[Math.floor(Math.random() * names.length)];
}

console.log(generateName());

function generateBirthdate() {
    const year = Math.floor(Math.random() * 124) + 1900;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    return (`${year}-${month}-${day}`);
}

console.log(generateBirthdate());

// function generateGender() {
//     return gender[Math.floor(Math.random() * gender.length)];
// }

function generateGender() {
    return (Math.random() < 0.5 ? "male" : "female");
}

console.log(generateGender());

function generateAddress() {
    return (`${cities[Math.floor(Math.random() * cities.length)]} ${district[Math.floor(Math.random() * district.length)]}`);
}

console.log(generateAddress());