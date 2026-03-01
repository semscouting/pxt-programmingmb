namespace programmingmb {
    export enum OnOff {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    let _buzzerOn = false
    const _buzzerHz = 2000

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
        const aPin = <AnalogPin><number>pin
        pins.analogSetPitchPin(aPin)

        if (state == OnOff.On) {
            // Start once to avoid choppy retriggering.
            if (!_buzzerOn) {
                music.ringTone(_buzzerHz)
                _buzzerOn = true
            }
        } else {
            if (_buzzerOn) {
                music.stopAllSounds()
                _buzzerOn = false
            }
            pins.digitalWritePin(pin, 0)
        }
    }
}
