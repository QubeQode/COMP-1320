/* eslint-disable no-console */
/* eslint-disable no-shadow */
const process = require('process');
const fs = require('fs');
const { findDistance } = require('./mathHelpers');

const userInput = process.argv.slice(2);
const dirName = 'dataPoints';

const processInput = (userInput, dirName) => {
  fs.mkdir(`../${dirName}`, (err) => {
    if (err && err.code === 'EEXIST') {
      processInput(userInput, `TEMP_${dirName}`);
    } else {
      const initMessage = `Your input co-ordinates are (${userInput[0]}, ${userInput[1]}), (${userInput[2]}, ${userInput[3]}).`;
      fs.writeFile(`../${dirName}/points.txt`, initMessage, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Content Saved.');
          const x1 = parseInt(userInput[0], 10);
          const y1 = parseInt(userInput[1], 10);
          const x2 = parseInt(userInput[2], 10);
          const y2 = parseInt(userInput[3], 10);
          const foundDistance = findDistance(x1, y1, x2, y2);
          const outputMessage = `The distance between your two points: (${userInput[0]}, ${userInput[1]}), (${userInput[2]}, ${userInput[3]}) is ${foundDistance}.`;
          fs.appendFile(`../${dirName}/points.txt`, outputMessage, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      });
    }
  });
};

processInput(userInput, dirName);

/*
 * ProcessInputs:
 * 1. Takes the array from process.argv
 * 2. it creates a unique folder + file for every set of arguments
   initial folder = dataPoints
    every iteration after
      folder = temp_+[prior iteration folder name]
      console.log(`Folder "oldname" already exists. Creating a new folder for you called
      newname`)
   file = points.txt
 * 3. Inputs the arguments from the array in points.txt and saves to relevant directory
 * 4. console.log('Content Saved')
 * 5. Inputs arguments into findDistance
 * 6. Appends 'The distance between your two points: (x1, y1), (x2, y2) is <distance>
 */

/*
 * 3 Pieces
 * 1. process.argv takes inputs from terminal and makes an array
 * 2. processInputs stores the data in a unique directory in .txt format
 * 3. processInputs passes data through algorithm and stores output in same file
 */

/*
 * Piece 1: Obtaining arguments
 * userInput = process.argv
 * This will be the argument we pass through processInputs
 * Can be done synchronously
 */

/*
 * Piece 2: Storage
 * ~needs some work with structuring~
 * fs.existsSync to see if the folder already exists
 * folder system through fs.makedir() applied recursively
 * fs.writefile() to store arguments in 'points.txt'
 * console.log('Content Saved')
 */

/*
 * Recursion Snippet
 * name = 'Temp_' + name <- iteration
 */

/*
 * Piece 3: Processing and logging output
 * const foundDistance = findDistance(userInput)
 * const x1 = userInput[2]
 * const x2 = userInput[4]
 * const y1 = userInput[3]
 * const y2 = userInput[5]
 * const outputMessage = `The distance between your two points: ($x1, $y1), ($x2, $y2) is
    $foundDistance`
 * fs.appendFile('folder_name/points.txt', outputMessage, callback)
 */

/*
 * Order of Dependencies
 * fs.makedir() needed to make a folder for fs.writefile to write in
 * fs.writefile needed to make a file for fs.appendFile to append to
 */
