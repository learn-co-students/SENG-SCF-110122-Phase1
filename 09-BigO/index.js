// [2, 9, 1, 3]
// talk strategy what are the steps that i might take?
// ___________________________

// Linear Time O(n)
// Return border elements of matrix in nested arrays => top, right, bottom, left

// [
//  [a, b, c, d], 
//  [e, f, g ,h], 
//  [i, j, k, l],
//  [m, n, o, p]
// ]

// Output [[a, b, c, d], [d, h, l], [i, j, k, l], [a, e, i]]

function returnBorders(matrix) {
  const arr1 = matrix[0]
  const arr2 = []
  const arr3 = matrix[matrix.length - 1]
  const arr4 = []
  // create array populate it with the first subarray and the last subarray
  for(let i = 0; i < matrix.length; i++) {
    arr4.push(matrix[i][0])
    arr2.push(matrix[i][matrix[i].length - 1])
  }
  return [arr1, arr2, arr3, arr4]
}

returnBorders([["a","b","c","d"], ["e","f","g","h"], ["i","j","k","l"], ["m","n","o","p"]])








// ___________________________

//O(n^2)
function sort(arr){
  for(let i = 0; i < arr.length; i++) {
    console.log("outer loop")
    for(let j = i + 1; j < arr.length; j++) {
      console.log("inner loop")
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

// sort([2, 9, 1, 3,3,7,1,100,150])




console.log("Hi - Welcome to Big O")

function findEl(el, arr) {
  // return index of the el in the array 
  // if index is not in array, return -1
}

// worst case scenario
findEl(5, [1,2,3,4])



// 0  1 2 3