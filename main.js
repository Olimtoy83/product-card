import './comments.js';
import './products-cards.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './homework-6.js';

class Car {
  constructor(brand, model, maxSpeed, color) {
    this.brand = brand;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.color = color;
  }

  start() {
    console.log(`${this.brand}, ${this.model}, ${this.maxSpeed}, ${this.color}, is started.`)
  }
}

class SportCar extends Car {
  constructor(brand, model, maxSpeed, color, acceleration) {
    super(brand, model, maxSpeed, color)
    this.acceleration = acceleration;
  }
  boost() {
    console.log(`${this.brand}, ${this.model}, ${this.maxSpeed}, ${this.color}, ${this.acceleration}`)
  }
}

class Truck extends Car {
  constructor(brand, model, maxSpeed, color, loadCapacity) {
    super(brand, model, maxSpeed, color)
    this.loadCapacity = loadCapacity;
  }
  loadCargo() {
    console.log(`${this.brand}, ${this.model}, ${this.maxSpeed}, ${this.color}, ${this.loadCapacity}`)
  }
}

class ElectricCar extends Car {
  constructor(brand, model, maxSpeed, color, batteryLevel) {
    super(brand, model, maxSpeed, color)
    this.batteryLevel = batteryLevel;
  }
  charge() {
    console.log(`${this.brand}, ${this.model}, ${this.maxSpeed}, ${this.color}, ${this.batteryLevel}`)
  }
}

const volvo = new Truck('Volvo', 'FH16', '180km/h', 'Black', '325.000кг');
volvo.start()
volvo.loadCargo()

const lixiang = new ElectricCar('Lixiang', 'Li L9', '190km/h', 'Gray', '102kWh');
lixiang.start()
lixiang.charge()