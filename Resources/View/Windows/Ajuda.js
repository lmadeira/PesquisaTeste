var customUI = require('../../CustomUI');
var Button = require('../../Custom/UI/Button');

function Ajuda(){
    var view = customUI.createWindow('Ajuda');
    
    var backButton = new Button({title:'Voltar',
                                    width:100,
                                    height:40,
                                    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                                    top:315,
                                    left:70});
    
    // Listen for click events.
    backButton.addEventListener('click', function(){
        // FIXME: nao esta funcionando o close
        view.close();
        /*
        Ti.App.fireEvent('APP:GOTO:MAINWINDOW', {
             from:'Ajuda'
        });
        */
    });

    Ajuda.prototype.view = view;

    view.add(backButton);
    return this;
}

module.exports = Ajuda;