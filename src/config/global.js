export default {
  global: {
    componenteFormativo: `Elementos y etapas en la preproducción de mobiliarios`,
    descripcionCurso: `Este componente formativo abarca las principales materias primas y materiales empleados en el proceso de fabricación de mobiliarios. Asimismo, desarrolla lo referente al proceso de mobiliarios que requieren un ensamble poscompra por parte del cliente. Finalmente, se abordan las consideraciones que debe tener en cuenta el diseñador para la custodia de los planos generados dentro del marco de la preproducción.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Materias primas, y materiales en el ensamble de mobiliarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Materiales utilizados',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Esquematización de procedimientos de ensamble',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Renderizado y explosionado de conjuntos y partes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Vistas auxiliares y detalle en el ensamble',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tecnologías 4.0 en el ensamble y montaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Emisión, revisión y gestión de la planimetría',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: `Materias primas, y materiales en el ensamble mobiliarios`,
      referencia: `Fondo Mundial para la Naturaleza WWF. (2013) <em>Maderas de Colombia Woods of Colombia</em>.`,
      tipo: 'Libro virtual',
      link: `http://d2ouvy59p0dg6k.cloudfront.net/downloads/maderas_de_colombia_15_version_aprobada.pdf`,
    },
    {
      tema: `Vistas auxiliares y detalle en el ensamble`,
      referencia: `Instrucciones de ensamble //<em>assembly instructions Ref. clc2511 - clw2978 Comedor volterra</em>. (s/f).`,
      tipo: 'Manual de usuario',
      link: `https://www.paris.cl/on/demandware.static/-/Sites-cencosud-master-catalog/default/dwae1c722b/images/Contenido%20Fichas/migracion/631505999-006.pdf`,
    },
    {
      tema: `Vistas auxiliares y detalle en el ensamble`,
      referencia: `Manuales de usuario simplificado (s/f). <em> Ovela OVPIZBFUBA Unidad de buffet Pizzola Guía del usuario</em>. `,
      tipo: 'Manual de usuario',
      link: `https://manuals.plus/es/ovela/ovpizbfuba-pizzola-buffet-unit-manual#axzz7e9MnqM00`,
    },
    {
      tema: `Emisión, revisión y gestión de la planimetría`,
      referencia: `Mercado, F. (14 de abril de 2022). <em>El cajetín. The finite element</em>. Recuperado el 8 de agosto de 2022.`,
      tipo: 'Página web especializada',
      link: `https://www.thefinitelement.com/el-cajetin`,
    },
  ],
  glosario: [
    {
      termino: 'Aserradero',
      significado: `lugar donde se sierra madera, en especial troncos.`,
    },
    {
      termino: 'Bitácora',
      significado: `página web, generalmente de carácter personal, con una estructura cronológica que se actualiza regularmente y que se suele dedicar a tratar un tema concreto.`,
    },
    {
      termino: 'Disruptivo',
      significado: `que produce una interrupción súbita de algo.`,
    },
    {
      termino: 'Dureza',
      significado: `grado de resistencia que opone un mineral a ser rayado por otro.`,
    },
    {
      termino: 'Ornamental',
      significado: `de la ornamentación o relacionado con ella, que sirve para adornar.`,
    },
    {
      termino: 'Retro',
      significado: `que imita o evoca el gusto o la moda de un tiempo pasado o anticuado.`,
    },
    {
      termino: 'Rigidez',
      significado: `capacidad de resistencia de un cuerpo a doblarse o torcerse, por la acción de fuerzas exteriores que actúan sobre su superficie.`,
    },
    {
      termino: 'Sofisticado',
      significado: `que no es natural ni sencillo.`,
    },
    {
      termino: 'Recrear',
      significado: `ofrecer una imagen lo más fiel posible de algún ambiente, acontecimiento, etc.`,
    },
    {
      termino: 'Vegano',
      significado: `persona que practica el veganismo, solo consume productos de origen vegetal.`,
    },
  ],
  referencias: [
    {
      referencia: `Departamento de Planeación Nacional. (s/f). <em>Madera y muebles de madera</em> . Colaboración Departamento de Planeación Nacional.`,
      link: `https://colaboracion.dnp.gov.co/cdt/desarrollo%20empresarial/maderas.pdf`,
    },
    {
      referencia: `Iglesias, S. (13 de octubre de 2021). <em>El renderizado en tiempo real integración y posibilidades en el ámbito académico</em>. Repositorio Universidad de Coruña. `,
      link: `https://ruc.udc.es/dspace/bitstream/handle/2183/28843/IglesiasYa%C3%B1ez_Santiago_TFG_2021.pdf?sequence=2`,
    },
    {
      referencia: `Mercado, F. (14 de abril de 2022). <em>El cajetín. The finite element</em>. Recuperado el 8 de agosto de 2022. `,
      link: `https://www.thefinitelement.com/el-cajetin`,
    },
    {
      referencia: `Manuales de usuario simplificado (s/f). <em>Ovela OVPIZBFUBA Unidad de buffet Pizzola Guía del usuario</em> [Archivo PDF]. Manuals.plus. `,
      link: `https://manuals.plus/es/ovela/ovpizbfuba-pizzola-buffet-unit-manual#axzz7e9MnqM00`,
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
