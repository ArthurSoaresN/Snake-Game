const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const audio = new Audio('../assets/eat.wav')


const size = 30

const snake = [
    {x: 270, y :240},
    {x: 270+size, y :240}
]

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomPosisiton = () => {
    const number = randomNumber(0 , canvas.width - size)
    return Math.round(number/30) * 30
}

const AppleColor = () => {
    let value = randomNumber(0,1)
    if (value == 0 ) {
        return "red"
    }

    else {
        return "#7CFC00" 
    } 
}

const food = {
    x: randomPosisiton(),
    y: randomPosisiton(),
    color: AppleColor()
}

let direction, loopID

const drawFood = () => {
    const {x,y,color} = food
    ctx.shadowColor = color
    ctx.shadowBlur = 6
    ctx.fillStyle = food.color
    ctx.fillRect(food.x, food.y, size, size)
    ctx.shadowBlur = 0
}

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

const checkEat = () => {

    const head = snake[snake.length -1]
    if (head.x == food.x && head.y == food.y) {
        snake.push(head)
        audio.play()
        let x = randomPosisiton()
        let y = randomPosisiton()

        while (snake.find((position) => position.x == x && position.y == y)){
            x = randomPosisiton()
            y = randomPosisiton()
        }

        food.x = x
        food.y = y
        food.color = AppleColor()
    }

}

const play = () => {
clearInterval(loopID) 
ctx.clearRect(0, 0, 600, 600)
drawGrid() 
drawFood()
moveSnake()
drawSnake()
checkEat()

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