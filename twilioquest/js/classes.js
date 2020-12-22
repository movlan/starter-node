class Materializer {
  constructor(target) {
    this.target = target;
  }

  activated = false;

  activate() {
    this.activated = !this.activated;
  }

  materialize() {
    if (this.activated) {
      return this.target;
    }
  }
}
