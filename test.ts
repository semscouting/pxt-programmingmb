let buttonPin = DigitalPin.P1
let pirPin = DigitalPin.P2
let ledPin = DigitalPin.P13
let buzzerPin = DigitalPin.P0

basic.forever(function () {
    let trigger = programmingmb.buttonPressed(buttonPin) || programmingmb.pirMotionDetected(pirPin)
    if (trigger) {
        programmingmb.ledOn(ledPin)
        programmingmb.buzzerOn(buzzerPin)
    } else {
        programmingmb.ledOff(ledPin)
        programmingmb.buzzerOff(buzzerPin)
    }
    basic.pause(25)
})
