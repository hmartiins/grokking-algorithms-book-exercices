#include <stdio.h>

int binarySearch(int[], int, int);

int main()
{
  int myList[] = {1, 3, 5, 7, 9};
  int len = sizeof(myList) / sizeof(myList[0]);

  printf("%d\n", binarySearch(myList, 3, len));  // 1
  printf("%d\n", binarySearch(myList, -1, len)); //-1
  return 0;
}

int binarySearch(int list[], int numberFound, int len)
{
  int low = 0;
  int high = len;
  while (high >= low)
  {
    int mid = (low + high) / 2;
    int guess = list[mid];

    if (guess == numberFound)
    {
      return mid;
    }
    else if (guess > numberFound)
    {
      high = mid - 1;
    }
    else
    {
      low = mid + 1;
    }
  }
  return -1; // number not found
}
