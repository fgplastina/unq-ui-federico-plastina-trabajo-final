# Trabajo práctico final
* Universidad Nacional de Quilmes
* Materia: Construcción de Interfaces de Usuario


## Piedra, Papel, Tijera, Largarto y Spock (Sheldon's best game).
Se trata de un juego estilo piedra, papel o tijera pero con mas posibilidades. Más información [acá][wiki]. 


## Jugar online:
Se puede jugar online en este [link][online], sin necesidad de instalarlo localmente.


## Instrucciones de instalación:
#### Requisitos:
1. Tener [node](https://nodejs.org/en/download/) y [npm](https://nodejs.org/en/download/)  instalados:

    ```shell
    $ node --version
    v18.3.0
    $ npm --version
    8.5.5
    ```
2. (Linux) Tener las utilidades __unzip__ y __wget__. 


#### Procedimiento:
1.  Descargar el proyecto
    
    
    * (Windows) - Descargar el zip desde la [url.](https://github.com/fgplastina/unq-ui-federico-plastina-trabajo-final/releases)
    
    * (Linux) - Con la utildad __wget__ descargar el proyecto:
        ```
        $ wget https://github.com/fgplastina/unq-ui-federico-plastina-trabajo-final/archive/refs/tags/GAME-v1.0.0.zip
        ```
    
    * Tambien es viable usar git, independiente del OS y sin necesidad de descomprimir:
        ```
        git clone https://github.com/fgplastina/unq-ui-federico-plastina-trabajo-final 
        ```
    
2.  Descomprimir el archivo y ubicarse dentro del directorio descomprimido:
    * (Windows) - usar winzip o 7zip. 
     
    * (Linux) - Ejecutar en la terminal:
        ```
        unzip game-v1.0.0.zip && cd game-v1.0.0
        ```
    
3. Instalar las dependencias del proyecto desde la terminal o consola:
    ```
    $ npm install
    ```
4. Iniciar el proyecto:
    ```
    $ npm start
    ```

[wiki]: https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock
[online]: https://fgplastina.github.io/unq-ui-federico-plastina-trabajo-final/
