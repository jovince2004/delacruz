console.log("Hello world!");
console.log("From script.js File");

const myName = "Jovince";
let age = 20;
let number = 9068687904;
let address = "Hda. LA Milagrosa";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Contact number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greeting, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return `${greeting} sa enyu, ${names}`;
}
console.log(greet("Mayung aga", ["Jovince", "Bai", "Soy" , "tol" , "erp"]));

const heading = document.querySelector("h1 ");
heading.textContent = "Mel 'amay fish dealer🐟' Toyab";
heading.style.color = "gray";
heading.style.fontSize = "50px";
heading.style.backgroundColor = "yellow";
console.log(heading);

heading.addEventListener("click", function() {
    heading.style.color = "red";
    console.log("Heading clicked!");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isDarkMode = false;

toggleButton.addEventListener("click", function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.style.backgroundColor = "black"; 
        body.style.color = "white";  
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
