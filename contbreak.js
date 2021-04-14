let fuel = 1000;
let distance = 0;

while (fuel > 0) {
  distance++;

  if (distance >= 100 && distance <= 200) {
    // "Cosmic storm" that doesn't consume any fuel during trip
    continue;
  }
  // fuel = fuel - 1;
  fuel--;

  if (distance == 500) {
    break;
  }
}

console.log(distance); // distance = 500
console.log(fuel); // fuel = 601
