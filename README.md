# Ventas de Viajes

Este proyecto es una página web para la venta de paquetes de viajes a diferentes destinos. La página permite a los usuarios seleccionar un destino y ver información detallada sobre el mismo.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y carpetas:

- `index.html`: El archivo principal de la página web.
- `css/style.css`: Archivo de estilos CSS.
- `js/script.js`: Archivo JavaScript con la lógica de la página.
- `js/ciudades.js`: Archivo JavaScript con la información de las ciudades.

## Contenido del Proyecto

### index.html

Este archivo contiene la estructura HTML de la página web. Incluye una lista de destinos y una sección para mostrar la información del destino seleccionado.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Ventas de viajes</title>
</head>
<body>
    <ul>
        <li><a>Barcelona</a></li>
        <li><a>Roma</a></li>
        <li><a>París</a></li>
        <li><a>Londres</a></li>
    </ul>
    <div class="contenedor">
        <div class="contenido">
            <h2 id="titulo">Bienvenido a nuestra web</h2>
            <h3 id="subtitulo">Elija su destino</h3>
            <p id="parrafo">Compre los mejores paquetes de viaje de nuestra empresa</p>
        </div>
    </div>
    <script type="module" src="js/script.js"></script>
</body>
</html>
