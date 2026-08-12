export const site = {
  name: "Plásticos Universal",
  tagline: "Diseñamos, desarrollamos y fabricamos en P.R.F.V.",
  whatsappNumber: "543472449069",
  email: "plasticosuni@gmail.com",
  phoneDisplay: "54 (3472) 449069",
  phoneHref: "tel:+543472449069",
  address: "Ruta Nacional N.º 9 Km 464, Leones, Córdoba (CP 2594), Argentina.",
  mapEmbed:
    "https://www.google.com/maps?q=Ruta+Nacional+9+Km+464,+Leones,+C%C3%B3rdoba,+Argentina&output=embed",
};

export const whatsappLink = `https://api.whatsapp.com/send?phone=${site.whatsappNumber}`;

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "+50", label: "Clientes satisfechos" },
  { value: "+500", label: "Productos entregados" },
  { value: "40+", label: "Años de experiencia" },
];

export const googleReviewsUrl = "https://share.google/GUogzdBuPjsksaDG8";

export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Walter Loustau",
    rating: 5,
    text: "100 puntos. Ya más de 10 clientes míos han comprado planta de desechos y nunca un problema en zona San Vicente. Buena atención y siempre cumpliendo con lo pactado.",
  },
  {
    name: "Daniel Gorosito",
    rating: 5,
    text: "Les compré una planta domiciliaria, excelente producto y atención. Recibido en tiempo y forma, funciona perfecto, una salvada para los que vivimos en las sierras sin cloacas.",
  },
];

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetails {
  description: string;
  specs?: ProductSpec[];
  gallery?: string[];
}

export interface Product {
  name: string;
  blurb: string;
  img: string;
  photo: string;
  details?: ProductDetails;
  featured?: boolean;
}

