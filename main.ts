namespace SpriteKind {
    export const Lane = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    move_player_y(-1)
})
function move_player_y (amount: number) {
    player_dy = amount
}
function setup_player () {
    player_car = sprites.create(assets.image`player_car`, SpriteKind.Player)
    player_car.setPosition(8, 100)
    animation.runImageAnimation(
    player_car,
    assets.animation`player_car_driving`,
    100,
    true
    )
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    move_player_y(0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    move_player_x(-1)
})
function setup_background () {
    scene.setBackgroundColor(9)
    scene.setBackgroundImage(assets.image`mountain_bg`)
    lane1 = sprites.create(assets.image`lane_divider_1`, SpriteKind.Lane)
    lane1.setPosition(80, 90)
    animation.runImageAnimation(
    lane1,
    assets.animation`lane_moving`,
    100,
    true
    )
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    move_player_x(0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    move_player_x(0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    move_player_x(1)
})
function choose_spawn_point () {
    spawnPoint = randint(0, 2)
    spawnPoint = 70 + spawnPoint * 15
    return spawnPoint
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    move_player_y(0)
})
function move_player_x (amount: number) {
    player_dx = amount
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    move_player_y(1)
})
function spawn_enemy (enemy: Sprite) {
    enemy.setPosition(170, enemySpawnPoint)
    enemy.vx = randint(-40, -80)
    animation.runImageAnimation(
    enemy,
    [img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 4 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b c c f e e f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 4 4 2 2 2 4 b e . 
        . . e e 9 9 4 4 4 4 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f f f b f e e f f f b f . 
        . . . . c b b . . . . c b b . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 4 4 4 b e . 
        . . e e 9 9 4 2 2 2 4 4 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f c b b f e e f c b b f . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 2 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b b c f e e f b b c f . 
        . . . . c f f . . . . c f f . . 
        `],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.slash)
})
let enemySpawnPoint = 0
let player_dx = 0
let spawnPoint = 0
let lane1: Sprite = null
let player_car: Sprite = null
let player_dy = 0
setup_background()
setup_player()
info.setScore(0)
game.onUpdate(function () {
    if (player_car.x + player_dx >= 8 && player_car.x + player_dx <= scene.screenWidth() - 8) {
        player_car.x += player_dx
    }
    if (player_car.y + player_dy >= 64 && player_car.y + player_dy <= scene.screenHeight() - 8) {
        player_car.y += player_dy
    }
})
game.onUpdateInterval(2000, function () {
    enemySpawnPoint = choose_spawn_point()
    spawn_enemy(sprites.create(img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 4 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b c c f e e f b c c f . 
        . . . . b b f . . . . b b f . . 
        `, SpriteKind.Enemy))
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
