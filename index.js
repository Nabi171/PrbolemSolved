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


