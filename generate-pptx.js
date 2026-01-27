const pptxgen = require("pptxgenjs");
const path = require("path");

// Import html2pptx from the PPTX skill
const html2pptx = require(
  path.join(
    process.env.USERPROFILE,
    ".gemini",
    "antigravity",
    "global_skills",
    "pptx",
    "scripts",
    "html2pptx.js",
  ),
);

// Presenter notes for each slide (with image prompts and placement instructions)
const presenterNotes = {
  1: `PORTADA

Bienvenida y presentación personal.

---
IMAGEN OPCIONAL:
• Prompt: "Google Antigravity logo, minimalist tech icon, floating code elements, Google colors (blue, red, yellow, green), clean white background, professional presentation style"
• Ubicación: Centro de la diapositiva, debajo del título.`,

  2: `¿QUÉ ES GOOGLE ANTIGRAVITY?

Puntos clave:
- Es un IDE, no solo un chat con IA
- Los agentes son autónomos: planean, codean, ejecutan, prueban
- Soporta múltiples proveedores de modelos

---
GIF SUGERIDO:
• Contenido: Tour rápido del IDE Antigravity mostrando la interfaz principal
• Ubicación: Área gris a la derecha (reemplazar placeholder)

IMAGEN ALTERNATIVA:
• Prompt: "Modern AI-powered IDE interface screenshot, clean design, code editor with AI assistant sidebar"
• Ubicación: Reemplazar el placeholder gris a la derecha`,

  3: `LA INTERFAZ

Puntos clave:
- Editor View para trabajo hands-on
- Manager Surface para orquestar múltiples agentes
- Los boxes representan tareas/agentes ejecutándose

Demostrar: Cómo se ven los agentes trabajando en paralelo

---
GIF SUGERIDO:
• Contenido: Múltiples agentes ejecutándose en paralelo, mostrando los boxes de tareas
• Ubicación: Mitad derecha de la diapositiva

IMAGEN ALTERNATIVA:
• Prompt: "Split screen IDE showing multiple parallel task boxes, each with progress indicators, modern developer UI"
• Ubicación: Área derecha, reemplazando placeholder`,

  4: `WORKFLOWS: COMANDOS /SLASH

Puntos clave:
- Similar a slash commands en Claude
- Son archivos markdown que definen pasos
- Se pueden encadenar workflows

Demostrar: Escribir "/" y ver el autocompletado

---
GIF SUGERIDO:
• Contenido: Escribir / en el editor y ver el menú de autocompletado de workflows
• Ubicación: Lado derecho de la diapositiva

IMAGEN ALTERNATIVA:
• Prompt: "Command palette autocomplete menu showing slash commands, IDE dropdown interface"
• Ubicación: Reemplazar placeholder derecho`,

  5: `MCP SERVERS

Puntos clave:
- MCP = Model Context Protocol
- Permite conectar el modelo con servicios externos
- Browser MCP viene integrado (útil pero lento)

Mencionar: Preferencia personal por agent-browser skill

---
GIF SUGERIDO:
• Contenido: Diagrama animado de MCP conectando el modelo con servicios externos
• Ubicación: Mitad derecha

IMAGEN ALTERNATIVA:
• Prompt: "Infographic diagram showing AI model in center connected to database, GitHub, browser, and API icons"
• Ubicación: Área derecha como diagrama explicativo`,

  6: `SKILLS

Puntos clave:
- Paquetes de conocimiento reutilizables
- Se cargan solo cuando son relevantes (ahorra contexto)
- Agent Browser Skill es muy útil

Tip: Mencionar que ASCII es genial para iterar UI rápido

---
GIF SUGERIDO:
• Contenido: Navegación de una carpeta de skill mostrando SKILL.md y scripts
• Ubicación: Lado derecho

IMAGEN ALTERNATIVA:
• Prompt: "Folder tree structure showing skills directory with SKILL.md file highlighted"
• Ubicación: Reemplazar placeholder con diagrama de estructura`,

  7: `GENERACIÓN DE IMÁGENES

Puntos clave:
- Necesitas seleccionar un modelo Gemini con capacidad de imagen
- Solo pide lo que quieres generar
- Útil para mockups rápidos

Demostrar: Generar una imagen simple en vivo (si hay tiempo)

---
GIF SUGERIDO:
• Contenido: Prompt de texto generando una imagen en tiempo real
• Ubicación: Mitad derecha

IMAGEN ALTERNATIVA:
• Prompt: "Before and after showing text prompt transforming into colorful generated image"
• Ubicación: Lado derecho mostrando el flujo de generación`,

  8: `AGENT BROWSER SKILL

Puntos clave:
- Automatiza el navegador
- Útil para testing, scraping, formularios
- Más rápido que Browser MCP

Demostrar: Un ejemplo de automatización web

---
GIF SUGERIDO:
• Contenido: Browser automatizado llenando un formulario o haciendo clic
• Ubicación: Mitad derecha

IMAGEN ALTERNATIVA:
• Prompt: "Automated web browser with highlighted form fields being filled, robotic cursor"
• Ubicación: Área derecha mostrando automatización`,

  9: `MODELOS Y CUOTAS

Puntos clave:
- Hay múltiples proveedores disponibles
- Cada modelo tiene su cuota
- Modelos potentes = más cuota

Tip: Mostrar dónde ver el uso de cuota en settings

---
VISUAL SUGERIDO:
• Crear una tabla comparativa de modelos o captura de la configuración
• Ubicación: Centro-inferior de la diapositiva`,

  10: `MEJORES PRÁCTICAS

Puntos clave:
1. Modelos para planear (Opus, Gemini 3 Pro) vs implementar (ligeros)
2. Iniciar con review request, luego dangerous mode
3. Desactivar historial para evitar context rot

Este slide tiene mucha información - hablar despacio

---
VISUAL SUGERIDO:
• El slide ya tiene diseño de dos columnas
• Si quieres agregar iconos, colocarlos junto a los headers de cada columna`,

  11: `LIMITACIONES ACTUALES

Puntos clave:
- Ser honesto sobre las limitaciones
- El contexto no es transparente
- La UX de agentes puede confundir

Mensaje: El producto sigue mejorando

---
VISUAL SUGERIDO:
• El slide ya tiene iconos de advertencia integrados
• No requiere imágenes adicionales`,

  12: `ÚNETE A LA COMUNIDAD

Mencionar:
- Reddit es el lugar principal para la comunidad
- Compartir experiencias ayuda a todos
- Reportar bugs ayuda al producto

---
QR OPCIONAL:
• Generar QR para: https://reddit.com/r/google_antigravity
• Ubicación: Lado derecho de la diapositiva (reemplazar placeholder gris)`,

  13: `CIERRE

Este es el momento de pausa dramática.

Leer la cita: "Now more than ever... you can just do things."

Dejar que la audiencia absorba el mensaje antes de continuar.

---
VISUAL:
• El slide está diseñado para máximo impacto
• No agregar imágenes - la tipografía es el foco`,

  14: `CONTACTO + Q&A

Agregar tus QR codes:
1. QR izquierdo → Tu sitio web
2. QR derecho → Tu LinkedIn

Abrir para preguntas de la audiencia.

---
ACCIÓN REQUERIDA:
• Reemplazar los placeholders grises con tus QR codes generados
• Dimensiones recomendadas: 140x140pt cada uno`,
};

