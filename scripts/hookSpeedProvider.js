
Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class SymbaroumSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "walk", default: 0x00FF00, name: "symbaroum.speeds.walk"},,
                {id: "run", default: 0xFF8000, name: "symbaroum.speeds.run"}
            ]
        }

        getRanges(token) {
            const baseSpeed = 10
            

            const ranges = [
                {range: baseSpeed, color: "walk"},
                {range: baseSpeed*2, color: "dash"}
            ]

            return ranges
        }
    }
    dragRuler.registerModule("drag-ruler-integration-for-symbaroum", SymbaroumSpeedProvider)
})