

var sellingPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;

console.log(discountPercent);
console.log(typeof(discountPercent));

console.log(Math.round(discountPercent) + "% off");
console.log(typeof Math.round(discountPercent) );
