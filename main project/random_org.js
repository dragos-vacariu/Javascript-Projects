function RandomizeItems()
{
	var msg = document.getElementById("items_window").value;
	document.getElementById("randomize_message_log").innerHTML = "";
	document.getElementById("items_length").innerHTML = "No of items: "
	if(msg.length>0){
		var lst_of_msg = [];
		var aux = "";
		for (var i =0; i<msg.length; i++)
		{
			if(msg[i] == "\n")
			{
				lst_of_msg.push(aux);
				aux="";
			}
			else if(i==msg.length-1)
			{
				aux+=msg[i];
				lst_of_msg.push(aux);
				aux="";
			}
			else 
			{
				aux+=msg[i];
			}
		}
		msg="";
		lst_length = lst_of_msg.length;
		while(lst_length)
		{
			aux = Math.floor(Math.random()*lst_length);
			msg += lst_of_msg[aux] + "\n";
			if(aux==lst_length-1) //making sure the element which was added to msg will not be added again.
			{
				lst_length--;
			}
			else
			{
				lst_of_msg[aux] = lst_of_msg[lst_length-1];
				lst_length--;
			}
		}
		document.getElementById("items_window").value = msg;
		document.getElementById("randomize_message_log").innerHTML = "Items successfully randomized.";
		document.getElementById("items_length").innerHTML = "No of items: " + lst_of_msg.length; 
	}
	else
	{
		document.getElementById("randomize_message_log").innerHTML = "No list was entered.";
		document.getElementById("items_length").innerHTML = "No of items: 0"
	}
}