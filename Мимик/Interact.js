var SummonerParticle = "blockcrack_17_0";
      
npc.world.spawnParticle(SummonerParticle, npc.x, npc.y, npc.z, 1, 0.1, 0.1, 3.0, 200);

event.player.addPotionEffect(2, 6, 6, true);  // Медлительность 6
    event.player.addPotionEffect(18, 6, 5, true); // Слабость 5
    event.player.addPotionEffect(15, 6, 2, true); // Слепота 3
    event.player.addPotionEffect(9, 6, 0, true);  // Тошнота

    //телепорт игрока на 1 блок перед мимиком
var direction = npc.getRotation();
var radians = direction * (Math.PI / 180);
var offsetX = -Math.sin(radians);
var offsetZ = Math.cos(radians);
event.player.setPosition(npc.x + offsetX, npc.y, npc.z + offsetZ);

npc.kill()
npc.executeCommand("/playsound thaumcraft:egdeath @p"); 

    world.spawnClone(npc.x, npc.y, npc.z, "1", "Истинный мимик");