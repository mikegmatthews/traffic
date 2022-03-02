namespace SpriteKind {
    export const Lane = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    move_player_y(-1)
})
function move_player_y (amount: number) {
    mySprite.y += amount
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    move_player_y(-1)
})
function setup_player () {
    mySprite = sprites.create(assets.image`player_car`, SpriteKind.Player)
    mySprite.setPosition(8, 100)
    animation.runImageAnimation(
    mySprite,
    assets.animation`player_car_driving`,
    100,
    true
    )
}
function setup_background () {
    scene.setBackgroundColor(9)
    scene.setBackgroundImage(assets.image`mountain_bg`)
    lane1 = sprites.create(assets.image`lane_divider_1`, SpriteKind.Lane)
    lane1.setPosition(80, 90)
}
function move_player_x (amount: number) {
    mySprite.x += amount
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    move_player_y(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    move_player_y(1)
})
let lane1: Sprite = null
let mySprite: Sprite = null
setup_background()
setup_player()
