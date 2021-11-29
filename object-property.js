const crickPlayer = [
    {id: 2, name: 'M Rahim', age: 30},
    {id: 3, name: 'M Riyad', age: 34},
    {id: 4, name: 'S A Hasan', age: 30},
    {id: 5, name: 'T Iqbal', age: 32}
]

const playerName = crickPlayer.map(playerName => playerName.name);
const playerId = crickPlayer.map(playerId => playerId.id);
const legendPlayer = crickPlayer.filter(legendPlayer => legendPlayer.age > 30);

console.log(playerName);
console.log(playerId);
console.log(legendPlayer);