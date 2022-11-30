"use strict";
// let players: string[] = ["Messi", "Ronaldo"];
// let players: (string | number | boolean)[];
// let players: string[] | number[] | boolean[];
// tuples
var players;
players = ["Messi", "Ronaldo", 25, true];
// players = [true, false];
// players = [256, 512];
players[0] = "Dybala";
// players[1] = 25
players[2] = 66;
// players = false;
// players[0] = 'Dybala';
// players.push(58, false)
// players.push("Neymar");
// players.push(256);
var newPlayers = players.map(function (player, index) { return index + 1 + '. ' + player; });
console.log(players, newPlayers);
