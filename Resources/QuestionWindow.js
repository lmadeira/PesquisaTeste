//QuestionWindow Window Component Constructor
function QuestionWindow() {
    //load component dependencies
    var QuestionView = require('QuestionView');
        
    //create component instance
    var self = Ti.UI.createWindow({
        backgroundColor:'#ffffff',
        navBarHidden:true,
        exitOnClose:true
    });
        
    //construct UI
    var questionView = new QuestionView();
    self.add(questionView);
    
    return self;
}

//make constructor function the public component interface
module.exports = QuestionWindow;
