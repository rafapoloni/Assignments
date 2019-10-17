import turtle

rafa = turtle.Turtle()
rafa.getscreen().bgcolor("black")
rafa.speed(0)

for x in range(20):
	rafa.width(x*x)
	rafa.penup()
	rafa.color("cyan")
	rafa.sety(-x*x*5)
	rafa.pendown()
	rafa.circle(x*x*5)	

# rafa.penup()
# rafa.home()
# rafa.pendown()

# for i in range(300):
# 	rafa.color("magenta")
# 	rafa.forward(600)
# 	rafa.penup()
# 	rafa.setposition(0,0)
# 	rafa.pendown()
# 	rafa.left(i)

turtle.done()