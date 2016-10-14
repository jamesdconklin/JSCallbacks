class Clock {
  constructor() {
    this.ms = Date.parse(new Date());
    this.printTime();
    window.setInterval(() => {
      this.ms += 1000;
      this.printTime();
    }, 1000);
  }

  printTime() {
    console.log(new Date(this.ms));
  }

}
let c = new Clock()
