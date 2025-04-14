var TeleportChance = 0.5
var TeleportRange = 3; 
var TeleportParticle = "witchMagic";

function damaged(t) {
    var npc = t.npc;

    //код для телепортации
        if (Math.random() <= TeleportChance) {
            // Генерация новых координат
            var newX = npc.x + (Math.random() * TeleportRange * 2 - TeleportRange); // Значение между -TeleportRange и +TeleportRange
            var newZ = npc.z + (Math.random() * TeleportRange * 2 - TeleportRange);

            // Телепортация NPC на новые координаты
            npc.setPosition(newX, npc.y, newZ);

            // Воспроизведение звука телепортации
            npc.executeCommand("/playsound minecraft:mob.endermen.portal @a"); 

            // Создание частиц на новой позиции
            npc.world.spawnParticle(TeleportParticle, npc.x, npc.y, npc.z, 0, 1.5, 0.5, 0.5, 200);
        }
}