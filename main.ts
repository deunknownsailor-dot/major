let wheels = false
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.AB, function () {
    wheels = true
    for (let wheels = 0; wheels <= 4; wheels++) {
        for (let index = 0; index < 4; index++) {
            if (true) {
                pins.servoWritePin(AnalogPin.P0, 180)
            } else if (true) {
                pins.servoWritePin(AnalogPin.P0, 0)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
