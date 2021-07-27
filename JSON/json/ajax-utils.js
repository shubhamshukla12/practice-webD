(function (global) {
	
	//setup a namespace for our utility
	var ajaxUtils = {};

	//returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not Supported!");
			return( null);
		}
	 } 

	 	// var request = getRequestObject();
	    // var myHandler = null;

//makes an ajax get request to 'RequestURL'
ajaxUtils.sendGetRequest =
		function (requestUrl, responseHandler, isJsonResponse) {
		 	var request = getRequestObject();
		 	request.onreadystatechange = 
		 		function () {
		 			handleResponse(request, responseHandler
		 				           isJsonResponse);
		 		};
		 	request.open("GET" , requestUrl, true);
		 	request.send(null);  //for POST only
		 };


 //Only Calls user provided 'ResponseHandler'
 //fuction if response is ready
 //and not an error
 function handleResponse(request, responseHandler, isJsonResponse) {
 	if ((request.readystate == 4) && (request.status == 200)) {
 		responseHandler(request);
 	}
 	if (isJsonResponse == undefined ) {
 		isJsonResponse = true;
 	}
 	if (isJsonResponse) {
 		responseHandler(JSON.parse(request.responseText))
 	}
 	else {
 		responseHandler(request.responseText);
 	}
 }


//Expose utility to the global objecct
	global.$ajaxUtils = ajaxUtils;


}) (window);