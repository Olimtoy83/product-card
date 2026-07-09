const user = {
  name: "Олим",
  surname: "Турсунов",
  age: 42,
  status: 'Женат',
  gender: 'М',
  country: "Саудовская Аравия",
  city: "Медина",
  email: "Olimtoy83@gmail.com",
  work: "Сектор сопровождения программных обеспечений",
  position: "Начальник сектора "
};

const car = {
  brand: "KIA",
  model: "Karnival",
  year: 2022,
  color: "grey",
  transmission: "AT"
};

car.owner = user;

function ensureMaxSpeed(car) {
  if (!Object.hasOwn(car, 'maxSpeed')) {
    car.maxSpeed = 220;
  }
}

ensureMaxSpeed(car);
console.log(car);

function showPropertyValue(obj, propertyName) {
  console.log(obj[propertyName]);
}

showPropertyValue(car, "brand");
showPropertyValue(user, "city");

const products = ["яблоки", "бананы", "помидоры", "огурцы", "хлеб", "молоко", "сыр", "масло", "сахар", "соль"];

products.push("чай");

const fullLengthFilmList = [
  {
    name: 'Оппенгеймер',
    releaseYear: 2023,
    country: 'США',
    genre: 'биографическая драма',
  },
  {
    name: 'Интерстеллар',
    releaseYear: 2014,
    country: 'США',
    genre: 'научная фантастика',
  },
  {
    name: 'Паразиты',
    releaseYear: 2019,
    country: 'Южная Корея',
    genre: 'сатирический триллер',
  },
  {
    name: 'Бегущий по лезвию 2049',
    releaseYear: 2017,
    country: 'США',
    genre: 'киберпанк',
  },
];

fullLengthFilmList.push({
  name: 'Три билборда на границе Миссури',
  releaseYear: 2017,
  country: 'США',
  genre: 'чёрная комедия',
});

const animeList = [
  {
    name: 'Смерть ради смерти',
    releaseYear: 2006,
    country: 'Япония',
    genre: 'боевик, драма',
  },
  {
    name: 'Врата Штейна',
    releaseYear: 2011,
    country: 'Япония',
    genre: 'научная фантастика, триллер',
  },
  {
    name: 'Евангелион',
    releaseYear: 1995,
    country: 'Япония',
    genre: 'психологическая драма, меха',
  },
  {
    name: 'Унесённые призраками',
    releaseYear: 2001,
    country: 'Япония',
    genre: 'фэнтези, приключения',
  },
  {
    name: 'Тетрадь смерти',
    releaseYear: 2006,
    country: 'Япония',
    genre: 'детектив, психологический триллер',
  },
];

const movieList = [...animeList, ...fullLengthFilmList];

function addIsRare(movies) {
  for (const movie of movies) {
    movie.isRare = movie.releaseYear > 2000;
  }
}

addIsRare(movieList);

console.log(movieList[0]);