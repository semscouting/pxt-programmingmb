//% color="#243E2C" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    let _buttonActiveLow = true

    export enum SignalMode {
        //% block="active LOW"
        ActiveLow = 0,
        //% block="active HIGH"
        ActiveHigh = 1
    }

    /**
     * Set button signal mode and pull resistor.
     */
    //% block="set button mode to %mode on %pin"
    //% group="Setup" weight=120
    export function setButtonMode(pin: DigitalPin, mode: SignalMode): void {
        _buttonActiveLow = (mode == SignalMode.ActiveLow)
        if (_buttonActiveLow) {
            pins.setPull(pin, PinPullMode.PullUp)
        } else {
            pins.setPull(pin, PinPullMode.PullDown)
        }
    }

    /**
     * True when button is pressed (uses selected button mode).
     */
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=110
    export function buttonPressed(pin: DigitalPin): boolean {
        const v = pins.digitalReadPin(pin)
        return _buttonActiveLow ? (v == 0) : (v == 1)
    }

    /**
     * PIR read (active HIGH when motion detected).
     */
    //% block="PIR on %pin detects motion"
    //% group="Inputs" weight=100
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }
}
