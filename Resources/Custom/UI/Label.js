function Label(props){
    
    label = Ti.UI.createLabel(props);

    if(props.hasBorder){
        label.setBackgroundImage('/Custom/UI/images/labelBackground.png');  
    }
    
    return label;
}

module.exports = Label;