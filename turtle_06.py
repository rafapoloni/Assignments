import turtle

rafa = turtle.Turtle()
rafa.getscreen().bgcolor("black")
rafa.speed(0)

for i in range(180):
	rafa.color("cyan")
	rafa.forward(2*(180-i))
	rafa.color("yellow")
	rafa.forward(2*i)
	rafa.penup()
	rafa.setposition(0,0)
	rafa.left(1)
	rafa.pendown()

for i in range(180):
	rafa.color("yellow")
	rafa.forward(2*(180-i))
	rafa.color("cyan")
	rafa.forward(2*i)
	rafa.penup()
	rafa.setposition(0,0)
	rafa.left(1)
	rafa.pendown()

turtle.done()