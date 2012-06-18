var customUI = require('../../CustomUI');
var Button = require('../../Custom/UI/Button');
var Pergunta3 = require('View/Windows/Pergunta3');

function Pergunta2(){
    this.view = customUI.createWindow('2) Qual o seu destino?');
    var currentWindow = this.view.view;

    // Resposta
    
    // Option picker
    var aPicker = Ti.UI.createPicker({
        selectionIndicator : true,
        top: 0,
        left: 70
    });
    
    var data = [];
    data[0] = Ti.UI.createPickerRow({title:'Selecione uma opção', custom_item:''});
    data[1] = Ti.UI.createPickerRow({title:'Casa', custom_item:'c'});
    data[2] = Ti.UI.createPickerRow({title:'Trabalho', custom_item:'t'});
    data[3] = Ti.UI.createPickerRow({title:'Outro', custom_item:'o'});
    aPicker.add(data);
    this.view.add(aPicker);
    
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
    });

    //view.add(backButton);

    // Próxima
    var forwardButton = new Button({title:'Próxima',
                                    width:100,
                                    height:40,
                                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                                    top:315,
                                    left:615});
                                    
    forwardButton.addEventListener('click', function(){
        if(aPicker.getSelectedRow(0).custom_item != '') {
            this.setEnabled(false);
            var pergunta3 = new Pergunta3()    
            pergunta3.view.open();
            currentWindow.close();
        } else {
            alert('Selecione uma opção válida!'); 
        }
    });

    Pergunta2.prototype.view = this.view;
    
    this.view.add(forwardButton);

    return this;
}

module.exports = Pergunta2;