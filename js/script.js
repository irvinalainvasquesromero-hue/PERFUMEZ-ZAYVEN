
const perfumes = [

    // COLECCIÓN DAMA

    {
        nombre: "J'oVial",
        marca: "J'adore Dior (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Elegancia floral con destellos dorados y femeninos.",
        imagen: "./img/1.jpeg"
    },
    {
        nombre: "Cloud",
        marca: "Ariana Grande (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Notas dulces de lavanda, coco y praliné envolvente.",
        imagen: "./img/2.jpeg"
    },
    {
        nombre: "Hér Pour Femme",
        marca: "Burberry Her (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Un festín de frutos rojos con un fondo amaderado moderno.",
        imagen: "./img/3.jpeg"
    },
    {
        nombre: "Must Be Pink Bear",
        marca: "Moschino Toy 2 Bubble Gum (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Divertido, dulce y vibrante con matices frutales.",
        imagen: "./img/4.jpeg"
    },
    {
        nombre: "Legend For Her",
        marca: "Montblanc Legend Pour Femme (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Sofisticada mezcla de azahar, jazmín y maderas blancas.",
        imagen: "./img/5.jpeg"
    },
    {
        nombre: "Flower Bloom Pink",
        marca: "Gucci Bloom (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Ramo floral fresco e intenso de nardos y jazmín.",
        imagen: "./img/6.jpeg"
    },
    {
        nombre: "Love U",
        marca: "Ralph Lauren Romance (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Fragancia romántica con rosas, lirios y un toque cálido.",
        imagen: "./img/7.jpeg"
    },
    {
        nombre: "Moon Girl",
        marca: "Ariana Grande Moonlight (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Aroma hipnótico con grosella negra, malvavisco y peonía.",
        imagen: "./img/8.jpeg",
        agotado: true
    },
    {
        nombre: "Princess",
        marca: "Carolina Herrera Good Girl (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Sensual combinación de haba tonka, cacao y jazmín.",
        imagen: "./img/9.jpeg"
    },
    {
        nombre: "Holy Ween",
        marca: "Halloween Perfumes (Inspiración)",
        categoria: "mujer",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Misterioso aroma floral violeta con matices marinos.",
        imagen: "./img/10.jpeg"
    },

    // COLECCIÓN CABALLERO

    {
        nombre: "Hero",
        marca: "Burberry Hero (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Sutil mezcla de bergamota y trío de maderas de cedro.",
        imagen: "./img/11.jpg"
    },
    {
        nombre: "Eros Gold",
        marca: "Versace Eros (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Menta fresca, manzana verde y haba tonka envolvente.",
        imagen: "./img/12.jpg"
    },
    {
        nombre: "Forever",
        marca: "Dolce & Gabbana Light Blue Forever (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Frescura cítrica e intensa con toronja y notas marinas.",
        imagen: "./img/13.jpg"
    },
    {
        nombre: "Prime Number 1",
        marca: "Paco Rabanne 1 Million Elixir (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Manzana silvestre, rosa de damasco y vainilla intensa.",
        imagen: "./img/14.jpg"
    },
    {
        nombre: "Eros Flame",
        marca: "Versace Eros Flame (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Cítricos especiados, pimienta negra y maderas cálidas.",
        imagen: "./img/15.jpg"
    },
    {
        nombre: "OK Cool",
        marca: "Calvin Klein CK One / Eternity (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Fragancia limpia, fresca y ligera con notas verdes.",
        imagen: "./img/16.jpg"
    },
    {
        nombre: "Yes Great Man",
        marca: "Yves Saint Laurent Y (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Fresco, amaderado y vibrante con matices de bergamota.",
        imagen: "./img/17.jpg"
    },
    {
        nombre: "Robot",
        marca: "Paco Rabanne Phantom (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Aroma futurista con notas de lavanda, limón y vainilla.",
        imagen: "./img/18.jpg"
    },
    {
        nombre: "1 Lucky",
        marca: "Paco Rabanne 1 Million Lucky (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "100 ML",
        descripcion: "Avellana, ciruela y maderas ambaradas para un estilo audaz.",
        imagen: "./img/19.jpg"
    },
    {
        nombre: "Savage Extrait",
        marca: "Dior Sauvage Elixir (Inspiración)",
        categoria: "hombre",
        precio: "$180",
        tamano: "110 ML",
        descripcion: "Intenso y especiado con canela, nuez moscada y maderas nobles.",
        imagen: "./img/20.jpg"
    }
];


// CONTENEDOR DE PRODUCTOS

const contenedor = document.getElementById("products");


// MOSTRAR PERFUMES

function mostrarPerfumes(lista) {

    if (!contenedor) {
        console.error("No se encontró el elemento con id products.");
        return;
    }

    contenedor.innerHTML = lista.map((perfume, indice) => `

        <article class="product ${perfume.agotado ? 'agotado' : ''}">

            <div class="product-image">

                <img
                    src="${perfume.imagen}"
                    alt="Fotografía de ${perfume.nombre}"
                    loading="${indice < 4 ? "eager" : "lazy"}"
                    onerror="this.onerror=null; this.src='https://placehold.co/400x400/eeeeee/333333?text=Imagen+no+disponible';"
                >

                ${perfume.agotado ? `
                    <div class="etiqueta-agotado">
                        AGOTADO
                    </div>
                ` : ""}

            </div>

            <div class="product-info">

                <div class="product-brand">
                    ${perfume.marca}
                </div>

                <h3>${perfume.nombre}</h3>

                <p class="product-description">
                    ${perfume.descripcion}
                </p>

                <div class="product-divider"></div>

                <div class="product-price">
                    ${perfume.precio} MXN
                </div>

                <div class="product-size">
                    ${perfume.tamano}
                </div>

                ${perfume.agotado ? `
                    <p class="mensaje-agotado">
                        Actualmente sin existencias
                    </p>
                ` : ""}

            </div>

        </article>

    `).join("");
}


// FILTRAR POR CATEGORÍA

function filtrar(categoria) {

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    const btnActivo = document.getElementById(`btn-${categoria}`);

    if (btnActivo) {
        btnActivo.classList.add("active");
    }

    if (categoria === "todos") {

        mostrarPerfumes(perfumes);

    } else {

        const filtrados = perfumes.filter(perfume =>
            perfume.categoria === categoria
        );

        mostrarPerfumes(filtrados);

    }
}


// MOSTRAR TODOS LOS PERFUMES AL INICIAR

mostrarPerfumes(perfumes);
