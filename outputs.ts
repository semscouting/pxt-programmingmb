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
        // Use tone so both active and passive buzzer modules respond reliably.
        if (state == OnOff.On) {
            pins.analogSetPitchPin(<AnalogPin><number>pin)
            music.ringTone(1000)
        } else {
            music.stopAllSounds()
            pins.digitalWritePin(pin, 0)
        }
    }
}
