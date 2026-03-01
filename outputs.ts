namespace programmingmb {
    export enum OnOff {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    //% block="set LED on %pin to %state"
    //% group="Outputs" weight=90
    export function ledSet(pin: DigitalPin, state: OnOff): void {
        // LED is fixed to active LOW for this kit.
        const logicalOn = (state == OnOff.On)
        const hwOn = !logicalOn
        pins.digitalWritePin(pin, hwOn ? 1 : 0)
    }

    //% block="set buzzer on %pin to %state"
    //% group="Outputs" weight=85
    export function buzzerSet(pin: DigitalPin, state: OnOff): void {
        // Deterministic ON/OFF for class use (no tone latch side effects).
        if (state == OnOff.On) {
            pins.digitalWritePin(pin, 1)
        } else {
            pins.digitalWritePin(pin, 0)
            music.stopAllSounds()
        }
    }
}
