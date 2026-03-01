//% color="#243E2C" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    export enum ButtonMode {
        //% block="active LOW (pull-up)"
        ActiveLow = 0,
        //% block="active HIGH (pull-down)"
        ActiveHigh = 1
    }

    /**
     * Configure pull resistor for an external button.
     */
    //% block="set button %pin mode %mode"
    //% group="Inputs" weight=110
    export function setButtonMode(pin: DigitalPin, mode: ButtonMode): void {
        if (mode == ButtonMode.ActiveLow) {
            pins.setPull(pin, PinPullMode.PullUp)
        } else {
            pins.setPull(pin, PinPullMode.PullDown)
        }
    }

    /**
     * Read button state for active-LOW wiring (pressed = LOW).
     */
    //% block="button on %pin is pressed (active LOW)"
    //% group="Inputs" weight=100
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0
    }

    /**
     * Read button state for active-HIGH wiring (pressed = HIGH).
     */
    //% block="button on %pin is pressed (active HIGH)"
    //% group="Inputs" weight=95
    export function buttonPressedHigh(pin: DigitalPin): boolean {
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
