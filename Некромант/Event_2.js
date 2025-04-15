var targetHandled = false;
var npc; // Глобальная переменная для npc

function target(event) {
    npc = event.npc;  // Устанавливаем npc при таргетировании

    if (!targetHandled) {
        targetHandled = true;

        if (!npc.getTimers().has(2)) {
            npc.getTimers().start(2, 100, false);
        }
        if (!npc.getTimers().has(3)) {
            npc.getTimers().start(3, 700, false);
        }
    }
}

function targetLost(event) {
    targetHandled = false;
    if (npc) {
        npc.getTimers().stop(2);
        npc.getTimers().stop(3);
    }
}

function died(event) {
    targetHandled = false;
    if (npc) {
        npc.getTimers().stop(2);
        npc.getTimers().stop(3);
    }
}
