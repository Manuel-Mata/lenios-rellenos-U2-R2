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

##  Fundamento Teórico

### ¿Por qué el versionamiento es indispensable en Leños Rellenos?

El versionamiento es esencial en este proyecto porque el equipo trabaja 
simultáneamente en múltiples módulos interdependientes:

- El **catálogo** cambia constantemente con nuevos productos y precios
- El **carrito** depende del estado actualizado del catálogo
- El **panel admin** maneja datos sensibles de clientes y pedidos
- La **integración WhatsApp** requiere coordinación entre frontend y backend

Sin control de versiones, cualquier cambio en un módulo podría romper 
otro, y sería imposible rastrear quién modificó qué y cuándo.

---

### Git vs SVN — Justificación para el caso

| Criterio | Git | SVN |
|----------|-----|-----|
| Modelo | Distribuido — cada dev tiene copia completa | Centralizado — depende del servidor |
| Trabajo offline | Sí | No |
| Ramas | Ligeras y rápidas | Costosas y lentas |
| Colaboración | PRs, code review, forks | Commits directos al servidor |
| Velocidad | Alta | Baja en repos grandes |

**Elección: Git** — porque Leños Rellenos requiere:
- Múltiples features en paralelo (catálogo, carrito, WhatsApp, admin)
- Trabajo offline desde diferentes ubicaciones
- Ramas ligeras para cada módulo del MVP
- Historial completo y reversión rápida ante errores en producción

---

### Selección de plataforma — GitHub vs GitLab vs Bitbucket

| Criterio | GitHub | GitLab | Bitbucket |
|----------|--------|--------|-----------|
| Costo | Gratuito para repos públicos | Gratuito con límites | Gratuito hasta 5 usuarios |
| Facilidad de uso | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| CI/CD integrado | GitHub Actions | GitLab CI | Pipelines |
| Comunidad | La más grande | Media | Pequeña |
| Proyectos/Kanban | GitHub Projects | GitLab Boards | Jira integrado |

**Elección: GitHub** — porque Leños Rellenos es un negocio familiar con 
recursos limitados que prioriza:
- **Gratuidad** — sin costo para repositorios públicos
- **Simplicidad** — interfaz intuitiva para el equipo pequeño
- **GitHub Projects** — tablero Kanban integrado sin herramientas externas
- **GitHub Actions** — CI/CD gratuito para automatización futura

---

### Comparativa de flujos de trabajo

| Flujo | Descripción | ¿Aplica al caso? |
|-------|-------------|-----------------|
| **Git Flow** | Ramas release, hotfix, develop, feature | Complejo para equipo pequeño |
| **GitHub Flow** | Solo main y feature branches, deploy continuo | Simple y efectivo |
| **Trunk-Based** | Todo en main con feature flags | Riesgoso sin pruebas automatizadas |

**Elección: GitHub Flow adaptado** — porque:
- El equipo es pequeño (1-3 personas)
- Las entregas siguen un ritmo MVP incremental
- No se necesitan ramas release complejas
- Permite iteraciones rápidas entre módulos

**Flujo adoptado:**
```
feature/* → develop → main
```
- `feature/*` — desarrollo de cada módulo del MVP
- `develop` — integración y pruebas antes de producción  
- `main` — versión estable y desplegable del proyecto

##  Milestones del proyecto

| Milestone | Descripción | Fecha límite |
|-----------|-------------|--------------|
| MVP-1 | Catálogo digital | 2026-09-01 |
| MVP-2 | Carrito de compras | 2026-09-04 |
| MVP-3 | Integración WhatsApp | 2026-09-08 |
| MVP-4 | Panel de administración | 2026-09-11 |