// let players: string[] = ["Messi", "Ronaldo"];
let players: (string | number | boolean)[];
players = ["Messi", "Ronaldo"];

// players = false;
players[0] = 'Dybala';
// players.push(58, false)

// players.push("Neymar");

// players.push(256);

const newPlayers = players.map((player, index) => index + 1 + '. ' + player);
console.log(players, newPlayers);