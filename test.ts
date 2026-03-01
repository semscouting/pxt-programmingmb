let BUTTON = DigitalPin.P1
let PIR = DigitalPin.P2
let LED = DigitalPin.P13
let BUZZER = DigitalPin.P0

programmingmb.setButtonMode(BUTTON, programmingmb.SignalMode.ActiveLow)
programmingmb.setLedMode(programmingmb.SignalMode.ActiveLow)
programmingmb.setBuzzerMode(programmingmb.SignalMode.ActiveHigh)

basic.forever(function () {
    let trigger = programmingmb.buttonPressed(BUTTON) || programmingmb.pirMotionDetected(PIR)

    if (trigger) {
        programmingmb.ledSet(LED, programmingmb.OnOff.On)
        programmingmb.buzzerSet(BUZZER, programmingmb.OnOff.On)
    } else {
        programmingmb.ledSet(LED, programmingmb.OnOff.Off)
        programmingmb.buzzerSet(BUZZER, programmingmb.OnOff.Off)
    }

    basic.pause(25)
})
