// You are given a function isBestFriend that checks if two people are best friends based on their name and friend properties.

function isBestFriend(firstPerson, secondPerson){

  if(firstPerson.name === secondPerson.friend && firstPerson.friend === secondPerson.name){
    console.log("they are best friend!");
  }
  else{
    console.log("they are not best friend!");
  }

}

const x = {name: 'raz', friend: 'pranto'};
const y = {name: 'pranto', friend: 'raz'};

isBestFriend(x, y);