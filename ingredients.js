const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log('For Loop:')
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log('While Loop:')
var i = 0;
while (i <ingredients.length) {
  console.log(ingredients[i]);
  i = i + 1;
}

  console.log('For Loop Reversed:')
  for (var i = ingredients.length-1; i >= 0; i--){
    console.log(ingredients[i]);
  }