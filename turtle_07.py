import turtle

rafa = turtle.Turtle()
rafa.getscreen().bgcolor("black")
rafa.color("cyan")
rafa.speed(0)

for x in range(1000):
    rafa.width(x / 100 + 1)
    rafa.forward(x)
    rafa.left(59)

turtle.done()