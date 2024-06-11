function largestAndSmallestValues(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let val of arr) {
    if (val < smallest) {
      secondSmallest = smallest;
      smallest = val;
    } else if (val < secondSmallest && val!==smallest) {
      secondLargest = val;
    }
    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest && val!==largest) {
      secondLargest = val;
    }
  }
  return { largest, secondLargest, smallest, secondSmallest };
}
console.log(largestAndSmallestValues([3, 6, 2, 7, 3, 7]));
