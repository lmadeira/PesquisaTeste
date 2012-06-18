//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	
	
	var getFirstView = function() {
	    return firstView;
	    //return self.firstView;
	}
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
