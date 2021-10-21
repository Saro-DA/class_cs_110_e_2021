
let lines = 5;

let result = "";

let charsInLine;

while (lines >= 1) {
    charsInLine = lines;
    while (charsInLine >= 1) {
        result += "😎";
        charsInLine--;
    }
    result += '\n';
    lines--;
}

console.log(result);