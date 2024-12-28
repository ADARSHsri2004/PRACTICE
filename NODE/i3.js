const pizzaShop = require('./pizza-shop');
const drinkMachine = require('./drink-machine');

const myPizzaShop = new pizzaShop();
const myDrinkMachine = new drinkMachine();

myPizzaShop.on('order-pizza', (size, topping) => {
    console.log(`order received! baking  ${size} pizza with ${topping}`);
    myDrinkMachine.serveDrink(size);
});

myPizzaShop.order('large', 'cheese');
myPizzaShop.displayOrder();