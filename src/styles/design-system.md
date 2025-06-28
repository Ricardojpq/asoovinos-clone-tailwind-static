
# Sistema de Diseño - ASOCABRA Venezuela

## Inspiración y Concepto

Basado en el logo oficial de ASOCABRA, el sistema de diseño captura la esencia de la ganadería caprina venezolana con colores cálidos y terrosos que reflejan la conexión con la tierra y la tradición ganadera.

## Paleta de Colores

### Colores Principales (Basados en el Logo)
- **Golden (Dorado)**: Paleta principal inspirada en los tonos dorados del logo
  - `golden-50`: #fffbf0 (Fondo muy claro)
  - `golden-100`: #fff6e0 (Fondo claro)
  - `golden-600`: #ff9e1a (Dorado principal del logo)
  - `golden-700`: #e6890f (Dorado oscuro)
  - `golden-900`: #b36b0b (Dorado muy oscuro)

- **Bronze (Bronce)**: Paleta secundaria con tonos cobre/bronce
  - `bronze-50`: #fdf8f3 (Crema muy claro)
  - `bronze-100`: #fbf0e6 (Crema claro)
  - `bronze-500`: #d99550 (Bronce medio)
  - `bronze-700`: #b4770d (Bronce oscuro)

- **Earth (Tierra)**: Paleta neutra inspirada en la tierra
  - `earth-50`: #faf9f7 (Crema muy claro)
  - `earth-500`: #a6977d (Marrón medio)
  - `earth-700`: #80705e (Marrón oscuro)

## Modo Oscuro (Dark Mode)

El sistema incluye soporte completo para modo oscuro con:
- Variables CSS personalizadas que se adaptan automáticamente
- Transiciones suaves entre temas
- Colores optimizados para accesibilidad en ambos modos
- Persistencia de preferencia del usuario

### Implementación
```typescript
// Toggle automático basado en preferencias del sistema
const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
});
```

## Tipografía

### Familias de Fuentes
- **Encabezados**: Inter (font-heading)
- **Cuerpo**: Inter (font-body)

### Escalas de Texto Responsivas
- **Hero Title**: text-5xl lg:text-6xl font-bold
- **Section Title**: text-3xl lg:text-4xl font-bold
- **Card Title**: text-xl font-semibold
- **Body Text**: text-responsive-base
- **Small Text**: text-responsive-sm

## Componentes Mejorados

### Botones
```css
/* Botón Primario - Tema ASOCABRA */
.btn-primary {
  @apply bg-golden-600 hover:bg-golden-700 text-white px-6 py-3 rounded-xl 
         font-semibold transition-all duration-300 shadow-golden hover:shadow-golden-lg 
         transform hover:scale-105;
}

/* Botón Secundario */
.btn-secondary {
  @apply bg-transparent border-2 border-golden-600 text-golden-600 
         hover:bg-golden-50 px-6 py-3 rounded-xl font-semibold 
         transition-all duration-300;
}

/* Botón Outline para Hero */
.btn-outline {
  @apply bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white 
         hover:bg-white hover:text-golden-800 px-6 py-3 rounded-xl 
         font-semibold transition-all duration-300;
}
```

### Cards Mejoradas
```css
.card {
  @apply bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
         overflow-hidden border border-border/50 hover:border-golden-200;
}

.card-gradient {
  @apply bg-gradient-to-br from-golden-50 to-bronze-50 
         dark:from-golden-900/20 dark:to-bronze-900/20;
}

.card-hover {
  @apply transition-all duration-300 hover:scale-105 hover:shadow-2xl 
         hover:shadow-golden-600/20;
}
```

### Navegación Mejorada
```css
.nav-link {
  @apply text-foreground/80 hover:text-golden-600 font-medium transition-all duration-300 
         relative px-3 py-2 rounded-lg hover:bg-golden-50/50;
}

/* Efecto de subrayado animado */
.nav-link:hover::after {
  content: '';
  @apply absolute bottom-0 left-3 right-3 h-0.5 bg-golden-600 transform scale-x-100 
         transition-transform duration-300;
}
```

