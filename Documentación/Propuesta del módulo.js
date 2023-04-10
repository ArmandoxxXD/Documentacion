Equipo 1
Ver los provedores y que productos tiene el provedor.
Ver la ubicacion del provedor.
Productos en existendia y por agotarse y poder asignarlos a un proveedor.

// Propuesta de Base de Datos

Provedor {
	"Telefono":"",
	"Email":"",
	"NombreProvedor":"",
	"logo":"",
	"Pais":"",
	"Estado":"",
	"Municipio":"",
	"Calle":"",
	"Mapa":""				 
}

Productos{
	"Nombre":"",
	"Imagen":"",
	"Cantidad":0,
	"Precio":0,
	"Existencia":boolean, //(condicion > 0 en cantidad es true )
	"PorAgotarce":boolean, //(condicion < 10 en cantidad es true)
	"Provedor":"NombreProvedor",
	"Categoria":""
}

Usuarios {
	"nombre":"",
	"email":"",
	"telefono":"",
	"password":"",
	"rol":[""]
}
