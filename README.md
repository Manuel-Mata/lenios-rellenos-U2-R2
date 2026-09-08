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

## Descripción del proyecto

Aplicación web para la digitalización del proceso de venta del negocio familiar **Leños Rellenos**, desarrollada como parte del curso de *Desarrollo Web Integral* — Instrumento de Recuperación 2, Caso 1.

El objetivo es permitir al negocio mostrar su catálogo de productos, recibir pedidos mediante un carrito de compras, canalizar la confirmación de compra por WhatsApp, y dar al dueño del negocio un panel de control simple para gestionar productos, stock y pedidos — sin complicar su forma actual de trabajar.

### Módulos del sistema
-  **Catálogo digital** — visualización de productos por categoría
-  **Carrito de compras** — gestión de cantidades y resumen de pedido
-  **Integración WhatsApp** — confirmación de pedido vía mensaje automático
-  **Panel de administración** — control de stock, productos y pedidos con roles

---

## Arquitectura del repositorio

El repositorio sigue una arquitectura de 3 capas desacopladas:

```
lenios-rellenos-U2-R2/
├── .github/
│   ├── workflows/
│   │   └── ci.yml        # GitHub Actions - ESLint automático en PRs
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

## Fundamento Teórico

### ¿Por qué el versionamiento es indispensable en Leños Rellenos?

El desarrollo de esta aplicación involucra cambios simultáneos en múltiples frentes: el catálogo visual de productos, la lógica del carrito de compras, la integración con WhatsApp, y el panel de administración — el cual maneja datos sensibles de clientes y pedidos (nombres, direcciones de entrega, historial de compra). Sin un sistema de control de versiones, sería imposible rastrear qué cambio afectó qué módulo, revertir errores en producción sin perder trabajo válido, o permitir que distintas partes del sistema evolucionen en paralelo sin sobrescribirse entre sí.

---

### Git vs SVN — Justificación para el caso

Se eligió **Git** sobre SVN por tres razones directamente ligadas a este proyecto:

1. **Trabajo distribuido y sin dependencia de un servidor central** — al ser un proyecto pequeño con posibilidad de trabajarse en distintos horarios (negocio familiar, disponibilidad limitada), Git permite hacer commits localmente sin necesidad de conexión constante a un repositorio central, algo que SVN no ofrece.

2. **Ramas ligeras** — el ritmo de entregas de este proyecto es incremental (catálogo → carrito → WhatsApp → panel admin), lo cual encaja naturalmente con la creación y descarte rápido de ramas de Git. En SVN, las ramas son costosas de crear y fusionar.

3. **Ecosistema y curva de adopción** — dado que este es un negocio familiar con recursos limitados, Git tiene una comunidad, documentación y herramientas gratuitas (como GitHub) muchísimo más accesibles que las alternativas de SVN.

| Criterio | Git | SVN |
|----------|-----|-----|
| Modelo | Distribuido | Centralizado |
| Trabajo offline | ✅ Sí | ❌ No |
| Ramas | Ligeras y rápidas | Costosas y lentas |
| Colaboración | PRs, code review | Commits directos |
| Velocidad | Alta | Baja en repos grandes |

---

### Selección de plataforma: GitHub

Se seleccionó **GitHub** como plataforma de alojamiento del repositorio, considerando al menos los siguientes criterios del caso:

- **Negocio familiar con recursos limitados** → GitHub ofrece repositorios públicos y privados ilimitados de forma gratuita, sin costo de licenciamiento, lo cual es indispensable para un proyecto sin presupuesto de infraestructura.
- **Simplicidad y facilidad de uso** → GitHub tiene la curva de aprendizaje más baja del mercado (comparado con GitLab o Bitbucket) para un desarrollador que gestiona el proyecto de forma prácticamente individual, además de integrar en un mismo lugar Issues, Projects (tableros Kanban) y Pull Requests sin necesidad de configuración adicional.

---

### Comparativa de flujos de trabajo

| Flujo | Descripción | ¿Aplica al caso? |
|-------|-------------|-----------------|
| **Git Flow** | Ramas release, hotfix, develop, feature | Complejo para equipo pequeño |
| **GitHub Flow** | Solo main y feature branches, deploy continuo | ✅ Simple y efectivo |
| **Trunk-Based** | Todo en main con feature flags | Riesgoso sin pruebas automatizadas |

**Elección: GitHub Flow adaptado** — porque el equipo es pequeño, las entregas siguen un ritmo MVP incremental y no se necesitan ramas release complejas.

**Flujo adoptado:**
```
feature/* → develop → main
```
- `feature/*` — desarrollo de cada módulo del MVP
- `develop` — integración y pruebas antes de producción
- `main` — versión estable y desplegable del proyecto

---

## Configuración de seguridad y control de acceso

| Parámetro | Configuración | Justificación |
|-----------|--------------|---------------|
| **Autenticación** | SSH (llave ed25519) | Se usa SSH en lugar de HTTPS porque el proyecto eventualmente manejará datos sensibles de clientes a través del backend conectado a MongoDB Atlas. SSH evita introducir credenciales en cada operación de red y reduce el riesgo de exposición de contraseñas. |
| **Rotación de llaves** | Cada 90 días o inmediatamente si se sospecha compromiso | Al ser datos de clientes los que están en juego, se sigue una política de rotación periódica de llaves SSH como buena práctica de seguridad, minimizando la ventana de exposición si una llave llegara a filtrarse. |
| **Protección de main** | PR obligatorio + 1 aprobación + status checks antes de mergear | La rama `main` representa el código en producción; forzar revisión por PR evita que un cambio no probado llegue directo a producción. |
| **Protección de develop** | PR obligatorio + Block force pushes | La rama `develop` es la rama de integración; protegerla evita que cambios sin revisión rompan el trabajo del equipo. |
| **CODEOWNERS** | Ver archivo `.github/CODEOWNERS` | Define quién debe revisar y aprobar cambios según el módulo afectado (Frontend, Backend), evitando que se aprueben cambios críticos sin la revisión adecuada. |
| **GitHub Actions CI** | ESLint automático en cada PR | Cada Pull Request ejecuta ESLint automáticamente como status check, garantizando que ningún código con errores llegue a `develop` o `main`. |

---

## Estrategia de ramas

| Rama | Propósito |
|------|-----------|
| `main` | Código en producción — protegida, solo merge via PR aprobado |
| `develop` | Integración de features — protegida, requiere PR |
| `feature/*` | Desarrollo de funcionalidades específicas |

---

## Herramientas de calidad

| Herramienta | Propósito |
|-------------|-----------|
| ESLint | Detección de errores en JavaScript |
| Husky | Hooks de Git automatizados |
| lint-staged | ESLint solo en archivos modificados |
| commitlint | Forzar formato Conventional Commits |
| GitHub Actions | CI automático en cada PR |

---

## Conventional Commits

Los commits siguen el estándar Conventional Commits:

```
feat: nueva funcionalidad
fix: corrección de bug
chore: tareas de configuración
docs: cambios en documentación
refactor: refactorización de código
```

---

## Milestones del proyecto

| Milestone | Descripción | Fecha límite |
|-----------|-------------|--------------|
| MVP-1 | Catálogo digital | 2026-09-01 |
| MVP-2 | Carrito de compras | 2026-09-04 |
| MVP-3 | Integración WhatsApp | 2026-09-08 |
| MVP-4 | Panel de administración | 2026-09-11 |

---

## Licencia

MIT License © 2026 Manuel Alejandro Mata Campos