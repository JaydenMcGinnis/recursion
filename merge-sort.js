// merge sort recursive function
function mergeSort(array) {
  // Base case: An array of 0 or 1 elements is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort each half and merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0; // Pointer for left array
  let j = 0; // Pointer for right array

  // Compare elements from both halves and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // Append remaining elements from the left array
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  // Append remaining elements from the right array
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}
