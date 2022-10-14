const fs = require('fs');

const readMyTextFile = (filepath, callback) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    })
};

const appendToMyTextFile = (filepath, callback) => {
    fs.appendFile(filepath, ` Some extra data I want to append.`, (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    })
};

readMyTextFile('file1.txt', (err, data) => {
    if (err) {
        console.log(`The given filepath does not exist.`);
    }
    console.log(data);
    appendToMyTextFile('file1.txt', (err) => {
        if (err) {
            console.log(`The given filepath does not exist.`)
        }
        readMyTextFile('file1.txt', (err, data) => {
            if (err) {
                console.log(`The given filepath does not exist.`);
            }
            console.log(data);
        })
    })
});

// 1. REMOVE RETURNS
// 2. CREATE CALLBACK PARAMS
// 3. WHEN CALLING FUNCTION ADD CALLBACK THAT DOES THING THAT REQUIRES RETURN
// 4. NEST THE FUNCTION CALLS IN THE ORDER OF EXECUTION YOU DESIRE
