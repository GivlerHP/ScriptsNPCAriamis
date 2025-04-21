var SummonerParticle = "blockcrack_17_0";
      
npc.world.spawnParticle(SummonerParticle, npc.x, npc.y, npc.z, 1, 0.1, 0.1, 3.0, 200);

npc.kill()
npc.executeCommand("/playsound thaumcraft:egdeath @p"); 

 world.spawnClone(npc.x, npc.y, npc.z, "1", "Истинный мимик");