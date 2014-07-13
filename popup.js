/**
	FILE: Voice Command Actions Logic for Chrome Voice Alfred.
	AUTHOR: Neo, ccsCoder@gmail.com
	Version: 1.0
	State: Immaterial. May the 4th be with you...
*/
function scrollDown(e) {
  var height;
  chrome.tabs.getSelected(null,function(tab){
	console.debug(tab);
	height=tab.height;
	console.log("Height="+height);	
	height-=100;
  	chrome.tabs.executeScript(null,{code:"window.scrollBy(0,"+height+")"});		//TODO: Implement smooth scrolling.
  });

}

function scrollUp(e) {
  var height;
  chrome.tabs.getSelected(null,function(tab){
	console.debug(tab);
	height=tab.height;
	console.log("Height="+height);	
	height+=100;
  	chrome.tabs.executeScript(null,{code:"window.scrollBy(0,-"+height+")"});		//TODO: Implement smooth scrolling.
  });

}

function increaseFontSize(e) {
	chrome.tabs.getSelected(null,function(tab){
		console.debug(tab);
		//get the computed font-size
		var currentFontSize = window.getComputedStyle(document.body,null).getPropertyValue('font-size');

		console.log("Font Size="+currentFontSize);
		currentFontSize = parseFloat(currentFontSize);
		
		//now apply	

  		chrome.tabs.executeScript(null,{code:"document.body.styles.font"});		//TODO: Implement smooth scrolling.
  	});
}


document.addEventListener('DOMContentLoaded', function () {
  
    document.getElementById("scrollDown").addEventListener('click', scrollDown);
    document.getElementById("scrollUp").addEventListener('click', scrollUp);
    document.getElementById("fontLarger").addEventListener('click', increaseFontSize);
  
});


