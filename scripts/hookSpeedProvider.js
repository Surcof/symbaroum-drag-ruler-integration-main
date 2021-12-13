
Hooks.once('init', async function() {    

    game.settings.register('drag-ruler-integration-for-symbaroum', 'symbaroumMovementSpeed', {
        name: 'drifs-symbaroumMovementSpeed',
        hint: 'drifs-symbaroumMovementSpeedHint',
        scope: 'world',
        config: true,
        default: 10,
        type: Number,
    });
});

Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class SymbaroumSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "walk", default: 0x00FF00, name: "drifs-speeds.walk"},
                {id: "run", default: 0xFF8000, name: "drifs-speeds.run"}
            ];
        }

        getRanges(token) {
            const baseSpeed = game.settings.get('drag-ruler-integration-for-symbaroum', 'symbaroumMovementSpeed');
            

            const ranges = [
                {range: baseSpeed, color: "walk"},
                {range: baseSpeed*2, color: "run"}
            ];

            return ranges;
        }
    }

    dragRuler.registerModule("drag-ruler-integration-for-symbaroum", SymbaroumSpeedProvider);
});