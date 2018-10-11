'use strict';
let mCounter = 0;
let qCounter = 0;
function qSort (array, start=0, end=array.length){
  qCounter++;
  //base case
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  let j = start;
  const pivot = array[end-1]; 
  for (let i=start; i < end; i++) {
    if (array[i] < pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

function swap(array, i, j) {
  qCounter++;
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function mSort(array) {
  mCounter++;
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);

  return merge(left, right, array);
}

function merge(left, right, array) {
  mCounter++;
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }

    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }

  return array;
}

function sortInPlace(array) {
  array.forEach((num, i) => {
    const j = Math.floor(Math.random()*(array.length));
    swap(array, i, j);
  });

  console.log(array);
}



//Sorting books
//  Create an object
//  Map through the book titles array
//  Compute a hash value by multiplying each letter's index+1 by the ascii code of the letter 
//  Add all the resulting values together to create a hash. 
//  Add key/value pair to object, where the key is the hash and the value is the title.
//  Return the hash.
//  When the mapping is done, you will have an array of hashes and an object of key value pairs.
//  Sort the hashes array with qSort.
//  Map the sorted hashes array.
//  For each hash in the array, return obj[hash]
//  Now the sorted hashes array is a sorted titles array.
//  Return the array.


function main() {
  const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
  // qSort(array);
  // console.log(array);

  mSort(array);
  console.log(array);
  console.log('Operations count: ', mCounter);

  let arr = [3, 2, 8, 4, 9, 5, 1, 6, 7];
  sortInPlace(arr);

}
main();