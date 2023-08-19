const rangeOfArray = (arr, n1, n2) => {
    const range = new Set();
    for (let x = n1; x <= n2; x++) {
        range.add(x);
    }
    for (const number of arr) {
        if (range.has(number)) {
            range.delete(number);
        }
    }
    return range.size === 0;
}
const inpArray = [1, 2, 3, 4, 5, 6]; 
const fNumber = 3; 
const sNumber = 5; 
const result = rangeOfArray(inpArray, fNumber, sNumber);
if (result) {
    console.log("Yes,the array contains all elements in the range.");
} else {
    console.log("No,it does not contain all the elements in the range.");
}



