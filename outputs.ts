namespace programmingmb {
    export enum OnOff {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    let _buzzerPin: AnalogPin = AnalogPin.P0
    let _buzzerIsOn = false

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
        const analogPin = <AnalogPin><number>pin

        // Reconfigure pitch pin only when it changes.
        if (_buzzerPin != analogPin) {
            _buzzerPin = analogPin
            pins.analogSetPitchPin(_buzzerPin)
            _buzzerIsOn = false
        }

        if (state == OnOff.On) {
            // Start tone only on OFF->ON transition to avoid choppy retriggering.
            if (!_buzzerIsOn) {
                music.ringTone(1000)
                _buzzerIsOn = true
            }
        } else {
            if (_buzzerIsOn) {
                music.stopAllSounds()
                _buzzerIsOn = false
            }
            pins.digitalWritePin(pin, 0)
        }
    }
}
