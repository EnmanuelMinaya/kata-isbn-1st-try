
function removeHyphens(isbn) {
    return isbn.split('').map((char) => char === "-" ? '' : char).join('');
}

function isTenDigits(isbn) {

    if (isbn.length === 10)
        return true;
    else
        return false;
}
module.exports = { isTenDigits, removeHyphens };