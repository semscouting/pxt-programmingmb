namespace programmingmb {
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=100
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    //% block="PIR on %pin detects motion"
    //% group="Inputs" weight=90
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }
}
