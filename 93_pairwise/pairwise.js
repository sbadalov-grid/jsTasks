export const pairwise = (array, num) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        result += i + j;
        array[i] = NaN;
        array[j] = NaN;
      }
    }
  }

  return result;
};
