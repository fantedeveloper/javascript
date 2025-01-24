function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(`${getRandomInt(1, 10)} vs ${getRandomInt(1, 18)}`)