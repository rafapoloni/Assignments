import turtle

rafa = turtle.Turtle()
rafa.getscreen().bgcolor("black")
rafa.color("yellow")
rafa.speed(1)

for x in range(1500 ):
    #rafa.width(x / 100 + 1)
    rafa.forward(x)
    rafa.left(111)

turtle.done()