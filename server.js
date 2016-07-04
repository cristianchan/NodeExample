var http = require("http");
var url = require("url");

function iniciar(route,handle){
	function onRequest(request, response) {
			var pathName = url.parse(request.url).pathname;
  		console.log("Peticion Recibida para. " + pathName );
		  route(handle,pathName,response);
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;
