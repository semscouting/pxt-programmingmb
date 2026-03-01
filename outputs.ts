namespace programmingmb {
    //% block="LED on %pin ON"
    //% group="Outputs" weight=80
    export function ledOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    //% block="LED on %pin OFF"
    //% group="Outputs" weight=70
    export function ledOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    //% block="buzzer on %pin ON"
    //% group="Outputs" weight=60
    export function buzzerOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    //% block="buzzer on %pin OFF"
    //% group="Outputs" weight=50
    export function buzzerOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }
}
