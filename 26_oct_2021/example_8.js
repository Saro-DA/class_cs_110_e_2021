

const word = "Hello World!";


console.log(word.charAt(word.length - 1));
console.log(word.length);

let vowelCount = 0;

for (let i = 0; i <= word.length - 1; i++) {
    let charAt = word.charAt(i).toLowerCase();
    if (charAt === 'a' ||
        charAt === 'e' ||
        charAt === 'i' ||
        charAt === 'o' ||
        charAt === 'u') {
        vowelCount++;
    }
}

console.log("Vowel Count is = " + vowelCount);