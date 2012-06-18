var customUI = require('../../CustomUI');
var Button = require('../../Custom/UI/Button');
var Pergunta2 = require('View/Windows/Pergunta2');
    
function Pergunta1(){
    
    this.view = customUI.createWindow('1) Qual é a sua idade?');
    var currentWindow = this.view.view;
    
    // Resposta
    
    // Number picker
    var numberField = Ti.UI.createTextField({
        top:0,
        left:70,
        width: 200,
        height:'auto',
        keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD
    });
    this.view.add(numberField);
    
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
    
   // this.view.add(backButton);

    // Próxima
    var forwardButton = new Button({title:'Próxima',
                                    width:100,
                                    height:40,
                                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                                    top:315,
                                    left:615});
                                    
    forwardButton.addEventListener('click', function(){
        if(numberField.value != ''){
            this.setEnabled(false);
            var pergunta2 = new Pergunta2()    
            pergunta2.view.open();
            currentWindow.close();
            
        } else {
            alert('Insira um valor válido!');            
        }
    });
      
    Pergunta1.prototype.view = this.view;
    
    this.view.add(forwardButton);
    
    return this;
}

module.exports = Pergunta1;