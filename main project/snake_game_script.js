var snakeSeettled=false;
var snakeHeadPos = [];
var SnakeDirMoving="";
var Fruit = "";
var score = 0;
var gameOver=false;
var FruitTexture = "url('snake_resources/snake_game_fruit.png')";
var snakeHeadTexture = "url('snake_resources/snake_head.png')";
var snakeBodyTexture = "url('snake_resources/snake_body.png')";
function SquareClicked(x)
{
	if(snakeSeettled==false)
	{
		document.getElementById(x).style.borderColor="red";
		snakeHeadPos.push(x);
		snakeSeettled = true;
	}
}
function gameStart()
{
	if(snakeSeettled==false)
	{
		document.getElementById("result").innerHTML = "Please select a square before hitting START."
	}
	else
	{
		for(var i = 0 ; i<snakeHeadPos.length; i++) //Only the snake head is available in snakeHeadPos currently
		{
			document.getElementById(snakeHeadPos[i]).style.backgroundImage = snakeHeadTexture;
			document.getElementById(snakeHeadPos[i]).style.borderColor="black";
		}
		document.getElementById("result").innerHTML = "";
		document.getElementById("startgame").disabled = true;
		document.getElementById("restartgame").disabled = false;
		document.getElementById("turnLeft").disabled = false;
		document.getElementById("turnRight").disabled = false;
		document.getElementById("turnUp").disabled = false;
		document.getElementById("turnDown").disabled = false;
		var fruitX = Math.floor(Math.random() * 8);
		var fruitY = Math.floor(Math.random() * 8);
		Fruit = "elem" + fruitX + fruitY;
		document.getElementById(Fruit).style.backgroundImage = FruitTexture;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
}
document.onkeydown = function (e) //trigger event when key is pressed down
{
    switch (e.key) //if the key pressed is SPACE KEY
    {
        case "ArrowLeft":
        {
            setDirLeft();
            break;
        }
        case "ArrowRight":
        {
            setDirRight();
            break;
        }
        case "ArrowUp":
        {
            setDirUp();
            break;
        }
        case "ArrowDown":
        {
            setDirDown();
            break;
        }
        default:
        {
            break;
        }
    }
}
function setDirLeft()
{
	SnakeDirMoving="left";
}
function setDirRight()
{
	SnakeDirMoving="right";
}
function setDirUp()
{
	SnakeDirMoving="up";
}
function setDirDown()
{
	SnakeDirMoving="down";
}

//The main loop function:
window.setInterval(function(){
	//Creating a main loop;
	if(!gameOver) //if not gameover
	{
		if(SnakeDirMoving=="left")
		{
			for(var i = 0 ; i<snakeHeadPos.length; i++)
			{
				document.getElementById(snakeHeadPos[i]).style.backgroundImage="";
				var buffer; //this variable will store the previous position of the head in order to pass it to the body.
				if(i==0)
				{
					buffer = snakeHeadPos[i];
					if(parseInt(snakeHeadPos[i][5])-1 < 0)
					{
						snakeHeadPos[i] = "elem" + snakeHeadPos[i][4] + "7";
					}
					else
					{
						snakeHeadPos[i]	= "elem" + snakeHeadPos[i][4] + (parseInt(snakeHeadPos[i][5])-1);
					}
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeHeadTexture; //let this be drawed before checking gameover
					checkSnakeCollision();
				}
				else
				{
					var aux = snakeHeadPos[i];
					snakeHeadPos[i] = buffer;
					buffer = aux;
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeBodyTexture;
				}
				
			}
		}
		else if(SnakeDirMoving=="right")
		{
			for(var i = 0 ; i<snakeHeadPos.length; i++)
			{
				document.getElementById(snakeHeadPos[i]).style.backgroundImage=""; //remove the texture
				var buffer; //this variable will store the previous position of the head in order to pass it to the body.
				if(i==0)
				{
					buffer = snakeHeadPos[i];
					if(parseInt(snakeHeadPos[i][5])+1 > 7)
					{
						snakeHeadPos[i] = "elem" + snakeHeadPos[i][4] + "0";
					}
					else
					{
						snakeHeadPos[i] = "elem" + snakeHeadPos[i][4] + (parseInt(snakeHeadPos[i][5])+1);
					}
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeHeadTexture; //let this be drawed before checking gameover
					checkSnakeCollision();
				}
				else
				{
					var aux = snakeHeadPos[i];
					snakeHeadPos[i] = buffer;
					buffer = aux;
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeBodyTexture;
				}
			}
		}
		else if(SnakeDirMoving=="up")
		{
			for(var i = 0 ; i<snakeHeadPos.length; i++)
			{
				document.getElementById(snakeHeadPos[i]).style.backgroundImage="";
				var buffer; //this variable will store the previous position of the head in order to pass it to the body.
				if(i==0)
				{
					buffer = snakeHeadPos[i];
					if(parseInt(snakeHeadPos[i][4])-1 < 0)
					{
						snakeHeadPos[i] = "elem" + "7" + snakeHeadPos[i][5];
					}
					else
					{
						snakeHeadPos[i] = "elem" + (parseInt(snakeHeadPos[i][4])-1) + snakeHeadPos[i][5];
					}
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeHeadTexture; //let this be drawed before checking gameover
					checkSnakeCollision();
				}
				else
				{
					var aux = snakeHeadPos[i];
					snakeHeadPos[i] = buffer;
					buffer = aux;
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeBodyTexture;
				}
			}
		}
		else if(SnakeDirMoving=="down")
		{
			for(var i = 0 ; i<snakeHeadPos.length; i++)
			{
				document.getElementById(snakeHeadPos[i]).style.backgroundImage="";
				var buffer; //this variable will store the previous position of the head in order to pass it to the body.
				if(i==0)
				{
					buffer = snakeHeadPos[i];
					if(parseInt(snakeHeadPos[i][4])+1 > 7)
					{
						snakeHeadPos[i] = "elem" + "0" + snakeHeadPos[i][5];
					}
					else
					{
						snakeHeadPos[i] = "elem" + (parseInt(snakeHeadPos[i][4])+1) + snakeHeadPos[i][5];
					}
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeHeadTexture; //let this be drawed before checking gameover
					checkSnakeCollision();
				}
				else
				{
					var aux = snakeHeadPos[i];
					snakeHeadPos[i] = buffer;
					buffer = aux;
					document.getElementById(snakeHeadPos[i]).style.backgroundImage=snakeBodyTexture;
				}
			}
		}
		if(Fruit!="" && snakeHeadPos.length>0)
		{
			for(var i=0; i<snakeHeadPos.length; i++)
			{
				if(snakeHeadPos[i][4] == Fruit[4] && snakeHeadPos[i][5] == Fruit[5]) //the head of the snake is at index [0]
				{
					document.getElementById(Fruit).style.backgroundImage = ""; //remove fruit texture from the table.
					var fruitX = Math.floor(Math.random() * 8);
					var fruitY = Math.floor(Math.random() * 8);
					checkFruitCoords(fruitX, fruitY);
					document.getElementById(Fruit).style.backgroundImage = FruitTexture; //add fruit texture to the new respawned fruit
					score++;
					document.getElementById("score").innerHTML = "Score: " + score;
					var lastTailY = parseInt(snakeHeadPos[snakeHeadPos.length-1][4]);
					var lastTailX = parseInt(snakeHeadPos[snakeHeadPos.length-1][5]);
					if(SnakeDirMoving == "down")
					{
						if(lastTailY-1 >=0)
						{
							lastTailY-=1;
							snakeHeadPos.push("elem" + lastTailY + lastTailX);
						}
						else
						{
							snakeHeadPos.push("elem" + "7" + lastTailX);
						}
					}
					else if (SnakeDirMoving == "up")
					{
						if(lastTailY+1 < 8)
						{
							lastTailY+=1;
							snakeHeadPos.push("elem" + lastTailY + lastTailX);
						}
						else
						{
							snakeHeadPos.push("elem" + "0" + lastTailX);
						}
					}
					else if (SnakeDirMoving == "left")
					{
						if(lastTailX+1 < 8)
						{
							lastTailX+=1;
							snakeHeadPos.push("elem" + lastTailY + lastTailX);
						}
						else
						{
							snakeHeadPos.push("elem" + lastTailY +  "7" );
						}
					}
					else if (SnakeDirMoving == "right")
					{
						if(lastTailX-1 >= 0)
						{
							lastTailX-=1;
							snakeHeadPos.push("elem" + lastTailY + lastTailX);
						}
						else
						{
							snakeHeadPos.push("elem" + lastTailY + "0");
						}
					}

				}
			}
		}
	}
}, 500); //this functions is executed every 500 mili-seconds. 2FPS per second.

function checkSnakeCollision()
{
	for(var j=0;j<snakeHeadPos.length; j++) //Check for Snake Collision.
	{
		if(j!=0)
		{
			if(snakeHeadPos[0][5] == snakeHeadPos[j][5] && snakeHeadPos[0][4] == snakeHeadPos[j][4])
			{
				document.getElementById("result").innerHTML = "Game Over!";
				gameOver=true;
			}
		}
	}
}
function checkFruitCoords(fruitX, fruitY)
{
	for(var i = 0; i<snakeHeadPos.length;i++) //Make sure the fruit gets respawned on a free square.
	{
		var reselect=false;
		while(fruitX == parseInt(snakeHeadPos[i][5]) && fruitY==parseInt(snakeHeadPos[i][4]) )
		{
			fruitX = Math.floor(Math.random() * 8);
			fruitY = Math.floor(Math.random() * 8);
			reselect=true;
		}
		if(reselect)
		{
			i=0;
		}
	}
	Fruit = "elem" + fruitX + fruitY;
}
function gameRestart()
{
	snakeSeettled=false;
	snakeHeadPos = [];
	SnakeDirMoving="";
	Fruit = "";
	score = 0;
	gameOver=false;
	document.getElementById("result").innerHTML = "";
	document.getElementById("startgame").disabled = false;
	document.getElementById("restartgame").disabled = true;
	//Clear the table:
	for(var i=0;i<8; i++)
	{
		for (var j=0;j<8;j++)
		{
			document.getElementById("elem" + i + j).style.backgroundImage="";
		}
	}
}