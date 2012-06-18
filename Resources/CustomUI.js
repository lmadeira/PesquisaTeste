var Window = require('Custom/UI/Window');
var Label = require('Custom/UI/Label');
var Menu = require('Custom/UI/Menu');
var Button = require('Custom/UI/Button');
var View = require('Custom/UI/View');

function createWindow(title){
    var customWindow = new Window({title:title,width:'100%',height:'100%',backgroundColor:'#ffffff'});
    return customWindow;
}

function createLabel(props){
    var customLabel = new Label(props);
    return customLabel;
}

function createMenu(title){
    var customMenu = new Menu(title);
    return customMenu;
}

function createButton(name, clickFunction){
    var customButton = new Button(menu);
        
    // Listen for click events.
    customButton.addEventListener('click', clickFunction);

    return customButton;
}

function createView(){
    var customView = new View();
    return customView;
}

//exports.createWindows = createWindows;
exports.createWindow = createWindow;
exports.createView = createView;
exports.createMenu = createMenu;
exports.createButton = createButton;
exports.createLabel = createLabel;
