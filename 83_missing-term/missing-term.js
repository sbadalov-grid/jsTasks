export const missingTerm = function (arr) {
  let alpha = (arr[arr.length - 1] - arr[0]) / arr.length;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== alpha) return arr[i] + alpha;
  }
};

// export function missingTerm(arr) {
//     const correctProgression = (arr[arr.length - 1] - arr[0]) / arr.length;
//     const preceding = arr.find((el, i) => el + correctProgression !== arr[i + 1]);

//     return preceding + correctProgression;
//   }
