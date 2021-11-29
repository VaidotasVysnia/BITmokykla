function toBinary(num) {
    num = parseInt(num);
    if (!isFinite(num)) {
    return "";
    }
    if (num === 0) {
    return "0";
    }
    num *= num < 0 ? -1 : 1;
    const digits = [];
    while (num > 0) {
    digits.unshift(num % 2);
    num = (num - (num % 2)) / 2;
    }
    return digits.join("");
    }
    function toHex(num) {
    num = parseInt(num);
    if (!isFinite(num)) {
    return "";
    }
    if (num === 0) {
    return "0";
    }
    num *= num < 0 ? -1 : 1;
    const digits = [];
    while (num > 0) {
    let digit = num % 16;
    num = (num - (digit)) / 16;
    if (digit <= 9) {
    digit += 48;
    } else {
    digit = digit - 9 + 64;
    }
    digits.unshift(String.fromCharCode(digit));
    // digits.unshift(digit);
    }
    return digits.join("");
    // return String.fromCodePoint(...digits);
    }
    