
/* ==========================================
   SAZÓN ARTESANA
   TRADUCCIÓN COMPLETA ESPAÑOL / INGLÉS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("cambiarIdioma");
    const etiqueta = document.getElementById("textoIdioma");

    if (!boton || !etiqueta) {
        console.error("No se encontró el botón de idioma.");
        return;
    }

    const traducciones = {
        // Navegación
        "Inicio": "Home",
        "Nosotros": "About Us",
        "Menú": "Menu",
        "Nuestra marca": "Our Brand",
        "Investigación": "Research",
        "Hosting y dominios": "Hosting and Domains",
        "15 herramientas de Google": "15 Google Tools",
        "Autoevaluación": "Self-Assessment",
        "Abrir menú": "Open menu",

        // Marca y portada
        "SAZÓN ARTESANA": "ARTISAN FLAVOR",
        "SABOR CON TRADICIÓN": "FLAVOR WITH TRADITION",
        "COCINA CON HISTORIA": "COOKING WITH HISTORY",
        "El sabor de nuestras raíces,": "The flavor of our roots,",
        "hecho con amor.": "made with love.",
        "Descubrir el menú": "Explore the Menu",
        "Conócenos": "Get to Know Us",

        // Información rápida
        "Ingredientes frescos": "Fresh Ingredients",
        "Calidad en cada preparación": "Quality in Every Dish",
        "Recetas tradicionales": "Traditional Recipes",
        "El cariño de la cocina casera": "The Care of Home Cooking",
        "Hecho para compartir": "Made to Share",
        "Momentos alrededor de la mesa": "Moments Around the Table",

        // Nosotros
        "QUIÉNES SOMOS": "WHO WE ARE",
        "Una mesa llena de": "A table full of",
        "tradición.": "tradition.",
        "Ver nuestros platos": "See Our Dishes",

        // Galería
        "DE NUESTRA COCINA": "FROM OUR KITCHEN",
        "Sabores que": "Flavors That",
        "enamoran.": "Delight.",
        "Frescura en cada plato": "Freshness in Every Dish",
        "Ingredientes seleccionados para compartir buenos momentos.":
            "Selected ingredients for sharing wonderful moments.",
        "El cariño de lo artesanal": "The Care of Artisan Cooking",
        "Preparaciones inspiradas en el sabor de casa.":
            "Dishes inspired by the taste of home.",
        "Color, sabor y tradición": "Color, Flavor and Tradition",
        "Una experiencia para disfrutar con todos los sentidos.":
            "An experience to enjoy with all your senses.",
        "Anterior": "Previous",
        "Siguiente": "Next",

        // Menú de comida
        "NUESTRO MENÚ": "OUR MENU",
        "Preparado con": "Prepared with",
        "dedicación.": "dedication.",
        "Una muestra de los sabores que nos inspiran.":
            "A taste of the flavors that inspire us.",
        "FRESCO Y NATURAL": "FRESH AND NATURAL",
        "Ensalada de la casa": "House Salad",
        "Una combinación de vegetales frescos con aderezo especial.":
            "A combination of fresh vegetables with special dressing.",
        "SABOR CASERO": "HOMEMADE FLAVOR",
        "Sopa artesanal": "Artisan Soup",
        "Una preparación reconfortante inspirada en las recetas familiares.":
            "A comforting dish inspired by family recipes.",
        "ESPECIAL DE LA CASA": "HOUSE SPECIAL",
        "Plato de temporada": "Seasonal Dish",
        "Una propuesta colorida elaborada con productos de temporada.":
            "A colorful dish made with seasonal ingredients.",

        // Identidad de marca
        "IDENTIDAD VISUAL": "VISUAL IDENTITY",
        "Una marca con esencia": "A brand with a",
        "natural.": "natural essence.",
        "Paleta de colores": "Color Palette",
        "Verde bosque": "Forest Green",
        "Crema": "Cream",
        "Dorado": "Gold",

        // Investigación web
        "APRENDE CON EL PROYECTO": "LEARN WITH THE PROJECT",
        "Tecnologías de": "Web Development",
        "desarrollo web.": "Technologies.",
        "Conceptos utilizados para crear sitios interactivos.":
            "Concepts used to create interactive websites.",
        "Lenguaje que permite agregar interactividad, cálculos y respuestas a las acciones del usuario.":
            "A language that adds interactivity, calculations, and responses to user actions.",
        "Biblioteca de JavaScript que simplifica la manipulación del contenido y algunos efectos.":
            "A JavaScript library that simplifies content manipulation and visual effects.",
        "Formato de texto que organiza datos en estructuras fáciles de intercambiar y procesar.":
            "A text format that organizes data into structures that are easy to exchange and process.",
        "Servicio que almacena los archivos de un sitio para que otras personas puedan visitarlo por internet.":
            "A service that stores website files so people can visit them online.",
        "Nombre fácil de recordar que permite localizar un sitio web, por ejemplo, misitio.com.":
            "An easy-to-remember name used to locate a website, such as mysite.com.",
        "Leer investigación →": "Read Research →",
        "Leer sobre hosting y dominios →": "Read About Hosting and Domains →",
        "Explorar herramientas →": "Explore Tools →",
        "Conoce herramientas de inteligencia artificial, programación, diseño, traducción y análisis multimedia.":
            "Discover tools for artificial intelligence, programming, design, translation, and multimedia analysis.",

        // Autoevaluación
        "COMPRUEBA LO APRENDIDO": "TEST YOUR KNOWLEDGE",
        "¿Cuánto sabes de": "How much do you know about",
        "desarrollo web?": "web development?",
        "Repasa los conceptos estudiados y comprueba tus conocimientos.":
            "Review the concepts you studied and test your knowledge.",
        "Iniciar cuestionario": "Start Quiz",

        // Pie de página
        "Comida con cariño, tradición en cada sabor.":
            "Food made with care, tradition in every flavor.",
        "Proyecto educativo.": "Educational Project.",

        // Botón de tema
        "Modo oscuro": "Dark Mode",
        "Modo claro": "Light Mode",
        "Activar modo oscuro": "Enable dark mode",
        "Activar modo claro": "Enable light mode",
        "Volver arriba": "Back to Top",

        // Textos adicionales
        "JavaScript": "JavaScript",
        "jQuery": "jQuery",
        "JSON": "JSON",
        "Dominios": "Domains",
        "Web Hosting": "Web Hosting",
        "Tradición": "Tradition",
        "Natural": "Natural",
        "Tradicional": "Traditional",
        "Creativo": "Creative",
        "Terracota": "Terracotta",
        "Verde oliva": "Olive Green",
        "Público objetivo": "Target Audience",
        "Identidad propia": "Unique Identity",
        "Diseño adaptable": "Responsive Design",
        "Tecnología web": "Web Technology",
        "Aprender haciendo": "Learning by Doing"
    };

    // Frases largas de la historia de la marca
    const frases = {
        "Sazón Artesana nace del gusto por la comida preparada con dedicación. Nuestra idea es compartir platos inspirados en la cocina casera, con ingredientes seleccionados y una presentación que invita a disfrutar cada bocado.":
            "Sazón Artesana was born from a love of food prepared with dedication. Our idea is to share dishes inspired by home cooking, using selected ingredients and presentations that invite you to enjoy every bite.",

        "Queremos que cada visita se sienta como llegar a casa: sabores familiares, atención amable y comida hecha con cuidado.":
            "We want every visit to feel like coming home: familiar flavors, friendly service, and food prepared with care.",

        "Sazón Artesana representa la cocina tradicional, la frescura de los ingredientes y el valor de compartir. El nombre une el sabor de la comida con el cuidado de las preparaciones artesanales.":
            "Sazón Artesana represents traditional cooking, fresh ingredients, and the joy of sharing. The name combines delicious food with the care of artisan preparation.",

        "El verde transmite naturaleza y confianza; el crema aporta calidez; y el dorado representa la tradición y el cuidado por los detalles.":
            "Green conveys nature and trust; cream adds warmth; and gold represents tradition and attention to detail."
    };

    // Guardar el contenido original y su traducción
    const originales = new Map();

    function prepararTraducciones() {
        const elementos = document.querySelectorAll(
            "h1, h2, h3, h4, h5, p, a, li, label, button, span, strong, small, em, code"
        );

        elementos.forEach(function (elemento) {
            if (
                elemento.closest("#cambiarIdioma") ||
                elemento.id === "textoIdioma" ||
                originales.has(elemento)
            ) {
                return;
            }

            const texto = elemento.textContent.trim();
            const traduccion = frases[texto] || traducciones[texto];

            if (traduccion) {
                originales.set(elemento, {
                    html: elemento.innerHTML,
                    ingles: traduccion
                });
            }
        });
    }

    prepararTraducciones();

    let idiomaActual = "es";

    boton.addEventListener("click", function () {
        prepararTraducciones();

        if (idiomaActual === "es") {
            originales.forEach(function (dato, elemento) {
                elemento.textContent = dato.ingles;
            });

            idiomaActual = "en";
            etiqueta.textContent = "Español";
            document.documentElement.lang = "en";

        } else {
            originales.forEach(function (dato, elemento) {
                elemento.innerHTML = dato.html;
            });

            idiomaActual = "es";
            etiqueta.textContent = "English";
            document.documentElement.lang = "es";
        }

        console.log("Idioma actual:", idiomaActual);
    });

    console.log("Sistema de idiomas de Sazón Artesana listo.");
});