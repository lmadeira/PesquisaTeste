var Button = require('Button');
var Label = require('Label');

function Menu(title){
    
    var view = Ti.UI.createView({top:10,left:10,width:Titanium.UI.FILL,height:Titanium.UI.FILL,layout:'vertical'});
    
    // set title
    var titleLabel = new Label({
                text:title,
                textAlign:'center',
                width:'auto',
                height:'auto',
                bottom:20,
                font:{fontFamily:'Arial',fontWeight:'bold',fontSize:24},
                color:'#000000'
            });
    
    view.add(titleLabel);
    
    Menu.prototype.addMenu = function(menu, clickFunction){
        var menuButton = new Button({title:menu,
                                        width:200,
                                        height:40,
                                        font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                                        top:10});
        
        // Listen for click events.
        menuButton.addEventListener('click', clickFunction);
        
        view.add(menuButton);    
    };
    
    Menu.prototype.view = view;
    
    return this;
}
    
module.exports = Menu;
