export default {
  global: {
    componenteFormativo:
      'El diagnóstico y la aplicación de la información documentada en los sistemas de producción',
    descripcionCurso:
      'En la planificación general de producción, el diseño de diagnósticos empresariales valida la información y establece si es coherente, efectiva y veraz para el diseño de estrategias y actividades en los procesos de producción y/o servicios; esto, en virtud de que busca establecer objetivos claros, empleando técnicas como el PHVA para orientarse y dirigirse.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.png'),
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
        titulo: 'El Diagnostico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aplicación de técnicas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Plan de acción y categorización de los resultados y estrategias ',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Información documentada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ciclo P.H.V.A.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Documentar procesos y procedimientos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Registro de la información',
            hash: 't_2_3',
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
      tema: '1.1 Clasificación',
      referencia:
        'Superintendencia de Sociedades. (2021). <em>Elementos y etapas del Sagrilaf.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OFVrTMPQi5c',
    },
    {
      tema: '1.1 Clasificación',
      referencia:
        'Montalvo, O. G. (s. f.). <em> Diagnóstico empresarial (análisis integral).</em> Universidad Mayor de San Andrés.',
      tipo: 'Libro',
      link: '',
    },
    {
      tema: '2.1 Ciclo PHVA',
      referencia:
        'Montesinos, G., S., Vázquez C. de L., C., Maya, E., I., y Gracida, G., E. B. (2020). <em> Mejora continua en una empresa de México. Estudio desde el ciclo Deming.</em>',
      tipo: 'PDF',
      link: 'https://www.redalyc.org/journal/290/29065286036/29065286036.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'actividad para satisfacer necesidades y expectativas, se requiere hacer ciertos procedimientos que permitan la producción y el intercambio de bienes y servicios.',
    },
    {
      termino: 'Andon',
      significado:
        'sistema de gestión visual en planta de producción que indica el estado de esta, avisa cuando se necesita ayuda y permite a los colaboradores, parar el proceso de producción.',
    },
    {
      termino: 'Área de trabajo',
      significado:
        'espacio o sitio destinado para que se realicen funciones de transformación de materiales en productos, o para prestar un servicio.',
    },
    {
      termino: 'Información documentada',
      significado:
        'información que una organización tiene que documentar y mantener.',
    },
    {
      termino: 'Flujo continuo',
      significado:
        'proceso equilibrado donde el flujo de las prendas sigue una secuencia operacional con cambios rápidos de referencia, contando siempre con los mínimos recursos para obtener la producción deseada.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'conjunto de habilidades gerenciales o de las directivas que un individuo tiene para influir en la forma de ser y actuar de las personas o en un grupo de trabajo determinado.',
    },
    {
      termino: 'Manual de calidad',
      significado:
        'documento que específica el sistema de gestión de la calidad en la organización.',
    },
    {
      termino: 'Perfil',
      significado:
        'conjunto de datos o características que definen propiedades o facultades específicas para ser seleccionado con un fin.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'actividad centrada en realizar una propuesta para mejorar el método actual de producción.',
    },
    {
      termino: 'Sistema de gestión de calidad',
      significado:
        'gestión de servicios que se ofrecen y que incluye planear, controlar, y mejorar, aquellos elementos de una organización.',
    },
    {
      termino: 'Talento humano',
      significado:
        'son las personas que participan en la ejecución y coordinación de las actividades empresariales en una organización. ',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
