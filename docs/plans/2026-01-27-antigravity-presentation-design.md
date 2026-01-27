# Google Antigravity: tips & tricks — Presentation Design

## Overview

A 14-slide PPTX presentation in Mexican Spanish (es-MX) for a 30-minute talk about Google Antigravity IDE. Target audience: technical, ranging from students to senior engineers.

**Official Title**: "Google Antigravity: tips & tricks"  
**Language**: es-MX (except title)  
**Duration**: 30 minutes  
**Slide Count**: 14

## Visual Design

### Color Palette (Projector/TV-friendly, easy on eyes)

- **Primary Background**: #FFFFFF (white)
- **Secondary Background**: #F8F9FA (soft gray for variety)
- **Primary Text**: #202124 (Google dark gray)
- **Secondary Text**: #5F6368 (medium gray for body)
- **Accent Blue**: #4285F4 (Google Blue - headers, highlights)
- **Accent Green**: #34A853 (Google Green - success, tips)
- **Accent Yellow**: #FBBC04 (Google Yellow - warnings)
- **Accent Red**: #EA4335 (Google Red - limitations)

### Typography

- **Headings**: Arial, bold, 32-36pt, #202124
- **Body**: Arial, regular, 18-22pt, #5F6368
- **Bullets**: Arial, regular, 16-18pt, #5F6368
- **Code/Terminal**: Courier New, 14pt, #202124 on #F1F3F4

### Layout Principles

- 16:9 aspect ratio (720pt × 405pt)
- Consistent 30pt margins
- Content generally left-aligned (title slides centered)
- GIF/Image placeholders clearly marked with gray boxes
- Solid backgrounds only (no gradients, no AI-generated backgrounds)

---

## Slide-by-Slide Content

---

### Slide 1: Portada

**Title**: Google Antigravity: tips & tricks  
**Subtitle**: [Tu nombre] · [Fecha del evento]  
**Layout**: Centered, clean

**Presenter Notes**:

> **Imagen opcional**: Logo de Google Antigravity o ilustración tech minimalista.  
> **Ubicación**: Centro de la diapositiva, debajo del título.  
> **Prompt**: "Google Antigravity logo, minimalist tech icon, floating code elements, Google colors (blue, red, yellow, green), clean white background, professional presentation style"

---

### Slide 2: ¿Qué es Antigravity?

**Header**: ¿Qué es Google Antigravity?  
**Content**:

- IDE impulsado por IA con agentes autónomos
- Filosofía "agent-first": los agentes planean, escriben código, ejecutan comandos y prueban
- Potenciado por modelos de Google, Anthropic (Claude) y OpenAI
- Artefactos: planes, screenshots, grabaciones, diffs

**Layout**: Header top, bullets left (60%), GIF placeholder right (40%)

**Presenter Notes**:

> **GIF placeholder**: Área derecha de la diapositiva (40% ancho).  
> **Contenido sugerido para GIF**: Tour rápido del IDE Antigravity mostrando la interfaz principal.  
> **Imagen alternativa prompt**: "Modern AI-powered IDE interface screenshot, clean design, code editor with AI assistant sidebar, dark or light theme"  
> **Ubicación imagen**: Reemplazar el placeholder gris a la derecha.

---

### Slide 3: Interfaz Principal

**Header**: La Interfaz  
**Content**:

- Editor View: experiencia tradicional con IA integrada
- Manager Surface: orquestra múltiples agentes
- Los "boxes" que ves son agentes trabajando en paralelo
- Puedes promptear para ejecución paralela

**Layout**: Header top, bullets left (50%), GIF placeholder right (50%)

**Presenter Notes**:

> **GIF placeholder**: Mitad derecha de la diapositiva.  
> **Contenido sugerido para GIF**: Múltiples agentes ejecutándose en paralelo, mostrando los boxes de tareas.  
> **Imagen alternativa prompt**: "Split screen IDE showing multiple parallel task boxes, each with progress indicators, modern developer UI, asynchronous execution visualization"  
> **Ubicación imagen**: Área derecha, reemplazando placeholder.

---

### Slide 4: Workflows

**Header**: Workflows: Comandos /slash  
**Content**:

- Similares a slash commands en Claude
- Secuencias de pasos guardadas en markdown
- Se activan con `/nombre-del-workflow`
- Pueden llamar a otros workflows
- Ubicación: `.agent/workflows/`

**Layout**: Header top, bullets left (55%), GIF placeholder right (45%)

**Presenter Notes**:

> **GIF placeholder**: Lado derecho de la diapositiva.  
> **Contenido sugerido para GIF**: Escribir `/` en el editor y ver el menú de autocompletado de workflows.  
> **Imagen alternativa prompt**: "Command palette autocomplete menu showing slash commands, IDE dropdown interface, developer workflow shortcuts"  
> **Ubicación imagen**: Reemplazar placeholder derecho.

---

### Slide 5: MCP Servers

**Header**: MCP Servers  
**Content**:

- Model Context Protocol: conecta LLMs con datos externos
- Browser MCP integrado (lento pero funcional)
- Conexiones persistentes a bases de datos, GitHub, etc.
- Exponen herramientas dinámicas al agente

