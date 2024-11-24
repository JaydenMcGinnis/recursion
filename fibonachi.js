// Recursive fibonachi function
function fibsRec(n, array = [], prev = 0, next = 1) {
  let placeholder = 0;
  if (n == 0) {
    return;
  } else {
    array.push(prev);
    placeholder = next + prev;
    prev = next;
    next = placeholder;
    fibs(n - 1, array, prev, next);
  }
  return array;
}

function mergeSort(arr) {
  // Split array until each item is split into own array
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);

  return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge(arrLeft, arrRight) {
  let i = 0;
  let j = 0;
  const sortedArray = [];
  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      sortedArray.push(arrLeft[i]);
      i++;
    } else {
      sortedArray.push(arrRight[j]);
      j++;
    }
  }
  return [...sortedArray, ...arrLeft.slice(i), ...arrRight.slice(j)];
}
