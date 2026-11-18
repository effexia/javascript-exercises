const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[\s\p{P}]/gu, "");
    let reversedString = newString.split("").reverse().join("");
    if( newString == reversedString){
        return true;
    } else return false
};

// Do not edit below this line
module.exports = palindromes;
