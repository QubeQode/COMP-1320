const process = require('process');
const fs = require('fs');
const { findDistance } = require('./mathHelpers');

/*
 * ProcessInputs:
 * 1. Takes the array from process.argv
 * 2. it creates a unqiue folder + file for every set of arguments
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

let userInput = process.argv;

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
 * const x1 = userInput[0]
 * const x2 = userInput[2]
 * const y1 = userInput[1]
 * const y2 = userInput[3]
 * const outputMessage = `The distance between your two points: ($x1, $y1), ($x2, $y2) is
    $foundDistance`
 * fs.appendFile('folder_name/points.txt', outputMessage, callback)
 */

/*
 * Order of Dependencies
 * fs.existsSync needed to see what prior folder exists
 * fs.makedir() needed to make a folder for fs.writefile to write in
 * fs.writefile needed to make a file for fs.appendFile to append to
 */

/*
 * Have I understood the problem correctly?
 * Is fs.existsSync the right solution here?
 * How do you structure a callback nest?
 * Recursion = working way to base case + shooting forwards
    How do I format my base cases for the recursive formula?
 */
