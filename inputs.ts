//% color="#243E2C" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    let _buttonActiveLow = true

    export enum SignalMode {
        //% block="active LOW"
        ActiveLow = 0,
        //% block="active HIGH"
        ActiveHigh = 1
    }

    export enum PullSetting {
        //% block="none"
        None = 0,
        //% block="pull-up"
        PullUp = 1,
        //% block="pull-down"
        PullDown = 2
    }

    /**
     * Set button logic mode only (does not change pull resistor).
     */
    //% block="set button logic on %pin to %mode"
    //% group="Setup" weight=120
    export function setButtonMode(pin: DigitalPin, mode: SignalMode): void {
        _buttonActiveLow = (mode == SignalMode.ActiveLow)
        pins.setPull(pin, PinPullMode.PullNone)
    }

    /**
     * Optional: set button pull resistor explicitly.
     */
    //% block="set button pull on %pin to %pull"
    //% group="Setup" weight=119
    export function setButtonPull(pin: DigitalPin, pull: PullSetting): void {
        if (pull == PullSetting.PullUp) pins.setPull(pin, PinPullMode.PullUp)
        else if (pull == PullSetting.PullDown) pins.setPull(pin, PinPullMode.PullDown)
        else pins.setPull(pin, PinPullMode.PullNone)
    }

    /**
     * True when button is pressed (uses selected logic mode).
     */
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=110
    export function buttonPressed(pin: DigitalPin): boolean {
        const v = pins.digitalReadPin(pin)
        return _buttonActiveLow ? (v == 0) : (v == 1)
    }

    //% block="button raw value on %pin"
    //% group="Inputs" weight=105
    export function buttonRaw(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
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
