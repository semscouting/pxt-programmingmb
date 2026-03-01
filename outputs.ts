namespace programmingmb {
    let _ledActiveLow = false
    let _buzzerActiveLow = false

    export enum OnOff {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    /**
     * Set LED signal mode.
     */
    //% block="set LED mode to %mode"
    //% group="Setup" weight=95
    export function setLedMode(mode: SignalMode): void {
        _ledActiveLow = (mode == SignalMode.ActiveLow)
    }

    /**
     * Set buzzer signal mode.
     */
    //% block="set buzzer mode to %mode"
    //% group="Setup" weight=94
    export function setBuzzerMode(mode: SignalMode): void {
        _buzzerActiveLow = (mode == SignalMode.ActiveLow)
    }

    //% block="set LED on %pin to %state"
    //% group="Outputs" weight=90
    export function ledSet(pin: DigitalPin, state: OnOff): void {
        const logicalOn = (state == OnOff.On)
        const hwOn = _ledActiveLow ? !logicalOn : logicalOn
        pins.digitalWritePin(pin, hwOn ? 1 : 0)
    }

    //% block="set buzzer on %pin to %state"
    //% group="Outputs" weight=85
    export function buzzerSet(pin: DigitalPin, state: OnOff): void {
        const logicalOn = (state == OnOff.On)
        const hwOn = _buzzerActiveLow ? !logicalOn : logicalOn
        pins.digitalWritePin(pin, hwOn ? 1 : 0)
    }

    // Backward-compatible helpers
    //% block="LED on %pin ON"
    //% group="Outputs" weight=80
    export function ledOn(pin: DigitalPin): void { ledSet(pin, OnOff.On) }

    //% block="LED on %pin OFF"
    //% group="Outputs" weight=79
    export function ledOff(pin: DigitalPin): void { ledSet(pin, OnOff.Off) }

    //% block="buzzer on %pin ON"
    //% group="Outputs" weight=78
    export function buzzerOn(pin: DigitalPin): void { buzzerSet(pin, OnOff.On) }

    //% block="buzzer on %pin OFF"
    //% group="Outputs" weight=77
    export function buzzerOff(pin: DigitalPin): void { buzzerSet(pin, OnOff.Off) }
}
