# Lab 3 - Callback Functions + Callback Queue:

## Core Functionality

- Program accepts arguments through the terminal

    - `x1`
    - `y1` 
    - `x2`
    - `y2`

<br>

- Creates a directory `dataPoints` asynchronously.

- Takes the values input in the terminal and writes them to `points.txt` within the `dataPoints` 
folder.

- Uses the arguments to calculate the distance between two points and appends the variables and 
output to the bottom of the file.

<br>

## Task 1

Secondary file called `mathHelpers.js` contains

1. `squareRoot` function

2. `squareValue` function

3. `findDistance` function which calls on the prior two

`findDistance` is to be exported from this file.

<br>

## Task 2

Create `main.js` file which uses `process.argv` to get arguments passed in from the terminal.

Import `findDistance` into `main.js`.

<br>

## Task 3

`main.js` should have the following structure

- The folder `dataPoints` must be created using `fs.mkdir` function in `Node JS`.

- A function `processInput` that takes user's input in terminal and writes to `points.txt`

- `points.txt` should be saved in a folder `dataPoints`

- After function has written to file prints message in terminal `Content saved.`

<br>

## Task 4

Use `fs.appendFile` to add `findDistance` output to end of file. Prints the followng message

`The distance between your two points: (x1, y1), (x2, y2) is $foundDistance`

<br>

# Mathematical Functionality

1. `calcDiff` function - `(x2-x1)` / `(y2-y1)`

2. `square` function - `2 ** (xDiff)` / `(yDiff)`

3. `squareRoot` function -  `Math.sqrt(xDiffSqr + yDiffSqr)`

4. `findDistance` function - introduces shared parameters and synchronously calls helper functions 
to produce output of distance

<br>

# Terminal Interfacing + Logging Output

- `module.exports = { findDistance };` - export composite mathematical function

- `const process = require('process');` - import `process` module onto main file for `process.argv`

- `const fs = require('fs');` - import `fs` module onto main file for `fs.appendFile`

- `const { findDistance } = require('./mathHelpers.js);` - import composite function into main file

<br>

## `process.argv`

A *synchronous* process that returns an array of

- **Index 0:** Absolute pathname of the directory that executes the Node.js runtime environment

- **Index 1:** Path to the JS file being executed

- **Index 2+:** Arguments interpreted from the console

<br>

## Understanding Callback Form in Node

Callbacks are used to code asynchronously in Node. By calling the function at the completion of a 
given task, blocking is prevented.

Callback functions allow the program to run other code till a specified task is completed.

<br>

### Callback Syntax

`async.procedure("file_path", params, callback(err, params) {`

|-----`(err) ? // Handle error : // do thing`

`});`

- `async.procedure` and associated parameters attempt to perform the task they are hardcoded to 
perform.

<br>

- The `callback` is then assosciated with all its original parameters. Though it is given a new 
first parameter `err`.

<br>

- If the `async.procedure` cannot perform its task, the `callback` function will inherit the "error"
 value from it. And the parameter `err` will return `true`.

<br>

- However if the `err` parameter returns false; and thereby the process is working as intended, the 
`callback` function will instead perform its intended output.

<br>

## `fs.mkdir`

Node API used to create a directory *asynchronously*.

Accepts the following parameters

`fs.mkdir(path[, options], callback)`

<br>

Where

- **path** = path of the created directory

- **options** = optional argument determining who can read, write or search a directory/file

- **callback** = inherits argument `err` if asynchronous procedure is erronious and outputs error 
message. Otherwise performs an intended background task with other inherited arguments.

<br>

## `fs.appendFile`

Node API used to add data to the end of a file *asynchronously*.

Accepts the following parameters

`fs.appendFile(path, data[, options], callback)`

<br>

Where

- **path** = path to the filename or a file descriptor for where the data is appended to

- **data** = data that is to be appended

- **options** = optional argument determining how the data is encoded (utf8 default)

- **callback** = inherits argument `err` if asynchronous procedure is erronious and outputs error 
message. Otherwise performs an intended background task with other inherited arguments.
