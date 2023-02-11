import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import spriteRunLeft from '@/assets/img/game/spriteRunLeft.png'
import spriteRunRight from '@/assets/img/game/spriteRunRight.png'
import spriteStandLeft from '@/assets/img/game/spriteStandLeft.png'
import spriteStandRight from '@/assets/img/game/spriteStandRight.png'
import platform from '@/assets/img/game/platform.png'
import platformSmallTall from '@/assets/img/game/platformSmallTall.png'
import hills from '@/assets/img/game/hills.png'

const Game = () => {
    function createImage(src: string): any {
        const image = new Image()
        image.src = src
        return image
    }

    const ref = useRef(null)
    const handleInitGame = () => {
        const canvas: HTMLCanvasElement = ref.current
        const c = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = 743 - 18

        const gravity = 1
        class Player {
            position: { x: number; y: number }
            velocity: { x: number; y: number }
            width: number
            height: number
            image: any
            frames: number
            sprites:any
            currentSprite:any
            currentCropWidth: number
            constructor() {
                this.position = {
                    x: 100,
                    y: 100
                }
                this.velocity = {
                    x: 0,
                    y: 20
                }
                this.width = 66
                this.height = 150
                this.image = createImage(spriteStandRight)
                this.frames = 0
                this.sprites = {
                    stand: {
                        right: createImage(spriteStandRight),
                        left: createImage(spriteStandLeft),
                        cropWidth: 177,
                        width: 66

                    },
                    run: {
                        right: createImage(spriteRunRight),
                        left: createImage(spriteRunLeft),
                        cropWidth: 341,
                        width: 127.875
                    }
                }
                this.currentSprite = this.sprites.stand.right
                this.currentCropWidth = 177
            }

            draw() {
                c.drawImage(
                    this.currentSprite,
                    this.currentCropWidth * this.frames,
                    0,
                    this.currentCropWidth,
                    400,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height
                )
            }

            update() {
                this.frames++
                if(this.frames > 59 && this.currentSprite === this.sprites.stand.right) 
                    this.frames = 0
                else if(this.frames > 29 && this.currentSprite === this.sprites.run.right) 
                    this.frames = 0
                else if(this.frames > 59 && this.currentSprite === this.sprites.stand.left) 
                    this.frames = 0
                else if(this.frames > 29 && this.currentSprite === this.sprites.run.left) 
                    this.frames = 0

                this.draw()
                this.position.y += this.velocity.y
                this.position.x += this.velocity.x

                if (this.position.y + this.height + this.velocity.y <= canvas.height)
                    this.velocity.y += gravity
                else {
                    this.velocity.y = 0
                }
            }
        }

        class Platform {
            position: { x: number; y: number }
            width: number
            height: number
            constructor({ x, y }) {
                this.position = {
                    x, y
                    // y: canvas.height - 58
                }
                this.width = 58
                this.height = 58
            }

            draw() {
                c.fillStyle = "black"
                const image = new Image()
                image.src = require('../../../../assets/img/isotipo.png')
                c.drawImage(image, this.position.x, this.position.y, this.width, this.height)
            }
        }

        const player = new Player()
        const platform = [
            new Platform({ x: 576, y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 1), y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 2), y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 3), y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 4), y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 5), y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 6), y: canvas.height - 58 }),
            new Platform({ x: 576 + (58 * 1), y: canvas.height - (58 * 2) }),
            new Platform({ x: 576 + (58 * 2), y: canvas.height - (58 * 2) }),
            new Platform({ x: 576 + (58 * 3), y: canvas.height - (58 * 2) }),
            new Platform({ x: 576 + (58 * 4), y: canvas.height - (58 * 2) }),
            new Platform({ x: 576 + (58 * 5), y: canvas.height - (58 * 2) }),
            new Platform({ x: 576 + (58 * 2), y: canvas.height - (58 * 3) }),
            new Platform({ x: 576 + (58 * 3), y: canvas.height - (58 * 3) }),
            new Platform({ x: 576 + (58 * 4), y: canvas.height - (58 * 3) }),
            new Platform({ x: 576 + (58 * 3), y: canvas.height - (58 * 4) }),
        ]
        const keys = {
            up: {
                pressed: false,
                jump: false
            },
            right: {
                pressed: false
            },
            left: {
                pressed: false
            },
        }
        player.update()

        function animate() {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)
            platform.forEach((platform) => {
                platform.draw()
            })
            player.update()

            if(keys.up.jump) {
                if(player.position.y - player.height <= canvas.height) {
                    keys.up.jump = false
                }
            }

            if(keys.up.pressed && !keys.up.jump) {
                player.velocity.y = -12
            }

            if (keys.right.pressed && player.position.x < canvas.width) {
                player.velocity.x = 5
            } else if (keys.left.pressed && player.position.x > 0) {
                player.velocity.x = -5
            } else 
                player.velocity.x = 0

            platform.forEach((platform) => {
                if (player.position.y + player.height <= platform.position.y
                    && player.position.y + player.height + player.velocity.y >= platform.position.y
                    && player.position.x + player.width >= platform.position.x
                    && player.position.x <= platform.position.x + platform.width
                ) {
                    player.velocity.y = 0
                }
            })
        }
        animate()

        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'a' || 'ArrowLeft':
                    keys.left.pressed = true
                    player.currentSprite = player.sprites.run.left
                    player.currentCropWidth = player.sprites.run.cropWidth
                    player.width = player.sprites.run.width
                    break;
                case 's' || 'ArrowDown':
                    break;
                case 'd' || 'ArrowRight':
                    keys.right.pressed = true
                    player.currentSprite = player.sprites.run.right
                    player.currentCropWidth = player.sprites.run.cropWidth
                    player.width = player.sprites.run.width
                    break;
                case 'w' || 'ArrowUp':
                    keys.up.pressed = true
                    keys.up.jump = true
                    break;
                default:
                    break;
            }
        })
        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'a' || 'ArrowLeft':
                    keys.left.pressed = false
                    player.currentSprite = player.sprites.stand.left
                    player.currentCropWidth = player.sprites.stand.cropWidth
                    player.width = player.sprites.stand.width
                    break;
                case 's' || 'ArrowDown':
                    break;
                case 'd' || 'ArrowRight':
                    keys.right.pressed = false
                    player.currentSprite = player.sprites.stand.right
                    player.currentCropWidth = player.sprites.stand.cropWidth
                    player.width = player.sprites.stand.width
                    break;
                case 'w' || 'ArrowUp':
                    keys.up.pressed = false
                    break;

                default:
                    break;
            }
        })
    }
    useEffect(() => {
        handleInitGame()
    }, [])
    return (
        <Container>
            <canvas ref={ref} />
        </Container>
    )
}

const Container = styled.div`
    position:absolute;
    top: 0px;
    left: 0px;
`

export default Game