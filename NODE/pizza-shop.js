const eventEmitter = require('node:events');

class pizzaShop extends eventEmitter {
    constructor() {
        super(); //The super keyword is used to call the constructor of the parent class and to access its properties and methods.
        this.orderNumber = 0;
    }
    order() {
        this.orderNumber++;
        this.emit('order-pizza', 'large', 'cheese');
    }
    displayOrder() {
        console.log(`Order Number: ${this.orderNumber}`);
    }
}
module.exports = pizzaShop;