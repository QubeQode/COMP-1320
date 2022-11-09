/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */

const { createReadStream, createWriteStream } = require('fs');
const { readdir } = require('fs').promises;
const { Extract } = require('unzipper');
const { PNG } = require('pngjs');
const { extname, join } = require("path");
const decompress = require('decompress');

/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */

const unzip = (pathIn, pathOut) => {
  return createReadStream(pathIn)
    .pipe(
      Extract({ path: pathOut })
    )
    .promise()
    .then(() => console.log(`Extraction operation complete`))
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */

// 
// return new Promise((resolve, reject) => {
//   readdir(dir, (err, data) => {
//     if(err) {
//       reject(err);
//     } else {
//       const arrayOfImgs = [];
//       for (let file of data) {
//         if (extname === '.png') {
//           arrayOfImgs.push(join(dir, file));
//         }
//       }
//     resolve(arrayOfImgs);
//     }
//   });
// });

const readDir = dir => {
    return readdir(dir, 'utf-8')
      .then((data) => {
        const arrayOfImgs = [];
        for (let file of data) {
          console.log(file);
          if (file.endsWith('.png')) {
            arrayOfImgs.push(join(dir, file));
          }
        }
        let displayedArray = console.log(arrayOfImgs);
        return displayedArray;
      })
};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {


};

module.exports = {
  unzip,
  readDir,
  grayScale
};