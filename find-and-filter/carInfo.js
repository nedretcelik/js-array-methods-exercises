let cars = [
    {
      Make: "Toyota",
      Model: "Camry",
      Year: 2023,
      Color: "Silver",
      Price: "25,000",
    },
    {
      Make: "Honda",
      Model: "Civic",
      Year: 2022,
      Color: "Black",
      Price: "20,500",
    },
    {
      Make: "Ford",
      Model: "Mustang",
      Year: 2024,
      Color: "Red",
      Price: "35,000",
    },
    {
      Make: "Chevrolet",
      Model: "Silverado",
      Year: 2021,
      Color: "Blue",
      Price: "30,000",
    },
  ];
  



// 1. Filter cars that are from the year 2022 and have a price lower than $22,000.

let yearAndPrice = cars.filter(car => car.Year == 2022 && parseFloat(car.Price ) < 22.000);

console.log(yearAndPrice)

let modelName = [];

for (const car of yearAndPrice) {

    modelName.push(car.Model)
}

console.log('cars that are from the year 2022 and have a price lower than $22,000 :   '+modelName)


// 2. Filter cars that are not black.
let notBlack = cars.filter(car => car.Color !== "Black");

let notBlackModelNAme = [];

for (const car of notBlack) {

    notBlackModelNAme.push(car.Model)
}

console.log('cars that are not black:  ' +notBlackModelNAme)


// 3. Filter cars that are priced between $25,000 and $30,000.

let price25To30 = cars.filter(car => (parseFloat(car.Price) >=25.000) && (parseFloat(car.Price)<=30.000))
console.log(price25To30)


  