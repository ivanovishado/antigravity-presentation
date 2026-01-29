# Google Antigravity: tips & tricks

Presentación de 30 minutos sobre Google Antigravity IDE en español mexicano (es-MX).

## Estructura del Proyecto

```
antigravity-presentation/
├── .agent/skills/pptx/   # PPTX skill (html2pptx)
├── docs/plans/           # Plan de diseño
├── slides/               # HTML slides (fuente)
├── workspace/            # Output PPTX generado
├── assets/               # QRs, GIFs
├── generate-pptx.js      # Script de generación
└── README.md
```

## Requisitos

- Node.js 18+

## Generar la Presentación

```powershell
# Instalar dependencias (primera vez)
npm install

# Generar PPTX (PowerShell)
$env:NODE_PATH = "$PWD\node_modules"; node generate-pptx.js
```

> **Nota**: El `NODE_PATH` es necesario para que html2pptx encuentre las dependencias (playwright, sharp).

El archivo se guarda en `workspace/antigravity-tips-tricks.pptx`.

## Personalización

### 1. Agregar GIFs

Los slides 2-8 tienen placeholders grises para GIFs. Para agregar:

1. Abre el PPTX en PowerPoint/Keynote
2. Haz clic derecho en el placeholder gris
3. Selecciona "Cambiar imagen" o inserta media
4. Configura el GIF para loop automático

### 2. Notas del Presentador

Cada slide incluye notas con:

- Puntos clave a mencionar
- Prompts para generar imágenes (si deseas agregarlas)
- Ubicación exacta de dónde colocar las imágenes

## Slides

| #   | Título                 | Contenido                       |
| --- | ---------------------- | ------------------------------- |
| 1   | Portada                | Título y datos                  |
| 2   | Ivan Galaviz           | Introducción del presentador    |
| 3   | ¿Qué es Antigravity?   | Intro al IDE                    |
| 4   | La Interfaz            | Editor + Manager Surface        |
| 5   | Workflows              | Comandos /slash                 |
| 6   | MCP Servers            | Model Context Protocol          |
| 7   | Skills                 | Paquetes de conocimiento        |
| 8   | Generación de Imágenes | Crear assets con IA             |
| 9   | Agent Browser          | Automatización web              |
| 10  | Modelos y Cuotas       | Proveedores y límites           |
| 11  | Mejores Prácticas      | Tips de uso                     |
| 12  | Limitaciones           | Áreas de mejora                 |
| 13  | Comunidad              | Reddit                          |
| 14  | Cierre                 | Quote final                     |
| 15  | Contacto + Q&A         | QRs (Website, GitHub, LinkedIn) |

## Assets

Los QR codes están en `assets/`:

- `website-qr.png`
- `github-qr.png`
- `linkedin-qr.png`

## Troubleshooting

**Error: Cannot find module 'playwright'**

```powershell
$env:NODE_PATH = "$PWD\node_modules"; node generate-pptx.js
```

**Error: Text ends too close to edge**
Reduce el font-size o aumenta el padding en el archivo HTML correspondiente.

**Error: Backgrounds on text elements**
Los backgrounds (`background:`, `border:`) solo funcionan en elementos `<div>`, no en `<h1>`, `<p>`, `<ul>`.
