input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index3 = 0; index3 < 15; index3++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), 142)
    }
    if (led.point(0, 0) == true) {
        _00 = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # . #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    x = 0
    y = 0
    _1 = 0
    for (let index3 = 0; index3 < 5; index3++) {
        for (let index3 = 0; index3 < 5; index3++) {
            if (led.point(x, y) == false) {
                sz_x = x
                sz_y = y
                _2 = _1 + 1
            }
            x += 1
            _1 += 1
        }
        y += 1
        x = 0
    }
    y = 0
    basic.clearScreen()
    basic.showNumber(sz_x)
    basic.pause(500)
    basic.clearScreen()
    basic.showNumber(sz_y)
    basic.pause(500)
    basic.clearScreen()
    basic.showNumber(_2)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    sz1 = 0
    sz2 = 0
    for (let index3 = 0; index3 < 15; index3++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), 255)
    }
    basic.pause(2000)
    while (sz1 == 0) {
        _1 = randint(0, 4)
        _2 = randint(0, 4)
        if (led.point(_1, _2) == false) {
            sz1 = _1
            sz2 = _2
            basic.showNumber(sz1)
            basic.pause(200)
            basic.showNumber(sz2)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (_00 == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
let _00 = 0
let sz2 = 0
let sz1 = 0
let y = 0
let x = 0
let sz_y = 0
let sz_x = 0
let _2 = 0
let _1 = 0
basic.clearScreen()
let db = 0
let index = 0
sz_x = 0
sz_y = 0
x = 0
y = 0
let index2 = 0
sz1 = 0
sz2 = 0
_1 = 0
_2 = 0
let proba = 0
