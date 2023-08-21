function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomInt(1, 468); // Generates a random number between 1 and 10 (inclusive)
console.log(randomNumber);
