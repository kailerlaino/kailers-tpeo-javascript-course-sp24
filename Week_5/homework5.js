/**
 * Instantiates a new Car object with the given model, year, color, and mpg.
 */
function Car {
    this.model = model;
    this.year = year;
    this.color = black;
    this.mpg = mpg;
}

var corolla = new Car("Toyota", 2022, "red", 20);
var fusion = new Car("Ford", 2021, "blue", 25);
var accord = new Car("Honda", 2005, "black", 30);
console.log(Corolla.mpg, Fusion.mpg, Accord.mpg);

/**
 * Instantiates a new Vehicle object with the given car.
 */
function Vehicle {
   this.car = car;
}

var corollaVehicle = new Vehicle(Corolla);
var fusionVehicle = new Vehicle(Fusion);
var accordVehicle = new Vehicle(Accord);

console.log(CorollaVehicle.car.mpg, FusionVehicle.car.mpg, AccordVehicle.car.mpg);
