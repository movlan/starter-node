const addFirstToLast = (arr) => {
  if (arr.length === 0) {
    return "";
  } else {
    return arr[0] + arr[arr.length - 1];
  }
};
