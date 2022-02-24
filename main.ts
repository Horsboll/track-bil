basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    cuteBot.motors(40, 40)
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(40, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 40)
    }
})
