var glassType2 = world.createItem("mbo:BlockFogGrey", 0, 1); 
var glassType = world.createItem("mbo:BlockFogWhite", 0, 1); 

var blockX3 = 4106;  
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

function targetLost(event) {

}