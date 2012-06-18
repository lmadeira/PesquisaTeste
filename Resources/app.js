(function() {
    
    // Imports
    var customUI = require('CustomUI');
    var Pergunta1 = require('View/Windows/Pergunta1');
    var EnviarPesquisa = require('View/Windows/EnviarPesquisas');
    var Ajuda = require('View/Windows/Ajuda');


    // Main Window
	var mainWindow = customUI.createWindow('Pesquisa App');
   
   // Main Menu 
    var mainMenu = customUI.createMenu('Menu Principal');
    
    mainMenu.addMenu('Nova Pesquisa', function(){
        var pergunta1 = new Pergunta1();
        pergunta1.view.open();
    });
    
    mainMenu.addMenu('Enviar Pesquisas', function(){
       var enviarPesquisa = new EnviarPesquisa();
       enviarPesquisa.view.open();
        
//        var emailDialog = Ti.UI.createEmailDialog()
//        emailDialog.subject = "Pesquisa num 3546";
//        emailDialog.toRecipients = ['leomad@gmail.com'];
//        emailDialog.messageBody = 'resp1,resp2,resp3,resp4,resp5,resp6,resp7,resp8,resp9,resp10';
//        //emailDialog.addAttachment(f);
//        emailDialog.open();
    });
    
    mainMenu.addMenu('Ajuda', function(){
        var ajuda = new Ajuda();
        ajuda.view.open();
    });

	mainWindow.add(mainMenu.view);
	
	Ti.App.addEventListener('APP:GOTO:MAINWINDOW', function(e) {
        //alert(e.from);
	});
	
	
	// var w = Ti.Platform.displayCaps.platformWidth;
    // var h = Ti.Platform.displayCaps.platformHeight;
    // var d = Ti.Platform.displayCaps.density;
    // var dpi = Ti.Platform.displayCaps.dpi;
    // alert("Resolução: " + w + " x " + h + " - " + dpi + " - " + d);   	
	
	// Show Main Window
	mainWindow.open();

})();
