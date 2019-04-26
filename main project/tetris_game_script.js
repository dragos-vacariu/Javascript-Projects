var score=0;
var game_started=false;
class Shape
{
	constructor(name, x, y)
	{
		this.Name = name.toLowerCase();
		this.reachedDown = false;
		this.FormBuilder(x,y);
	}
	MoveDown()
	{
		if(this.Name=="square" || this.Name=="l1" || this.Name=="l2" || this.Name=="l3" || this.Name=="l4" 
				 || this.Name=="s1" || this.Name=="s2" || this.Name=="i1" || this.Name=="i2" || this.Name=="f1"
				|| this.Name=="f2" || this.Name=="f3" || this.Name=="f4")
		{
			if(this.Coords[3][0]+ 1 < 16)
			{
				this.ClearShape(); //always clear before changing values.
				this.Coords[0][0]++;
				this.Coords[1][0]++;
				this.Coords[2][0]++;
				this.Coords[3][0]++;
			}
			else
			{
				this.reachedDown = true; //make this before check score
				this.ClearShape(); // make the last clear before it gets unclearable
			}
		}
	}
	MoveLeft()
	{
		if(this.reachedDown == false)
		{
			//Check if there is a form
			if(this.Name=="square" || this.Name=="l1" || this.Name=="l2" || this.Name=="l3" || this.Name=="l4" 
				|| this.Name=="s2" || this.Name=="i1" || this.Name=="i2" || this.Name=="f1"
				|| this.Name=="f2" || this.Name=="f3" || this.Name=="f4")
			{
				if(this.Coords[2][1]- 1 >= 0) //check the left part to still be on the screen after moving.
				{
					this.ClearShape(); // always clear before changing values.
					this.Coords[0][1]--;
					this.Coords[1][1]--;
					this.Coords[2][1]--;
					this.Coords[3][1]--;
				}
			}
			else if (this.Name=="s1" )
			{
				if(this.Coords[0][1]- 1 >= 0) //check the left part to still be on the screen after moving.
				{
					this.ClearShape(); // always clear before changing values.
					this.Coords[0][1]--;
					this.Coords[1][1]--;
					this.Coords[2][1]--;
					this.Coords[3][1]--;
				}
			}
		}

	}
	MoveRight()
	{
		if(this.reachedDown == false)
		{
			//Check if there is a form.
			if(this.Name=="square" || this.Name=="l1" || this.Name=="l2" || this.Name=="l3" || this.Name=="l4" 
				 || this.Name=="s1" || this.Name=="s2" || this.Name=="i1" || this.Name=="i2" || this.Name=="f1"
				|| this.Name=="f2" || this.Name=="f3" || this.Name=="f4")
			{
				if(this.Coords[1][1] +1 < 8) //check the right part to still be on the screen after moving.
				{
					this.ClearShape(); // always clear before changing values.
					this.Coords[0][1]++;
					this.Coords[1][1]++;
					this.Coords[2][1]++;
					this.Coords[3][1]++;
				}
			}
		}
	}
	RotateShape()
	{
		if(this.reachedDown == false)
		{
			switch(this.Name)
			{
				case "l1": { 
					if(this.Coords[0][0]-1 >= 0 && this.Coords[2][1]-1 >= 0)
					{	
						this.ClearShape();
						this.Name = "l2";
						this.FormBuilder(this.Coords[2][1], this.Coords[0][0]);
					}
					break;
				}
				case "l2": {
					if(this.Coords[3][0]+2 < 16)
					{
						this.ClearShape();
						this.Name = "l3"; 
						this.FormBuilder(this.Coords[3][1], this.Coords[3][0]);
					}
					break;
				}
				case "l3": { 
					if(this.Coords[0][0]-1 >= 0 && this.Coords[0][1]-1 >= 0)
					{
						this.ClearShape();
						this.Name = "l4"; 
						this.FormBuilder(this.Coords[0][1],this.Coords[0][0]);
					}
					break;
				}
				case "l4": { 
					if(this.Coords[3][0]+2<16)
					{
						this.ClearShape();
						this.Name = "l1"; 
						this.FormBuilder(this.Coords[3][1],this.Coords[3][0]); //send pure x and y
					}
					break;
				}
				case "s1": { 
					if(this.Coords[3][0]+1<16)
					{
						this.ClearShape();
						this.Name = "s2"; 
						this.FormBuilder(this.Coords[3][1],this.Coords[3][0]); //send pure x and y
					}
					break;
				}
				case "s2": { 
					if(this.Coords[2][1]-1>=0)
					{
						this.ClearShape();	
						this.Name = "s1";	
						this.FormBuilder(this.Coords[2][1],this.Coords[2][0]); //send pure x and y						
					}
					break;
				}
				case "i1": { 
					if(this.Coords[0][1]+2 < 8 && this.Coords[0][1]-1 >= 0)
					{
						this.ClearShape();
						this.Name = "i2";
						this.FormBuilder(this.Coords[0][1],this.Coords[0][0]); //send pure x and y	
					}
					break;
				}
				case "i2": { 
					if(this.Coords[0][0]+3 < 16)
					{
						this.ClearShape();
						this.Name = "i1";
						this.FormBuilder(this.Coords[0][1],this.Coords[0][0]); //send pure x and y	
					}
					break;
				}
				case "f1": { 
					if(this.Coords[3][0]+1 < 16)
					{
						this.ClearShape();
						this.Name = "f2"; 
						this.FormBuilder(this.Coords[3][1],this.Coords[3][0]); //send pure x and y	
					}
					break;
				}
				case "f2": {
					if(this.Coords[1][1]+1 < 8)
					{
						this.ClearShape();
						this.Name = "f3"; 
						this.FormBuilder(this.Coords[1][1],this.Coords[1][0]); //send pure x and y	
					}
					break;
				}
				case "f3": { 
					if(this.Coords[0][0]-1 >= 0)
					{
						this.ClearShape();
						this.Name = "f4"; 
						this.FormBuilder(this.Coords[0][1],this.Coords[0][0]); //send pure x and y	
					}
					break;
				}
				case "f4": { 
					if(this.Coords[2][1]-1 >= 0)
					{
						this.ClearShape();
						this.Name = "f1"; 
						this.FormBuilder(this.Coords[2][1],this.Coords[2][0]); //send pure x and y	
					}
					break;
				}
				default: {/*Enter here in case o square*/ break;}
			}
		}
	}
	DrawShape()
	{
		if(this.Name=="square")
		{
			this.DrawSquare("color");
		}
		else if(this.Name=="l1")
		{
			this.DrawL1("color");
		}
		else if(this.Name=="l2")
		{
			this.DrawL2("color");
		}
		else if(this.Name=="l3")
		{
			this.DrawL3("color");
		}
		else if(this.Name=="l4")
		{
			this.DrawL4("color");
		}
		else if(this.Name=="s1")
		{
			this.DrawS1("color");
		}
		else if(this.Name=="s2")
		{
			this.DrawS2("color");
		}
		else if(this.Name=="i1")
		{
			this.DrawI1("color");
		}
		else if(this.Name=="i2")
		{
			this.DrawI2("color");
		}
		else if(this.Name=="f1")
		{
			this.DrawF1("color");
		}
		else if(this.Name=="f2")
		{
			this.DrawF2("color");
		}
		else if(this.Name=="f3")
		{
			this.DrawF3("color");
		}
		else if(this.Name=="f4")
		{
			this.DrawF4("color");
		}
	}
	DrawSquare(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[0][0]==9)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[0][0]>9)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawL1(optionChoice) //shape for L
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[0][0]==8)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[0][0]==9)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if (this.Coords[0][0]>9)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawL2(optionChoice) //shape for __|
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[0][0]==9)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if (this.Coords[0][0]>9)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawL3(optionChoice) //shape for L flipped vertically
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[0][0]==8)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[0][0]==9)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if (this.Coords[0][0]>9)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawL4(optionChoice) //shape for L flipped horizontally I__.
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if (this.Coords[3][0]>10)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawS1(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]>10)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawS2(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]==11)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]>11)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawI1(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[0][0]==7)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[0][0]==8)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if (this.Coords[0][0]==9)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[0][0]>9)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawI2(optionChoice) //shape for I flipped horizontally _
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[0][0]>9)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else 
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawF1(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]>10)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawF2(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]==11)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]>11)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawF3(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]>10)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	DrawF4(optionChoice)
	{
		var color = "red";
		if(optionChoice=="color")
		{
			color = "blue";
		}
		else if(optionChoice=="clear")
		{
			color = "transparent";
		}
		if(this.Coords[3][0]==10)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]==11)
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else if(this.Coords[3][0]>11)
		{
			document.getElementById("elem"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
		else
		{
			document.getElementById("elem0"+ this.Coords[0][0]+ "0"+ this.Coords[0][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[1][0]+ "0"+ this.Coords[1][1]).style.backgroundColor=color;			
			document.getElementById("elem0"+ this.Coords[2][0]+ "0" + this.Coords[2][1]).style.backgroundColor=color;
			document.getElementById("elem0"+ this.Coords[3][0]+ "0" + this.Coords[3][1]).style.backgroundColor=color;
		}
	}
	ClearShape()
	{
		if(this.Name=="square")
		{
			this.DrawSquare("clear");
		}
		else if(this.Name=="l1")
		{
			this.DrawL1("clear");
		}
		else if(this.Name=="l2")
		{
			this.DrawL2("clear");
		}
		else if(this.Name=="l3")
		{
			this.DrawL3("clear");
		}
		else if(this.Name=="l4")
		{
			this.DrawL4("clear");
		}
		else if(this.Name=="s1")
		{
			this.DrawS1("clear");
		}
		else if(this.Name=="s2")
		{
			this.DrawS2("clear");
		}
		else if(this.Name=="i1")
		{
			this.DrawI1("clear");
		}
		else if(this.Name=="i2")
		{
			this.DrawI2("clear");
		}
		else if(this.Name=="f1")
		{
			this.DrawF1("clear");
		}
		else if(this.Name=="f2")
		{
			this.DrawF2("clear");
		}
		else if(this.Name=="f3")
		{
			this.DrawF3("clear");
		}
		else if(this.Name=="f4")
		{
			this.DrawF4("clear");
		}
	}
	FormRecycle()
	{
		if(this.reachedDown==true)
		{
			var rand = Math.floor(Math.random() * 13)
			var x = 4;
			var y = 0;
			this.reachedDown = false;
			switch(rand)
			{
				case 0: { //grab a square
					this.Name = "square";
					x = 4;
					y = 0;
					break;
				}
				case 1: {
					this.Name = "l1";
					x = 4;
					y = 0;
					break;
				}
				case 2: {
					this.Name = "l2";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				case 3: {
					this.Name = "l3";
					x = 4;
					y = 0;
					break;
				}
				case 4: {
					this.Name = "l4";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				case 5: {
					this.Name = "s1";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				case 6: {
					this.Name = "s2";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				case 7: {
					this.Name = "i1";
					x = 4;
					y = 0;
					break;
				}
				case 8: {
					this.Name = "i2";
					x = 3;
					y = 0;
					break;
				}
				case 9: {
					this.Name = "f1";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				case 10: {
					this.Name = "f2";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				case 11: {
					this.Name = "f3";
					x = 4;
					y = 0;
					break;
				}
				case 12: {
					this.Name = "f4";
					x = 4;
					y = 1; //this has to be 1.
					break;
				}
				default : {break; /*Never come here*/}
			}
			this.FormBuilder(x, y);
		}
	}
	FormBuilder(x, y)
	{
		this.Coords=[[]]; //clear the form.
		switch(this.Name)
		{
			case "square": {
				this.Coords[0] = [y,x];   //Upper part
				this.Coords.push([y,x+1]); //Right part;
				this.Coords.push([y+1,x]); //left part;
				this.Coords.push([y+1,x+1]); //bottom part
				break;
			}
			case "s2": {
				this.Coords[0] = [y-1,x+1]; //Upper part
				this.Coords.push([y,x+1]);  //Right part
				this.Coords.push([y,x]);    //left part
				this.Coords.push([y+1,x]);  //bottom part
				break;
			}
			case "s1": {
				this.Coords[0] = [y-1,x-1]; //Upper part
				this.Coords.push([y,x+1]);  //Right part
				this.Coords.push([y-1,x]);  //left part
				this.Coords.push([y,x]);    //bottom part
				break;
			}
			case "l1": {
				this.Coords[0] = [y,x];//Upper part
				this.Coords.push([y+2,x+1]);//Right part
				this.Coords.push([y+1,x]);//left part
				this.Coords.push([y+2,x]);//bottom part
				break;
			}
			case "l2": {
				this.Coords[0] = [y-1,x+1];//Upper part
				this.Coords.push([y,x+1]); //Right part
				this.Coords.push([y,x-1]); //left part
				this.Coords.push([y,x]);   //bottom part
				break;
			}
			case "l3": {
				this.Coords[0] = [y,x];//Upper part
				this.Coords.push([y,x+1]);  //Right part
				this.Coords.push([y+1,x]);  //left part
				this.Coords.push([y+2,x]);  //bottom part
				break;
			}
			case "l4": {
				this.Coords[0] = [y-1,x-1];//Upper part
				this.Coords.push([y,x+1]); //Right part
				this.Coords.push([y,x-1]); //left part
				this.Coords.push([y,x]);   //bottom part
				break;
			}
			case "i1": {
				this.Coords[0] = [y,x];//Upper part
				this.Coords.push([y+1,x]); //Right part
				this.Coords.push([y+2,x]);//left part
				this.Coords.push([y+3,x]); //bottom part
				break;
			}
			case "i2": {
				this.Coords[0] = [y,x];//Upper part
				this.Coords.push([y,x+2]); //Right part
				this.Coords.push([y,x-1]); //left part
				this.Coords.push([y,x+1]);//bottom part
				break;
			}
			case "f1": {
				this.Coords[0] = [y-1,x];//Upper part
				this.Coords.push([y,x+1]);//Right part
				this.Coords.push([y,x-1]);//left part
				this.Coords.push([y,x]); //bottom part
				break;
			}
			case "f2": {
				this.Coords[0] = [y-1,x];//Upper part
				this.Coords.push([y,x]); //Right part
				this.Coords.push([y,x-1]);//left part
				this.Coords.push([y+1,x]);//bottom part
				break;
			}
			case "f3": {
				this.Coords[0] = [y,x];//Upper part
				this.Coords.push([y,x+1]);//Right part
				this.Coords.push([y,x-1]);//left part
				this.Coords.push([y+1,x]);//bottom part]);
				break;
			}
			case "f4": {
				//Order is important;
				this.Coords[0] = [y-1,x]; 	//Upper part
				this.Coords.push([y,x+1]);	//Right part
				this.Coords.push([y,x]); 	//left part
				this.Coords.push([y+1,x]); 	//bottom part
				break;
			}
		}
	}
	CheckOverlap()
	{
		if(this.reachedDown == false)
		{
			switch(this.Name)
			{
				case "square":
				{
					if(this.Coords[3][0]+1 < 10)
					{
						if( (document.getElementById("elem0" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue")
							|| (document.getElementById("elem0" + parseInt(this.Coords[2][0]+1) + "0" + this.Coords[2][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue")
							|| (document.getElementById("elem" + parseInt(this.Coords[2][0]+1) + "0" + this.Coords[2][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "s1":
				case "l1":
				{
					if( this.Coords[1][0]+1 < 10)
					{
						
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <=15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "i1":
				{
					if(this.Coords[3][0]+1 < 10)
					{
						if(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <=15)
					{
						if(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "i2":
				{
					if(this.Coords[3][0]+1 < 10)
					{
						if( (document.getElementById("elem0" + parseInt(this.Coords[0][0] +1)+ "0" + this.Coords[0][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[1][0] +1)+ "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[2][0] +1)+ "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0] + 1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[0][0] +1) + "0" + this.Coords[0][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" +  parseInt(this.Coords[1][0] +1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[2][0] +1) + "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0] + 1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "l2":
				case "l4":
				case "f1":
				{
					if(this.Coords[3][0]+1 < 10)
					{
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[2][0]+1)+ "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1)+ "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[2][0]+1)+ "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1)+ "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "f4":
				case "s2":
				{
					if( this.Coords[1][0]+1 < 9)
					{
						
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if( this.Coords[1][0]+1 == 9)
					{
						
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "l3":
				{
					if( this.Coords[1][0]+1 < 8)
					{
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if( this.Coords[1][0]+1 == 8 || this.Coords[1][0]+1 == 9)
					{
						
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "f2":
				{
					if( this.Coords[2][0]+1 < 9)
					{
						
						if( (document.getElementById("elem0" + parseInt(this.Coords[2][0]+1) + "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if( this.Coords[2][0]+1 == 9)
					{
						
						if( (document.getElementById("elem0" + parseInt(this.Coords[2][0]+1) + "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[2][0]+1) + "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1) + "0" + this.Coords[3][1]).style.backgroundColor == "blue") )
						{
							this.reachedDown = true;
						}
					}
					break;
				}
				case "f3":
				{
					if(this.Coords[2][0]+1 < 9)
					{
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[2][0]+1)+ "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[3][0]+1)+ "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					else if(this.Coords[2][0]+1 == 9)
					{
						if( (document.getElementById("elem0" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem0" + parseInt(this.Coords[2][0]+1)+ "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1)+ "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					else if(parseInt(this.Coords[3][0]+1) <= 15)
					{
						if( (document.getElementById("elem" + parseInt(this.Coords[1][0]+1) + "0" + this.Coords[1][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[2][0]+1)+ "0" + this.Coords[2][1]).style.backgroundColor == "blue") ||
							(document.getElementById("elem" + parseInt(this.Coords[3][0]+1)+ "0" + this.Coords[3][1]).style.backgroundColor == "blue")
						)
						{
							this.reachedDown = true;
						}
					}
					break;
				}
			}
		}
	}
	checkScore()
	{
		var hit;
		if(this.reachedDown == true)
		{
			for (var i=15; i>=0; i--)
			{
				hit=0;
				for (var j=0; j<8; j++)
				{
					if(i > 9)
					{
						if(document.getElementById("elem" + i + "0" + j).style.backgroundColor == "blue")
						{
							hit++;
						}
					}
					else
					{
						if(document.getElementById("elem0" + i + "0" + j).style.backgroundColor == "blue")
						{
							hit++;
						}
					}
				}
				//alert("i = " + i + " hits: " + hit);
				if(hit==8)
				{
					//Clear the current row:
					for(var j=0; j<8; j++)
					{
						if(i > 9)
						{
							document.getElementById("elem" + i + "0" + j).style.backgroundColor = "transparent";
						}
						else
						{
							document.getElementById("elem0" + i + "0" + j).style.backgroundColor = "transparent";
						}
					}
					//Copy the row above:
					this.copyRowsAbove(i);
					score++;
				}
			}
		}
	}
	copyRowsAbove(row)
	{
		for(var i = row; i>0; i--)
		{
			for(var j=0; j<8; j++)
			{
				if( parseInt(i-1) > 9)
				{
					if(document.getElementById("elem" + parseInt(i-1) + "0" + j).style.backgroundColor == "blue")
					{
						document.getElementById("elem" + i + "0" + j).style.backgroundColor = "blue";
					}
					else
					{
						document.getElementById("elem" + i + "0" + j).style.backgroundColor = "transparent";
					}
				}
				else if( parseInt(i-1)==9)
				{
					if(document.getElementById("elem0" + parseInt(i-1) + "0" + j).style.backgroundColor == "blue")
					{
						document.getElementById("elem" + i + "0" + j).style.backgroundColor = "blue";
					}
					else
					{
						document.getElementById("elem" + i + "0" + j).style.backgroundColor = "transparent";
					}
				}
				else
				{
					if(document.getElementById("elem0" + parseInt(i-1) + "0" + j).style.backgroundColor == "blue")
					{
						document.getElementById("elem0" + i + "0" + j).style.backgroundColor = "blue";
					}
					else
					{
						document.getElementById("elem0" + i + "0" + j).style.backgroundColor = "transparent";
					}
				}
			}
		}
		//Clear the top row:
		for(var j = 0; j<8; j++)
		{
			document.getElementById("elem000" + j).style.backgroundColor = "transparent";
		}
	}
}

var sq = new Shape("f3", 3, 2); // let this be default;

setInterval(function() {
	if(game_started)
	{
		if(sq.reachedDown)
		{
			sq.checkScore();
			sq.FormRecycle();
			updateScore();
		}
		else
		{
			sq.MoveDown();
			//Keep the MoveDown() above this one in order to make sure reachDown flag is set to true when it's case.
			sq.CheckOverlap();
			sq.DrawShape();
		}
	}
}, 500);
function StartGame()
{
	sq.FormRecycle(); // let it be randomized.
	game_started = true;
	updateScore();
	document.getElementById("startgame").disabled = true;
	document.getElementById("restartgame").disabled = false;
}
function RestartGame()
{
	for(var i = 0; i<16; i++)
	{
		for(var j=0;j<8;j++)
		{
			if(i<10)
			{
				document.getElementById("elem0" + i + "0" + j).style.backgroundColor = "transparent";
			}
			else
			{
				document.getElementById("elem" + i + "0" + j).style.backgroundColor = "transparent";
			}
		}
	}
	score = 0;
	updateScore();
	sq.reachedDown=true;
	sq.FormRecycle(); // let it be randomized.
	game_started = true;
	document.getElementById("startgame").disabled = true;
	document.getElementById("restartgame").disabled = false;
}
function Rotate()
{
	sq.RotateShape();
}
function TurnLeft()
{
	sq.MoveLeft();
}
function TurnRight()
{
	sq.MoveRight();
}
function updateScore()
{
	document.getElementById("score").innerHTML = "Score: " + score;
}