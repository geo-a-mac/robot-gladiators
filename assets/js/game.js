
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth -= playerAttack;
    playerHealth -= enemyAttack;
    console.log(enemyName + " attacked " + playerName + " and now has " + enemyHealth + " health");
    console.log(playerName + " attacked " + enemyName + " and now has " + playerHealth + " health");

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    } 
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health");
    }

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
}

fight(playerName);