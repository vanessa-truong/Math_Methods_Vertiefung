console.log("work")

// Level 1_1
console.log(Math.PI);
// console.log(Math.PI.toFixed(2));

let roundedPI = Math.PI.toFixed(2);
console.log(roundedPI);

//Level _2

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

array.forEach((elt) => {
    let y = Math.round(elt);
    console.log(y);
})


// Level 1_3

let randomNum = Math.random();
console.log(randomNum);
let randomNum_10 = Math.floor(Math.random() * 10);
console.log(randomNum_10);
let randomNum_100 = Math.floor(Math.random() * 100);
console.log(randomNum_100);


// Level 2_1

const roundTo = (Zahl, Genauigkeit) => {
    console.log(Zahl.toFixed(Genauigkeit));
}

console.log(roundTo(3.1415926535, 5))


// Level 2_2

const randomGame = () => {
    let text = prompt("Schätzen sie die Nummer zwischen 1 und 10");
    let numRandom = Math.floor(Math.random() * 10);
    if (text === numRandom) {
        console.log("Du hast gewonnen!")
    } else {
        console.log("Du hast verloren! Die Antwort lautet " + numRandom);
    }
}

randomGame();

// let text = prompt("Schätzen sie die Nummer zwischen 1 und 10");
// body.innerHTML = text
