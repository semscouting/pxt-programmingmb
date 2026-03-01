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
     * Includes a tiny built-in debounce sample to reduce clicky toggling.
     */
    //% block="button on %pin is pressed"
    //% group="Inputs" weight=110
    export function buttonPressed(pin: DigitalPin): boolean {
        const a = pins.digitalReadPin(pin)
        control.waitMicros(3000)
        const b = pins.digitalReadPin(pin)
        control.waitMicros(3000)
        const c = pins.digitalReadPin(pin)

        // majority vote for a stable reading
        const sum = a + b + c
        const stable = (sum >= 2) ? 1 : 0
        return stable == 0
    }

    //% block="button raw value on %pin"
    //% group="Inputs" weight=100
    export function buttonRaw(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
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
