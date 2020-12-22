const scan = (arr) => {
  const result = [];

  arr.forEach((el, idx) => {
    if (el === "contraband") {
      result.push(idx);
    }
  });

  return result;
};
