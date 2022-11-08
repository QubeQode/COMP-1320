const { writeFile, readFile, appendFile } = require("fs").promises;
// fs.createReadStream and fs.createWriteStream cannot be used with .promises
// Solution: const { createReadStream, createWriteStream } = require('fs');
const { EOL } = require("os");

// The usage of .promises in the require statement auto generates the following code:

// readFilePromise = (fname) => {
//     return new Promise((resolve, reject) {
//         fs.readFile(fname, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// writeFilePromise = (fname, content) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(fname, content, (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(err);
//             }
//         });
//     });
// };

// appendFilePromise = (fname, content) => {
//     return new Promise((resolve, reject) => {
//         fs.appendFile(fname, content, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(err);
//             }
//         })
//     })
// }

const viewAllSupply = (coffeeType) => {
    return readFile('supply.txt', 'utf-8')
        .then((data) => {
            let counter = 0;
            for (const item of data.split(EOL)) {
                if (item === coffeeType) {
                    counter++;
                }
            }
        return counter;
        });
};

const addSupply = (coffeeType) => {
    return appendFile('supply.txt', `${EOL}${coffeeType}`);
};

const deleteSupply = (coffeeType, quantity) => {
    return readFile('supply.txt', 'utf-8')
        .then((data) => {
            const splitData = data.split(EOL);
            const newSupply = [];
            for (let i = 0; i < splitData.length; i++) {
            const currentItem = splitData[i];
                if (quantity === "*") {
                    if (currentItem != coffeeType) {
                    newSupply.push(currentItem);
                    }
                } else {
                    if (currentItem === coffeeType && quantity > 0) {
                    quantity--;
                    continue;
                    } else {
                    newSupply.push(currentItem);
                    }
                }
            }
       
        })
        .then(() => writeFile('supply.txt', newSupply.join(EOL)))
            .then(() => {
                const deletionMsg =
                quantity === "*"
                    ? `All coffee(s) deleted`
                    : `${originalQuantity - quantity} ${coffeeType} coffee(s) deleted.`;
            return deletionMsg;
        });
}

//Await Async

try {
    console.log(await viewAllSupply('MR'));
    console.log(await addSupply('MR'));
    console.log(await viewAllSupply('MR'));
    console.log(await deleteSupply('MR', 2));
} catch (error) {
    console.error(error);
}




// const viewAllSupply = (coffeeType, cb) => {
//   fs.readFile("supply.txt", "utf8", (err, data) => {
//     if (err) {
//       return cb(err, null);
//     }
//     let counter = 0;
//     for (const item of data.split(EOL)) {
//       if (item === coffeeType) {
//         counter++;
//       }
//     }
//     cb(null, counter);
//   });
// };


// const addSupply = (coffeeType, cb) => {
//   fs.appendFile("supply.txt", `${EOL}${coffeeType}`, (err) => {
//     if (err) {
//       return cb(err, null);
//     }
//     cb(null);
//   });
// };

// const deleteSupply = (coffeeType, quantity, cb) => {
//   const originalQuantity = quantity;
//   fs.readFile("supply.txt", "utf8", (err, data) => {
//     if (err) {
//       return cb(err);
//     }
//     const splitData = data.split(EOL);
//     const newSupply = [];
//     for (let i = 0; i < splitData.length; i++) {
//       const currentItem = splitData[i];
//       if (quantity === "*") {
//         if (currentItem != coffeeType) {
//           newSupply.push(currentItem);
//         }
//       } else {
//         if (currentItem === coffeeType && quantity > 0) {
//           quantity--;
//           continue;
//         } else {
//           newSupply.push(currentItem);
//         }
//       }
//     }
//     fs.writeFile("supply.txt", newSupply.join(EOL), (err) => {
//       if (err) {
//         return cb(err);
//       }
//       const deletionMsg =
//         quantity === "*"
//           ? `All coffee(s) deleted`
//           : `${originalQuantity - quantity} ${coffeeType} coffee(s) deleted.`;
//       cb(null, deletionMsg);
//     });
//   });
// };

// viewAllSupply("MR", (err, count) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(count);
//   addSupply("MR", (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     viewAllSupply("MR", (err, count) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(count);
//       deleteSupply("MR", 2, (err, msg) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log(msg);
//         viewAllSupply("MR", (err, count) => {
//           if (err) {
//             return console.log(err);
//           }
//           console.log(count);
//           deleteSupply("MR", "*", (err, msg) => {
//             if (err) {
//               return console.log(err);
//             }
//             console.log(msg);
//             viewAllSupply("MR", (err, count) => {
//               if (err) {
//                 return console.log(err);
//               }
//               console.log(count);
//             });
//           });
//         });
//       });
//     });
//   });
// });