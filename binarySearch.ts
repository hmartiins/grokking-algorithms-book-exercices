function binarySearch<Number>(list: Number[], numberFound: Number): Number | null {
  let low = 0;
  let high = list.length - 1;

  let mid = 0;
  let guess: Number;
  while (high >= low) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];

    if (guess === numberFound) {
      return guess;
    } else if(guess > numberFound) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const myList = [3, 7, 11, 15, 17, 21, 23];

console.log(binarySearch(myList, 7));  // 7
console.log(binarySearch(myList, 5));  // null