let ss = 0
let rt0 = 0
let firstmax = 0
let secondmax = 0
let i = 0
let soundsamples = [0]
let period = 1
basic.forever(function () {
    rt0 = input.runningTime()
    soundsamples = [];
    while (input.runningTime() < rt0 + 1000) {
        ss = input.soundLevel()
        soundsamples.push(ss)
        pause(1);
    }
    firstmax = 0
    secondmax = 1
    for (i = 0; i < soundsamples.length - 1; i++) {
            if ((soundsamples[i] > soundsamples[i - 1]) &&
                (soundsamples[i] > soundsamples[i + 1])) {
                firstmax = i;
            }
        }
        secondmax = firstmax;
for (i = firstmax + 1; i < soundsamples.length - 1; i++)
            if ((soundsamples[i] > soundsamples[i - 1]) &&
                (soundsamples[i] > soundsamples[i + 1])) {
                secondmax = i;
            }
period = secondmax - firstmax
    serial.writeValue("Period",period);
    serial.writeValue("firstSoundSample",soundsamples[0]);
    basic.clearScreen()
    led.plot(period / 20 % 4, period / 80)
})
