var blockX = 4122;
var blockY = 6;
var blockZ = 5620;
var glassType = world.createItem("Thaumcraft:blockHole", 0, 1);
var stoneType = world.createItem("minecraft:stone", 0, 1); 
var chilType = world.createItem("minefantasy2:blacksteel_bars", 0, 1); 
var TeleportParticle = "flame";

// Функция для установки блока
function setBlock(x, y, z, type) {
    world.setBlock(x, y, z, type);
}
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


    if (event.id == 1) {
        // Заменяем стекло на камень
        for (var i = 0; i < glassPositions.length; i++) {
            setBlock(blockX2 + glassPositions[i][0], blockY2 + glassPositions[i][1], blockZ2 + glassPositions[i][2], stoneType);
        }
        setBlock(blockX, blockY, blockZ, chilType);
        setBlock(blockX, blockY + 1, blockZ, chilType);
    }