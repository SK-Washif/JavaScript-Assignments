// You are tasked with writing a function oilPrice that calculates the total cost of different types of fuel based on the quantity needed. The prices for 1 liter of each type of fuel are as follows:

// Diesel: 114
// Petrol: 130
// Octane: 135
// The function should compute the total cost based on the following parameters:

function oilPrice(dieselNeed, petrolNeed, octaneNeed){
  const diesel1Litter = 114;
  const petrol1Litter = 130;
  const octane1Litter = 135;

  const totalDieselPrice = dieselNeed * diesel1Litter;
  const totalPetrolPrice = petrolNeed * petrol1Litter;
  const totalOctanePrice = octaneNeed * octane1Litter;

  const myTotalPrice = totalDieselPrice + totalOctanePrice + totalPetrolPrice;

  return myTotalPrice;

}

const totalPrice = oilPrice(2, 1, 0);
console.log(totalPrice);