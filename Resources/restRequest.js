var sendRequest = function(type, props) {
	
	//url, params, responseOk, responseError
	var loginName = 'teste';
	var loginPasswd = 'testepass';
	var apiUrl = props.url;

	var xhr = Titanium.Network.createHTTPClient();
	 
	xhr.onload = props.responseOk;

	xhr.onerror = props.responseError;
	
	xhr.open(type, apiUrl);
	authstr = 'Basic ' +Titanium.Utils.base64encode(loginName+':'+loginPasswd);  
	xhr.setRequestHeader('token', authstr); 
	
	xhr.setRequestHeader("Content-Type", "application/json");
	var data = JSON.stringify(props.params);
	Titanium.API.info(' Text: ' + data);
	xhr.send(data);	
	
}

exports.get = function(props){
	sendRequest('GET', props);
};

exports.put = function(props){
	sendRequest('PUT', props);
};

exports.post = function(props){
	sendRequest('POST', props);
};

// usage example:

/*

var requestParams = {  
    'param1':'blablabla',  
    'param2': 'blebleble'    
}; 
	
// Rest Authenticated Request
restRequest.get({
	url:'http://pesquisaapp-mobidique.rhcloud.com/rest/library/books',
	params:requestParams,
	responseOk:function() {
	    Titanium.API.info(' Text: ' + this.responseText);
	    //var jsonObject = JSON.parse(this.responseText);
	    //lblsession.text = "Session ID: \n" + jsonObject.user.session_id;
	    label.text = this.responseText;
	},
	responseError:function() {
	    Titanium.API.info(' Text: ' + this.responseText);
	    //var jsonObject = JSON.parse(this.responseText);
	    //lblsession.text = "Session ID: \n" + jsonObject.user.session_id;
	    label.text = this.responseText;
	}
});

*/