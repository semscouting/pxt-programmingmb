namespace programmingmb {
    let _buzzerActiveLow = false

    export enum SignalMode {
        //% block="active LOW"
        ActiveLow = 0,
        //% block="active HIGH"
        ActiveHigh = 1
    }

    export enum OnOff {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    /**
     * Set buzzer signal mode.
     */
    //% block="set buzzer mode to %mode"
    //% group="Setup" weight=95
    export function setBuzzerMode(mode: SignalMode): void {
        _buzzerActiveLow = (mode == SignalMode.ActiveLow)
    }

    //% block="set LED on %pin to %state"
    //% group="Outputs" weight=90
    export function ledSet(pin: DigitalPin, state: OnOff): void {
        // LED is fixed to active LOW for this kit.
        const logicalOn = (state == OnOff.On)
        const hwOn = !logicalOn
        pins.digitalWritePin(pin, hwOn ? 1 : 0)
    }

    //% block="set buzzer on %pin to %state"
    //% group="Outputs" weight=85
    export function buzzerSet(pin: DigitalPin, state: OnOff): void {
        const logicalOn = (state == OnOff.On)
        const hwOn = _buzzerActiveLow ? !logicalOn : logicalOn
        pins.digitalWritePin(pin, hwOn ? 1 : 0)
    }
}