**Layout**: Header top, bullets left (50%), GIF placeholder right (50%)

**Presenter Notes**:

> **GIF placeholder**: Mitad derecha.  
> **Contenido sugerido para GIF**: Diagrama animado de MCP conectando el modelo con servicios externos.  
> **Imagen alternativa prompt**: "Infographic diagram showing AI model in center connected to database, GitHub, browser, and API icons with arrows, clean modern style"  
> **Ubicación imagen**: Área derecha como diagrama explicativo.

---

### Slide 6: Skills

**Header**: Skills  
**Content**:

- Paquetes de conocimiento reutilizables
- Estructura: directorio con `SKILL.md` + scripts opcionales
- Se cargan solo cuando son relevantes
- Agent Browser Skill: ¡automatiza el navegador!
- Tip: Usa ASCII para iterar diseños de UI rápidamente

**Layout**: Header top, bullets left (55%), GIF placeholder right (45%)

**Presenter Notes**:

> **GIF placeholder**: Lado derecho.  
> **Contenido sugerido para GIF**: Navegación de una carpeta de skill mostrando SKILL.md y scripts.  
> **Imagen alternativa prompt**: "Folder tree structure showing skills directory with SKILL.md file highlighted, code folder icons, clean developer file explorer view"  
> **Ubicación imagen**: Reemplazar placeholder con diagrama de estructura.

---

### Slide 7: Generación de Imágenes

**Header**: Generación de Imágenes  
**Content**:

- Selecciona un modelo Gemini con capacidad de imagen
- Simplemente pide: "genera una imagen de..."
- El agente crea assets para tu proyecto
- Útil para mockups, iconos, placeholders

**Layout**: Header top, bullets left (50%), GIF placeholder right (50%)

**Presenter Notes**:

> **GIF placeholder**: Mitad derecha.  
> **Contenido sugerido para GIF**: Prompt de texto generando una imagen en tiempo real dentro de Antigravity.  
> **Imagen alternativa prompt**: "Before and after showing text prompt on left transforming into colorful generated image on right, AI image generation visualization"  
> **Ubicación imagen**: Lado derecho mostrando el flujo de generación.

---

### Slide 8: Agent Browser

**Header**: Agent Browser Skill  
**Content**:

- Automatiza interacciones web
- Testing, llenado de formularios, screenshots
- Extracción de datos de páginas
- Preferido sobre el Browser MCP por velocidad

**Layout**: Header top, bullets left (50%), GIF placeholder right (50%)

**Presenter Notes**:

> **GIF placeholder**: Mitad derecha.  
> **Contenido sugerido para GIF**: Browser automatizado llenando un formulario o haciendo clic en elementos.  
> **Imagen alternativa prompt**: "Automated web browser with highlighted form fields being filled, robotic cursor indicator, web testing automation interface"  
> **Ubicación imagen**: Área derecha mostrando automatización.

---

### Slide 9: Modelos y Cuotas

**Header**: Modelos y Cuotas  
**Content**:

- Modelos disponibles: Gemini, Claude, GPT-4, etc.
- Cuotas varían por modelo y uso
- Tip: Monitorea tu uso en la configuración
- Los modelos más potentes consumen más cuota

**Layout**: Header top, content full width with table or visual tier graphic

**Presenter Notes**:

> **Visual sugerido**: Tabla comparativa de modelos o gráfico de tiers.  
> **Ubicación**: Centro-inferior de la diapositiva, debajo del header y bullets.  
> **Imagen alternativa prompt**: "Clean pricing tier table showing AI model options (Basic, Pro, Enterprise) with usage limits, modern SaaS pricing graphic"  
> **Ubicación imagen**: Área central como tabla visual.

---

### Slide 10: Mejores Prácticas

**Header**: Mejores Prácticas  
**Content**:

- **Modelos para planear**: Opus, Gemini 3 Pro (razonamiento profundo)
- **Modelos para implementar**: Modelos ligeros (velocidad, costo)
- Inicia con "review request" → cambia a "dangerous mode" después
- **Desactiva** historial de conversación y knowledge (evita "context rot")

**Layout**: Header top, two-column layout or icon-based list

**Presenter Notes**:

> **Visual sugerido**: Diagrama de dos columnas: "Planear" vs "Implementar" con iconos.  
> **Ubicación**: Debajo del header, ocupando el área principal.  
> **Imagen alternativa prompt**: "Two column comparison infographic: left side shows brain icon with 'Planning' label, right side shows gear icon with 'Implementation' label, clean minimal style"  
> **Ubicación imagen**: Centro de la diapositiva como gráfico comparativo.

---

### Slide 11: Limitaciones Actuales

**Header**: Limitaciones Actuales  
**Content**:

- El contexto usado **no es visible** al usuario
- Posible "compact" de contexto sin transparencia
- UX de agentes no es del todo clara (¿son los boxes agentes?)
- Área de mejora continua

**Layout**: Header top, icon-based bullet list with warning styling

**Presenter Notes**:

