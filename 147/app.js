let initialWeight = 60000;
let targetWeight = 50000;

let days = 0;

while (initialWeight > targetWeight) {
  initialWeight *= 0.95;
  days++;
}

console.log(days);