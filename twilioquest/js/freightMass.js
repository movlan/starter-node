const calculateMass = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.length, 0);
};

console.log(calculateMass(["cat", "dog", "bird"])); // => 10
