const ogArray = [0, 1, 2, 3, 4];
const flippedArray = [];

// // Infinite Loop
// const arrayReverse = (array) => {
//     const elementToFlip = array[array.length - 1];
//     if (array.isEmpty) {
//         return console.log(flippedArray);
//     }
//     array.splice(array.length - 1, 1);
//     flippedArray.push(elementToFlip);
//     arrayReverse(array);
// };   

// console.log(arrayReverse(ogArray));

const ayaReverse = (array) => {
    if (array.length === 0) return [];
    if (array.length === 1) return array;

    const lastElement = array.pop();
    return [lastElement, ...ayaReverse(array)];
}

console.log(ayaReverse([...ogArray]));

const reverseArray = (array) => {
    const output = [];
    for (let lastElement = array.length - 1; lastElement> -1; lastElement--){
        output.push(array[lastElement]);
    }
    return output;
}

console.log(reverseArray(ogArray));