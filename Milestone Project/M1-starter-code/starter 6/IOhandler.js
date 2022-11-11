/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 6th November 2022
 * Author: Mohammad Fakih
 */

const { createReadStream, createWriteStream } = require('fs');
const { readdir } = require('fs').promises;
const { Extract } = require('unzipper');
const { PNG } = require('pngjs');
const { join, sep } = require("path");

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

const readDir = dir => {
  return readdir(dir)
    .then((data) => {
      const arrayOfImgs = [];
      for (let file of data) {
        if (file.endsWith('.png')) {
          arrayOfImgs.push(join(dir, file));
        }
      };
      return arrayOfImgs;
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
  return createReadStream(pathIn)
    .pipe(
      new PNG({
        filterType: 4,
      })
    )
    .on('parsed', function () {
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          let idx = (this.width * y + x) << 2;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];
          const grayscale = (r + g + b) / 3;
          this.data[idx] = grayscale;
          this.data[idx + 1] = grayscale;
          this.data[idx + 2] = grayscale;
        }
      }
      this.pack().pipe(createWriteStream(pathOut));
    });
};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {array} arrayOfImgs 
 * @param {string} pathProcessed 
 * @return {promise}
 */

const applyGrayscale = (list, pathProcessed) => {
  for (let file of list) {
      const imgFileNameArray = file.split(sep);
      const imgFileName = imgFileNameArray[imgFileNameArray.length - 1];
      grayScale(file, `${pathProcessed}${sep}${imgFileName}`);
  }
};

module.exports = {
  unzip,
  readDir,
  applyGrayscale,
};