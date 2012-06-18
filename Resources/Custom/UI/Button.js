function Button(props){
    var button = Ti.UI.createButton(props);

    // set background
    button.setBackgroundImage('/Custom/UI/images/buttonBackground.png');
    button.setBackgroundSelectedImage('/Custom/UI/images/buttonBackgroundSelected.png');

    return button
}

module.exports = Button;