async function generatePresentation() {
  const pptx = new pptxgen();

  // Presentation metadata
  pptx.layout = "LAYOUT_16x9";
  pptx.title = "Google Antigravity: tips & tricks";
  pptx.author = "[Tu nombre]";
  pptx.subject = "Presentación sobre Google Antigravity IDE";

  // Slide files in order
  const slideFiles = [
    "slide01-portada.html",
    "slide02-que-es.html",
    "slide03-interfaz.html",
    "slide04-workflows.html",
    "slide05-mcp.html",
    "slide06-skills.html",
    "slide07-imagenes.html",
    "slide08-agent-browser.html",
    "slide09-modelos.html",
    "slide10-practicas.html",
    "slide11-limitaciones.html",
    "slide12-comunidad.html",
    "slide13-cierre.html",
    "slide14-contacto.html",
  ];

  const slidesDir = path.join(__dirname, "slides");

  for (let i = 0; i < slideFiles.length; i++) {
    const htmlFile = path.join(slidesDir, slideFiles[i]);
    console.log(`Processing slide ${i + 1}: ${slideFiles[i]}`);

    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);

      // Add presenter notes
      if (presenterNotes[i + 1]) {
        slide.addNotes(presenterNotes[i + 1]);
      }

      // Log placeholders for reference
      if (placeholders.length > 0) {
        console.log(
          `  Placeholders found: ${placeholders.map((p) => p.id).join(", ")}`,
        );
      }
    } catch (err) {
      console.error(`Error processing ${slideFiles[i]}:`, err.message);
      throw err;
    }
  }

  // Save the presentation
  const outputPath = path.join(
    __dirname,
    "workspace",
    "antigravity-tips-tricks.pptx",
  );
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nPresentation saved to: ${outputPath}`);
  console.log("Total slides:", slideFiles.length);
}

generatePresentation().catch((err) => {
  console.error("Failed to generate presentation:", err);
  process.exit(1);
});