export const products: Product[] = [
  {
    name: "Planta de tratamiento",
    blurb: "Soluciones para tratamiento de efluentes industriales.",
    img: "planta",
    photo: "/uploads/productos/plantas-tratamiento/01.jpg",
    featured: true,
    details: {
      description:
        "Plantas compactas de tratamiento de efluentes cloacales e industriales, con diseño y desarrollo propios de Plásticos Universal. Brindan una solución integral al proceso de tratamiento de efluentes bajo las normas de línea verde, protegiendo el medio ambiente.",
      specs: [
        { label: "Material", value: "Resina poliéster insaturada reforzada con fibra de vidrio" },
        { label: "Fabricación", value: "Sistema de Filament Winding" },
        { label: "Resistencia térmica", value: "No se deforma con calor ni con bajas temperaturas" },
        { label: "Dimensiones disponibles", value: "30.000 / 37.000 / 40.000 / 60.000 litros" },
        {
          label: "Aplicaciones ideales",
          value: "Comunas, residencias, hoteles, centros comerciales, villas turísticas, countries, camping, cuarteles, hospitales, industrias",
        },
      ],
      gallery: [
        "/uploads/productos/plantas-tratamiento/01.jpg",
        "/uploads/productos/plantas-tratamiento/02.jpg",
        "/uploads/productos/plantas-tratamiento/03.jpg",
        "/uploads/productos/plantas-tratamiento/04.jpg",
        "/uploads/productos/plantas-tratamiento/05.jpg",
        "/uploads/productos/plantas-tratamiento/06.png",
      ],
    },
  },
  {
    name: "Separador de hidrocarburos",
    blurb: "Separadores de hidrocarburos para control ambiental.",
    img: "separadores",
    photo: "/uploads/productos/separadores-hidrocarburos/01.png",
    featured: true,
  },
  {
    name: "Tanques cilíndricos",
    blurb: "Almacenamiento de líquidos para uso industrial y agropecuario.",
    img: "cilindricos",
    photo: "/uploads/productos/cilindricos/01.jpg",
    details: {
      description:
        "Tanques cilíndricos verticales y horizontales fabricados en plásticos reforzados con fibra de vidrio (P.R.F.V.), construidos por el sistema de Filament Winding: enrollamiento de mechas de fibra de vidrio saturadas con resinas específicas según el líquido que va a contener. Se fabrican siguiendo normas técnicas (ASTM, DIN) y son aptos tanto para productos alimenticios como corrosivos, según la resina utilizada. Son completamente lisos en su interior, con terminación en gel-coat con filtro UV. Los accesorios se instalan según el pedido del cliente, lo que permite adaptarlos a cada proyecto.",
      specs: [
        { label: "Capacidad", value: "5.000 a 100.000 litros" },
        { label: "Diámetros disponibles", value: "1,5 / 1,8 / 2 / 2,5 / 3 metros" },
        { label: "Formatos", value: "Verticales y horizontales" },
      ],
      gallery: [
        "/uploads/productos/cilindricos/01.jpg",
        "/uploads/productos/cilindricos/02.jpg",
        "/uploads/productos/cilindricos/03.jpg",
        "/uploads/productos/cilindricos/04.jpg",
        "/uploads/productos/cilindricos/05.jpg",
        "/uploads/productos/cilindricos/06.jpg",
        "/uploads/productos/cilindricos/07.jpg",
      ],
    },
  },
  {
    name: "Tanques regadores",
    blurb: "Depósitos para equipos de riego, resistentes a la intemperie.",
    img: "regadores",
    photo: "/uploads/productos/regadores/01.jpg",
    details: {
      description:
        "Tanques fabricados en plástico reforzado con fibra de vidrio (P.R.F.V.), de forma elíptica, con terminación sobre matriz en gel-coat blanco. Incorporan rompeolas internos según la capacidad, y bases de apoyo para chasis. Boca de hombre de 500 mm y salidas según el pedido del cliente.",
      specs: [
        { label: "Capacidades disponibles", value: "1.500 / 2.000 / 5.000 / 6.000 / 8.000 / 10.000 litros" },
        { label: "Forma", value: "Elíptica" },
        { label: "Boca de hombre", value: "500 mm" },
      ],
      gallery: [
        "/uploads/productos/regadores/01.jpg",
        "/uploads/productos/regadores/02.jpg",
        "/uploads/productos/regadores/03.jpg",
        "/uploads/productos/regadores/04.jpg",
        "/uploads/productos/regadores/05.jpg",
        "/uploads/productos/regadores/06.jpg",
        "/uploads/productos/regadores/07.jpg",
      ],
    },
  },
  {
    name: "Acoplado tanque",
    blurb: "Unidades móviles para transporte de líquidos a campo.",
    img: "acoplado",
    photo: "/uploads/productos/acoplado-tanque/01.jpg",
    details: {
      description:
        "Tanques elípticos instalados sobre chasis de chapa plegable de acero al carbono, con espesores según diseño. Los equipos se entregan terminados y pintados, sin cubiertas. Masa y ejes de acero SAE 1010. Los accesorios se definen junto con el cliente: barandas, canastos para mangueras, tanques auxiliares para agua potable y equipos de incendio.",
      specs: [
        { label: "Capacidad", value: "5.000 a 100.000 litros" },
        { label: "Diámetros disponibles", value: "1,5 / 1,8 / 2 / 2,5 / 3 metros" },
        { label: "Chasis", value: "Chapa plegable de acero al carbono" },
        { label: "Masa y ejes", value: "Acero SAE 1010" },
      ],
      gallery: ["/uploads/productos/acoplado-tanque/01.jpg"],
    },
  },
  {
    name: "Barquillas para hidrogrúa",
    blurb: "Componentes livianos y resistentes para trabajo en altura.",
    img: "barquillas",
    photo: "/uploads/productos/barquillas/01.jpg",
    details: {
      description:
        "Barquillas para hidrogrúas fabricadas completamente en P.R.F.V. bajo normas internacionales, con refuerzos en la base. Completamente aisladas, de color blanco, con accesorios de izaje según lo requerido por el cliente. Los accesorios se pintan con pintura poliuretánica de primera calidad.",
      specs: [
        { label: "Material", value: "P.R.F.V." },
        { label: "Color", value: "Blanco" },
        { label: "Accesorios de izaje", value: "Según pedido del cliente" },
        { label: "Terminación de accesorios", value: "Pintura poliuretánica" },
      ],
      gallery: [
        "/uploads/productos/barquillas/01.jpg",
        "/uploads/productos/barquillas/02.jpg",
        "/uploads/productos/barquillas/03.jpg",
        "/uploads/productos/barquillas/04.jpg",
        "/uploads/productos/barquillas/05.jpg",
        "/uploads/productos/barquillas/06.jpg",
      ],
    },
  },
  {
    name: "Cisterna para enterrar",
    blurb: "Tanques subterráneos para almacenamiento seguro.",
    img: "cisterna",
    photo: "/uploads/productos/cisternas/01.jpg",
    details: {
      description:
        "Las cisternas para enterrar son tanques cilíndricos fabricados con el mismo sistema que los tanques cilíndricos de superficie. Su diseño se basa en el estudio de suelo requerido para definir los refuerzos y anclajes correspondientes. Poseen boca de hombre, bridas de entrada y salida, y accesorios según diseño.",
      specs: [
        { label: "Dimensiones disponibles", value: "30.000 / 37.000 / 40.000 / 60.000 litros" },
        { label: "Diseño", value: "Según estudio de suelo (refuerzos y anclajes)" },
        { label: "Accesorios", value: "Boca de hombre, bridas de entrada y salida" },
      ],
      gallery: [
        "/uploads/productos/cisternas/01.jpg",
        "/uploads/productos/cisternas/02.jpg",
        "/uploads/productos/cisternas/03.jpg",
        "/uploads/productos/cisternas/04.jpg",
        "/uploads/productos/cisternas/05.jpg",
      ],
    },
  },
];

export interface Cliente {
  name: string;
  logo: string;
}

export const clientes: Cliente[] = [
  { name: "PPE Argentina", logo: "/uploads/pasted-1786313263592-0.png" },
  { name: "Almacén Rural", logo: "/uploads/pasted-1786313269366-0.png" },
  { name: "Liex SA", logo: "/uploads/pasted-1786313274689-0.png" },
  { name: "Cotreco Ambiental", logo: "/uploads/pasted-1786313280037-0.png" },
  { name: "Pérez Companc", logo: "/uploads/pasted-1786313284691-0.png" },
  { name: "Gestamp", logo: "/uploads/pasted-1786313290237-0.png" },
  { name: "Ferioli", logo: "/uploads/pasted-1786313295335-0.png" },
  { name: "Iveco", logo: "/uploads/pasted-1786313300602-0.png" },
];
