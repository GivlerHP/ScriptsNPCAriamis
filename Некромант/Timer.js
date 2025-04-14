var blockX = 4122;
var blockY = 6;
var blockZ = 5620;
var CallParticle = "smoke"
var glassType = world.createItem("Thaumcraft:blockHole", 0, 1); // Тип блока: стекло
var stoneType = world.createItem("minecraft:stone", 0, 1); // Тип блока: камень
var chilType = world.createItem("minefantasy2:blacksteel_bars", 0, 1); // Тип блока: стекло


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
    var world = npc.getWorld(); 
    
//Призываем 2 мага
    if(event.id == 2) {
world.spawnClone(4112, 9, 5614, "1", "Восставший маг");
world.spawnClone(4095, 8, 5616, "1", "Восставший маг");

npc.executeCommand("/playsound mbo:bloodlus @a"); 

npc.world.spawnParticle(CallParticle, npc.x, npc.y, npc.z, 0, 1.5, 0.5, 0.5, 200);
        }
//призываем 6 войнов

            if(event.id == 3) {
world.spawnClone(4112, 7, 5623, "1", "Восставший лучник");
world.spawnClone(4093, 7, 5623, "1", "Восставший арбалетчик");
world.spawnClone(4107, 6, 5632, "1", "Восставший воин");
world.spawnClone(4102, 6, 5631, "1", "Восставший копейщик");
world.spawnClone(4108, 6, 5621, "1", "Восставший мечник");
world.spawnClone(4101, 6, 5620, "1", "Восставший алебардщик");

npc.executeCommand("/playsound mbo:bloodlus @a"); 

npc.world.spawnParticle(CallParticle, npc.x, npc.y, npc.z, 0, 1.5, 0.5, 0.5, 200);
        }