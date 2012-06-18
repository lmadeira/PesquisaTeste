//FirstView Component Constructor
function QuestionView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var resposta = '';
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'Qual o seu destino?',
		height:'auto',
		width:'auto',
		top: 20,
		left: 20
	});
	self.add(label);
	
	
	// Create a Picker.
	var aPicker = Ti.UI.createPicker({
		selectionIndicator : true,
		top: 60,
		left: 20
	});
	
	// Add data to the Picker.
	var data = [];
	data[0] = Ti.UI.createPickerRow({title:'Selecione uma opção', custom_item:''});
	data[1] = Ti.UI.createPickerRow({title:'Casa', custom_item:'c'});
	data[2] = Ti.UI.createPickerRow({title:'Trabalho', custom_item:'t'});
	data[3] = Ti.UI.createPickerRow({title:'Outro', custom_item:'o'});
	aPicker.add(data);
	
	// Listen for change events.
	aPicker.addEventListener('change', function(e) {
		resposta = e.row.custom_item;
	});
	
	// Add to the parent view.
	self.add(aPicker);
	
	 
	var screenHeight = Ti.Platform.displayCaps.platformHeight,
        screenWidth = Ti.Platform.displayCaps.platformWidth;
        
	// Create a Button.
	var initPesquisaBtn = Ti.UI.createButton({
		title : 'Próxima Pergunta >',
        height:'auto',
        width:'auto',
		top : 400,
		left : 600
	});
	
	// Listen for click events.
	initPesquisaBtn.addEventListener('click', function() {
	    if(resposta == '') {
	        alert('selecione uma opção válida');
	    } else {
	       alert('You selected: ' + resposta); 
	       var emailDialog = Ti.UI.createEmailDialog()
            emailDialog.subject = "Hello from Titanium";
            emailDialog.toRecipients = ['leomad@gmail.com'];
            emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
            //emailDialog.addAttachment(f);
            emailDialog.open();
	    }
	});
	
	// Add to the parent view.
	self.add(initPesquisaBtn);

	return self;
}

module.exports = QuestionView;
