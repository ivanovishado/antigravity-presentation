# Google Antigravity: tips & tricks

Presentación de 30 minutos sobre Google Antigravity IDE en español mexicano (es-MX).

## Estructura del Proyecto

```
antigravity-presentation/
├── docs/plans/           # Plan de diseño
├── slides/               # HTML slides (fuente)
├── workspace/            # Output PPTX generado
├── assets/               # QRs, GIFs (agregados por usuario)
├── generate-pptx.js      # Script de generación
└── README.md
```

## Requisitos

- Node.js 18+
- pptxgenjs (`npm install -g pptxgenjs`)
- playwright (`npm install -g playwright`)

## Generar la Presentación

```bash
node generate-pptx.js
```

El archivo se guarda en `workspace/antigravity-tips-tricks.pptx`.

## Personalización

### 1. Datos del Presentador

Edita `slides/slide01-portada.html` y reemplaza:

- `[Tu nombre]` → Tu nombre
- `[Fecha del evento]` → Fecha de la presentación

### 2. Agregar GIFs

Los slides 2-8 tienen placeholders grises para GIFs. Para agregar:

1. Abre el PPTX en PowerPoint/Keynote
2. Haz clic derecho en el placeholder gris
3. Selecciona "Cambiar imagen" o inserta media
4. Configura el GIF para loop automático

### 3. Agregar QR Codes

Slide 14 tiene placeholders para:

- **QR izquierdo**: Tu sitio web
- **QR derecho**: Tu LinkedIn

Genera los QRs y reemplaza los placeholders grises.

### 4. Notas del Presentador

Cada slide incluye notas con:

- Puntos clave a mencionar
- Prompts para generar imágenes (si deseas agregarlas)
- Ubicación exacta de dónde colocar las imágenes

## Slides

| #   | Título                 | Contenido                |
| --- | ---------------------- | ------------------------ |
| 1   | Portada                | Título y datos           |
| 2   | ¿Qué es Antigravity?   | Intro al IDE             |
| 3   | La Interfaz            | Editor + Manager Surface |
| 4   | Workflows              | Comandos /slash          |
| 5   | MCP Servers            | Model Context Protocol   |
| 6   | Skills                 | Paquetes de conocimiento |
| 7   | Generación de Imágenes | Crear assets con IA      |
| 8   | Agent Browser          | Automatización web       |
| 9   | Modelos y Cuotas       | Proveedores y límites    |
| 10  | Mejores Prácticas      | Tips de uso              |
| 11  | Limitaciones           | Áreas de mejora          |
| 12  | Comunidad              | Reddit                   |
| 13  | Cierre                 | Quote final              |
| 14  | Contacto + Q&A         | QRs y preguntas          |

## Licencia

Presentación creada para uso personal.
