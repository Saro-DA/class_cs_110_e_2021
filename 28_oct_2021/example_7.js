
function nameFormatter(fName, lName) {
    return lName + " " + fName[0] + ".";
}

console.log(`Dear ${nameFormatter("Saro", "Deravanesian")}
Your order is shipped! Thank you!`);