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
        const aPin = <AnalogPin><number>pin

        if (state == OnOff.On) {
            // PWM full-scale ON (works with many active buzzer modules)
            pins.analogWritePin(aPin, 1023)
        } else {
            // PWM OFF
            pins.analogWritePin(aPin, 0)
            // Also force digital low to quiet some boards/modules
            pins.digitalWritePin(pin, 0)
        }
    }

    /**
     * Simple PIR -> LED behavior block.
     */
    //% block="PIR %pirPin controls LED %ledPin"
    //% group="PIR" weight=80
    export function pirControlsLed(pirPin: DigitalPin, ledPin: DigitalPin): void {
        if (pirObjectDetected(pirPin)) ledSet(ledPin, OnOff.On)
        else ledSet(ledPin, OnOff.Off)
    }

    /**
     * Simple PIR -> buzzer behavior block.
     */
    //% block="PIR %pirPin controls buzzer %buzzerPin"
    //% group="PIR" weight=75
    export function pirControlsBuzzer(pirPin: DigitalPin, buzzerPin: DigitalPin): void {
        if (pirObjectDetected(pirPin)) buzzerSet(buzzerPin, OnOff.On)
        else buzzerSet(buzzerPin, OnOff.Off)
    }
}
