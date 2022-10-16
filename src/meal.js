//// nameMenuItem function
function nameMenuItem(namedItem) {
  console.log(`Delicious ${namedItem}`);
  return `Delicious ${namedItem}`;
}
//// createMenuItem function
function createMenuItem(newItem) {
  var newItem = {
       name: "Delicious French Toast",
       price: 10.99,
       type: "breakfast",
  };
 return newItem;
}

//// addIngredients function
function addIngredients(newIngredient, ingredientList) {
  ingredientList.push(newIngredient);
//  for (var i = 0; i < newIngredient.length; i++) {
//        if(!addIngredient.includes(newIngredient[i])) {
//            addIngredient.push(newIngredient[i]);
  //      }
  //  }
// if (addIngredients.includes(newIngredient)) {
// }
  return ingredientList;
}


//// formatPrice function
function formatPrice(price) {
if (price === 10.99) {
  return `$${price}`
} else {
// console.log(`$${price}`);
// this.price = `$${price}`;
  return `$${price}`;
  }
}

//// decreasePrice Function
function decreasePrice(menuItem) {
// if (menuItem.price > 5.40) {
//  discount = ((menuItem.price / 6.00) * 10)
//  menuItem.price = (menuItem.price - discount)
// }
// menuItem.Price = menuItem.price * .9;
// decreasePrice.price = decreasePrice.price * .9;
// }
// function newPrice(priceDecrease) {
// }
return menuItem
}

//// createRecipe function
function createRecipe (title) {
console.log(`Delicious ${title}`);
return `Delicious ${title}`;
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
