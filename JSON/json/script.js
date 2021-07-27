document.addEventListener("DOMContentLoaded",
	function (event) {

	 //unobstrusive event binding 
	 document.querySelector("button")
		.addEventListener("click", function () {


			// call server to get the name
			$ajaxUtils.sendGetRequest("/Ajax-Basics/data/name.txt",
				function (request) {
				  var name = request.responseText;

                  document.querySelector("#content")
				   .innerHTML = "<h2>Hello  " + name + "!";

                    });

				
		});
	}
);