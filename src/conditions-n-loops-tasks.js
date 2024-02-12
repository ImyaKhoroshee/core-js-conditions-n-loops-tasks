/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return Math.abs(number) % 2 === 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const tempMax = a > b ? a : b;
  return c > tempMax ? c : tempMax;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */

function canQueenCaptureKing(queen, king) {
  let endOfGame = false;

  if (queen.x === king.x || queen.y === king.y) {
    endOfGame = true;
  } else if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) {
    endOfGame = true;
  }
  return endOfGame;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  let result = '';

  while (number > 9) {
    number -= 10;
    result += 'X';
  }
  switch (number) {
    case 9:
      result += 'IX';
      return result;
    case 8:
      result += 'VIII';
      return result;
    case 7:
      result += 'VII';
      return result;
    case 6:
      result += 'VI';
      return result;
    case 5:
      result += 'V';
      return result;
    case 4:
      result += 'IV';
      return result;
    case 3:
      result += 'III';
      return result;
    case 2:
      result += 'II';
      return result;
    case 1:
      result += 'I';
      return result;
    default:
      return result;
  }
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0 && i < numberStr.length) {
      result += ' ';
    }
    switch (numberStr[i]) {
      case '9':
        result += 'nine';
        break;
      case '8':
        result += 'eight';
        break;
      case '7':
        result += 'seven';
        break;
      case '6':
        result += 'six';
        break;
      case '5':
        result += 'five';
        break;
      case '4':
        result += 'four';
        break;
      case '3':
        result += 'three';
        break;
      case '2':
        result += 'two';
        break;
      case '1':
        result += 'one';
        break;
      case '0':
        result += 'zero';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        break;
    }
  }
  return result;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseString += str[i];
  }
  return str === reverseString;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const hasDigit = false;
  const numToString = String(num);
  for (let i = 0; i < numToString.length; i += 1) {
    if (+numToString[i] === digit) {
      return !hasDigit;
    }
  }
  return hasDigit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < arr.length; i += 1) {
    left += arr[i];
    for (let j = arr.length - 1; j >= i + 2; j -= 1) {
      right += arr[j];
    }
    if (left === right) {
      return i + 1;
    }
    right = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  const totalElements = size * size;
  let col = 0;
  let row = 0;
  let changeCol = 0;
  let changeRow = 1;
  let steps = size;
  let direction = 0;
  for (let digit = 0; digit < totalElements; digit += 1) {
    matrix[col][row] = digit + 1;
    steps -= 1;

    if (steps === 0) {
      steps = size - 1 - Math.trunc(direction / 2);

      const temp = changeCol;
      changeCol = changeRow;
      changeRow = -temp;
      direction += 1;
    }
    col += changeCol;
    row += changeRow;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixCopy = matrix;
  const resultMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    resultMatrix[i] = [...matrix[i]];
  }
  for (let j = 0; j < resultMatrix.length; j += 1) {
    for (let i = matrix.length - 1; i >= 0; i -= 1) {
      matrixCopy[j][matrix.length - i - 1] = resultMatrix[i][j];
    }
  }
  return matrixCopy;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function swap(list, leftIdx, rightIdx) {
  const copyArr = list;
  const temp = list[leftIdx];
  copyArr[leftIdx] = list[rightIdx];
  copyArr[rightIdx] = temp;
}
function partition(list, left, right) {
  const ind = Math.floor((right + left) / 2);
  const pivot = list[ind];
  let i = left;
  let j = right;

  while (i <= j) {
    while (list[i] < pivot) {
      i += 1;
    }
    while (list[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(list, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
}
function sortByAsc(arr, left = 0, right = arr.length - 1) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      sortByAsc(arr, left, index - 1);
    }
    if (index < right) {
      sortByAsc(arr, index, right);
    }
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let realIteration = iterations;
  let resultStr = str;

  for (let i = 1; i <= iterations; i += 1) {
    let left = '';
    let right = '';
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        left += resultStr[j];
      } else {
        right += resultStr[j];
      }
    }
    resultStr = left + right;

    if (str === resultStr) {
      realIteration = iterations % i;
      resultStr = str;
      for (let k = 0; k < realIteration; k += 1) {
        left = '';
        right = '';
        for (let j = 0; j < str.length; j += 1) {
          if (j % 2 === 0) {
            left += resultStr[j];
          } else {
            right += resultStr[j];
          }
        }
        resultStr = left + right;
      }
      return resultStr;
    }
  }
  return resultStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function findClosestBiggerDigit(array) {
  return array.filter((elem) => elem > array[0]).sort((a, b) => a - b)[0];
}

function getNearestBigger(number) {
  let extremeIndex = -1;
  const arrayFromNumber = [...String(number)].map((elem) => Number(elem));

  for (let i = arrayFromNumber.length - 1; i > 0; i -= 1) {
    if (arrayFromNumber[i] > arrayFromNumber[i - 1]) {
      extremeIndex = i - 1;
      break;
    }
  }
  if (extremeIndex === -1) {
    return number;
  }
  const properSequence = arrayFromNumber.splice(0, extremeIndex);
  const digitsToBeCombined = arrayFromNumber;
  const closestBiggerDigit = findClosestBiggerDigit(digitsToBeCombined);

  const index = digitsToBeCombined.findIndex(
    (elem) => elem === closestBiggerDigit
  );
  digitsToBeCombined.splice(index, 1);
  digitsToBeCombined.sort((a, b) => a - b);

  return Number(`
  ${properSequence.join('')}${closestBiggerDigit}${digitsToBeCombined.join('')}
  `);
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
