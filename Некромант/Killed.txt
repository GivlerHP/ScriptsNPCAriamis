var blockX = 4122;
var blockY = 6;
var blockZ = 5620;
var glassType = world.createItem("Thaumcraft:blockHole", 0, 1); // Тип блока: стекло
var stoneType = world.createItem("minecraft:stone", 0, 1); // Тип блока: камень
var chilType = world.createItem("minefantasy2:blachsteel_bars", 0, 1); // Тип блока: стекло
var TeleportParticle = "flame";

// Функция для установки блока
function setBlock(x, y, z, type) {
    world.setBlock(x, y, z, type);
}

// Устанавливаем стекло
setBlock(blockX, blockY, blockZ, glassType);
setBlock(blockX, blockY + 1, blockZ, glassType);

var blockX2 =  4088;
var blockY2 = 8;
var blockZ2 = 5621;

// Устанавливаем структуру из стекла
var glassPositions = [
    [0, 0, 0], [0, 0, 1], [0, 0, -1], [0, 0, 2], [0, 0, -2],
    [0, 1, 0], [0, 1, 1], [0, 1, -1], [0, 1, 2], [0, 1, -2],
    [0, 2, 0], [0, 2, 1], [0, 2, -1], [0, 2, 2], [0, 2, -2],
    [0, 3, 0], [0, 3, 1], [0, 3, -1], [0, 3, -2]
];

for (var i = 0; i < glassPositions.length; i++) {
    setBlock(blockX2 + glassPositions[i][0], blockY2 + glassPositions[i][1], blockZ2 + glassPositions[i][2], glassType);
}

    for (var i = 0; i < glassPositions.length; i++) {
            var x = blockX2 + glassPositions[i][0];
            var y = blockY2 + glassPositions[i][1];
            var z = blockZ2 + glassPositions[i][2];
            npc.world.spawnParticle(TeleportParticle, x, y, z, 0, 0, 0.2, 0.2, 20);
        }
npc.world.spawnParticle(TeleportParticle, blockX, blockY, blockZ, 0, 0, 0.2, 0.2, 20);
npc.world.spawnParticle(TeleportParticle, blockX, blockY+1, blockZ, 0, 0, 0.2, 0.2, 20);


event.npc.timers.start(1, 12000, false);

function timer(event) {
}