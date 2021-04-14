function sendSignal() {
  console.log("Help!!");
}

let i = 0;

while (i < 1000) {
  sendSignal();
  i++;
  // i = i + 1
  // i += 1
}

let result = 0;

let j = 1;

while (j <= 10) {
  result = result + j;
  console.log(result);
  j++;
}

// IMPORTANT to increment your index (i++ and j++ in these examples) or you will have an infinite loop!!!
