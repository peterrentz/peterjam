let plant = 0
input.onButtonPressed(Button.A, function () {
    if (plant == 0) {
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    if (plant == 0) {
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    plant = randint(0, 10)
    if (plant == 0) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(500)
    } else {
        basic.showNumber(plant)
        basic.pause(500)
    }
})
