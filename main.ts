let Delay = 50
scrollbit.clear()
scrollbit.show()
basic.pause(200)
scrollbit.scrollText("Hello Big Clive!!", 128, Delay)
basic.pause(500)
scrollbit.scrollText("Hello Technical Family!!", 128, Delay)
basic.pause(500)
scrollbit.setAll(64)
scrollbit.show()
basic.pause(1000)
basic.forever(function () {
    scrollbit.setPixel(randint(0, 16), randint(0, 6), randint(48, 81))
    scrollbit.show()
    scrollbit.setPixel(randint(0, 16), randint(0, 6), 0)
    scrollbit.show()
})
control.inBackground(function () {
	
})
