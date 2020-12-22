class TargetingSolution {
  constructor(cords) {
    this.x = cords.x;
    this.y = cords.y;
    this.z = cords.z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}
