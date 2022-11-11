/*
* Project: COMP1320 Milestone 1
* File Name: main.js
* Description:
*
* Created Date: 6th November 2022
* Author: Mohammad Fakih
*/

const { join, sep } = require('path');
const { unzip, readDir, applyGrayscale } = require(`.${sep}IOhandler`);

const zipFilePath = join(__dirname, 'myfile.zip');
const pathUnzipped = join(__dirname, 'unzipped');
const pathProcessed = join(__dirname, 'grayscaled');

/*
 * Note on the variables defined below: 
 *
 * There were some specific bugs blocking progress in the milestone. Since I was unable to resolve
 * them in a timely fashion I have introduced a vague unit testing structure just to allow me to
 * move forward.
 * 
 * Apologies for any inconvenience or confusion this causes. I will try to use nomenclature to make
 * it clear what elements of the structure are involved in unit testing.
 */



// const mockZippedImgPath = `./testZip.zip`; 
// const mockUnzippedImgPath = './unzipped';
// const mockArrayInputPath = './unzipped/testZip';
// const mockProcessedImgPath = './testGrayScale';
// const mockArrayOfPngs = [
//     'unzipped\\testZip\\test1.png',
//     'unzipped\\testZip\\test2.png',
//     'unzipped\\testZip\\test3.png'
// ];

/**
 * Unit Test: unzip - mocking data input to test it is outputting correctly
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 * 
 * Expected Output: unzip decompresses the file into the dir 'unzipped'
 * Known Bug: unzip will replicate the file and contents instead of just contents
 */

// unzip(mockZippedImgPath, mockUnzippedImgPath);

/**
 * Unit Test: readDir - mocking filepath input to test it is outputting correctly
 * 
 * @param {string} path 
 * @return {promise}
 * 
 * Expected Output: readDir returns an array of filepaths for pngs in the terminal
 * Known Bug: readDir will not return and instead output 'Promise { <pending> }'
 */

// console.log(readDir(mockArrayInputPath));

/**
 * Unit Test: grayScale - mocking array input to test if it outputs the correct transformation to
 *                        the correct file destination
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 * 
 * Expected Output: grayScale transforms images to grayscale and writes them to dir 'testGrayScale'
 */

// From here on out it is the call order structure for IOhandler funcs

unzip(zipFilePath, pathUnzipped)
    .then(() => readDir(pathUnzipped))
    .then((arrayOfImgs) => {
       applyGrayscale(arrayOfImgs, pathProcessed);
    })
    .catch((error) => console.error(error));
