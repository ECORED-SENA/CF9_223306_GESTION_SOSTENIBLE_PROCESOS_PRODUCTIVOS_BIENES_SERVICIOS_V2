<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El diagnóstico
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elaboración de un diagnóstico empresarial es un elemento clave y significativo en la exploración de la infraestructura tecnológica, digital y procedimental; es así como se logran resultados positivos a la hora de tomar decisiones de cambio en una organización o elaborar juicios evaluativos de un proceso logístico.
    
    div(style="background-color: #e6e2f4 ").p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
          p.mb-0 Los conceptos, tiempos, términos, técnicas y demás herramientas de diagnóstico usados, son directamente proporcionales a la efectividad del mismo.
        .col-lg-3.col-6: img(src='@/assets/curso/temas/2.svg', alt='')
    p.mb-5.fw-bold(data-aos='fade-right') Desde el punto de vista organizacional, el diagnóstico se estructura así:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span El diagnóstico empresarial
    .mn.px-5(style="background-color: #fffbf4 ").mb-5
      img(src='@/assets/curso/temas/3.svg', alt='Esquema que ilustra la configuración y estructura de un diagnóstico organizacional.')
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #e6e2f4")
          img(src='@/assets/curso/temas/4.svg', alt='' style="width: 84px; margin-top: -3rem")
          p.mb-0.mt-2 Montalvo (2010), en Diagnóstico empresarial (análisis integral) señala que #[span.fw-bold(style='color: #583CB6') “es importante hacer el diagnóstico de la estrategia de una empresa…”] (p. 29).
    p.mb-5(data-aos='fade-right').fw-bold Entre algunos aspectos clave que sobre el diagnóstico se deben tener, están:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #f7b174")
                .indicador--hover(v-if="indicadorTarjetaSlide")
                .tarjeta-slide__contenedor
                  .tarjeta-slide__contenido.p-4.p-xl-5.d-flex.flex-column.aling-items-center
                      .tarjeta.bg-white.rounded-pill.p-3.d-inline-block.mb-4
                        h4.text-center.mb-0.mx-4 Propósito
                      p.text-center Su propósito es descubrir las dificultades de infraestructuras tecnológicas operacionales y digitales a partir de acciones investigativas, de registro y acciones predictivas que se logran documentar.
                  .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}")
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #f7b174")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.d-flex.flex-column.aling-items-center
                .tarjeta.bg-white.rounded-pill.p-3.d-inline-block.mb-4
                  h4.text-center.mb-0.mx-4 Calidad
                p.text-center Mediante el diagnóstico efectivo, se contribuye a eliminar las causas de deterioro acelerado de procesos y procedimientos y se avanza hacia el logro de las metas e implementación de un excelente sistema de gestión de la calidad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/6.png')})`}")
    p.mb-5(data-aos='fade-right') En Latinoamérica las empresas solían, en los últimos años, tener ciclos de acción y producción repetitivos que, por tanta repetición y no identificación de dónde, cuándo o quién producía la falla o el problema, condujeron a la documentación de cada actividad u operación del proceso productivo.
      br
      br
      | #[b Esta realidad de las empresas trajo consigo algunas realidades como:]
    .tarjeta.p-5(style="background-color: #e6e2f4").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9(data-aos="fade-right").mb-lg-0.mb-3
          ul.lista-ul--color
            li
              i.fas.fa-atom
              | Con el paso del tiempo, fue necesario documentarlo todo.
            li
              i.fas.fa-atom
              | Con la documentación de los procesos, se llegó a implementar un sistema de gestión de calidad. 
            li
              i.fas.fa-atom
              | Este proceso ya había sido probado en varios países y por varias empresas.
            li
              i.fas.fa-atom
              | Las pruebas exitosas del sistema de gestión de la calidad, permitió que se fuera generalizando en la región.
            li
              i.fas.fa-atom
              | Esto estaba fundamentado en la teoría de la fiabilidad.
        .col-lg-3.col-7(data-aos="fade-left")
          img(src='@/assets/curso/temas/7.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.svg', alt='')
      .col-lg-11
        p.mb-0 #[span(style="background-color: #f7dda6") La teoría de la fiabilidad surge a partir de actividades de información documentada que se realizan a los equipos de trabajo, procesos y procedimientos, buscando reducir la posibilidad de que se omitan detalles relevantes durante su exploración.] 
    .bg-1.mn.p-5.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/9.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El diagnóstico garantiza la calidad en la información documentada, que ha sido recopilada del proceso logístico de la manufactura del producto o la prestación del servicio, por parte de la organización. Tal información enmarca la reducción de la variabilidad a partir del control de las condiciones de los equipos y los procesos que están directamente relacionados e impactan la calidad.
      .row.justify-content-center
        .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
          p.fw-bold Para diseñar e implementar un diagnóstico de infraestructuras tecnológicas, logísticas, digitales y procedimentales es necesario establecer los siguientes pasos:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Definir el proceso logístico de producción al que se le va a ser lectura.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Definir la información documentada que se procesa.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Elaborar un listado de actividades u operaciones, la naturaleza de ellas, las rutas, los estándares y la ubicación geográfica de los puestos de trabajo, asociando tareas, actividades, procesos, procedimientos información importante para construir un excelente diagnóstico.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Establecer la infraestructura tecnológica y digital que se empleará.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Calcular económicamente los costos directos relacionados.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Relacionar el factor humano, líderes y colaboradores participantes en el proceso logístico.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Dimensionar el espacio físico para cumplir con las actividades del proceso.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Determinar qué cuadros de control e indicadores de gestión se llevan.
        .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/10.svg', alt='')
    p.fw-bold Por otro lado, la elaboración de diagnósticos permite:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.tarjeta-slide2.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #f7b174")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5.d-flex.flex-column.aling-items-center
                  .tarjeta.bg-white.rounded-pill.p-3.d-inline-block.mb-4
                    h4.text-center.mb-0.mx-4 Aplicar y definir
                  p.text-center Aplicar y definir políticas, estrategias, metas, objetivos y enrutar los nuevos procesos a elevados índices de productividad, efectividad, eficiencia y cumplimiento de metas.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/11.png')})`}")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.tarjeta-slide2.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #f7b174")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5.d-flex.flex-column.aling-items-center
                  .tarjeta.bg-white.rounded-pill.p-3.d-inline-block.mb-4
                    h4.text-center.mb-0.mx-4 Suavizar rutas críticas
                  p.text-center Suavizar las rutas críticas, controles y registros, a partir de la secuencia operacional reajustada, luego de aplicar teorías provenientes de un diagnóstico.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/12.png')})`}")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-slide.tarjeta-slide2.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #f7b174")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5.d-flex.flex-column.aling-items-center
                  .tarjeta.bg-white.rounded-pill.p-3.d-inline-block.mb-4
                    h4.text-center.mb-0.mx-4 Hacer seguimientos
                  p.text-center Hacer los seguimientos pertinentes que permitan identificar situaciones susceptibles de ser mejoradas e implementar acciones de mejoramiento continuo.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/13.png')})`}")
    p.mb-5(data-aos='fade-right') En adición, los resultados del control permiten liderar estructuras operacionales más organizadas y mejorar los consumos de recursos, tales como: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100
          .row.justify-content-center.g-0
            .col-lg-6.col-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/14.png', alt='').h-100
            .col-lg-6
              .p-4(style="background-color: #f7e9e1 ").h-100
                img(src='@/assets/curso/temas/17.svg', alt='' style="width: 67px").mb-2
                p Las materias primas.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100
          .row.justify-content-center.g-0
            .col-lg-6.col-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/15.png', alt='').h-100
            .col-lg-6
              .p-4(style="background-color: #f7e9e1 ").h-100
                img(src='@/assets/curso/temas/18.svg', alt='' style="width: 67px").mb-2
                p Los insumos.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100
          .row.justify-content-center.g-0
            .col-lg-6.col-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/16.png', alt='').h-100
            .col-lg-6
              .p-4(style="background-color: #f7e9e1 ").h-100
                img(src='@/assets/curso/temas/19.svg', alt='' style="width: 67px").mb-2
                p El factor humano, entre otros. 
    p.mb-5(data-aos='fade-right') Como parte de su aprendizaje autónomo se invita a revisar los siguientes videos sobre diagnóstico en diferentes temas, los cuales le sirven para conceptualizar el tema:
    .p-2(style="background-color: #f0bd51 ").d-inline-block.mb-4
      h4.mx-3.mb-0 Diagnóstico organizacional
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PHwgIYMHomY?si=eBxKFVRNKHjaGEC7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Diagnóstico Organizacional
    .p-2(style="background-color: #f0bd51 ").d-inline-block.mb-4
      h4.mx-3.mb-0 Diagnóstico empresarial
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2pE1U0Dj6CY?si=x0UBaVEN5JNU6t4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Diagnóstico empresarial
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Clasificación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p En el entorno organizacional, la empresa que desee proyectarse en el medio competitivo y en un ambiente altamente demandado, debe implementar estrategias diferenciales para enfrentar las evolutivas condiciones del medio ambiente en el cual realiza sus acciones logísticas. 
          br
          br
          | #[span(style='color: #583CB6 ').fw-bold Para ser eficaz y eficiente, periódicamente se deben realizar diagnósticos organizacionales, que consiste en un análisis profundo de sus procesos, esto con enfoque gerencial y administrativo de cada área.]  
      .col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/20.svg', alt='')
    .mn.p-lg-4.p-5(style="background-color: #583cb6 ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/21.svg', alt='')
        .col-lg-11
          p.mb-0.fw-bold.text-white ¡Importante! El diagnóstico debe ser diseñado, evaluado, ejecutado, planificado y constantemente ajustado para beneficiar a la empresa y reorientarlo cuando sea necesario. 
    p.mb-5(data-aos='fade-right') En relación con el proceso de clasificación de los diagnósticos organizacionales, tenga presente:
    .tarjeta.p-5(style="background-color: #fbf0da ").mb-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Relevancia de la información
            p Si la logística del diagnóstico es seguida cuidadosamente, no hay garantía de que el diagnóstico o la planeación estratégica por sí misma, corrobore la relevancia de la información documentada recopilada en la corporación.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Implementación y puesta en marcha
            p Por lo anterior, la implementación de la estrategia y de su puesta en marcha, realizada por líderes de la empresa o por externos independientes, es una necesidad relevante.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Diagnóstico funcional
            p Por tanto, el análisis del desempeño debe realizarse con base en un trabajo diligente, el cual se denomina diagnóstico funcional. 
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Evaluación del diagnóstico
            p Para que, estratégicamente, la evaluación del diagnóstico sea eficiente y productiva, la implementación estratégica del diseño debe ajustarse a la realidad del proceso y que no cause revuelo e incertidumbre entre los ejecutores.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Evolución y sentido
            p La evaluación del diagnóstico debe ser evolutiva y siguiendo una serie de pasos, metódicamente estructurados, cuyos objetivos y fines deben ser transmitidos continuamente para cumplir con las indicaciones de los entes administrativos de la corporación.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Para afianzar el tema, se invita a explorar la información contenida en el siguiente video sobre clasificación de los diagnósticos organizacionales:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wHjFQzrvCIs?si=8GJPuK00WHjthl8-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Clasificación de diagnóstico empresarial 
    p.mb-5(data-aos='fade-right') Refuerce los conceptos, procedimientos y elementos estudiados hasta este punto; para ello, analice con atención la información contenida en los dos videos que se presentan a continuación. En ellos, se muestran generalidades de las estrategias usadas por el Estado colombiano para el análisis de la información de las empresas y para diagnosticar el uso de dineros en la gestión financiera del proceso empresarial: 
    .p-2(style="background-color: #f0bd51 ").d-inline-block.mb-4
      h4.mx-3.mb-0 Gestión del Sarlaft
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0NG6EHLnHAM?si=SWlxAK8iZBmLpDq9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Gestión SARLAFT: introducción
    .p-2(style="background-color: #f0bd51 ").d-inline-block.mb-4
      h4.mx-3.mb-0 Los clientes y el Sarlaft
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nUWkkBIxJ3o?si=OaDT8tVdtF6ma-S_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Los clientes y el SARLAFT: introducción  
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Aplicación de técnicas
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.mb-lg-0.mb-3
        .cajon-b.color-primario.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/23.svg', alt='') 
            .col-lg-10
              p.mb-0 La apropiación del conocimiento, en los sistemas de gestión de la calidad en procesos sostenibles empresariales, es clave para generar confiabilidad en los equipos de producción y poder alcanzar las metas generales de productividad.
        p #[span(style="background-color: #f7dda6").fw-bold Por lo anterior, se deben incluir todos los tipos de tareas programadas y las demás técnicas modernas de asignación de actividades, según la infraestructura tecnológica digital y operacional que se tengan a cargo, por parte de líderes de proceso y colaboradores.]
        p Sobre la aplicación de técnicas de asignación de actividades, tenga en cuenta los siguientes aspectos:
      .col-lg-3.col-5: img(src='@/assets/curso/temas/24.svg', alt='')
    .tarjeta.p-5(style="background-color: #fbf0da ").mb-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Andon
            p Emplear ayudas visuales de asignación de actividades (denominado Andon), se convierten en medios que indican las condiciones óptimas de operación e información relevante para los puestos de trabajo.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/29.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Canales efectivos de comunicación
            p Es responsabilidad directa del equipo, realizar la tarea eficaz de agendas visuales; estas ayudas son facilitadoras de canales efectivos de comunicación, limpieza de áreas y chequeo permanente del cumplimiento de actividades, permitiendo que cualquiera realice y este enterado de dicho proceso.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/30.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Actividades
            p Las actividades entonces se constituyen en la columna vertebral de los procesos. El enfoque dado a los procesos, promueve la adopción de rutas a desarrollar e implementar y mejorar la eficacia de un sistema logístico. 
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/31.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Satisfacción del cliente
            p Para aumentar la satisfacción del cliente mediante el cumplimiento de sus requisitos, el reconocimiento, el empoderamiento y la mejora continua de las competencias laborales, facilitan al aprendiz el compromiso de lograr los objetivos de la calidad propuestos por la organización.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/32.png', alt='Texto que describa la imagen')
    .mn.p-lg-4.p-5(style="background-color: #583cb6 ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/33.svg', alt='')
        .col-lg-11
          p.mb-0.fw-bold.text-white El enfoque en las técnicas de aplicación en los procesos, ayuda a alcanzar resultados coherentes y previsibles de manera más eficaz y eficiente. Esto, cuando las actividades se entienden y gestionan como procesos interrelacionados, los cuales funcionan como un sistema engranado.
    p.mb-5(data-aos='fade-right') Otros aspectos clave que se deben considerar y tener presentes, son:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/34.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Cadena de suministros")
            p El sistema de cadena de suministros que utilizan las empresas, como regla de oro, debe constar de procesos conectados, entender cómo estos producen los resultados y permiten a una organización optimizar su desempeño.
          div(titulo="Niveles de competitividad")
            p La mejora en infraestructura procedimental, es esencial para que una organización mantenga los niveles actuales de competitividad y desempeño, reaccionar a los cambios en sus condiciones internas y externas y crear nuevas oportunidades es vital en las organizaciones con éxito.
          div(titulo="Análisis - Decisiones - Resultados")
            p Lo anterior facilita que la empresa tenga un enfoque estratégico hacia la toma de decisiones, basadas precisamente en esas evidencias. Las decisiones soportadas en el análisis y la evaluación de datos e información tienen mayor probabilidad de producir los resultados deseados.
          div(titulo="Objetividad - subjetividad")
            p La toma de decisiones puede ser un proceso complejo y siempre implica cierta incertidumbre y temor; con frecuencia puede ser asertivo y generar múltiples opciones de solución y convertirse en fuente de entrada económica extra. Así mismo, su interpretación también puede ser subjetiva y crearle más aristas a un problema.
    .mn.p-lg-4.p-5(style="background-color: #583cb6 ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/21.svg', alt='')
        .col-lg-11
          p.mb-0.fw-bold.text-white También es importante entender las reacciones de causa-efecto y las consecuencias no previstas, porque el análisis de los hechos, las evidencias y los datos, conducen a una mayor objetividad y confianza en la toma de decisiones.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Plan de acción y categorización de los resultados y estrategias 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/36.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p #[span.fw-bold(style='color: #583CB6 ') La caracterización es la interpretación de eventos en los procesos; la participación de las personas consiste, eventualmente, en identificar el rol que cumple cada uno] en la cadena logística de suministros para realizar ajuste a su comportamiento y participación en acciones que interesan al sistema de mejora continua y a la gestión gerencial y administrativa.
          br
          br
          |El diagnóstico empresarial es la fuente de información de eventos que muestra procesos y situaciones donde las personas, mediante sus acciones o falta de ellas, afectan cada tarea o actividad, impactando directamente el trabajo de otros. Por eso se debe caracterizar cada elemento y registrarlos permanentemente.
          br
          br
          |Por lo anterior, se hace necesario aprender a elaborar una subestructura de caracterización de procesos; por lo que, en la mayoría de los casos, trabajar el tema de caracterización de áreas logísticas y departamentos es una de las situaciones más significativas, ya que puede elaborar una herramienta para mejorar eventualidades en cada caso. 
          br
          br
          | #[span.fw-bold(style='color: #583CB6 ') A continuación, se mencionan los eventos más importantes:]           
    .row.justify-content-center.mb-5
      .col-lg-8
        img.d-none.d-lg-block(src='@/assets/curso/temas/37.svg', alt='Esquema gráfico en que enuncia, en secuencia, los eventos: Subestructura de entrada, Proceso y Subestructura de salida. ')
      .col-8
        img.d-block.d-lg-none(src='@/assets/curso/temas/37c.svg', alt='Esquema gráfico en que enuncia, en secuencia, los eventos: Subestructura de entrada, Proceso y Subestructura de salida. ')
    p.mb-5(data-aos='fade-right') El total de las logísticas de proceso poseen eventos de entrada y de salida. En otra instancia de estos eventos de entrada y salida, con un análisis característico de logística de procesos, también se deberán manejar los siguientes elementos:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.order-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.svg', alt='')
            .col-lg-10.mb-lg-0.mb-3
              h4 Objetivo
              p Determinar la característica del objeto del proceso; expresar claramente por qué se diseña esta lógica.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/39.svg', alt='')
            .col-lg-10
              h4 Responsables
              p Determinar colaboradores y administrativos de la logística del proceso.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.order-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/40.svg', alt='')
            .col-lg-10.mb-lg-0.mb-3
              h4 Elementos de entrada y salida
              p Identificar las áreas intervinientes en la logística del proceso.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/41.svg', alt='')
            .col-lg-10
              h4 Personas que intervienen en el proceso
              p Identificar cada una de las personas que intervienen en los procesos y sus roles.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.order-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/42.svg', alt='')
            .col-lg-10.mb-lg-0.mb-3
              h4 Controles de proceso
              p Definir filtros en cada uno de los procesos que arrojen información clara.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/43.svg', alt='')
            .col-lg-10
              h4 Registros asociados al proceso
              p Establecer qué información documentada se maneja.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.order-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/44.svg', alt='')
            .col-lg-10.mb-lg-0.mb-3
              h4 Establecer qué información documentada se maneja.
              p Determinar la trazabilidad e indicadores de gestión para el control preciso del proceso.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/45.svg', alt='')
            .col-lg-10
              h4 Descripción de actividades del proceso
              p Diseñar procesos, procedimientos, acciones y tareas correlacionadas o reestructurarlas.
          .row(titulo="").justify-content-center
            .col-lg-2.col-3.order-lg-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/46.svg', alt='')
            .col-lg-10.mb-lg-0.mb-3
              h4 Riesgo de fallas
              p Definir qué riesgos pueden existir, que suponen fallas en el proceso. Establecer una matriz de riesgo del proyecto.
    p.mb-5(data-aos='fade-right') Es importante saber que una logística de caracterización de procesos repercute de manera directa en el cronograma de flujo, por lo que su uso como soporte administrativo de esta se puede expresar según el siguiente listado: 
    .mn.p-lg-4.p-5(style="background-color: #f0ecff ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/47.svg', alt='')  
        .col-lg-5
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Escudriñar un proceso a profundidad.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Analizar de forma más rápida.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Exponer factibilidades de automatizar parte o todo el proceso.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Detectar riesgos y necesidades.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Intervenir fases innecesarias.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Integrar fase de trazabilidad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p Cuando se caracteriza la logística interna de suministro, se implementa un enfoque de 360º de lo que sucede cerca de ese proceso; por ello, es una estrategia tan severa y fuerte a la vez.
          br
          br
          |Se experimenta todo: cómo inicia, cómo termina, quién y/o qué da las instrucciones para que se ponga a rodar la estructura o termine, qué control documental existe para trazabilidad y análisis, entre otros aspectos. #[span.fw-bold(style='color: #583cb6 ') Por lo tanto, una caracterización de procesos es una herramienta básica para realizar un diagnóstico empresarial.]
          br
          br
          |Pero, #[span.fw-bold(style="background-color: #f7dda6 ") ¿cómo se hace una caracterización de una logística de suministro?] El pilar, generalmente empleado para caracterizar la logística de procesos, es la matriz de proceso. Esta plantilla de producto-servicio o área, se puede diseñar mediante una hoja de cálculo o un formato de Word.
          br
          br
          |Sencillamente se anexa cada columna o fila, acorde con las necesidades. El siguiente ejemplo puede serle muy útil:
      .col-lg-3.col-6: img.d-none.d-lg-block(src='@/assets/curso/temas/48.png', alt='') 
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Caracterización logística de un suministro
        img(src='@/assets/curso/temas/49.svg', alt='Imagen de un formato de caracterización logística de un suministro y sus respectivos campos de diligenciamiento.')
    .mn.p-5.mb-5(style="background-color: #fff9ed")
      p.mb-5(data-aos='fade-right').fw-bold Se debe tener presente que cuando se elabora una caracterización deben incluirse los siguientes elementos:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-lg-0.mb-3
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Seleccionar proceso a estudiar.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Establecer comunicación directa con líderes y administrativos de proceso.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Tomar medidas para diseñar la matriz de logística de proceso.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Documentar información relevante.
            li.d-flex
              i.fas.fa-atom
              p.mb-0 Establecer, secuencialmente, fases de ejecución.
        .col-lg-4.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/50.svg', alt='')
    p.mb-1(data-aos='fade-right') Teniendo claros los criterios de elaboración de una caracterización, es fundamental, además, realizarla en las siguientes fases:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            h4.text-center Fase 01
            p.text-center Diseñar el objetivo que supla la necesidad sentida a solucionar.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #f7b174 ")
          .p-4
            h4.text-center Fase 02
            p.text-center Determinar las áreas físicas de intervención.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            h4.text-center Fase 03
            p.text-center Especificar el inicio y el final del proceso; esto es relevante porque es ahí donde se delimita el proceso.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #f7b174 ")
          .p-4
            h4.text-center Fase 04
            p.text-center Anotar los eventos de Entrada y Salida.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #faebcd ")
          .p-4
            h4.text-center Fase 05
            p.text-center Focalizar las partes relevantes que están comprometidas en este proceso.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #f7b174 ")
          .p-4
            h4.text-center Fase 06
            p.text-center Contar los pasos o actividades que se llevan a cabo durante el proceso.
    p.mb-5(data-aos='fade-right') Por lo general, al finalizar la descripción de todos los eventos del proceso, se comprende con detalle evento por evento; así mismo, se da pie a implementar mejora continua en él.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/52.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p #[span.fw-bold(style="background-color: #f7dda6")] La identificación de eventos en la logística del proceso es un instrumento táctico que facilita la descripción de cómo funciona el proceso a través de la caracterización de compendios primordiales, que permiten la gestión y control del proceso.
        p En relación con la caracterización, se destacan los siguientes aspectos:
    .tarjeta.p-5(style="background-color: #fbf0da ").mb-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Protocolos
            p La caracterización permite diseñar protocolos de estrategias aplicables para el corto y largo plazo que, cronológicamente, den solución a necesidades detectadas en el diagnóstico: tiempo de ejecución, responsables, evidencias, indicadores de gestión (estos se plasman en un plan de acción).
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/53.png', alt='Texto que describa la imagen')      
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Variabilidad y trazabilidad
            p Con base en garantizar la calidad de la información de toda la gestión administrativa y logística, enmarcada en la reducción de la variabilidad y trazabilidad de los indicadores de gestión, se elaboran listas de chequeo, permanentemente, para verificar el cumplimiento de los objetivos.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/54.png', alt='Texto que describa la imagen')      
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Plan de acción
            p El plan de acción se presenta como el pilar donde se condensan las mejores prácticas de la gerencia, de los diferentes departamentos administrativos y de los diferentes líderes de soporte.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/55.png', alt='Texto que describa la imagen')      
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Recomendaciones y toma de decisiones
            p Con el plan de acción, se busca generar elementos para brindar recomendaciones que aporte al recurso humano la posibilidad de tomar decisiones para mitigar acciones, gastos, eliminar eventualidades y mejorar la calidad.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/56.png', alt='Texto que describa la imagen')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pNrBmOW7rSA?si=eOEReM--xD8Vdvka" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Plan de acción 

















    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-1
  background-image: url('../assets/curso/temas/bg1.svg')
  background-position: start
  background-size: cover
</style>