> **Visual sugerido**: Iconos de advertencia (⚠️) junto a cada punto.  
> **Ubicación**: Integrado con los bullets, lado izquierdo de cada item.  
> **Imagen alternativa prompt**: "Warning callout boxes with question mark icons, user interface limitation indicators, yellow caution styling"  
> **Ubicación imagen**: Como iconos decorativos junto al texto.

---

### Slide 12: Comunidad

**Header**: Únete a la Comunidad  
**Content**:

- **Reddit**: r/google_antigravity
- Comparte tips, trucos, skills
- Reporta bugs, solicita features
- Aprende de otros desarrolladores

**Layout**: Header top, bullets left, optional QR to subreddit right

**Presenter Notes**:

> **QR opcional**: Código QR directo al subreddit r/google_antigravity.  
> **Ubicación QR**: Lado derecho de la diapositiva (30% ancho).  
> **Imagen alternativa prompt**: "Reddit community preview card showing r/google_antigravity subreddit, developer community, friendly forum aesthetic"  
> **Ubicación imagen**: Área derecha como preview de la comunidad.

---

### Slide 13: Cierre

**Header**: [Sin header — solo quote]  
**Content**:

> "Now more than ever... you can just do things."

**Layout**: Quote centered, large typography, minimal design

**Presenter Notes**:

> **Visual sugerido**: Tipografía grande y centrada. El quote es el foco total.  
> **Imagen opcional prompt**: "Inspirational quote typography on clean white background, subtle geometric accents in corners, motivational tech presentation style"  
> **Ubicación imagen**: Como fondo sutil o elementos decorativos en esquinas.

---

### Slide 14: Contacto + Q&A

**Header**: ¿Preguntas?  
**Content**:

- [QR a tu sitio web] — etiqueta: "Mi Web"
- [QR a LinkedIn] — etiqueta: "LinkedIn"
- ¡Gracias por asistir!

**Layout**: Header top, two QR placeholders side by side centered, thank you message below

**Presenter Notes**:

> **QR placeholders**: Dos áreas cuadradas (150x150pt aprox) centradas horizontalmente.  
> **Ubicación QRs**: Centro de la diapositiva, con etiquetas debajo de cada uno.  
> **Acción requerida**: Reemplazar placeholders grises con QRs generados.

---

## Implementation Plan

### Phase 1: Setup ✅

- [x] Initialize git repository
- [x] Create directory structure: `slides/`, `workspace/`, `assets/`
- [x] Create design plan document

### Phase 2: Create HTML Slides

1. Create `slides/slide01-portada.html` through `slides/slide14-contacto.html`
2. Use projector-friendly colors (soft whites, good contrast)
3. Mark GIF/QR areas with `class="placeholder"` + gray background
4. Follow html2pptx requirements:
   - 720pt × 405pt body dimensions
   - Text in `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>` only
   - Web-safe fonts only (Arial, Courier New)
   - No CSS gradients
   - Solid backgrounds only

### Phase 3: Generate PPTX

1. Create `generate-pptx.js` using html2pptx library
2. Process all HTML slides in order
3. Add speaker notes with image prompts and placement instructions
4. Save to `workspace/antigravity-tips-tricks.pptx`

### Phase 4: Validate

1. Generate thumbnails: `python thumbnail.py output.pptx workspace/thumbnails`
2. Review for layout issues
3. Fix any problems and regenerate

### Phase 5: Commit & Deliver

1. Commit final PPTX and all source files
2. Provide instructions for:
   - Adding GIFs to placeholders
   - Adding QR codes
   - Optionally adding generated images per presenter notes

---

## Files to Create

```
antigravity-presentation/
├── docs/
│   └── plans/
│       └── 2026-01-27-antigravity-presentation-design.md  (this file)
├── slides/
│   ├── slide01-portada.html
│   ├── slide02-que-es.html
│   ├── slide03-interfaz.html
│   ├── slide04-workflows.html
│   ├── slide05-mcp.html
│   ├── slide06-skills.html
│   ├── slide07-imagenes.html
│   ├── slide08-agent-browser.html
│   ├── slide09-modelos.html
│   ├── slide10-practicas.html
│   ├── slide11-limitaciones.html
│   ├── slide12-comunidad.html
│   ├── slide13-cierre.html
│   └── slide14-contacto.html
├── assets/
│   └── (QRs, GIFs to be added by user)
├── workspace/
│   └── antigravity-tips-tricks.pptx (generated output)
├── generate-pptx.js
└── README.md
```

---

## Placeholder Summary

| Slide | Placeholder Type   | Position      | Size           |
| ----- | ------------------ | ------------- | -------------- |
| 2-8   | GIF                | Right side    | ~45-50% width  |
| 9     | Table/Graphic      | Center-bottom | Full width     |
| 10    | Comparison graphic | Center        | Full width     |
| 12    | QR (optional)      | Right side    | ~30% width     |
| 14    | 2x QR codes        | Center        | 150x150pt each |

---

## Ready to Implement

**Plan Status**: ✅ Ready for implementation  
**Next Step**: Create HTML slide files following this design specification
