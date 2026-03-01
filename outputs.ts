namespace programmingmb {
    /**
     * ON/OFF value for output blocks.
     */
    export enum OnOff {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    /** Turn LED output ON. */
    //% block="LED on %pin ON"
    //% group="Outputs" weight=80
    export function ledOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /** Turn LED output OFF. */
    //% block="LED on %pin OFF"
    //% group="Outputs" weight=70
    export function ledOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    /**
     * Set LED output using an ON/OFF dropdown.
     */
    //% block="set LED on %pin to %state"
    //% group="Outputs" weight=75
    export function ledSet(pin: DigitalPin, state: OnOff): void {
        pins.digitalWritePin(pin, state == OnOff.On ? 1 : 0)
    }

    /** Turn buzzer ON (digital HIGH). */
    //% block="buzzer on %pin ON"
    //% group="Outputs" weight=60
    export function buzzerOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /** Turn buzzer OFF (digital LOW). */
    //% block="buzzer on %pin OFF"
    //% group="Outputs" weight=50
    export function buzzerOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }
}
