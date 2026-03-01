//% color="#243E2C" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    /**
     * External button read (default wiring: pull-up / active LOW).
     * Returns true when pressed.
     */
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=100
    export function buttonPressed(pin: DigitalPin): boolean {
        // Most Octopus-style button modules are active LOW when pressed.
        return pins.digitalReadPin(pin) == 0
    }

    /**
     * PIR read (active HIGH when motion detected).
     */
    //% block="PIR on %pin detects motion"
    //% group="Inputs" weight=90
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }
}
