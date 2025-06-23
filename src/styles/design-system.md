
# Sistema de Diseño - Asociación de Ovinos

## Paleta de Colores

### Colores Principales
- **Pastoral (Verde)**: Paleta principal inspirada en los campos y pastos
  - `pastoral-50`: #f0f9f4 (Fondo muy claro)
  - `pastoral-100`: #dcf4e3 (Fondo claro)
  - `pastoral-500`: #349f5a (Verde principal)
  - `pastoral-700`: #21683c (Verde oscuro)
  - `pastoral-900`: #1a452a (Verde muy oscuro)

- **Earth (Tierra)**: Paleta secundaria inspirada en la tierra y madera
  - `earth-50`: #faf9f7 (Crema muy claro)
  - `earth-100`: #f2f0eb (Crema claro)
  - `earth-500`: #a6977d (Marrón medio)
  - `earth-700`: #80705e (Marrón oscuro)

## Tipografía

### Familias de Fuentes
- **Encabezados**: Inter (font-heading)
- **Cuerpo**: Inter (font-body)

### Escalas de Texto
- **Hero Title**: text-5xl lg:text-6xl font-bold
- **Section Title**: text-3xl lg:text-4xl font-bold
- **Card Title**: text-xl font-semibold
- **Body Text**: text-base lg:text-lg
- **Small Text**: text-sm

## Espaciado

### Contenedores
- **Container Principal**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Section Padding**: py-16 lg:py-24
- **Card Padding**: p-6 lg:p-8

### Gaps y Márgenes
- **Grid Gap**: gap-6 lg:gap-8
- **Element Spacing**: space-y-4 lg:space-y-6

## Componentes

### Botones
```css
/* Botón Primario */
.btn-primary {
  @apply bg-pastoral-600 hover:bg-pastoral-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200;
}

/* Botón Secundario */
.btn-secondary {
  @apply bg-white border-2 border-pastoral-600 text-pastoral-600 hover:bg-pastoral-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200;
}
```

### Cards
```css
.card {
  @apply bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden;
}

.card-content {
  @apply p-6 lg:p-8;
}
```

### Navigation
```css
.nav-link {
  @apply text-gray-700 hover:text-pastoral-600 font-medium transition-colors duration-200;
}

.nav-link-active {
  @apply text-pastoral-600 font-semibold;
}
```

## Layout

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Grid Sistemas
- **2 Columnas**: grid-cols-1 md:grid-cols-2
- **3 Columnas**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **4 Columnas**: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4

## Animaciones

### Transiciones Estándar
- **Hover**: transition-all duration-200
- **Color Change**: transition-colors duration-200
- **Transform**: transition-transform duration-300

### Animaciones de Entrada
- **Fade In**: animate-fade-in
- **Slide In Left**: animate-slide-in-left

## Patrones de Uso

### Header
- Fondo blanco con sombra sutil
- Logo a la izquierda, navegación centrada
- Botón CTA destacado a la derecha

### Hero Section
- Imagen de fondo con overlay
- Texto centrado con jerarquía clara
- Botones de acción prominentes

### Content Sections
- Alternancia de fondos (blanco/gris claro)
- Máximo ancho de contenido
- Espaciado consistente

### Footer
- Fondo oscuro (pastoral-900)
- Texto en colores claros
- Links organizados en columnas

## Notas de Implementación

### Responsive Design
- Mobile-first approach
- Puntos de ruptura consistentes
- Pruebas en múltiples dispositivos

### Accesibilidad
- Contraste mínimo 4.5:1
- Navegación por teclado
- Alt text en imágenes

### Performance
- Lazy loading para imágenes
- Optimización de fuentes
- Minificación de CSS
