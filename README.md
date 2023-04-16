# Integradora II
[![Contribuidores][contribuidores-shield]][contributors-url]

## contenido
<details>
  <summary>Tabla contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivos">Objetivos</a>
        </li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-clases">Diagrama de Clases</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
## Acerca del proyecto
<!-- Descripción -->
### Descripción.
Este proyecto consta del desarrollo de un sistema informático del gimnasio Fitness Center que se ubica en la calle Nayarit #52-B, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Guanajuato. El proyecto tiene como fin desarrollar un sistema que cumpla con ciertas funcionalidades las cuales son automatizar sus servicios básicos como lo son gestionar clientes y usuarios así como la administración de productos y sus ingresos y egresos económicos llevando un control para que el cliente administre de mejor manera el gimnasio. Además, contendrá otras funcionalidades como lo son el login que permitirá autentificar los usuarios que deseen usar el sistema así como las funcionalidades del usuario.
Se planea que el proyecto se realice en un plazo de cuatro meses (enero – abril) o alrededor de 16 a 18 semanas. Como fecha final de entrega el 21 de abril.
Se estima que el costo del desarrollo de este proyecto sea de $30, 720.00 Incluyendo el sueldo de los desarrolladores así como otros costos.


<!-- Objetivos -->
### Objetivos.
#### Objetivos Generales del proyecto.
El objetivo general de nuestro proyecto es desarrollar el módulo de proveedores de un sistema web que permita al administrador gestionar los proveedores y productos del gimnasio Spartacus Fitness Center, permitiendo consultar sus datos, agregar un nuevo producto o proveedor, eliminar cualquiera de estos o editar su información para mejorar el control de gestión de este servicio del gimnasio.

#### Objetivos Especificos.
Por otro lado, la idea de implementar este tipo de proyecto con estas especificaciones tiene como objetivo aprender y llevarse experiencia y conocimiento que nos aportará herramientas para ser empleadas en un futuro en nuestra carrera profesional.

