let letter = 0
input.onButtonPressed(Button.A, function () {
    if (letter == 0) {
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    letter = 1
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.pause(200)
    letter = 0
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # #
        `)
    basic.pause(200)
    letter = 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    letter = 0
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # #
        `)
    basic.pause(200)
    letter = 1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
})
