var people= [];
var purchases = [];
var purchaser = [];
var debtTable = [];
var numPeople = 0;
var numPurch = 0;
var isDup = false;
// ******************************************************** //
//          		JS Function to fix Name    				//
// 	    		- Eliminates white space					//
//				- Capiltalizes name							//
// ******************************************************** //
function toName(s) {
	s = s.replace( /[\s\n\r]+/g, ' ' );
	var words = s.split(" ");
	//console.log(words);
	var final = "";
	for (var i = 0; i < words.length; i++) {
		final += words[i].charAt(0).toUpperCase() 
		if(words[i].length > 1)
			final += words[i].substring(1, words[i].length).toLowerCase();
		final += " ";
	}
	return final;
}
// ******************************************************** //
//            JS Function to determine if HTML 				//
// 	    - Returns true if string contains html tags			//
// ******************************************************** //
function isHTML(str) {
	var a = document.createElement('div');
	a.innerHTML = str;
	for (var c = a.childNodes, i = c.length; i--; ) {
		if (c[i].nodeType == 1) return true; 
	}
	return false;
}
// ******************************************************** //
//            JQuery Function for Add Item Button 			//
// 	    - When element with id="AddItemButton" clicked,		//
//	 						add person 						//
// ******************************************************** //
$('#addItemButton').click(function() {
	// Remove any html or white space on input, capitalize the words
	var name = $('#myText').val().trim();
	if(isHTML(name)) {
		name = $(name)[0].textContent;
	}
	name = toName(name).trim();
	
	// make sure there is text in the name field
	if(document.getElementById("myText").value == 0) {
		alert("Please enter a name");
	}
	else {
		for(var x = 0; x < numPeople; x++)
		{
			// if (people[x] == $('#myText').val()) {
			if (people[x] == name) {
				alert("Duplicate name!");
				isDup = true;
			}
		}
		if(!isDup) {
			// Append the new person to the element with id="myList"
			$('#myList').append('<li class="list-group-item" id="person' + numPeople + '">' 
				+ (numPeople + 1) + ') ' + name + "  ");
			$('#myHeader').append('<th>' + name + '</th>');
			$('#mySelect').append('<option value="' + numPeople + '">' + name + '</option>');
			// if purchases exist but a new person is added, add this person to the table
			if(numPurch > 0) {
				console.log("purchases exist");
				// iterate through existing purchases
				for(var i = 0; i < numPurch; i++) {
					// '<div class="checkbox checkbox-primary"><input id="checkbox2" class="styled" type="checkbox" checked=""><label for="checkbox2"></label></div>'

					$('#purchase' + i).append('<td><div class="checkbox checkbox-primary"><input type="checkbox" class="styled" id="check' + i + '-' + numPeople + '"><label for="c"></label></div></td>');
				}
			}
			// add person to list of people
			people.push(name);
			console.log(people);
			// add a row for this person to debtTable
			debtTable[numPeople] = [];
			numPeople = numPeople + 1;
			// reset input box
			document.getElementById("myText").value = "";
		}
	}
	isDup = false;
});
// ******************************************************** //
//         JQuery Function for Add Purchase Button 			//
// 	   - When purchase button clicked add information		//
//						 to the table						//
// ******************************************************** //
$('#addPurchaseButton').click(function() {
	var amount = $('#myAmt').val();
	// remove excess HTML or blank space, then capitalize
	var type = $('#myType').val().trim();
	if(isHTML(type)) {
		type = $(type)[0].textContent;
	}
	type = toName(type).trim();
	// name of the purchaser
	var selectedPurchaser = document.getElementById("mySelect");
	var strUser = selectedPurchaser.options[selectedPurchaser.selectedIndex].text;
	var row = '<tr id="purchase' + numPurch + '"><td>' + (numPurch + 1) + '</td>';
	row = row + '<td>' + type + '</td>';
	row = row + '<td>' + strUser + '</td>';
	row = row + '<td>' + '$' + parseFloat(amount).toFixed(2) + '</td>';
	// check that entries are valid
	if(document.getElementById("myType").value == 0) {
		alert("Please enter a purchase type");
	}
	else if (document.getElementById("myAmt").value == 0) {
		alert("Please enter a purchase amount");
	}
	else if (document.getElementById("mySelect").value == "Select Purchaser") {
		alert("Please select a purchaser");
	}
	else if (amount > 999999999) {
		alert("Number is too large");
	}
	else if (amount < 0) {
		alert("We don't accept negative numbers");
	}
	else { // entries are valid
		// add checkboxes for every person for this purchase
		for(var n = 0; n < numPeople; n++) {
			// if the purchaser and person are same, check the box
			if(strUser == people[n].trim()) {
				purchaser[numPurch] = n;
				row = row + '<td><div class="checkbox checkbox-primary"><input type="checkbox" class="styled" id="check' + numPurch + '-' + n + '" checked><label for="c"></label></div></td>';
			}
			else {
				row = row + '<td><div class="checkbox checkbox-primary"><input type="checkbox" class="styled" id="check' + numPurch + '-' + n + '"><label for="c"></label></div></td>';
			}
		}
		row = row + '</tr>';
		$('#myTBody').append(row);
		purchases[numPurch] = amount;
		numPurch = numPurch + 1;
	}
	// if a new purchase is added, the calculated information needs to be changed
	document.getElementById("output").innerHTML = "";
});
// ******************************************************** //
//            JQuery Function to enable "enter" 			//
// 	    - When enter hit, "add person" button clicked		//
// ******************************************************** //
$("#myText").keyup(function(event){
 			if(event.keyCode == 13){
     			$("#addItemButton").click();
 			}
});
// ******************************************************** //
//            JQuery Function for calculations			    //
// 	   	 - Calculates totals for each person				//
// ******************************************************** //
// Calculate totals for each person when Calculate button is clicked
$('#calculate').click(function() {
	// initialize all values in debtTable to 0
	// previous calculations won't carry over
	for(var i = 0; i < numPeople; i++) {
		for(var j = 0; j < numPeople; j++) {
			debtTable[i][j] = 0;
		}
	}
	// iterate through each purchase
	for (var z = 0; z < numPurch; z++) {
		
		// get the amount of the purchase
		var amount = purchases[z];
		// find out how many people are checked
		var countChecked = 0;
		for(var checked = 0; checked < numPeople; checked++) {
			var x = document.getElementById("check" + z + "-" + checked);
			console.log("check" + z + "-" + checked);
			if(x.checked) {
				countChecked++;
			}
		}
		// calculate how much the number of people owe to the pruchaser
		var owed = amount / countChecked;
		// update values in debtTable
		for(var c = 0; c < numPeople; c++) {
			var x = document.getElementById("check" + z + "-" + c);
			// if the box is checked, that person owes money
			if(x.checked) {
				if(debtTable[c][purchaser[z]] >= 0) {
					debtTable[c][purchaser[z]] += owed;
				} else {
					debtTable[c][purchaser[z]] = owed;
				}
				console.log(purchaser[z] + " - " + c + " = " + owed);
			} else {
				// debtTable = 0
			}
		}
	}

	// ******************************************************** //
	//           			 Display Money owed					//
	// 	    - Generates HTML to display money owed				//
	// ******************************************************** //
	document.getElementById("output").innerHTML = "";
	// iterate through each person that owes money
	for(var row = 0; row < numPeople; row++) {
		var out = '<div style="padding: 20px;" class="col-lg-12"><h3>' + people[row] + ' owes:</h3><ul class="list-group">';
		var inner = '';
		// iterate through each person they owe money to
		// set cells to 0 if the information is redundant
		for(var col = 0; col < numPeople; col++) {
			if(row != col && debtTable != 0) {
				// compare (row,col) to (col,row) 
				// because the purchaser and ower are swapped, the difference shown
				if(debtTable[row][col] > 0) {
					if (debtTable[row][col] > debtTable[col][row]) {
						debtTable[row][col] -= debtTable[col][row];
						debtTable[col][row] = 0;
					} else if (debtTable[row][col] < debtTable[col][row]) {
						debtTable[col][row] -= debtTable[row][col];
						debtTable[row][col] = 0;
					} else if (debtTable[row][col] == debtTable[col][row]) {
						debtTable[col][row] = 0;
						debtTable[row][col] = 0;
					}
				}
			}
		}

		// ******************************************************** //
		//            Display people who you owe money to    		//
		// 	    - Iterates though each person they owe mone to      //
		//		- add the <li> for each person owed money			//
		// ******************************************************** //
		for(var c = 0; c < numPeople; c++) {
			if(row != c && debtTable[row][c] != 0) {
				inner += '<li id="elem' + row + '-' + c + '" class="list-group-item" onClick="completed('+row+','+c+')">' + people[c] + ' $' + parseFloat(debtTable[row][c]).toFixed(2) + '</li>';
				// inner += '<li id="out" class="list-group-item">' + people[c] + ' $' + parseFloat(debtTable[row][c]).toFixed(2) + '</li>';
			}
		}
		// ******************************************************** //
		//            Hide person if no money owed   				//
		// ******************************************************** //
		if (inner != '') {
			out += inner + '</ul></div>';
		} else {
			out = '';
		}
		$('#output').append(out);
	}
});

function completed(row, col) {
	
	var elem = $('#elem' + row + '-' + col + '');;
	// var c = rgb(255, 255, 255);
	console.log(elem.css("background-color"));
	if (elem.css("background-color") == "lightgrey") {
		console.log("goodbye");
		elem.css("background-color", "white");
	} else {
		console.log("hello");
		elem.css("background-color", "lightgrey");
	}
};

// $('#out').click(function() {
// 	$(this)
// });
