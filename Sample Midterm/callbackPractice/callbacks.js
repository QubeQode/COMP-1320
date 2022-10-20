const fs = require('fs');

const readMyTextFile = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data)
        })
    })
};

const appendToMyTextFile = (filepath, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filepath, data, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        })
    })
}

readMyTextFile('file1.txt')
.then((data) => console.log(data))
.then(() => appendToMyTextFile('file1.txt', ` Some extra stuff.`))
.then(() => readMyTextFile('file1.txt'))
.then((data) => console.log(data))
.catch((err) => console.log(err));

// 1. REMOVE RETURNS
// 2. CREATE CALLBACK PARAMS
// 3. WHEN CALLING FUNCTION ADD CALLBACK THAT DOES THING THAT REQUIRES RETURN
// 4. NEST THE FUNCTION CALLS IN THE ORDER OF EXECUTION YOU DESIRE

// const readMyTextFile = (filepath, callback) => {
//     fs.readFile(filepath, "utf-8", (err, data) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }
//         callback(null, data);
//     })
// };

// const appendToMyTextFile = (filepath, callback) => {
//     fs.appendFile(filepath, ` Some extra data I want to append.`, (err) => {
//         if (err) {
//             callback(err);
//             return;
//         }
//         callback(null);
//     })
// };

// readMyTextFile('file1.txt', (err, data) => {
//     if (err) {
//         console.log(`The given filepath does not exist.`);
//     }
//     console.log(data);
//     appendToMyTextFile('file1.txt', (err) => {
//         if (err) {
//             console.log(`The given filepath does not exist.`)
//         }
//         readMyTextFile('file1.txt', (err, data) => {
//             if (err) {
//                 console.log(`The given filepath does not exist.`);
//             }
//             console.log(data);
//         })
//     })
// });