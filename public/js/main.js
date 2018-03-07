//Hey guys remember to comment your code and write your name on functions

'use strict';


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

//Listeners:



//Functions:

// Enable Popovers
$(function () {
  $('[data-toggle="popover"]').popover({container: 'body'})
})

//Closes the Folder Settings Popover
function closeSettings(){
  document.getElementById("editFolder").reset();
  $("#settingsPopover").popover("hide");
}

//Confirm Delete
function confirmDelete() {
    var ask = window.confirm("Permenantly delete folder? All notes will be lost.");
    if (ask) {
      window.location.href = "/deleteFolder/{{folderID}}";
    }
}
//Sample Function
function initializePage(){
	console.log("Javascript connected!");  
}
