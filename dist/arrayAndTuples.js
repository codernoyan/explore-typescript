"use strict";
// let players: string[] = ["Messi", "Ronaldo"];
var players;
players = ["Messi", "Ronaldo"];
// players = false;
players[0] = 'Dybala';
// players.push(58, false)
// players.push("Neymar");
// players.push(256);
var newPlayers = players.map(function (player, index) { return index + 1 + '. ' + player; });
console.log(players, newPlayers);
