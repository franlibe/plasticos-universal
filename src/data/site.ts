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

export interface Product {
  name: string;
  blurb: string;
  img: string;
  photo: string;
}

export const products: Product[] = [
  {
    name: "Tanques cilíndricos",
    blurb: "Almacenamiento de líquidos para uso industrial y agropecuario.",
    img: "cilindricos",
    photo: "/uploads/pasted-1786311352760-0.png",
  },
  {
    name: "Tanques regadores",
    blurb: "Depósitos para equipos de riego, resistentes a la intemperie.",
    img: "regadores",
    photo: "",
  },
  {
    name: "Acoplado tanque",
    blurb: "Unidades móviles para transporte de líquidos a campo.",
    img: "acoplado",
    photo: "/uploads/pasted-1786311371454-0.png",
  },
  {
    name: "Barquillas para hidrogrúa",
    blurb: "Componentes livianos y resistentes para trabajo en altura.",
    img: "barquillas",
    photo: "",
  },
  {
    name: "Cisterna para enterrar",
    blurb: "Tanques subterráneos para almacenamiento seguro.",
    img: "cisterna",
    photo: "",
  },
  {
    name: "Planta de tratamiento",
    blurb: "Soluciones para tratamiento de efluentes industriales.",
    img: "planta",
    photo: "/uploads/pasted-1786311425567-0.png",
  },
  {
    name: "Separadores",
    blurb: "Separadores de hidrocarburos para control ambiental.",
    img: "separadores",
    photo: "/uploads/pasted-1786311404890-0.png",
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
