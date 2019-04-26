function EncodeButtonPressed()
{
	document.getElementById("encode_message_log").innerHTML = "";
	var Text_To_Convert = document.getElementById("text_to_encode").value;
	if(document.getElementById("text_to_encode").value == "")
	{
		document.getElementById("encode_message_log").innerHTML = "Text box is empty.";
		document.getElementById("encode_message_log").style.backgroundColor = "#F5A9A9";
		document.getElementById("encode_message_log").style.color = "black";
	}
	else if(Text_To_Convert[Text_To_Convert.length-1] =="c" && Text_To_Convert[Text_To_Convert.length-2] =="n"
					&& Text_To_Convert[Text_To_Convert.length-3] =="e")
	{
		document.getElementById("encode_message_log").innerHTML = "This message is already encoded.";
		document.getElementById("encode_message_log").style.backgroundColor = "#F5A9A9";
	}
	else
	{
		var list_items = []; //making an empty array
		for(var i=0; i < Text_To_Convert.length; i++)
		{
			if(Text_To_Convert[i]==" ")
			{
				list_items.push(i + "_");
			}
			else if( (Text_To_Convert[i]>=0 && Text_To_Convert[i]<10) || Text_To_Convert[i] == "_")
			{
				list_items.push(i + "<<" + Text_To_Convert[i] + ">>");
			}
			else
			{
				list_items.push(i + Text_To_Convert[i]);
			}
		}
		//Let it randomize;
		var result="";
		while (list_items.length)
		{
			var choice = Math.floor((Math.random() * list_items.length)); //Return a random number between 0 and size of array:
			result += list_items[choice];
			var aux = list_items;
			list_items=[]; //initializing the array with first null element;
			for(var j=0; j<aux.length; j++)
			{
				if(j!=choice)
				{
					list_items.push(aux[j]);
				}
			}
		}
		result += "enc";
		document.getElementById("text_to_encode").value = "Initial Message: " + Text_To_Convert;
		document.getElementById("text_to_encode").value += "\n" + "\n" + "Encoded Message: " + result;
		document.getElementById("encode_message_log").innerHTML = "Message has been successfully encoded.";
		document.getElementById("text_to_encode").style.backgroundColor = "#58FA58";
		document.getElementById("encode_message_log").style.backgroundColor = "transparent";
		document.getElementById("encode_message_log").style.color = "white";
	}
}

function NumberOfCharsEncode()
{
	document.getElementById("encode_message_log").innerHTML = "Number of Characters: " + document.getElementById("text_to_encode").value.length;
	if(document.getElementById("text_to_encode").value=="")
	{
		document.getElementById("text_to_encode").style.backgroundColor = "white";
	}
	else
	{
		document.getElementById("text_to_encode").style.backgroundColor = "#F2F2F2";
		document.getElementById("encode_message_log").style.backgroundColor = "transparent";
		document.getElementById("encode_message_log").style.color = "white";
	}
}

function DecodeButtonPressed()
{
	document.getElementById("decode_message_log").innerHTML = "";
	var Text_To_Decode = document.getElementById("text_to_decode").value;
	if(document.getElementById("text_to_decode").value == "")
	{
		document.getElementById("decode_message_log").innerHTML = "Text box is empty.";
		document.getElementById("decode_message_log").style.backgroundColor = "#F5A9A9";
		document.getElementById("encode_message_log").style.color = "black";
	}
	else if(Text_To_Decode[Text_To_Decode.length-1] =="c" && Text_To_Decode[Text_To_Decode.length-2] =="n"
					&& Text_To_Decode[Text_To_Decode.length-3] =="e")
	{
		/*Decoding starts here*/
		var list_items = []; //making an empty array
		var list_index = [];
		var index = 0;
		for(var i=0; i < Text_To_Decode.length-3; i++) //going to the Text_To_Decode.length-3 to avoid 'e' 'n' 'c'
		{
			if(Text_To_Decode[i]>=0 && Text_To_Decode[i]<10)
			{
				index += parseInt(Text_To_Decode[i]);
				index *= 10;
			}
			else if( (i+2 < Text_To_Decode.length) && Text_To_Decode[i] == "<" && Text_To_Decode[i+1] == "<" && Text_To_Decode[i+3] == ">" 
												&& Text_To_Decode[i+4] == ">" )
			{
				i+=2;
				index /= 10;
				
				list_index.push(index);
				list_items.push(Text_To_Decode[i]);
				index=0;
				i+=2;
			}
			else
			{
				index /= 10;
				list_index.push(index);
				if(Text_To_Decode[i] == "_")
				{
					list_items.push(" ");
				}
				else
				{
					list_items.push(Text_To_Decode[i]);
				}
				index=0;
			}
		}
		var msg = "";
		for(var i=0; i < list_items.length; i++)
		{
			var letter = list_index.indexOf(i);
			msg += list_items[letter];
		}
		document.getElementById("text_to_decode").value = "Initial Message: " + Text_To_Decode;
		document.getElementById("text_to_decode").value += "\n" + "\n" + "Decoded Message: " + msg;
		document.getElementById("decode_message_log").innerHTML = "Message has been successfully decoded.";
		document.getElementById("text_to_decode").style.backgroundColor = "#58FA58";
		document.getElementById("decode_message_log").style.backgroundColor = "transparent";
		document.getElementById("decode_message_log").style.color = "white";
	}
	else
	{
		document.getElementById("decode_message_log").innerHTML = "Message is not encoded.";
		document.getElementById("decode_message_log").style.backgroundColor = "#F5A9A9";
	}
}

function NumberOfCharsDecode()
{
	document.getElementById("decode_message_log").innerHTML = "Number of Characters: " + document.getElementById("text_to_decode").value.length;
	if(document.getElementById("text_to_decode").value=="")
	{
		document.getElementById("text_to_decode").style.backgroundColor = "white";
	}
	else
	{
		document.getElementById("text_to_decode").style.backgroundColor = "#F2F2F2";
		document.getElementById("decode_message_log").style.backgroundColor = "transparent";
		document.getElementById("decode_message_log").style.color = "white";
	}
}