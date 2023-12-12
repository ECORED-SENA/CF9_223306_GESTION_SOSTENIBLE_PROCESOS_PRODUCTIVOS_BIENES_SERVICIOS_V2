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
      referencia:
        'Castillo, P., L. (2019). El modelo Deming (PHVA) como estrategia competitiva para realizar el potencial administrativo. (Tesis de grado). Universidad Militar Nueva Granada.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/34875/CastilloPineda%20LadyEsmeralda2019.pdf.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Deming, W. E. (1989). Calidad, productividad y competitividad. La salida de la crisis. Ediciones Díaz.',
      link: '',
    },
    {
      referencia:
        'Gómez, R., M. A. (2017). Gestión de la información documentada y por procesos en la organización O y G Construcciones S.A.S. según la norma ISO 9001:2015 Santos de los Díaz.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/9740/T07408.pdf;sequence=',
    },
    {
      referencia:
        'Gómez, M., J. (2017). Guía para la aplicación de la NTC-ISO 9001:2015. Aenor Ediciones.',
      link: '',
    },
    {
      referencia:
        'Guevara, D., K. N. (2020). Guía para elaborar la información documentada para un Sistema de gestión de calidad basado en la NTC ISO 9001:2015 para la empresa B & Z Ingeniería S.A.S. (Tesis de grado). Universidad Católica de Colombia.',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/25345/1/GUIA%20PARA%20ELABORAR%20LA%20%20INFORMACION%20DOCUMENTADA%20PARA%20UN%20SISTEMA%20DE%20GESTION%20DE%20CALIDAD%20BASADO%20EN%20LA%20NTC%20ISO%209001-2015%20PARA%20LA%20EMPRESA%20B%20%26%20Z%20INGENIERIA%20SAS..pdf',
    },
    {
      referencia:
        'López, L., D. C. (2018). Calidad para la productividad y la competitividad. Universidad Católica de Pereira.',
      link:
        'https://www.researchgate.net/publication/330938180_Calidad_para_la_Productividad_y_la_Competitividad',
    },
    {
      referencia:
        'Montalvo, O. G. (2010). Diagnóstico empresarial (análisis integral). Universidad Mayor de San Andrés.',
      link:
        'https://repositorio.umsa.bo/xmlui/bitstream/handle/123456789/7322/124365.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Portugal, V. (2017). Diagnóstico empresarial. Universidad del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1489/Diagn%C3%B3stico%20Empresarial.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Torres, I. (s.f.). Cómo hacer una caracterización de procesos paso a paso. IVE Consultores.',
      link: 'https://iveconsultores.com/caracterizacion-de-procesos/',
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
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Experto temático ',
          centro:
            'Centro del Diseño y la Metrología - Regional Distrito Capital ',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito capital',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrologí - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Bolaño',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Bolaño',
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
