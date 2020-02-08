function bigestSumOfTwoElements(array) {
    if (array.length == 1 )
        return array[0];
    else if (array == '') {
        return false;
    }
    else {
        let sortedArray = array.sort();
        let reversedArray = sortedArray.reverse();
        let addNumbers = reversedArray[0] + reversedArray[1];
        return addNumbers;
    }

}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([])); 
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12])) 