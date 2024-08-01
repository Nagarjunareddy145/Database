const custom=require('./custom_module');

console.log(custom("Ambulance", "Rider"));

const math=require('./math');

console.log("\nInside math variable : ");
console.log(math);
console.log("\nSum is " +math.add(7,34));
console.log("Subtraction is " +math.subtract(20,7));
console.log("Multiplication is " +math.multiply(3,7));
console.log("Division is " +math.divide(7,4));