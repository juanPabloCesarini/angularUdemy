- # Como instalar angular Cli
    - ## npm install -g @angular/cli

- # Como crear un proyecto
    - ## ng new nombre_proyecto

- # Como levantar el servidor
    - ## ng serve --o --> Dentro de la carpeta del proyecto

- # Para actualizar la versión del Angular CLI 
    - ## *Desinstalamos versión anterior*
        - ### npm uninstall -g @angular/cli
    - ## *Limiamos cache*
        - ### npm cache clean --force
    - ## *Instalamos última versión*
        - ### npm install -g @angular/cli

- # Como crear componentes
    - ## ng g c carpeta/nombre

- # Como crear servicios
    - ## ng g s carpeta/nombre

- # Para agregar bootstrap
    - ## *instalamos el framwork*
        - ### npm install bootstrap jquery @popperjs/core
    - ## *modificar el archivo angular.json*
        - ### "styles":["node_modules/bootstrap/dist/css/bootstrap.min.css",],
        - ### "scripts":["node_modules/jquery/dist/jquery.min.js","node_modules/@popperjs/core/dist/umd/popper.min.js","node_modules/bootstrap/dist/js/bootstrap.min.js"]