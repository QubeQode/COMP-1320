/*
* Project: COMP1320 Milestone 1
* File Name: main.js
* Description:
*
* Created Date:
* Author:
*
*/

const path = require('path');

const { unzip, readDir, grayScale } = require('./IOhandler');
const zipFilePath = path.join(__dirname, 'myfile.zip');
const pathUnzipped = path.join(__dirname, 'unzipped');
const pathProcessed = path.join(__dirname, 'grayscaled');


unzip(zipFilePath, pathUnzipped)
    .then(() => {readDir(pathUnzipped)})
    .catch((error) => console.error(error))