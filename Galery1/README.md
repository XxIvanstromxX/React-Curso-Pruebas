# Galería de Imágenes - Dragon Ball

Aplicación de galería de imágenes construida con React y TypeScript que consume la API de Dragon Ball para mostrar personajes.

## 🚀 Tecnologías

- **React** 19.1.1
- **TypeScript** 5.9.3
- **Vite** 7.1.7
- **React SWC** para compilación rápida

## 📋 Características

- Consumo de API REST (Dragon Ball API)
- Gestión de estados con `useState`
- Efectos secundarios con `useEffect`
- Tipado fuerte con TypeScript
- Interfaz de usuario reactiva
- Manejo de estados de carga
- Renderizado condicional

## 🛠️ Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de producción
pnpm preview

# Ejecutar linter
pnpm lint
```

## 📁 Estructura del Proyecto

```
src/
├── App.tsx              # Componente principal
├── main.tsx            # Punto de entrada
├── index.css           # Estilos globales
└── components/
    └── GaleryApp.tsx   # Componente de galería con fetch de datos
```

## 🎯 Funcionalidades

### GaleryApp Component

Componente que implementa:
- Fetch de datos desde la API de Dragon Ball
- Obtiene los primeros 10 personajes
- Muestra imágenes con sus nombres
- Estados de carga y error
- Renderizado condicional basado en el estado de los datos

## 🌐 API Utilizada

- **Endpoint**: `https://dragonball-api.com/api/characters?limit=10`
- **Método**: GET
- **Respuesta**: Lista de personajes con id, nombre e imagen

## 📝 Licencia

Este proyecto es privado y con fines educativos.