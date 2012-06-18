var customUI = require('../../CustomUI');
var Button = require('../../Custom/UI/Button');

function Pergunta5(){
    this.view = customUI.createWindow('5) Quanto você pagaria caso utilize o Trem?');
    var currentWindow = this.view.view;
    
    // Resposta
    
    var numberField = Ti.UI.createTextField({
        top:0,
        left:70,
        width: 200,
        height:'auto',
        keyboardType:Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
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
    
    //this.view.add(backButton);

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
            currentWindow.close();

        } else {
            alert('Insira um valor válido!');  
        }
    });
    
    this.view.add(forwardButton);
    
    Pergunta5.prototype.view = this.view;

    return this;
}

module.exports = Pergunta5;