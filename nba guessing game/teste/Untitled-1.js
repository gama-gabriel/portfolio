async function myFunction() {
    return "Hello";
}

let aPromise = myFunction();

let storedResult;

aPromise.then(result => {
    storedResult = result;
    console.log(storedResult); // This will log "Hello"
});

// You can use the storedResult variable here

setTimeout(() => {
    // This code will execute after a 1-second delay
    aPromise.then(result => {
        storedResult = result;
    });
}, 1); // This might log undefined, depending on when this line executes
