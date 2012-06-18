//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Pesquisa App'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	 
	var screenHeight = Ti.Platform.displayCaps.platformHeight,
        screenWidth = Ti.Platform.displayCaps.platformWidth;
        
	// Create a Button.
	var initPesquisaBtn = Ti.UI.createButton({
		title : 'Nova Pesquisa >',
        height:'auto',
        width:'auto',
		top : 400,
		left : 600
	});
	
	// Listen for click events.
	initPesquisaBtn.addEventListener('click', function() {
		var NovaPesquisa = require('QuestionWindow');
		new NovaPesquisa().open();
	});
	
	// Add to the parent view.
	self.add(initPesquisaBtn);

	return self;
}

module.exports = FirstView;
