var Label = require('Label');

function Window(props){ 
    var view = Ti.UI.createWindow(props);
    view.orientationModes=[Titanium.UI.LANDSCAPE_LEFT];
    
    // set background
    view.setBackgroundImage('/Custom/UI/images/windowBackground.png');
    
    // set title
    var titleLabel = new Label({
                text:props.title,
                //textAlign:'center',
                width:'auto',
                height:'auto',
                top: 25,
                left: 70,
                font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20},
                color:'#000000',
                hasBorder:false
            });
    view.add(titleLabel);
    
    // set Container View
    var containerView = Ti.UI.createView({width:'100%',height:'100%', top:100});
    view.add(containerView);
 
    Window.prototype.add = function(view){
        containerView.add(view);
    };
    
    Window.prototype.remove = function(view){
        containerView.remove(view);
    };
    
    Window.prototype.open = function(){
        view.open();
    };
    
    Window.prototype.close = function(){
        view.close();
    };
   
    Window.prototype.show = function(){
        view.show();
    };
    
    Window.prototype.view = view;
    
    return this;
}

module.exports = Window;