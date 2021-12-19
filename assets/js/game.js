
var playerName = window.prompt("What is your robot's name?", "Bob");
console.log(playerName);

function fight(name) {
    window.alert("The fight has begun! " + name);
}

fight(playerName);