<!-- Organigrama -->
### Organigrama.
![organigrama](https://user-images.githubusercontent.com/84553507/228033515-0545b171-66be-41d9-a574-5ec755c3f04f.jpg)

<!-- Diagrama Gantt -->
### Diagrama Gantt.
![Gantt](https://user-images.githubusercontent.com/84553507/228038870-0977b2e9-473a-448b-82a1-5bac616af003.png)

<!-- Análisis del proyecto -->
## Análisis de la Solución.

<!-- Requerimientos -->
### Requerimientos Funcionales.

| Clave de requerimiento |                                                                           Descripción                                                                           |
|:----------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|          RF01          | El sistema permitirá agregar nuevos proveedores a la base de datos                                                                                                                 |
|          RF02          | El sistema permitirá actualizar la información de los proveedores existentes en la base de datos                                                                                              |
|          RF03          | El sistema permitirá eliminar cualquier proveedor por su nombre existentes en la base de datos                                                                                                 |
|          RF04          | El sistema permitirá consultar datos de los proveedores por medio de filtros                                                                                    |
|          RF05          | El sistema aloja la información de los proveedores: Id Proveedor Nombre del Proveedor Teléfono Correo electrónico  Ubicación Productos                          |
|          RF06          | El sistema no permitirá tener registros duplicados (dos proveedores con el mismo nombre)                                                                        |
|          RF07          | Los proveedores se registran con al menos un producto                                                                                                           |
|          RF08          | Los proveedores no podrán tener campos vacíos                                                                                                                   |
|          RF09          | El sistema enviará una notificación cuando se realice una inserción                                                                                             |
|          RF10          | El sistema solo permitirá ingresar a un usuario registrado                                                                                                      |
|          RF11          | El administrador es el único que puede registrar usuarios                                                                                                       |
|          RF12          | El sistema contará con un formulario para registrar usuarios solo si somos el administrador  y podremos ingresar a tal formulario desde una barra de navegación |
|          RF13          | El sistema mostrará los proveedores en una interfaz gráfica donde podremos acceder a su  información o eliminarlo con un botón                                  |
|          RF14          | La información de los proveedores se visualizará en una interfaz gráfica distinta a donde  se encuentran los proveedores                                        |
|          RF15          | El sistema contará con un botón para direccionarnos al formulario para agregar proveedores                                                                      |
### Requerimientos no funcionales.
* Usabilidad: El sistema se ejecuta en un entorno web por lo que se requiere contar con un explorador de internet para acceder a la aplicación el sistema podrá ser visualizado en Mozilla Firefox 3 o superior, internet Explorer 7 o superior, safari, Chrome. El sistema será capaz de poder ser ejecutado en un equipo con una resolución mínima de 1024x768.
* Confiabilidad: El sistema en producción que presente alguna falla de base de datos o servidor se recuperará en un lapso no mayor a 6 horas después de ser reportado el fallo.
* Confiabilidad: El sistema en producción que presente alguna falla de base de datos o servidor se recuperará en un lapso no mayor a 6 horas después de ser reportado el fallo. Entrar al sistema, máximo 10 segundos. Consultar datos, máximo 10 segundos. El sistema está desarrollado para uso exclusivo para usuarios registrados.
El sistema estará alojado de manera local en el equipo de cómputo de los integrantes del equipo 3 de integradora.
* Soporte: La implementación y configuración técnica del sistema se llevará a cabo por los integrantes del equipo 3 de integradora.
* Seguridad: Las reglas de acceso al sistema podrán ser manipuladas por el administrador del sistema. La contraseña del usuario estará encriptada.
* Restricciones de diseño y construcción: El sistema manejara los estándares de codificación definidas para el lenguaje de programación JavaScript y el Framework Angular. Utilizando el SGBD NoSQL MongoDB.


### Historias de Usuario.
[Historias de usuario](https://github.com/ArmandoxxXD/Documentacion/blob/32d4da70f409c6f1951b23f98c1b84ee1fc1fc2a/Documentaci%C3%B3n/Historias%20de%20usuario.png)

<!-- Diagrama de Casos de Uso -->
### Diagrama Casos de Uso.
![Diagrama casos de uso](https://user-images.githubusercontent.com/84553507/228041533-b1d7d486-96fd-4240-8e6a-c99c6b5e7e36.jpg)

<!-- Diseño del proyecto -->
## Diseño de la Solución.

<!-- Modelo Relacional -->
### Propuesta del modelo de la base de datos.
![Colección](https://user-images.githubusercontent.com/84553507/231834893-5f807e14-02c4-41e5-b7c8-9e0239a36742.png)

<!-- Diagrama de Clases -->
### Diagrama de Clases.
![Diagrama de clase UML](https://user-images.githubusercontent.com/84553507/228042253-cc5a849f-4fe0-4dbd-81a7-8140bf2214c1.jpg)

<!-- Diagrama de Componentes -->
### Diagrama de Componentes.
![Diagrama de componentes](https://user-images.githubusercontent.com/84553507/231671159-a68f2d39-19df-4b06-b3a7-5b1f55c4f5b3.jpg)


### Diagrama de actividades.
[Diagrama de actividades](https://github.com/ArmandoxxXD/Documentacion/blob/32d4da70f409c6f1951b23f98c1b84ee1fc1fc2a/Documentaci%C3%B3n/Diagrama%20de%20actividades.pdf)

<!-- Implementación del proyecto -->
## Implementación.

<!-- Estándares de Codificación -->
### Estándares Codificación.
#### Front-End.
* Colocar rutas de Apis-Rest en el archivo envioroment
* Hacer un service por cada modulo donde se haran las peticiones a las Apis-Rest
* Las clases que estaran en la carpeta modelos
* Dentro de components se tendra una carpeta que divira cada modulo y dentro de ella esatran todos sus componentes
* Se evitara hacer uso del any y se typean funciones y variables

#### Back-End.
* Nombre de packetes en Mayuscula
* Estrcutura de modulos dividida en controller,dto,entity,repositoy y service
* Todos los atrubutos de clases son privados 

<!-- Arquitectura MVC y Middleware -->
### Arquitectura.
#### Patrones empleados.
* MVC (Modelo-Vista-Controlador): Este patrón divide la aplicación en tres componentes: el modelo (que maneja la lógica de negocios y la interacción con la base de datos), la vista (que maneja la presentación de la información al usuario) y el controlador (que maneja la interacción entre el modelo y la vista). Se utilizará este patrón para separar de manera clara la presentación, la lógica y la base de datos.

#### Seguridad.
* Autenticación y autorización: Se utilizará autenticación y autorización para garantizar que solo los usuarios autorizados puedan acceder a ciertas partes de la aplicación. Se utilizará una combinación de nombre de usuario y contraseña y tokens de autenticación para manejar la autenticación.

<!-- Código Fuente -->
### Código Fuente.
* [Front-End](https://github.com/ArmandoxxXD/front-end-integradora.git)
* [Back-End](https://github.com/ArmandoxxXD/back-end-integradora.git)


<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
### Casos de prueba.
[Casos de Prueba Módulo Proveedores](https://github.com/ArmandoxxXD/Documentacion/blob/76947a512bd9b42ccba31cf0e9527e125fec1167/Documentaci%C3%B3n/Casos%20de%20prueba%20modulo%20proveedores.xls)


<!-- Iniciando -->
## Iniciando

<!-- Instalación -->
### Instalacion
[Manual de instalación](https://github.com/ArmandoxxXD/Documentacion/blob/e73a15d44c2321e3b4b67188822887a8847936b7/Documentaci%C3%B3n/Gu%C3%ADa%20de%20uso%20del%20m%C3%B3dulo%20de%20proveedores%20y%20sus%20productos.pdf)


## contribucion
Grupo GDS0452
Profesor Gabriel Barrón Rodríguez

## Licencia
Licencia.

## Contacto
Erikmendex840@gmail.com 4181552063
mamojose58@gmail.com    4181522619

## Participantes
* [Erik Daniel Méndez Enríquez]()
* [José Armando Gutíerrez Rodríguez]()
* [Julio Samuel Torres Reyes]()
* [Miguel Ánguel Anastacio Nava]()

[contribuidores-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
