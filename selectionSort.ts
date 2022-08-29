function minorSearch<Number>(arr: Number[]): number{
  let minor = arr[0];
  let minorIndex = 0;
  
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < minor) {
      minor = arr[i];
      minorIndex = i;
    }
  }

  return minorIndex;
}

function selectionSort<Number>(arr: Number[]): Number[] | null {
  const newArr: Number[] = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let minor: number = minorSearch(arr);
    newArr.push(arr.splice(minor, 1)[0]);
  }

  return newArr;
}

console.log(selectionSort([3, 33, 15, 8, 24, 69, 7, 3, 13]));
