function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((high + low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    mergeArrInPlace(arr, low, high);
  }
}

function mergeArrInPlace(arr, low, high) {
  let mid = Math.floor((low + high) / 2),
    i = low,
    j = mid + 1,
    temp = [];
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= high) {
    temp.push(arr[j]);
    j++;
  }
  let k = 0;
  while (k < temp.length) {
    arr[low++] = temp[k++];
  }
  console.log("res==", i, j, temp, arr);
}

// mergeArrInPlace([8, 5, 11, 7], 2, 3);

mergeSort([8, 5, 3, 7, 6, 1, 4, 2, 9], 0, 7);
// mergeInPlace([8, 9, 3], 0, 2);
