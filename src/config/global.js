export default {
  global: {
    componenteFormativo: 'Análisis y especificación de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan el análisis de requisitos (priorización, descomposición funcional, matriz de trazabilidad) y estándares, y/o guías existentes para la especificación formal de los mismos dependiendo del tipo de marco de trabajo usado (tradición o ágil)',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de análisis de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Priorización de requisitos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Matriz de trazabilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Descomposición funcional',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Especificación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estándar IEEE 830',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estándar IEEE 29148:2018',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'La especificación de requisitos a través de marcos de trabajo ágiles',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Scrum y la especificación de requisitos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Kanban y la especificación de requisitos',
            hash: 't_2_5',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '2. Especificación de requisitos',
      referencia:
        'UMNG. (2019). <em>Elementos de la norma IEEE 830</em>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/LjBOTZdd_iE',
    },
    {
      tema: '2. Especificación de requisitos',
      referencia:
        'California State University Long Beach. (2021). <em>Requirements Engineering, CSU Long Beach, Penzenstadler</em>. ',
      tipo: 'Página web',
      link:
        'http://www.foss2serve.org/index.php/Requirements_Engineering,_CSU_Long_Beach,_Penzenstadler',
    },
    {
      tema: '2.1 Estándar IEEE 830',
      referencia:
        '830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). <em>IEEE Standard | IEEE Xplore</em>.',
      tipo: 'Página web',
      link: 'https://ieeexplore.ieee.org/document/720574 ',
    },
    {
      tema: '2.1 Estándar IEEE 830',
      referencia: 'SO/IEC/IEEE 29148:2011. (s. f.). ISO. ',
      tipo: 'Página web',
      link: 'https://www.iso.org/standard/45171.html',
    },
    {
      tema: '2.1 Estándar IEEE 830',
      referencia:
        'Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.).<em>ScrumStudy</em>.',
      tipo: 'Video',
      link: 'https://www.scrumstudy.com',
    },
  ],
  glosario: [
    {
      termino: 'Estándar',
      significado:
        'referencia, patrón o modelo que es utilizado a nivel general en un determinado ámbito.',
    },
    {
      termino: 'Marcos de trabajo ágiles',
      significado:
        'conjunto de estándares, metodologías, técnicas, <em>frameworks</em> o guías que rigen un proceso de desarrollo de <em>software</em> basadas en principios y/o valores ágiles como, por ejemplo: Scrum, Lean <em>Software</em>, XP, TDD, entre otros.',
    },
    {
      termino: 'Marcos de trabajo tradicionales',
      significado:
        'conjunto de estándares, metodologías, técnicas, <em>frameworks</em> o guías que rigen un proceso de desarrollo de <em>software</em> basadas en el ciclo de vida tradicional del <em>software</em> como, por ejemplo: RUP, CMMI, ISO 9001, Microsoft Solution Framework, entre otros. ',
    },
    {
      termino: 'Metodología',
      significado:
        'síntesis de un conjunto de técnicas, métodos y procedimientos que se deben seguir durante el desarrollo de un proyecto.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'forma de comprobar el correcto funcionamiento de una unidad de código.',
    },
    {
      termino: 'Pruebas de integración',
      significado:
        'prueba que se ejecuta una vez se aprueban las pruebas unitarias y lo que busca es verificar que el conjunto de fragmentos de código funciona junto de forma correcta. Es una prueba de conjunto.',
    },
    {
      termino: 'Técnica',
      significado:
        'manera en la que un conjunto de procedimientos es aplicado en una tarea específica, con base en un conocimiento para obtener un resultado específico.',
    },
  ],
  referencias: [
    {
      referencia:
        '830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). <em>IEEE Standard | IEEE Xplore</em>.',
      link: 'https://ieeexplore.ieee.org/document/720574',
    },
    {
      referencia:
        'Pantaleo, L., y Rinaudo. (2018). <em>Ingeniería de software</em>. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). <em>Requirements engineering</em>. CSU Long Beach.',
      link:
        'http://www.foss2serve.org/index.php/Requirements_Engineering,_CSU_Long_Beach,_Penzenstadler ',
    },
    {
      referencia:
        'Porfirio, C. (2021). <em>Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades</em>.',
      link:
        'https://www.knowmadmood.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades',
    },
    {
      referencia:
        'Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - <em>UNPA</em>, 5(1), 1-29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.). <em>ScrumStudy</em>.',
      link: 'https://www.scrumstudy.com',
    },
    {
      referencia:
        'Sommerville I. (2011). <em>Ingeniería del software</em>. Addison-Wesley.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
