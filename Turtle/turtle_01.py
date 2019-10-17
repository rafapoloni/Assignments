import turtle

rafa = turtle.Turtle()
rafa.getscreen().bgcolor("black")
rafa.color("orange")
rafa.speed(0)

for x in range(180):
    rafa.right(2)
    rafa.forward(100)
    rafa.left(30)
    rafa.forward(40)
    rafa.right(60)
    rafa.forward(120)
    rafa.left(90)
    rafa.forward(200)
    rafa.right(60)
    rafa.forward(200)
    rafa.penup()
    rafa.setposition(0,0)
    rafa.pendown()

turtle.done()