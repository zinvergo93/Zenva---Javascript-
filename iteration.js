let scores = [10, 20, 10];

console.log("Scores array BEFORE: ", scores);

// Using a While Loop to increase the scores by 1, as you iterate over the array
let i = 0;

// while (i < scores.length) {
//   scores[i]++;
//   i++;
// }

// console.log(scores);

// Using For loop to increase the scores by 1
for (i = 0; i < scores.length; i++) {
  scores[i]++;
}

console.log("Scores array AFTER: ", scores);

scores.forEach(function (entry, index) {
  scores[index]++;
});
console.log(scores);
