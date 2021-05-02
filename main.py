Delay = 50
scrollbit.clear()
scrollbit.show()
basic.pause(200)
scrollbit.scroll_text("Hello Big Clive!!", 128, Delay)
basic.pause(500)
scrollbit.scroll_text("Hello Technical Family!!", 128, Delay)
basic.pause(500)
scrollbit.set_all(64)
scrollbit.show()
basic.pause(1000)

def on_forever():
    scrollbit.set_pixel(randint(0, 16), randint(0, 6), randint(48, 81))
    scrollbit.show()
    scrollbit.set_pixel(randint(0, 16), randint(0, 6), 0)
    scrollbit.show()
basic.forever(on_forever)
