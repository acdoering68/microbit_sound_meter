let soundsamples = [];
let rt0 = 0;
let firstmax = 0;
let secondmax = 0;
let period = 1;
let i = 0;
while (true) {
    rt0 = input.runningTime();
    while (input.runningTime() < rt0 + 1000) {
        soundsamples.push(input.soundLevel())
        pause(1);
    }
    firstmax = 0; secondmax = 1
    for (i = 0; i < soundsamples.length - 1; i++) {
        if ((soundsamples[i] > soundsamples[i - 1]) &&
            (soundsamples[i] > soundsamples[i + 1])) {
            firstmax = i;
        }
    }
    for (i = firstmax + 1; i < soundsamples.length - 1; i++)
        if ((soundsamples[i] > soundsamples[i - 1]) &&
            (soundsamples[i] > soundsamples[i + 1])) {
            secondmax = i;
        }
    serial.writeLine(firstmax.toString()  + " " + secondmax.toString());
    period = secondmax - firstmax;
    basic.clearScreen();
    led.plot((period / 20) % 4, period / 80);
}