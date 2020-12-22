class Ducktypium {
  constructor(color) {
    if (["red", "blue", "yellow"].includes(color)) {
      this.color = color;
    } else {
      throw new Error();
    }
  }

  calibrationSequence = [];

  refract(refColor) {
    if (["red", "blue", "yellow"].includes(refColor)) {
      console.log(this.color, refColor);
      return refColor === this.color
        ? this.color
        : "redblue".includes(refColor) && "redblue".includes(this.color)
        ? "purple"
        : "redyellow".includes(refColor) && "redyellow".includes(this.color)
        ? "orange"
        : "yellowblue".includes(refColor) && "yellowblue".includes(this.color)
        ? "green"
        : "other";
    } else {
      throw new Error();
    }
  }

  calibrate(arr) {
    this.calibrationSequence = arr.sort().map((el) => el * 3);
  }
}

// The following would produce an error
// try {
//   const badColor = new Ducktypium("pink");
// } catch (e) {
//   console.log("Color must be red, yellow, or blue!");
// }

// Create a new instance of the class
const dt = new Ducktypium("blue");

// console.log(dt.color); // prints 'red'

// console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("yellow")); // prints 'purple'
// console.log(dt.refract("red")); // prints 'red'

// dt.calibrate([3, 5, 1]);

// console.log(dt.calibrationSequence); // prints [3, 9, 15]
