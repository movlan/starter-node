if (process.argv[2] % 3 === 0 && process.argv[2] % 5 === 0) {
  console.log("JavaScript");
  return;
}
if (process.argv[2] % 3 === 0) {
  console.log("Java");
  return;
}
if (process.argv[2] % 5 === 0) {
  console.log("Script");
  return;
}

console.log(process.argv[2]);
