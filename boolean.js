let distance = 210;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFunctioning = true;

console.log(distanceCondition);

if (!isEngineFunctioning || distance > 200) {
  console.log("wont make it");
} else if (distanceCondition && fuel >= 100) {
  console.log("you will make it");
}
