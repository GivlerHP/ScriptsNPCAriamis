var glassType2 = world.createItem("mbo:BlockFogGrey", 0, 1); // Тип блока: стекло
var glassType = world.createItem("mbo:BlockFogWhite", 0, 1); // Тип блока: стекло

var blockX3 = 4106;  //4106 7 5642
var blockY3 = 7;
var blockZ3 = 5642;

// Функция для установки блока
function setBlock(x, y, z, type) {
    world.setBlock(x, y, z, type);
}

var glassPositions = [
    [0, 0, 0], [1, 0, 0], [-1, 0, 0], 
    [0, 1, 0], [1, 1, 0], [-1, 1, 0], 
    [0, 2, 0], [1, 2, 0], [-1, 2, 0], 
    [0, 3, 0], [1, 3, 0], [-1, 3, 0]
];

for (var i = 0; i < glassPositions.length; i++) {
    setBlock(blockX3 + glassPositions[i][0], blockY3 + glassPositions[i][1], blockZ3 + glassPositions[i][2], glassType2);
}
//таймер для призыва 2 магов
if (!npc.timers.has(2)) {
    npc.timers.start(2, 100, false);
}
//таймер для призыва 6 войнов
if (!npc.timers.has(3)) {
    npc.timers.start(3, 700, false);
}

function targetLost(event) {

}