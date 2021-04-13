function hourToMinutes(hours) {
  let result = hours * 60;
  return result + " minutes";
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);
let c = hourToMinutes(8);
let d = hourToMinutes(11);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let dayToHours = function (days) {
  let result = days * 24;
  return result + " hours";
};

let e = dayToHours(12);
let f = dayToHours(3);
let g = dayToHours(14);
let h = dayToHours(31);

console.log(e);
console.log(f);
console.log(g);
console.log(h);
