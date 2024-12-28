const eventEmitter = require('node:events');  //core module

const myEmitter = new eventEmitter(); //object of eventEmitter

myEmitter.on('order-pizza', (size, topping) => {
    console.log(`order received! baking  ${size} pizza with ${topping}`);
});
myEmitter.on('order-pizza', (size) => {
    if (size === 'large') {

        console.log('complimentary drink served');
    }
});

myEmitter.emit('order-pizza', 'large', 'cheese');