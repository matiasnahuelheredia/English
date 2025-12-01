# English Learning Platform

Plataforma web interactiva para aprender inglés con ejercicios de tiempos verbales.

## Características

- ✅ Sistema de autenticación (login/registro)
- ✅ Menú lateral con todos los tiempos verbales
- ✅ Ejercicios interactivos con dropdowns
- ✅ Validación de respuestas en tiempo real
- ✅ Explicaciones detalladas de cada respuesta
- ✅ Interfaz moderna y responsiva

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

## Construir para producción

```bash
npm run build
```

## Uso

1. Registra una cuenta nueva o inicia sesión
2. Selecciona un tiempo verbal del menú lateral
3. Completa los ejercicios seleccionando las opciones correctas
4. Verifica tus respuestas individualmente o todas a la vez
5. Lee las explicaciones para entender los errores

## Tecnologías

- React 18
- Vite
- TailwindCSS
- React Router DOM

## Estructura del Proyecto

```
src/
├── components/
│   ├── Login.jsx           # Componente de autenticación
│   ├── Layout.jsx          # Layout principal
│   ├── Sidebar.jsx         # Menú lateral
│   └── ExerciseView.jsx    # Vista de ejercicios
├── context/
│   └── AuthContext.jsx     # Contexto de autenticación
├── data/
│   └── exercises.js        # Base de datos de ejercicios
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```
