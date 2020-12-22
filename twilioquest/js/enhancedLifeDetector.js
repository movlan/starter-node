let status = "";

switch (process.argv[2]) {
  case "0":
    status = "alive";
    break;

  case "1":
    status = "flowering";
    break;

  case "2":
    status = "shedding";
    break;

  default:
    status = "other";
    break;
}

console.log(status);
