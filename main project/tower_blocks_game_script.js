var blocksClimbed=0;
var game_started=false;
var blockSquareTexture = "url('brick.jpg')";
var platformTexture = "url('platform.jpg')"
var TableRows = 15
var TableCols = 15
var blocksMissed = 3;
var blockDone = false;

class Platform
{
	constructor()
	{
		this.PosX = 6;
		this.FormBuilder();
	}
	FormBuilder()
	{
		this.Coords=[[]]; //clear the form.
		this.Coords[0] = [TableRows,this.PosX];   
		this.Coords.push([TableRows,this.PosX+1]);
		this.Coords.push([TableRows,this.PosX+2]);
		this.Coords.push([TableRows,this.PosX+3]);
	}
	DrawPlatform()
	{
        document.getElementById("elem"+ numberToString(this.Coords[0][0])+ numberToString(this.Coords[0][1])).style.backgroundImage=platformTexture;
        document.getElementById("elem"+ numberToString(this.Coords[1][0])+ numberToString(this.Coords[1][1])).style.backgroundImage=platformTexture;			
        document.getElementById("elem"+ numberToString(this.Coords[2][0])+ numberToString(this.Coords[2][1])).style.backgroundImage=platformTexture;
        document.getElementById("elem"+ numberToString(this.Coords[3][0])+ numberToString(this.Coords[3][1])).style.backgroundImage=platformTexture;
	}
}

class TowerBlock
{
	constructor(name, x, y)
	{
		window.blockDone = false;
		this.blockHeight = 15; // Height is reversed - 15 means the lowest row whereas 0 is the uppermost row.
		this.reachedDown = false;
		this.bend = "left";
        this.dropping = false;
		this.FormBuilder();
	}
	MoveBlockLeftRight()
	{
        if (this.dropping == false)
        {
            if(this.bend=="left")
            {
                this.MoveBlockLeft();
            }
            else
            {
                this.MoveBlockRight();
            }
        }
        else
        {
            this.dropBlock();
        }
		this.DrawBlock();
	}
    dropBlock()
    {
        if(this.reachedDown == false)
        {
			this.dropping = true;
            this.ClearShape(); // always clear before changing values.
            this.Coords[0][0]++;
            this.Coords[1][0]++;
            this.Coords[2][0]++;
            this.Coords[3][0]++;
			if (this.Coords[0][0] > TableRows  )
			{
				window.blocksMissed--;
				this.dropping = false;
				this.reachedDown = true;
				window.blockDone = true;
			}
            
        }
    }
    MoveBlockRight()
    {   
        //alert(this.Coords[1][1]+ 1)
        if(this.Coords[1][1]+ 1 <= 15)
        {
            this.ClearShape(); // always clear before changing values.
            this.Coords[0][1]++;
            this.Coords[1][1]++;
            this.Coords[2][1]++;
            this.Coords[3][1]++;
            
        }
        else
        {
            this.bend = "left";
        }
    }
    MoveBlockLeft()
    {
        if(this.Coords[2][1]- 1 >= 0) //check the left part to still be on the screen after moving.
        {
            this.ClearShape(); // always clear before changing values.
            this.Coords[0][1]--;
            this.Coords[1][1]--;
            this.Coords[2][1]--;
            this.Coords[3][1]--;
        }
        else
        {
            this.bend = "right";
        }
    }
	DrawBlock()
	{
		if (this.Coords[0][0] <= TableRows && this.Coords[2][0] <= TableRows)
		{
			document.getElementById("elem"+ numberToString(this.Coords[0][0])+ numberToString(this.Coords[0][1])).style.backgroundImage=blockSquareTexture;
			document.getElementById("elem"+ numberToString(this.Coords[1][0])+ numberToString(this.Coords[1][1])).style.backgroundImage=blockSquareTexture;			
			document.getElementById("elem"+ numberToString(this.Coords[2][0])+ numberToString(this.Coords[2][1])).style.backgroundImage=blockSquareTexture;
			document.getElementById("elem"+ numberToString(this.Coords[3][0])+ numberToString(this.Coords[3][1])).style.backgroundImage=blockSquareTexture;
		}
		else if (this.Coords[0][0] <= TableRows)
		{
			document.getElementById("elem"+ numberToString(this.Coords[0][0])+ numberToString(this.Coords[0][1])).style.backgroundImage=blockSquareTexture;
			document.getElementById("elem"+ numberToString(this.Coords[1][0])+ numberToString(this.Coords[1][1])).style.backgroundImage=blockSquareTexture;	
		}
		this.CheckOverlap()
	}
	ClearShape()
	{
		if (window.blockDone == false)
		{
			if (this.Coords[0][0] <= TableRows && this.Coords[2][0] <= TableRows )
			{
				document.getElementById("elem"+ numberToString(this.Coords[0][0])+ numberToString(this.Coords[0][1])).style.backgroundImage="";
				document.getElementById("elem"+ numberToString(this.Coords[1][0])+ numberToString(this.Coords[1][1])).style.backgroundImage="";			
				document.getElementById("elem"+ numberToString(this.Coords[2][0])+ numberToString(this.Coords[2][1])).style.backgroundImage="";
				document.getElementById("elem"+ numberToString(this.Coords[3][0])+ numberToString(this.Coords[3][1])).style.backgroundImage="";
			}
			else if (this.Coords[0][0] <= TableRows)
			{
				document.getElementById("elem"+ numberToString(this.Coords[0][0])+ numberToString(this.Coords[0][1])).style.backgroundImage="";
				document.getElementById("elem"+ numberToString(this.Coords[1][0])+ numberToString(this.Coords[1][1])).style.backgroundImage="";	
			}
		}
	}
	FormBuilder()
	{
		this.Coords=[[]]; //clear the form.
		this.Coords[0] = [0,7];   //Upper part
		this.Coords.push([0,8]); //Right part;
		this.Coords.push([1,7]); //left part;
		this.Coords.push([1,8]); //bottom part
	}
	CheckOverlap()
	{
		if(this.reachedDown == false)
		{
			if (this.Coords[2][0] < TableRows)
			{
				if( (document.getElementById("elem" + numberToString(parseInt(this.Coords[3][0]+1)) + numberToString(this.Coords[3][1])).style.backgroundImage != "")
					|| (document.getElementById("elem" + numberToString(parseInt(this.Coords[2][0]+1)) + numberToString(this.Coords[2][1])).style.backgroundImage != "")
					||(document.getElementById("elem" + numberToString(parseInt(this.Coords[3][0]+1)) + numberToString(this.Coords[3][1])).style.backgroundImage != "")
					|| (document.getElementById("elem" + numberToString(parseInt(this.Coords[2][0]+1)) + numberToString(this.Coords[2][1])).style.backgroundImage != "")
					)
				{

					this.reachedDown = true;
					this.dropping = false;
					window.blocksClimbed++; // increase the global variable 
					window.blockDone = true;
					if (this.blockHeight > this.Coords[0][0])
					{
						this.blockHeight = this.Coords[0][0];
						if (this.blockHeight < 8)
						{
							this.moveScreenUpper()
							this.moveScreenUpper()
						}
					}
				}
			}
		}
	}
	moveScreenUpper()
	{
		var offset = 1;
		this.blockHeight--;
		for(var i = TableRows; i>this.blockHeight; i--)
		{
			for(var j = 0; j<TableCols+1; j++)
			{
				document.getElementById("elem"+ numberToString(i)+ numberToString(j)).style.backgroundImage = 
									document.getElementById("elem"+ numberToString(i-offset)+ numberToString(j)).style.backgroundImage;
			}
		}
	}
}

