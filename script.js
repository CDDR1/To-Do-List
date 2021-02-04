const enterButton = document.getElementById("enter-button");
const ul = document.querySelector("ul");
const input = document.getElementById("input-bar");

const CreateNewListItem = () => {
	// Create the new li element:
	const listItem = document.createElement("li");

	// Use the input value as the content of the new li element:
	const listItemContent = document.createTextNode(input.value);

	// Append the input's value to the new li element:
	listItem.appendChild(listItemContent);

	// Add an event listener to the new li element:
	listItem.addEventListener("click", () => {

		// When the list item is clicked, it will be crossed out.
		// If we click again, it will return to normal.
		listItem.classList.toggle("done");
	});

	// Append the new li element to the list:
	ul.appendChild(listItem);

	// Create a delete button:
	const delButton = document.createElement("button");

	// Add the text "Delete" to the button:
	delButton.appendChild(document.createTextNode("Delete"));

	// Add the delete button to the new li element. 
	listItem.appendChild(delButton);

	// Add an event listener to the delete button:
	delButton.addEventListener("click", () => {

		// Both the button and the li should be removed if the 
		// delete button is clicked:
		listItem.removeChild(delButton);
		ul.removeChild(listItem);
	});

	// Add a class to the new delete button so it can be styled with CSS: 
	delButton.classList.add("delButton");

	// After entering the new list item, we want the input to be empty again. 
	// To achieve that, we can set the input value to equal an empty string:
	input.value = "";
};
	
enterButton.addEventListener("click", () => {

	// Execute only if user's input is not blank:
	if (input.value.length > 0) {

		CreateNewListItem();	
	}
});

input.addEventListener("keypress", (event) => {

	// Execute only if user's input is not blank and if the key code is 13:
	if (input.value.length > 0 && event.keyCode === 13) {

		CreateNewListItem();	
	}
}); 