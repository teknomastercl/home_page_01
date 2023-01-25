import React, { useEffect, useRef, useState } from 'react'
import kaboom from "kaboom"
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { imageListClasses } from '@mui/material'

const Game = () => {
    const [rightPress, setRightPress] = useState(false)
    const [leftPress, setLeftPress] = useState(false)

    const ref = useRef(null)
    const handleInitGame = () => {
        const canvas: HTMLCanvasElement = ref.current
        const c = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = 743 - 18

        const gravity = 1.5

        class Player {
            position: { x: number; y: number }
            velocity: { x: number; y: number }
            width: number
            height: number
            constructor() {
                this.position = {
                    x: 100,
                    y: 100
                }
                this.velocity = {
                    x: 0,
                    y: 20
                }
                this.width = 58
                this.height = 58
            }

            draw() {
                c.fillStyle = '#F37368'
                c.fillRect(this.position.x, this.position.y, this.width, this.height)
            }

            update() {
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
                image.src = require('@/assets/img/isotipo.png')
                c.drawImage(image, this.position.x,this.position.y, this.width, this.height )
            }
        }

        const player = new Player()
        const platform = [
            new Platform({x: 576, y: canvas.height - 58}),
            new Platform({x: 576 + (58*1), y: canvas.height - 58}),
            new Platform({x: 576 + (58*2), y: canvas.height - 58}),
            new Platform({x: 576 + (58*3), y: canvas.height - 58}),
            new Platform({x: 576 + (58*4), y: canvas.height - 58}),
            new Platform({x: 576 + (58*5), y: canvas.height - 58}),
            new Platform({x: 576 + (58*6), y: canvas.height - 58}),
            new Platform({x: 576 + (58*1), y: canvas.height - (58*2)}),
            new Platform({x: 576 + (58*2), y: canvas.height - (58*2)}),
            new Platform({x: 576 + (58*3), y: canvas.height - (58*2)}),
            new Platform({x: 576 + (58*4), y: canvas.height - (58*2)}),
            new Platform({x: 576 + (58*5), y: canvas.height - (58*2)}),
            new Platform({x: 576 + (58*2), y: canvas.height - (58*3)}),
            new Platform({x: 576 + (58*3), y: canvas.height - (58*3)}),
            new Platform({x: 576 + (58*4), y: canvas.height - (58*3)}),
            new Platform({x: 576 + (58*3), y: canvas.height - (58*4)}),
        ]
        const keys = {
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

            if (keys.right.pressed && player.position.x < canvas.width) {
                player.velocity.x = 5
            } else if (keys.left.pressed && player.position.x > 0) {
                player.velocity.x = -5
            } else player.velocity.x = 0

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
            console.log('keycode', event.key)
            switch (event.key) {
                case 'a' || 'ArrowLeft':
                    keys.left.pressed = true
                    break;
                case 's' || 'ArrowDown':
                    break;
                case 'd' || 'ArrowRight':
                    keys.right.pressed = true
                    break;
                case 'w' || 'ArrowUp':
                    player.velocity.y -= 10
                    break;

                default:
                    break;
            }
        })
        window.addEventListener('keyup', (event) => {
            console.log('keycode', event.key)
            switch (event.key) {
                case 'a' || 'ArrowLeft':
                    keys.left.pressed = false
                    break;
                case 's' || 'ArrowDown':

                    break;
                case 'd' || 'ArrowRight':
                    keys.right.pressed = false
                    break;
                case 'w' || 'ArrowUp':
                    player.velocity.y -= 20
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