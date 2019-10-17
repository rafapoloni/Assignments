import turtle

rafa = turtle.Turtle()
rafa.speed(0)

for i in range(360):
	rafa.color("cyan")
	rafa.forward(400)
	rafa.penup()
	rafa.setposition(0,0)
	rafa.pendown()
	rafa.left(1)

for i in range(360):
	rafa.color("blue")
	rafa.forward(150)
	rafa.penup()
	rafa.forward(150)
	rafa.pendown()
	rafa.forward(100)
	rafa.penup()
	rafa.setposition(0,0)
	rafa.pendown()
	rafa.left(1)

for i in range(360):
	rafa.color("black")
	rafa.forward(100)
	rafa.penup()
	rafa.forward(250)
	rafa.pendown()
	rafa.forward(50)
	rafa.penup()
	rafa.setposition(0,0)
	rafa.pendown()
	rafa.left(1)

turtle.done()