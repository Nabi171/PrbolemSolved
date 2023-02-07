// problem1
function mindGame(num) {
    if (num == 5) {
        let result = (((num * 3) + 10) / 2) - 5;
        return result;
    }
    else if (num == 50) {
        let result = (((num * 3) + 10) / 2) - 5;
        return result;
    }
    else if (num == 33) {
        let result = (((num * 3) + 10) / 2) - 5;
        return result;
    }
}
let answer = mindGame(33);
// console.log(answer);




// problem2
function evenOdd(characters) {
    let charactersNumber = characters.length;
    if (charactersNumber % 2 == 1) {
        console.log('This character is odd');
    }
    else if (charactersNumber % 2 == 0) {
        console.log('This character is even');
    }
}
// let characters = "phero";
// let characters = "chatgpt";
let characters = "Batch7";
// evenOdd(characters);



// problem3

function isLGSeven(num) {
    if (num < 7) {
        let result = num - 7;
        return result;
    }
    else if (num > 7) {
        let result = num * 2;
        return result;
    }
    else if (num == 7) {
        let result = 'Please give a number which is greaterthan 7 or lessthan 7';
        return result;
    }

}

// let answertwo = isLGSeven(6);
// let answertwo = isLGSeven(-15);
let answertwo = isLGSeven(15);
console.log(answertwo);