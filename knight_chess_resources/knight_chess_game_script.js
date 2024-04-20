var emptyTable=true;
var knightChess = "url('knight_chess.png')"
var piece = "";
var validOption = [];
var score = 0;
var gameOver=2; // 0 for game lost, 1 for game won, 2 for init.
var displayOptions=false
var isFullScreen = false;

function FullscreenMode(e) {
    var game_content = document.getElementById("game_content");
    var fullscreen_button = document.getElementById("fullscreen_button");
	if (isFullScreen == false)
	{
		if (game_content.requestFullscreen) 
		{
			game_content.requestFullscreen();
			isFullScreen = true;
			fullscreen_button.value   = "Exit Fullscreen";
			fullscreen_button.style.backgroundColor = "pink";
		} 
		else if (game_content.webkitRequestFullscreen) 
		{ /* Safari */
			game_content.webkitRequestFullscreen();
			isFullScreen = true;
			fullscreen_button.value   = "Exit Fullscreen";
			fullscreen_button.style.backgroundColor = "pink";
		} else if (game_content.msRequestFullscreen) 
		{ /* IE11 */
			game_content.msRequestFullscreen();
			isFullScreen = true;
			fullscreen_button.value   = "Exit Fullscreen";
			fullscreen_button.style.backgroundColor = "pink";
		}
	}
	else
	{

		if (document.exitFullscreen) 
		{
			document.exitFullscreen();
			isFullScreen = false;
			fullscreen_button.value = "Enter Fullscreen";
			fullscreen_button.style.backgroundColor = "white";
		} 
		else if (document.webkitExitFullscreen) 
		{ /* Safari */
			document.webkitExitFullscreen();
			isFullScreen = false;
			fullscreen_button.value = "Enter Fullscreen";
			fullscreen_button.style.backgroundColor = "white";
		} else if (document.msExitFullscreen) 
		{ /* IE11 */
			document.msExitFullscreen();
			isFullScreen = false;
			fullscreen_button.value = "Enter Fullscreen";
			fullscreen_button.style.backgroundColor = "white";
		}
	}
}

function Enter_FullScreen(e)
{
	if (e.key == "f")
	{
		FullscreenMode(); 
	}
}

function SquareClicked(x)
{
	var square = document.getElementById(x);
	if(emptyTable)
	{
        document.getElementById("result").innerHTML = "";
		document.getElementById("result").color = "white";
		emptyTable = false;
		square.style.backgroundImage = knightChess;
		piece = x[4] + x[5];
		SearchOption(); //validOption will get filled here
	}
	else if(x[4] + x[5] == piece)
	{
		if(displayOptions == true)
		{
			displayMoveOption();
		}

	}
	else 
	{
		for(var i=0;i<validOption.length;i++)
		{
			if(x==validOption[i])
			{
				displayOptions = false;
				square = document.getElementById(x);
				square.style.backgroundImage = knightChess;
				score++;
				document.getElementById("score").innerHTML = "Score: " + score + " out of 64.";
				if(square.style.backgroundColor == "red") 
				{
					square.style.backgroundColor = "black";
				}
				else if (square.style.backgroundColor == "yellow")
				{
					square.style.backgroundColor = "white";
				}
				if (square != document.getElementById("elem"+piece))
				{
					document.getElementById("elem"+piece).style.backgroundImage="";
					if(document.getElementById("elem"+piece).style.backgroundColor == "white")
					{
						document.getElementById("elem"+piece).style.backgroundColor="yellow";
					}
					else if(document.getElementById("elem"+piece).style.backgroundColor == "black")
					{
						document.getElementById("elem"+piece).style.backgroundColor="blue";
					}
				}
				piece = x[4] + x[5];

			}
			else
			{
				if(document.getElementById(validOption[i]).style.backgroundColor == "pink")
				{
					document.getElementById(validOption[i]).style.backgroundColor="white";
				}
				else if(document.getElementById(validOption[i]).style.backgroundColor == "red")
				{
					document.getElementById(validOption[i]).style.backgroundColor="black";
				}
			}
		}
		
		validOption = [];
		SearchOption(); //validOption will get filled here
		if(validOption.length == 0)
		{
			getGameOverStatus();
		}
		if(score >= 10 && score < 20)
		{
			document.getElementById("score").style.backgroundColor = "#FF9E00"; //bronze color
		}
		else if(score >= 20 && score < 30)
		{
			document.getElementById("score").style.backgroundColor = "#FACD00"; //yellow color;
		}
		else if(score >= 30 && score < 45)
		{
			document.getElementById("score").style.backgroundColor = "silver";
		}
		else if(score >= 45 && score < 60)
		{
			document.getElementById("score").style.backgroundColor = "gold";
		}
		else if(score >= 60)
		{
			document.getElementById("score").style.backgroundColor = "green";
		}
	}
}

