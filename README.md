AlertUpdater.js
==================

A Simple modal application that it suppose to be added to application to show their updates		

## Usage ##
AlertUpdater	
@PARAMS takses an object with:
	- [String] title: for the header of the modal
	- [Array] content: for the content of the modal
	- [Function] callback: a callback after you click the ok button

Function Available:
``hide()``
``show()``

``` 
var opts = { 
	title: "My Custom title", 
	content: ["task1", "task2"], 
	callback: function(){
		console.log("my stuff here");
	}
};

// Initializing instance
var a = new AlertUpdater(opts);
a.show();
a.hide();

```
