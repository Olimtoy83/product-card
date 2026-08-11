class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (this.constructor === Drink) {
      throw new Error("Выберите конкретный напиток");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name}, ${this.size}, ${this.price}`;
  }

  getTemp() {
    return this.#temperature;
  }

  setTemp(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepareDrink() {
    console.log(`Напиток ${this.name} готовится!`);
  }

  serveDrink() {
    this.#prepareDrink();
    console.log(`Ваш ${this.name} готов!`);
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }
}

class Fresh extends Drink {
  constructor(name, size, price, temperature, fruitType) {
    super(name, size, price, temperature);
    this.fruitType = fruitType;
  }
}

class Cafe {
  constructor(nameCafe, location) {
    this.nameCafe = nameCafe;
    this.location = location;
  }

  getInfoCafe() {
    return `${this.nameCafe}, ${this.location}`;
  }

  orderDrink(drink) {
    drink.serveDrink();
  }
}

const lemonade = new Lemonade('Мохито', 1000, 700, 10, 'Лайм и мята');
const tea = new Tea('Чабрец', 500, 600, 95, 'Горные травы');
const coffee = new Coffee('Фильтр', 300, 250, 85, 'Кения', 'без молока');
const fresh = new Fresh('Апельсиновый свежевыжатый', 300, 350, 10, 'Апельсины');
const cafe = new Cafe('Андалусия', 'г.Хасавюрт ул.Воробьева 111');

console.log(cafe.getInfoCafe());
console.log(cafe.orderDrink(lemonade));
console.log(fresh.getInfo());