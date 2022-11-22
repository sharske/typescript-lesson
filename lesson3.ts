const makeArray = (num: number, length: number) => {
  let array: number[] = [];
  for (let i = 1; i <= length; i++) {
    array.push(num);
  }
  return array;
};

// [5,5,5,5,5,5,5,5]
console.log(makeArray(5, 8));
