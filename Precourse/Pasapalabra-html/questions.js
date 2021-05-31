//Array de objetos que contiene las preguntas y respuestas de cada letra. El status indica: 0-Sin responder; 1-Correcta; 2-Fallada
const questions = [
    {
        letter: "A",
        question: "Con la A. País de sudamérica del que es originario Maradona",
        answer: "Argentina",
        status: 0,
    },
    {
        letter: "A",
        question:
            "Con la A. Instrumento musical de viento, formado por un fuelle cuyos dos extremos se cierran por sendas cajas, especie de estuches, en los que juegan cierto número de llaves o teclas que permiten seleccionar los sonidos",
        answer: "Acordeón",
        status: 0,
    },
    {
        letter: "A",
        question:
            "Con la A. Edificio emblemático de Granada y nombre de una marca de cerveza",
        answer: "Alhambra",
        status: 0,
    },
    {
        letter: "B",
        question:
            "Con la B. Ciudad en la que comenzó a impartirse el mejor bootcamp del mundo",
        answer: "Barcelona",
        status: 0,
    },
    {
        letter: "B",
        question: "Con la B. Pelota grande usada en juegos",
        answer: "Balón",
        status: 0,
    },
    {
        letter: "B",
        question:
            "Con la B. Calzado, generalmente de cuero, que resguarda el pie, el tobillo y, a veces, una parte de la pierna",
        answer: "Bota",
        status: 0,
    },
    {
        letter: "C",
        question: "Con la C. Entre el número 4 y el número 6",
        answer: "Cinco",
        status: 0,
    },
    {
        letter: "C",
        question:
            "Con la C. Sólido limitado por un plano que corta a una superficie cónica cerrada",
        answer: "Cono",
        status: 0,
    },
    {
        letter: "C",
        question:
            "Con la C. Parte superior del cuerpo humano y superior o anterior de muchos animales, en la que están situados el cerebro y los principales órganos sensoriales",
        answer: "Cabeza",
        status: 0,
    },
    {
        letter: "D",
        question:
            "Con la D. Ropa especial que sirve para cambiar de aspecto en fiestas como Carnaval",
        answer: "Disfraz",
        status: 0,
    },
    {
        letter: "D",
        question:
            "Con la D. Reptil fósil, propio del Mesozoico, generalmente de gran tamaño, cabeza pequeña, cuello largo, cola robusta y larga, y extremidades posteriores más largas que las anteriores",
        answer: "Dinosaurio",
        status: 0,
    },
    {
        letter: "D",
        question:
            "Con la D. Piedra preciosa constituida por carbono cristalizado en el sistema cúbico, que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza",
        answer: "Diamante",
        status: 0,
    },
    {
        letter: "E",
        question: "Con la E. Moneda oficial de Europa",
        answer: "Euro",
        status: 0,
    },
    {
        letter: "E",
        question:
            "Con la E. Cada uno de los cuerpos celestes que brillan en la noche, excepto la Luna",
        answer: "Estrella",
        status: 0,
    },
    {
        letter: "E",
        question:
            "Con la E. Ciencia que estudia los seres vivos como habitantes de un medio, y las relaciones que mantienen entre sí y con el propio medio",
        answer: "Ecología",
        status: 0,
    },
    {
        letter: "F",
        question: "Con la F. Hueso más largo del cuerpo humano",
        answer: "Fémur",
        status: 0,
    },
    {
        letter: "F",
        question: "Con la F. Reunión de gente para celebrar algo o divertirse",
        answer: "Fiesta",
        status: 0,
    },
    {
        letter: "F",
        question:
            "Con la F. Que se precia y hace alarde de lo que no es, y en particular de valiente",
        answer: "Fanfarrón",
        status: 0,
    },
    {
        letter: "G",
        question: "Con la G. Software de control de versiones",
        answer: "Git",
        status: 0,
    },
    {
        letter: "G",
        question:
            "Con la G. En Japón, muchacha instruida para la danza, la música y la ceremonia del té, que se contrata para animar reuniones",
        answer: "Geisha",
        status: 0,
    },
    {
        letter: "G",
        question:
            "Con la G. Masa de hielo acumulada en las zonas de las cordilleras por encima del límite de las nieves perpetuas y cuya parte inferior se desliza muy lentamente, como si fuese un río de hielo",
        answer: "Glaciar",
        status: 0,
    },
    {
        letter: "H",
        question: "Con la H. Juego de cartas de la empresa Blizzard",
        answer: "Hearthstone",
        status: 0,
    },
    {
        letter: "H",
        question:
            "Con la H. Persona o animal que tiene en común con otra el mismo padre y la misma madre, o solo uno de ellos",
        answer: "Hermano",
        status: 0,
    },
    {
        letter: "H",
        question: "Con la H. Casa o domicilio",
        answer: "Hogar",
        status: 0,
    },
    {
        letter: "I",
        question:
            "Con la I. Película de ciencia ficción espacial dirigida por Cristopher Nolan",
        answer: "Interestellar",
        status: 0,
    },
    {
        letter: "I",
        question: "Con la I. Que tiene importancia",
        answer: "Importante",
        status: 0,
    },
    {
        letter: "I",
        question:
            "Con la I. Vivienda de forma semiesférica construida con bloques de hielo, en que, durante el invierno, habitan los esquimales y otros pueblos de análogas características",
        answer: "Iglú",
        status: 0,
    },
    {
        letter: "J",
        question: "Con la J. Animal grande, amarillo y marrón de largo cuello",
        answer: "Jirafa",
        status: 0,
    },
    {
        letter: "J",
        question:
            "Con la J. Arma, a manera de pica o venablo, que se usaba más comúnmente en la caza mayor, y actualmente en una modalidad deportiva",
        answer: "Javalina",
        status: 0,
    },
    {
        letter: "J",
        question: "Con la J. Pedazo desgarrado del vestido o de otra ropa",
        answer: "Jirón",
        status: 0,
    },
    {
        letter: "K",
        question: "Con la K. 1000 gramos es un...",
        answer: "Kilo",
        status: 0,
    },
    {
        letter: "K",
        question:
            "Con la K. Perteneciente o relativo a Franz Kafka, escritor checo, o a su obra",
        answer: "Kilo",
        status: 0,
    },
    {
        letter: "K",
        question:
            "Con la K. Cosmético para ennegrecer los bordes de los párpados, las pestañas o las cejas",
        answer: "Kohl",
        status: 0,
    },
    {
        letter: "L",
        question: "Con la L. Sinónimo de despacio",
        answer: "Lento",
        status: 0,
    },
    {
        letter: "L",
        question:
            "Con la L. Lugar formado artificiosamente por calles y encrucijadas, para confundir a quien se adentre en él, de modo que no pueda acertar con la salida",
        answer: "Laberinto",
        status: 0,
    },
    {
        letter: "L",
        question:
            "Con la L. Mamífero carnicero, semejante a un perro grande, pelaje de color gris oscuro, cabeza aguzada, orejas tiesas y cola larga con mucho pelo, salvaje, gregario y que ataca al ganado",
        answer: "Lobo",
        status: 0,
    },
    {
        letter: "M",
        question: "Con la M. Capital de España",
        answer: "Madrid",
        status: 0,
    },
    {
        letter: "M",
        question:
            "Con la M. Utensilio de madera, piedra o metal, a manera de vaso, que sirve para machacar en él especias, semillas...",
        answer: "Mortero",
        status: 0,
    },
    {
        letter: "M",
        question:
            "Con la M. Pastel en forma de prisma rectangular, que contiene merengue entre dos capas de hojaldre espolvoreado con azúcar",
        answer: "Milhojas",
        status: 0,
    },
    {
        letter: "N",
        question: "Con la N. Nombre de un color y a la vez de una fruta",
        answer: "Naranja",
        status: 0,
    },
    {
        letter: "N",
        question:
            "Con la N. En el mundo cristiano, festividad anual en la que se conmemora el nacimiento de Jesucristo",
        answer: "Navidad",
        status: 0,
    },
    {
        letter: "N",
        question:
            "Con la N. Premio otorgado anualmente por la fundación sueca Alfred Nobel como reconocimiento de méritos excepcionales en diversas actividades",
        answer: "Nobel",
        status: 0,
    },
    {
        letter: "Ñ",
        question: "Con la Ñ. Nombre de un color y a la vez de una fruta",
        answer: "Naranja",
        status: 0,
    },
    {
        letter: "Ñ",
        question:
            "Con la Ñ. En el mundo cristiano, festividad anual en la que se conmemora el nacimiento de Jesucristo",
        answer: "Navidad",
        status: 0,
    },
    {
        letter: "Ñ",
        question:
            "Con la Ñ. Premio otorgado anualmente por la fundación sueca Alfred Nobel como reconocimiento de méritos excepcionales en diversas actividades",
        answer: "Nobel",
        status: 0,
    },
    {
        letter: "O",
        question: "Con la O. Objeto Volador No Identificado",
        answer: "OVNI",
        status: 0,
    },
    {
        letter: "O",
        question: "Con la O.  Cumplir la voluntad de quien manda",
        answer: "Obedecer",
        status: 0,
    },
    {
        letter: "O",
        question:
            "Con la O. Onda de gran amplitud que se forma en la superficie de las aguas",
        answer: "Ola",
        status: 0,
    },
    {
        letter: "P",
        question: "Con la P. Juego al que estás jugando ahora mismo",
        answer: "Pasapalabra",
        status: 0,
    },
    {
        letter: "P",
        question:
            "Con la P. Conjunto de personas que habitan en un determinado lugar",
        answer: "Población",
        status: 0,
    },
    {
        letter: "P",
        question: "Con la P. Particular y personal de cada individuo",
        answer: "Privado",
        status: 0,
    },
    {
        letter: "Q",
        question:
            "Con la Q. Producto lácteo obtenido por maduración de la cuajada de la leche",
        answer: "Queso",
        status: 0,
    },
    {
        letter: "Q",
        question:
            "Con la Q. Vehículo todoterreno de cuatro ruedas similar a una motocicleta",
        answer: "Quad",
        status: 0,
    },
    {
        letter: "Q",
        question:
            "Con la Q. Escritor español del siglo de Oro autor de poemas como 'A una nariz'",
        answer: "Quevedo",
        status: 0,
    },
    {
        letter: "R",
        question: "Con la R. Framework de Javascript",
        answer: "React",
        status: 0,
    },
    {
        letter: "R",
        question: "Con la R. Sinónimo de extraño",
        answer: "Raro",
        status: 0,
    },
    {
        letter: "R",
        question:
            "Con la R. Máquina o ingenio electrónico programable que es capaz de manipular objetos y realizar diversas operaciones",
        answer: "Robot",
        status: 0,
    },
    {
        letter: "S",
        question:
            "Con la S. Estrella luminosa, centro del sistema planetario en que está situada la Tierra",
        answer: "Sol",
        status: 0,
    },
    {
        letter: "S",
        question:
            "Con la S. Llanura muy extensa, con escasa vegetación arbórea y abundantes plantas herbáceas, propia de zonas tropicales y subtropicales",
        answer: "Sabana",
        status: 0,
    },
    {
        letter: "S",
        question: "Con la S. Natural de Siberia, región de Asia",
        answer: "Siberiano",
        status: 0,
    },
    {
        letter: "T",
        question:
            "Con la T. Película de animación de Pixar protagonizada por Sheriff Woody y Buzz Lightyear",
        answer: "Toy Story",
        status: 0,
    },
    {
        letter: "T",
        question:
            "Con la T. Infracción maliciosa de las reglas de un juego o de una competición",
        answer: "Trampa",
        status: 0,
    },
    {
        letter: "T",
        question:
            "Con la T. Edificio o sitio destinado a la representación de obras dramáticas o a otros espectáculos públicos propios de la escena",
        answer: "Teatro",
        status: 0,
    },
    {
        letter: "U",
        question: "Con la U. Sinónimo de cosmos",
        answer: "Universo",
        status: 0,
    },
    {
        letter: "U",
        question:
            "Con la U.Objeto fabricado que se destina a un uso manual y doméstico",
        answer: "Utensilio",
        status: 0,
    },
    {
        letter: "U",
        question:
            "Con la U. Baya o grano más o menos redondo y jugoso, fruto de la vid, que forma racimos",
        answer: "Uva",
        status: 0,
    },
    {
        letter: "V",
        question:
            "Con la V. Heroína del universo DC cuyo nombre real es Diana de Themyscira",
        answer: "WonderWoman",
        status: 0,
    },
    {
        letter: "V",
        question: "Con la V. Marca de coche alemana",
        answer: "Wolkswagen",
        status: 0,
    },
    {
        letter: "V",
        question: "Con la W. Red informática",
        answer: "Web",
        status: 0,
    },
    {
        letter: "W",
        question:
            "Con la W. Heroína del universo DC cuyo nombre real es Diana de Themyscira",
        answer: "WonderWoman",
        status: 0,
    },
    {
        letter: "W",
        question: "Con la W. Marca de coche alemana",
        answer: "Wolkswagen",
        status: 0,
    },
    {
        letter: "W",
        question: "Con la W. Red informática",
        answer: "Web",
        status: 0,
    },
    {
        letter: "X",
        question:
            "Contiene la X. Instrumento musical de viento, de metal, con boquilla de madera, caña y varias llaves, que es de invención moderna y muy usado, principalmente en las bandas militares y orquestas de jazz",
        answer: "Saxofón",
        status: 0,
    },
    {
        letter: "X",
        question:
            "Con la X.  Instrumento musical de percusión formado por láminas generalmente de madera, ordenadas horizontalmente según su tamaño y sonido, que se hacen sonar golpeándolas con dos baquetas",
        answer: "Saxofón",
        status: 0,
    },
    {
        letter: "X",
        question:
            "Contiene la X. Motivo o pretexto que se invoca para eludir una obligación o disculpar una omisión",
        answer: "Excusa",
        status: 0,
    },
    {
        letter: "Y",
        question: "Con la Y. Hembra del caballo",
        answer: "Yegua",
        status: 0,
    },
    {
        letter: "Y",
        question:
            "Con la Y. Chispa eléctrica de gran intensidad producida por descarga entre dos nubes o entre una nube y la tierra",
        answer: "Rayo",
        status: 0,
    },
    {
        letter: "Y",
        question:
            "Contiene la Y. Aguardiente, sobre todo coñac, elaborado fuera de Francia",
        answer: "Brandy",
        status: 0,
    },
    {
        letter: "Z",
        question:
            "Con la Z. Película de comedia dirigida por Ruben Fleischer ambientada en un apocalipsis zombie",
        answer: "Zombieland",
        status: 0,
    },
    {
        letter: "Z",
        question:
            "Con la Z. Línea que en su desarrollo forma ángulos alternativos, entrantes y salientes",
        answer: "Zigzag",
        status: 0,
    },
    {
        letter: "Z",
        question:
            "Con la Z. Lugar en que se conservan, cuidan y a veces se crían diversas especies animales para que sean contempladas por el público y para su estudio.",
        answer: "Zoo",
        status: 0,
    },
];
