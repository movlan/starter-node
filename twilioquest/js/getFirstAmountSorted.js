const getFirstAmountSorted = (arr, idx) => {
  return arr.sort().slice(0, idx);
};

const outputArray = getFirstAmountSorted(["bird", "dog", "cat", "ant"], 2);
// outputArray is now ['ant', 'bird']

console.log(outputArray);
