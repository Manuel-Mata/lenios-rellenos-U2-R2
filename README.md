# Leños Rellenos - U2 R2

**Caso:** Caso 1 - Venta de Leños Rellenos  
**Asignatura:** Desarrollo Web Integral  
**Unidad:** II - Control de Versiones  
**Tipo de evaluación:** Recuperación 2  
**Institución:** Universidad Tecnológica del Norte de Guanajuato  

---

## Integrantes

| Nombre | No. Control | Rol |
|--------|-------------|-----|
| Manuel Alejandro Mata Campos | 1222100452 | Scrum Master / Full Stack |

---

## Descripción del caso

Leños Rellenos es una microempresa familiar de comida artesanal que necesita 
una aplicación de comercio electrónico que incluya:

- Catálogo digital de productos
- Carrito de compras
- Generación de pedido vía WhatsApp
- Panel de administración con control de stock y pedidos

---

## Arquitectura del repositorio

El repositorio sigue una arquitectura de 3 capas desacopladas:

```
lenios-rellenos-U2-R2/
├── .github/
│   └── CODEOWNERS        # Control de propietarios por módulo
├── .husky/
│   ├── pre-commit        # Ejecuta lint-staged antes de commitear
│   └── commit-msg        # Valida formato Conventional Commits
├── frontend/             # Capa de presentación (HTML5/CSS3/JS)
│   └── src/
├── backend/              # Capa de lógica y API REST (Node.js/Express)
│   └── src/
├── commitlint.config.js  # Reglas de formato de commits
├── eslint.config.mjs     # Reglas de calidad de código
└── package.json          # Dependencias y scripts del proyecto
```

---

## Modelo de datos

Las entidades principales del sistema son:

| Entidad | Descripción |
|---------|-------------|
| `Cliente` | Datos del cliente que realiza el pedido |
| `Pedido` | Registro de cada orden generada |
| `DetallePedido` | Productos incluidos en cada pedido |
| `Producto` | Artículos disponibles en el catálogo |
| `Categoría` | Clasificación de los productos |

---

## Estrategia de ramas

| Rama | Propósito |
|------|-----------|
| `main` | Código en producción — protegida, solo merge via PR aprobado |
| `develop` | Integración de features — protegida, requiere PR |
| `feature/*` | Desarrollo de funcionalidades específicas |

---

## Flujo de trabajo

El proyecto sigue un flujo **MVP incremental** basado en GitHub Flow:
catálogo → carrito → WhatsApp → panel admin


1. Crear rama `feature/nombre` desde `develop`
2. Desarrollar y commitear con Conventional Commits
3. Abrir PR hacia `develop` con descripción y criterios
4. Code review y aprobación
5. Merge a `develop`
6. Al completar un MVP, merge de `develop` a `main`

---

## Herramientas de calidad

| Herramienta | Propósito |
|-------------|-----------|
| ESLint | Detección de errores en JavaScript |
| Husky | Hooks de Git automatizados |
| lint-staged | ESLint solo en archivos modificados |
| commitlint | Forzar formato Conventional Commits |

---

## Conventional Commits

Los commits siguen el estándar Conventional Commits:
feat: nueva funcionalidad
fix: corrección de bug
chore: tareas de configuración
docs: cambios en documentación
refactor: refactorización de código


---

## Milestones del proyecto

| Milestone | Descripción | Fecha límite |
|-----------|-------------|--------------|
| MVP-1 | Catálogo digital | 2026-09-01 |
| MVP-2 | Carrito de compras | 2026-09-04 |
| MVP-3 | Integración WhatsApp | 2026-09-08 |
| MVP-4 | Panel de administración | 2026-09-11 |