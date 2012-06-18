var customUI = require('../../CustomUI');
var restRequest = require('/restRequest');

function EnviarPesquisas(){
    var self = customUI.createWindow('Enviar Pesquisas');
    
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var labelPut = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto',
		top:0,
		left:0
	});
	self.add(labelPut);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});

	var putParams = {
		'isbn':'123',
	    'title':'O Rei Arthur'    
	}; 

	var getParams = {  
	    'param1':'blablabla',  
	    'param2': 'blebleble'    
	}; 
	
	// Rest Authenticated Request
	restRequest.put({
		url:'http://pesquisaapp-mobidique.rhcloud.com/rest/library/book/',
		params:putParams,
		responseOk:function() {
		    Titanium.API.info(' Text: ' + this.responseText);
		    //var jsonObject = JSON.parse(this.responseText);
		    //lblsession.text = "Session ID: \n" + jsonObject.user.session_id;
		    labelPut.text = this.responseText;
		    listaLivros();
		},
		responseError:function() {
		    Titanium.API.info(' Text: ' + this.responseText);
		    //var jsonObject = JSON.parse(this.responseText);
		    //lblsession.text = "Session ID: \n" + jsonObject.user.session_id;
		    labelPut.text = this.responseText;
		}
	});


	var listaLivros = function () {
		restRequest.get({
			url:'http://pesquisaapp-mobidique.rhcloud.com/rest/library/books',
			params:getParams,
			responseOk:function() {
			    Titanium.API.info(' Text: ' + this.responseText);
			    //var jsonObject = JSON.parse(this.responseText);
			    //lblsession.text = "Session ID: \n" + jsonObject.user.session_id;
			    label.text = this.responseText;
			},
			responseError:function() {
			    Titanium.API.info(' Text: ' + this.responseText);
			    //var jsonObject = JSON.parse(this.responseText);
			    //lblsession.text = "Session ID: \n" + jsonObject.user.session_id;
			    label.text = this.responseText;
			}
		});
	}
    
    return self;
}

module.exports = EnviarPesquisas;