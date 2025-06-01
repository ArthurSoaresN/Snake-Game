const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const snake = [
    {x: 270, y :240},
    {x: 270+size, y :240}
]

let direction, loopID

const drawSnake = () => {
    ctx.fillStyle = "#836FFF"
    snake.forEach( (position, index) => {
        if (index == snake.length - 1) {
            ctx.fillStyle = "#6959CD"
        }
        ctx.fillRect(position.x, position.y, size, size)
    }
    
    )
}

const moveSnake = () => {

    if (!direction) return

    const head = snake[snake.length - 1]

    if (direction == "right") {
        snake.push({x:head.x+size,y:head.y})
    }

    if (direction == "left") {
        snake.push({x:head.x-size,y:head.y})
    }

    if (direction == "down") {
        snake.push({x:head.x,y:head.y+size})
    }

    if (direction == "up") {
        snake.push({x:head.x,y:head.y-size})
    }

    snake.shift()
}

//"#98FB98"
const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#98FB98"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i,0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0,i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }
}


const play = () => {
drawGrid()
clearInterval(loopID) 
ctx.clearRect(0, 0, 600, 600)
drawGrid() 
moveSnake()
drawSnake()
    loopID = setTimeout(()=> {
    play()
    }, 300)
}

play()

document.addEventListener("keydown", ({key}) => {

    if ((key == "ArrowRight" || key == "d") && (direction != "left")) {
        direction = "right"
    }

    if ((key == "ArrowLeft" || key == "a") && (direction != "right")) {
        direction = "left"
    }

    if ((key == "ArrowDown" || key == "s") && direction != "up") {
        direction = "down"
    }

    if ((key == "ArrowUp" || key == "w") && direction != "down") {
        direction = "up"
    }

})