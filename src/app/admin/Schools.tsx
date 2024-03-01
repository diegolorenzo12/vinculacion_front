type schoolType ={
    name: string;
    mayors: string[];
}

const Ingenieria: schoolType = {
    name: "Ingeneria",
    mayors: [
        "Cibernética Electrónica", 
        'Ciencias Computacionales', 
        'Diseño Gráfico Digital', 
        'Energías Renovables', 
        "Industrial",
        'Industrial Global Program',
        'Mecánica',
        'Mecatrónica'
    ]
}


const admin: schoolType = {
    name: "Administracion",
    mayors: [
        "Administración de Empresas",
        "Contador Público Internacional y Finanzas",
        "Diseño Gráfico e Innovación Creativa",
        "Inteligencia de Negocios e Innovación",
        "Logística Internacional",
        "Mercadotecnia Estratégica",
        "Negocios Internacionales",
        "Negocios Internacionales Global Program",
    ]
}


const huma: schoolType = {
    name: "Administracion",
    mayors: [
        "Derecho",
        "Psicología Clínica",
        "Psicología Infantil",
        "Psicología Organizacional",
    ]
}

export const schools: schoolType[] = [Ingenieria, admin, huma];
