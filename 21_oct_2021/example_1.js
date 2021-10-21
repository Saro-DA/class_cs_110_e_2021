
const triHeight = 10;
const triBase = 10;

const rectHeight = 25;
const rectWidth = 2;

const triArea = (triHeight * triBase) / 2;
const rectArea = rectHeight * rectWidth;

console.log("Triangle area is = " + triArea);
console.log("Recangle area is = " + rectArea);

if (triArea > rectArea) {
    console.log("Triangle is larger than rectangle.");
} else if (triArea < rectArea) {
    console.log("Rectangle is larger than triangle.");
} else {
    console.log("Rectangle is equal to triangle.");
}


