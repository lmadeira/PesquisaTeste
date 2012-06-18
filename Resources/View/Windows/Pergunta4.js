var customUI = require('../../CustomUI');
var Button = require('../../Custom/UI/Button');
var Pergunta5 = require('View/Windows/Pergunta5');

function Pergunta4(){
    this.view = customUI.createWindow('4) Você utilizaria o Ônibus para chegar ao seu destino?');
    var currentWindow = this.view.view;
    
    // Resposta
    
    // True/False picker
    var basicSwitch = Ti.UI.createSwitch({
      style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
      title:'Sim, utilizaria o Ônibus',
      font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18},
      color:'black',
      value:false,
      top: 0,
      left: 70,
      width: 300 // necessary for textAlign to be effective
    });
    this.view.add(basicSwitch);
    
    
    // Voltar
    var backButton = new Button({title:'Voltar',
                                    width:100,
                                    height:40,
                                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                                    top:315,
                                    left:70});
    
    // Listen for click events.
    backButton.addEventListener('click', function(){
        this.view.close();
        
        /*
        Ti.App.fireEvent('APP:GOTO:MAINWINDOW', {
             from:'Ajuda'
        });
        */
    });
    
    //this.view.add(backButton);

    // Próxima
    var forwardButton = new Button({title:'Próxima',
                                    width:100,
                                    height:40,
                                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                                    top:315,
                                    left:615});
                                    
    forwardButton.addEventListener('click', function(){
        this.setEnabled(false);
        var pergunta5 = new Pergunta5()    
        pergunta5.view.open();                       
        currentWindow.close();
    });
    
    this.view.add(forwardButton);
    
    Pergunta4.prototype.view = this.view;

    return this;
}

module.exports = Pergunta4;