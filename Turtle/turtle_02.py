import turtle

rafa = turtle.Turtle()
rafa.getscreen().bgcolor("black")
rafa.color("orange")
rafa.speed(0)

for x in range(36):
    rafa.color("blue")
    rafa.forward(400)
    rafa.penup()
    rafa.setposition(0,0)
    rafa.pendown()
    rafa.right(10)

rafa.right(2)

for y in range (36):
    rafa.color("cyan")
    rafa.forward(320)
    rafa.penup()
    rafa.setposition(0,0)
    rafa.pendown()
    rafa.right(10)

rafa.right(2)

for y in range (36):
    rafa.color("yellow")
    rafa.forward(240)
    rafa.penup()
    rafa.setposition(0,0)
    rafa.pendown()
    rafa.right(10)

rafa.right(2)

for y in range (36):
    rafa.color("orange")
    rafa.forward(160)
    rafa.penup()
    rafa.setposition(0,0)
    rafa.pendown()
    rafa.right(10)

rafa.right(2)

for y in range (36):
    rafa.color("red")
    rafa.forward(80)
    rafa.penup()
    rafa.setposition(0,0)
    rafa.pendown()
    rafa.right(10)

turtle.done()