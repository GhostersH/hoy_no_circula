# Hoy No Circula

Este proyecto es una aplicación de React configurada con Vite. Vite es una herramienta de construcción rápida para aplicaciones web modernas.

## Tecnologías y Herramientas

- **React**: 18.3.1
- **Vite**: 5.4.8
- **Axios**: 1.7.7
- **SweetAlert2**: 11.14.2
- **PostCSS**: 8.4.47
- **ESLint**: 9.11.1
- **Tailwind CSS**: 3.4.13

## Requisitos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd hoy_no_circula
    ```

3. Instala las dependencias utilizando npm:

    ```bash
    npm install
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia la aplicación en modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) para verlo en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.

### `npm run preview`

Sirve la aplicación de producción desde la carpeta `dist`.

### `npm run lint`

Ejecuta ESLint para encontrar y corregir problemas en tu código.

## Configuración

El proyecto está configurado con ESLint y Tailwind CSS. Puedes ajustar la configuración en los archivos `.eslintrc.json` y `tailwind.config.js` respectivamente.

## Estructura del Proyecto

```plaintext
hoy_no_circula/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.json
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Contribución

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y crea una rama para tus características (`feature/descripcion`). Luego envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.