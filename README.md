# FullCrazy
Proyecto formativo hecho en Node.js

## Tabla de Contenidos

1. [Integrantes](#integrantes)
2. [Codificacion](#codificacion)
3. [Uso](#uso)


## Integrantes

Jorge Ivan Gomez
Simon Montoya Rojas


## Codificacion 

nombre de carpetas, archivos en minuscula y con snake case.
nombre de las funciones en minusculas y con snake case.


## Uso
src /

config: tendrá elementos de configuración para acceder a recursos que se requieran y se encuentren externos al servidor. En este caso, tendremos la configuración de la conexión a la base de datos alojada en Atlas (MongoDB).

models: tendrá los schemas y los modelos de la base de datos (no relacional).

controller: contiene la capa encargada de gestionar el procesamiento de las solicitudes que recibe la aplicación. Recibe las solicitudes del cliente, accede a los recursos solicitados (base de datos, archivos, etc) y genera las respuestas y procesos esperados en el modelo del negocio.

routes: recopila el redireccionamiento de los recursos en donde cada URL visible por el cliente, apunta a una acción específica.

Cabe aclarar que la disposición de los recursos (estructura o encarpetado del proyecto) puede variar, incluso pueden agregarse más carpetas con objetivos específicos.

.env y .gitignore. : En la carpeta raíz del proyecto crear manualmente los dos archivos. En el archivo .env configure las variables de entorno de la aplicación. En el archivo .gitignore se definen los archivos o carpetas que no es necesario sincronizar en cada commit que se haga del proyecto hacia el repositorio en la nube; por ahora agregue la carpeta node_modules para evitar que en cada commit se suba esta carpeta al repositorio.


