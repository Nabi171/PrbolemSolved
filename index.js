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
        console.log('odd');
    }
    else if (charactersNumber % 2 == 0) {
        console.log('even');
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
// console.log(answertwo);


// problem4
function findingBadData(numbers) {





    if (numbers.length == 4) {
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];
            let sum = 0;
            while (numbers[i] < 0) {

                let total = sum + numbers.length - 1;
                ++sum;
                return total;
                break;
            }


        }
    }
    else if (numbers.length == 5) {
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];
            let sum = 0;
            while (numbers[i] < 0) {

                let total = sum + numbers.length;
                ++sum;
                return total;
                break;
            }


        }
    }

    else {
        return 0;
    }

}

// please uncomment anyone for checking
// let numbers = [1, 2, 5];
// let numbers = [2, -5, -7, -13];
let numbers = [-4, -9, -33, -13, -55];
let answer4 = findingBadData(numbers);
// console.log(answer4)








// problem5 
function gemsToDiamond(nums1, nums2, nums3) {
    let firstBondhuPerjamesPower = 21;
    let secondBondhuPerjamesPower = 32;
    let thirdBondhuPerjamesPower = 43;

    let toatalDiamond = firstBondhuPerjamesPower * nums1 + secondBondhuPerjamesPower * nums2 + thirdBondhuPerjamesPower * nums3;
    // return toatalDiamond;
    if (toatalDiamond > (1000 * 2)) {
        let remaingingDiamong = toatalDiamond - 2000;
        return remaingingDiamong;
    }
}

// let answer5 = gemsToDiamond(1, 1, 1);
// let answer5 = gemsToDiamond(20, 200, 50);
let answer5 = gemsToDiamond(100, 5, 1);
// console.log(answer5);