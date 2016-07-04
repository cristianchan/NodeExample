function route (handle,pathname,response) {
	 console.log('A punto de ruter una peticion para ' + pathname);
	 if(typeof handle[pathname] == 'function'){
		 return handle[pathname](response);
	 }else {
			console.log("No se encontro manipulador para " + pathname);
			return "404 No Econtrado";
	 }
}

exports.route  = route;
