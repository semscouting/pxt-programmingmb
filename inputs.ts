//% color="#243E2C" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    /**
     * External button read (active HIGH).
     * Returns true when pressed.
     */
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=100
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
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
