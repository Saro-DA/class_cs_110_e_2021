
console.log(
    formatText(
        'Saro',
        'Deravanesian',
        'male',
        'Your order has been confirmed. Thank you for visiting us!'
    )
);

console.log(
    formatText(
        'Gayaneh',
        'Martirosyan',
        'female',
        'Your order has been confirmed. Thank you for visiting us!'
    )
);

function formatText(firstName, lastName, gener, text) {
    return `Dear ${formatTitle(gener)} ${formatName(firstName, lastName)}
${text}`
}

function formatName(firstName, lastName) {
    return lastName + ' ' + firstName[0] + '.';
}

function formatTitle(gener) {
    if (gener === 'male') return 'Mr';
    if (gener === 'female') return 'Mrs';

    return 'other';
}