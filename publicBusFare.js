/* Given a total number of people, use the following rules to calculate the total cost for public bus tickets:

Each reserved bus can carry up to 50 people.
Each microbus can carry up to 11 people and can be used multiple times.
Each public bus ticket costs 250.

Write a JavaScript function publicBusFare(totalPeople) that:

Uses as many reserved buses as needed.
Then uses microbuses to handle the remaining people.
Finally calculates the cost for the people who need public buses. */


function publicBusFare(totalPeople){
  const reservedBusCapacity = 50;
  const microBusCapacity = 11;
  const PublicBusTicketPrice = 250;

  const remainingAfterReservedBus = totalPeople % reservedBusCapacity;
  const remainingAftermicroBus = remainingAfterReservedBus % microBusCapacity;

  const publicBusPeople = remainingAftermicroBus;
  const totalTicketPrice = publicBusPeople * PublicBusTicketPrice;

  return totalTicketPrice;
}

const totalPeople = 229;
console.log(publicBusFare(totalPeople));