## Animaciones y Efectos

### Animaciones de Entrada
- **fade-in**: Aparición suave con movimiento hacia arriba (0.8s)
- **slide-in-left**: Deslizamiento desde la izquierda (0.8s)
- **slide-up**: Movimiento hacia arriba (0.8s)

### Efectos Especiales
- **animate-float**: Flotación sutil continua
- **animate-glow**: Pulso de brillo para elementos destacados
- **pulse-glow**: Efecto de resplandor pulsante

### Efectos de Hover
```css
.image-hover {
  @apply transition-all duration-500 hover:scale-110 hover:rotate-2;
}

.card-hover {
  @apply transition-all duration-300 hover:scale-105 hover:shadow-2xl 
         hover:shadow-golden-600/20;
}
```

## Gradientes Personalizados

### Gradientes Principales
```css
.gradient-hero {
  @apply bg-gradient-to-br from-golden-600 via-golden-700 to-bronze-700;
}

.gradient-hero-dark {
  @apply bg-gradient-to-br from-golden-800 via-golden-900 to-bronze-900;
}

.hero-pattern {
  background-image: radial-gradient(circle at 25% 25%, rgba(255, 158, 26, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(217, 149, 80, 0.2) 0%, transparent 50%);
}
```

## Sombras Personalizadas

### Sombras Temáticas
- `shadow-golden`: Sombra dorada suave
- `shadow-golden-lg`: Sombra dorada pronunciada
- `shadow-glow`: Efecto de resplandor
- `shadow-golden-soft`: Sombra dorada muy sutil

## Layout Responsivo

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Grid Sistemas
- **2 Columnas**: grid-cols-1 md:grid-cols-2
- **3 Columnas**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Hero Layout**: grid-cols-1 lg:grid-cols-2

## Elementos Decorativos

### Divisores
```css
.divider-golden {
  @apply w-20 h-1 bg-gradient-to-r from-golden-600 to-bronze-600 rounded-full mx-auto;
}
```

### Badges y Etiquetas
```css
.badge-golden {
  @apply bg-golden-100 text-golden-800 px-3 py-1 rounded-full text-sm font-semibold
         dark:bg-golden-900/30 dark:text-golden-300;
}
```

### Iconos
```css
.icon-golden {
  @apply text-golden-600 dark:text-golden-400;
}
```

## Accesibilidad

### Contraste
- Cumple con WCAG 2.1 AA para ambos temas
- Contraste mínimo 4.5:1 en todos los elementos de texto
- Colores de foco claramente visibles

### Navegación
- Soporte completo para navegación por teclado
- Estados de foco visibles en todos los elementos interactivos
- Transiciones suaves que no afectan usuarios con sensibilidad al movimiento

### Dark Mode
- Detección automática de preferencias del sistema
- Toggle manual disponible
- Persistencia de preferencias del usuario

## Implementación Técnica

### Variables CSS
Todas las variables están definidas en `:root` y `.dark` para facilitar el cambio de tema.

### Clases de Utilidad
El sistema incluye clases de utilidad responsivas para tipografía, espaciado y efectos.

### Componentes Reutilizables
- ThemeToggle: Botón para cambiar entre modo claro y oscuro
- Cards con variantes de gradiente
- Botones con múltiples variantes
- Formularios con estilos consistentes

## Notas de Mantenimiento

### Performance
- Lazy loading implementado donde sea apropiado
- Optimización de imágenes con parámetros de Unsplash
- Transiciones optimizadas para 60fps

### Escalabilidad
- Sistema de colores basado en variables CSS
- Componentes modulares y reutilizables
- Documentación completa para futuras extensiones

### Compatibilidad
- Soporte para navegadores modernos
- Fallbacks para características no soportadas
- Responsive design mobile-first
