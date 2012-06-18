function View(){
    
    view = Ti.UI.createView();
    
    // set background
    view.setBackgroundImage('/Custom/UI/images/viewBackground.png');
    
    return view;
}

module.exports = View;