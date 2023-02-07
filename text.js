// ***********problem 1*********
function anaToVori(ana) {
    if (typeof ana !== 'number') {
        return 'Please give a Number';
    }
    else if (ana < 0) {
        return 'Please give a positive Number';
    }
    else if (ana == 0) {
        return 'Please give a positive Number';
    }
    else {
        let vori = (ana / 16);
        return vori;
    }
}
let ana = 32;
let anaConvertTovori = anaToVori(ana);
// console.log(anaConvertTovori); //the answer is 2
// ***********problem 2*********
function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity) {
    if (typeof jilapiQuantity !== 'number') {
        return 'Please give a Number';
    }
    else if (typeof singaraQuantity !== 'number') {
        return 'Please give a Number';
    }
    else if (typeof somucaQuantity !== 'number') {
        return 'Please give a Number';
    }
    else if (singaraQuantity == 0) {
        return 'Please give a positive Number';
    }
    else if (jilapiQuantity == 0) {
        return 'Please give a positive Number';
    }
    else if (somucaQuantity == 0) {
        return 'Please give a positive Number';
    }
    else if (singaraQuantity < 0) {
        return 'Please give a positive Number';
    }
    else if (jilapiQuantity < 0) {
        return 'Please give a positive Number';
    }
    else if (somucaQuantity < 0) {
        return 'Please give a positive Number';
    }
    else {
        let perSingaraPrice = 7;
        let perSomucaPrice = 10;
        let perJilapiPrice = 15;
        let sigaraTotalPrice = perSingaraPrice * singaraQuantity;
        let somucaTotalPrice = perSomucaPrice * somucaQuantity;
        let jilapiTotalPrice = perJilapiPrice * jilapiQuantity;
        let total = sigaraTotalPrice + somucaTotalPrice + jilapiTotalPrice;
        return total;
    }
}
let singaraQuantity = 1;
let somucaQuantity = 10;
let jilapiQuantity = 1;
let totalcost = pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity);
// console.log(totalcost); //the answer is 122
// ***********problem 3*********
function picnicBudget(students) {
    const firstHundredCost = 5000;
    const secondHundredCost = 4000;
    const moreThanTwohundreds = 3000;
    if (typeof students !== 'number') {
        return 'Please give a Number';
    }
    else if (students == 0) {
        return 'Please give a Number which greater than zero';
    }
    else if (students < 0) {
        return 'Please give a positive Number';
    }
    else if (students <= 100) {
        const firstConditionCost = students * firstHundredCost;
        return firstConditionCost;
    }
    else if (students <= 200) {
        const firsthundrendsCosting = 100 * firstHundredCost;
        const remainingStudents = students - 100;
        const secondRemainingCosting = remainingStudents * secondHundredCost;
        const totalcostingTour = secondRemainingCosting + firsthundrendsCosting;
        return totalcostingTour;
    }
    else {
        const firsthundrendsCosting = 100 * firstHundredCost;
        const secondhundredCosting = 100 * secondHundredCost;
        const remainingStudents = students - 200;
        const thirdConditionCosting = remainingStudents * moreThanTwohundreds;
        const totalForthirdCondition = firsthundrendsCosting + secondhundredCosting + thirdConditionCosting;
        return totalForthirdCondition;
    }
}
const students = 132;
const totalCostFortour = picnicBudget(students);
// console.log(totalCostFortour); //the answer is 628000
// ***********problem 4*********
function oddFriend(friends) {
    if (typeof friends == 'number') {
        return 'Please give a string';
    }
    else {
        for (let friend of friends) {
            if (friend.length % 2 == 1) {
                return friend;
            }
        }
    }
}
let friends = ['Kabira', 'Foyzan', 'Shihab', 'Junaed', 'Rasel', 'jowel', 'Tanjid', 'Tambir'];
let myfriend = oddFriend(friends);
    // console.log(myfriend); //The answer is Rasel