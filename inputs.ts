//% color="#243E2C" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    export enum PullSetting {
        //% block="none"
        None = 0,
        //% block="pull-up"
        PullUp = 1,
        //% block="pull-down"
        PullDown = 2
    }

    /**
     * Optional: set button pull resistor explicitly.
     */
    //% block="set button pull on %pin to %pull"
    //% group="Setup" weight=120
    export function setButtonPull(pin: DigitalPin, pull: PullSetting): void {
        if (pull == PullSetting.PullUp) pins.setPull(pin, PinPullMode.PullUp)
        else if (pull == PullSetting.PullDown) pins.setPull(pin, PinPullMode.PullDown)
        else pins.setPull(pin, PinPullMode.PullNone)
    }

    /**
     * True when button is pressed.
     * Default for common external button modules: pressed = LOW.
     */
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=110
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0
    }

    //% block="button raw value on %pin"
    //% group="Inputs" weight=100
    export function buttonRaw(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }

    /**
     * PIR read (active HIGH when object/motion detected).
     */
    //% block="PIR on %pin detects object"
    //% group="Inputs" weight=95
    export function pirObjectDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    /**
     * Backward-compatible alias.
     */
    //% blockHidden=true
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pirObjectDetected(pin)
    }
}
