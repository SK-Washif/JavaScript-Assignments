// You are given a function radianToDegree that converts an angle from radians to degrees.


function radianToDegree(radian){

  const pi = 3.1416;
  const x = 180/pi;
  const degree = radian*x;


  return degree;
}

const result = radianToDegree(5);
console.log(result);