var block = new TowerBlock();
var build_platform = new Platform()

setInterval(function() {
	if(game_started)
	{
		block.MoveBlockLeftRight();
		if (blockDone == true)
		{
			block = new TowerBlock();
			if (blocksMissed == 0)
			{
					document.getElementById("gameStatus").innerHTML = "GAME OVER!";
					game_started = false;
			}
			updateBlocksClimbed();
			updateBlocksMissed();
		}
	}
}, 200);
function StartGame()
{
	game_started = true;
	updateBlocksClimbed();
	updateBlocksMissed();
	build_platform.DrawPlatform();
	document.getElementById("startgame").disabled = true;
	document.getElementById("restartgame").disabled = false;
}

function Drop()
{
    block.dropBlock()
}

function RestartGame()
{
	for(var i = 0; i<16; i++)
	{
		for(var j=0;j<16;j++)
		{
			document.getElementById("elem" + numberToString(i) + numberToString(j)).style.backgroundImage = "";
		}
	}
	window.blocksClimbed = 0;
	window.blocksMissed = 3;
	updateBlocksClimbed();
	updateBlocksMissed();
	build_platform.DrawPlatform();
	block = new TowerBlock();
	document.getElementById("gameStatus").innerHTML = "";
	game_started = true;
	document.getElementById("startgame").disabled = true;
	document.getElementById("restartgame").disabled = false;
}
function numberToString(n){
    return n > 9 ? "" + n: "0" + n;
}

function updateBlocksClimbed()
{
	document.getElementById("blocksClimbed").innerHTML = "Blocks Climbed: " + window.blocksClimbed;
}
function updateBlocksMissed()
{
	document.getElementById("blocksMissed").innerHTML = "Blocks Missed: " + window.blocksMissed;
}