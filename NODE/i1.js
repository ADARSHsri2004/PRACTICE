function greet(name) {
    console.log(`Hello ${name}`);
}
function greetAdarsh(greetFn) {
    const name="Adarsh";
    greetFn(name);
    
}

greetAdarsh(greet);