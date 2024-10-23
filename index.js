// Constructor function for Monster
function Monster(name, type, health, attackPower) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.attackPower = attackPower;
}

// Create instances of the Monster object
const ghost = new Monster('Ghost', 'Spirit', 0, 0);
const goblin = new Monster('Goblin', 'Creature', 0, 0);
const zombie = new Monster('Zombie', 'Undead', 0, 0);

// Function to generate random numbers within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display monsters' properties
function displayMonsters() {
    // Generate random health and attack power for each monster
    ghost.health = getRandomInt(20, 100);
    ghost.attackPower = getRandomInt(20, 100);
    
    goblin.health = getRandomInt(20, 100);
    goblin.attackPower = getRandomInt(20, 100);
    
    zombie.health = getRandomInt(20, 100);
    zombie.attackPower = getRandomInt(20, 100);

    // Create a string for each monster
    const ghostInfo = `Name: ${ghost.name}, Type: ${ghost.type}, Health: ${ghost.health}, Attack Power: ${ghost.attackPower}`;
    const goblinInfo = `Name: ${goblin.name}, Type: ${goblin.type}, Health: ${goblin.health}, Attack Power: ${goblin.attackPower}`;
    const zombieInfo = `Name: ${zombie.name}, Type: ${zombie.type}, Health: ${zombie.health}, Attack Power: ${zombie.attackPower}`;

    // Update the respective p tags with the monster information
    document.getElementById('ghost').innerText = ghostInfo;
    document.getElementById('goblin').innerText = goblinInfo;
    document.getElementById('zombie').innerText = zombieInfo;
}

// Add event listener to the button
document.getElementById('myButton').addEventListener('click', displayMonsters);
