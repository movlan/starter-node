const isAlive = parseInt(process.argv[2]) === 0 ? true : false,
  isDry = parseInt(process.argv[3]) > 10 ? true : false;

if (isAlive && isDry) {
  console.log("WATER");
}
