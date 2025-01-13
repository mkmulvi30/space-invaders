input.onButtonPressed(Button.A, function () {
    player.move(1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if (Enemy.isTouching(shoot)) {
            Enemy.delete()
            game.addScore(1)
        }
    }
    shoot.delete()
})
input.onButtonPressed(Button.B, function () {
    player.move(-1)
})
let Score = 0
let Enemy: game.LedSprite = null
let shoot: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let Lives = 3
game.setScore(0)
basic.forever(function () {
    Enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.pause(10)
    Enemy.delete()
    Score += 1
})
basic.forever(function () {
    if (Enemy.isTouching(player)) {
        Lives += -1
        player.delete()
        basic.pause(500)
        player = game.createSprite(2, 4)
    }
})
basic.forever(function () {
    if (Lives == 0) {
        game.gameOver()
    }
})
