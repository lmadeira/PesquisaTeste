var customUI = require('../../CustomUI');
var Button = require('../../Custom/UI/Button');
var Pergunta4 = require('View/Windows/Pergunta4');
var Pergunta4_1 = require('View/Windows/Pergunta4_1');

function Pergunta3(){
    this.view = customUI.createWindow('3) Qual o meio de transporte utilizado para chegar ao seu destino?');
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
    data[1] = Ti.UI.createPickerRow({title:'Ônibus', custom_item:'o'});
    data[2] = Ti.UI.createPickerRow({title:'Metrô', custom_item:'m'});
    data[3] = Ti.UI.createPickerRow({title:'Trem', custom_item:'t'});
    data[3] = Ti.UI.createPickerRow({title:'Carro', custom_item:'c'});
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
        if(aPicker.getSelectedRow(0).custom_item != '') {
            this.setEnabled(false);
            if(aPicker.getSelectedRow(0).custom_item == 'o'){
                
                var pergunta4_1 = new Pergunta4_1()    
                pergunta4_1.view.open();           
            } else {
                
                var pergunta4 = new Pergunta4()    
                pergunta4.view.open();                       
            }
            currentWindow.close();
        } else {
            alert('Selecione uma opção válida!'); 
        }

    });
    
    this.view.add(forwardButton);

    Pergunta3.prototype.view = this.view;

    return this;
}

module.exports = Pergunta3;