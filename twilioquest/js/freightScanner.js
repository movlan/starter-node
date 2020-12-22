const scan = (arr) => {
  let contraband = 0;

  arr.forEach((el) => {
    if (el === "contraband") {
      contraband++;
    }
  });

  return contraband;
};
