scrollbit.clear()
scrollbit.show()
scrollbit.setIcon(
IconNames.Triangle,
0,
0,
128
)
scrollbit.show()
basic.pause(500)
scrollbit.clear()
scrollbit.show()
scrollbit.setAll(64)
scrollbit.show()
basic.forever(function () {
    scrollbit.setPixel(randint(0, 16), randint(0, 6), randint(48, 64))
    scrollbit.setPixel(randint(0, 16), randint(0, 6), 0)
    scrollbit.show()
})