function displayMoveOption()
{
	validOption.forEach(element => 
	{
			if(document.getElementById(element).style.backgroundColor=="white")
			{
				document.getElementById(element).style.backgroundColor="pink";
			}
			else if(document.getElementById(element).style.backgroundColor=="black")
			{		
				document.getElementById(element).style.backgroundColor="red";
			}
	});
}

function SearchOption()
{
	displayOptions = true;
	var tdRow = parseInt(piece[0]);
	var tdCol = parseInt(piece[1]);
	if(tdRow+2 < 8 && tdCol+1 < 8) //hard coded option 1
	{
		var elem="elem"+(tdRow+2)+(tdCol+1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);

		}
	}
	if(tdRow+2 < 8 && tdCol-1 >=0) //hard coded option 2
	{
		var elem="elem"+(tdRow+2)+(tdCol-1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
		}
	}
	if(tdRow+1 < 8 && tdCol+2 < 8) //hard coded option 3
	{
		var elem="elem"+(tdRow+1)+(tdCol+2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
		}
	}
	if(tdRow-1 >= 0 && tdCol+2 < 8) //hard coded option 4
	{
		var elem="elem"+(tdRow-1)+(tdCol+2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{

			validOption.push(elem);
		}
	}
	if(tdRow+1 < 8 && tdCol-2 >=0) //hard coded option 5
	{
		var elem="elem"+(tdRow+1)+(tdCol-2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
		}
	}
	if(tdRow-1 >= 0 && tdCol-2 >=0) //hard coded option 6
	{
		var elem="elem"+(tdRow-1)+(tdCol-2);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
		}
	}
	if(tdRow-2 >= 0 && tdCol+1 < 8) //hard coded option 7
	{
		var elem="elem"+(tdRow-2)+(tdCol+1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
				document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
		}
	}
	if(tdRow-2 >= 0 && tdCol-1 >= 0) //hard coded option 8
	{
		var elem="elem"+(tdRow-2)+(tdCol-1);
		if(document.getElementById(elem).style.backgroundColor!="yellow" &&
			document.getElementById(elem).style.backgroundColor!="blue")
		{
			validOption.push(elem);
		}
	}
}
function getGameOverStatus()
{
	for(var i =0; i<8; i++)
	{
		for(var j=0;j<8;j++)
		{
			if(document.getElementById("elem"+i+j).style.backgroundColor == "white" ||
				document.getElementById("elem"+i+j).style.backgroundColor == "black")
			{
				document.getElementById("result").innerHTML = "Game Over. You failed to conquer the checkerboard.";
				gameOver=0;
				break;
			}
		}
	}
	if(gameOver!=0)
	{
		document.getElementById("result").innerHTML = "Congratulations. You have conquered the checkerboard.";
	}
}

function gameRestart()
{
	emptyTable=true;
	piece=""
	validOption = [];
	score = 0;
	gameOver=2; // 0 for game lost, 1 for game won, 2 for init.
	document.getElementById("score").innerHTML = "Score: ";
	document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = "Choose a square in order to begin.";
	for(var i =0; i<8; i++)
	{
		for(var j=0;j<8;j++)
		{
			if(document.getElementById("elem"+i+j).style.backgroundColor == "yellow" ||
				document.getElementById("elem"+i+j).style.backgroundColor == "pink")
			{
				document.getElementById("elem"+i+j).style.backgroundColor = "white";
			}
			else if(document.getElementById("elem"+i+j).style.backgroundColor == "blue" ||
				document.getElementById("elem"+i+j).style.backgroundColor == "red")
			{
				document.getElementById("elem"+i+j).style.backgroundColor = "black";
			}
			document.getElementById("elem"+i+j).style.backgroundImage = "";		
		}
	}
}