<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El diagnóstico
    
    .edit-bg-text.mb-5
      p.position-relative.col.mb-0 Los conceptos relacionados con base en la elaboración de un diagnóstico, como elemento significativo en la exploración de la infraestructura tecnológica, digital y procedimental, para lograr resultados positivos a la hora de tomar decisiones de cambio en una organización o elaborar juicios evaluativos de un proceso logístico, están directamente relacionados con la elaboración del diagnóstico, planificado o programado. Desde la parte organizacional se estructura así:
      img.position-relative(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 85px")
    
    .bg-img-edit.py-4.mb-5(style="background-color: #FFFBF4")
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-2.svg")
      img.d-flex.d-lg-none(src="@/assets/curso/temas/tema1/img-2-movil.svg")
    
    .col-xl-10.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center(style="background: linear-gradient(90deg, rgba(226,217,255,1) 0%, rgba(226,217,255,1) 92%, rgba(255,255,255,1) 92%);")
        .col-lg-7.p-4
          img.mb-3(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 85px")
          p.mb-0 Montalvo (2010), en Diagnóstico empresarial (análisis integral) señala que 
            |#[b “es importante hacer el diagnóstico de la estrategia de una empresa…pero que es importante ilustrar el tema con la narración de una situación ocurrida hace algunos años en cierto país de Latinoamérica…”] (p. 29).
        .col-lg-5
          img(src="@/assets/curso/temas/tema1/img-4.png")
    
    p.mb-5 Su propósito es descubrir las dificultades de infraestructuras tecnológicas operacionales y digitales a partir de acciones investigativas, de registro y acciones predictivas que se logran documentar, contribuyendo a eliminar las causas de deterioro acelerado de procesos y procedimientos y avanzando al logro de las metas e implementar un excelente sistema de gestión de la calidad. 

    img.mb-5.col-lg-10.col-xl-6.mx-auto(src="@/assets/curso/temas/tema1/img-5.svg")

    p.mb-5 Esto se explica de la siguiente manera, en Latinoamérica, las empresas tenían sus ciclos, los cuáles se repetían una y otra vez sin identificarse, dónde, cuándo, o quién producía la falla o el problema… sin embargo, con el tiempo, fue necesario documentarlo todo, de modo que se implementara un sistema de gestión de calidad. Este proceso ya había sido probado en varios países y por varias empresas, lo que permitió que se fuera generalizando en la región.

    .bloque-texto-g.bloque-texto-g-edit.color-secundario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto.mb-5
      .bloque-texto-g__texto.p-4
        p.mb-0 Ahora bien, esto estaba fundamentado en la teoría de la fiabilidad, a partir de actividades de información documentada que se realizan a los equipos de trabajo, procesos y procedimientos, buscando reducir la posibilidad de que se omitan detalles relevantes durante su exploración. 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-6.png')})`}"
      )
    
    .bg-img-edit.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #583CB6")
      img.col-12.mx-auto(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 190px; margin-top: -2rem")
      p.mb-4.mb-md-0.col-12.col-md.mb-0.texto-blanco #[b ¡Importante!] Está basado en implementar lo aprendido en la recopilación de información documentada, equipos y procesos nuevos, pero sujetos a debilidades que se deben descubrir, partiendo del análisis de datos. 
    p.mb-5 El diagnóstico garantiza la calidad en la información documentada que ha sido recopilada del proceso logístico de la manufactura del producto o la prestación del servicio por parte de la organización, la cual está enmarcada en la reducción de la variabilidad a partir del control de las condiciones de los equipos y los procesos que están directamente relacionados e impactan la calidad.

    .bg-img-edit.py-5.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #FCF5E6")
      .col-xl-8.order-2.order-xl-1
        p.fw-bold Para diseñar e implementar un diagnóstico de infraestructuras tecnológicas, logísticas, digitales y procedimentales es necesario establecer los siguientes pasos:
        ul.lista-ul--color
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Definir el proceso logístico de producción al que se le va a ser lectura.
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Definir la información documentada que se procesa.
          li.d-flex.align-items-center
            <svg style="width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Elaborar un listado de actividades u operaciones, la naturaleza de ellas, las rutas, los estándares, y la ubicación geográfica de los puestos de trabajo, asociando tareas, actividades, procesos, procedimientos información importante para construir un excelente diagnóstico. 
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Establecer la infraestructura tecnológica que se emplea.
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Establecer la infraestructura digital que se emplea.
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Calcular económicamente los costos directos relacionados.
          li.d-flex.align-items-center
            <svg style="width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Relacionar el factor humano, líderes y colaboradores participantes en el proceso logístico.
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Dimensionar el espacio físico para cumplir con las actividades del proceso.
          li.d-flex.align-items-start
            <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
              <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
            </svg>
            | Determinar qué cuadros de control e indicadores de gestión se llevan.
      img.col-xl-4.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-8.svg" style="max-width: 400px")

    .bg-img-edit.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #583CB6")
      img.col-12.mx-auto(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 190px; margin-top: -4rem")
      p.py-4.mb-4.mb-md-0.col-12.col-md.mb-0.texto-blanco #[b ¡Importante!] Por otro lado, la elaboración de diagnósticos permite aplicar y definir políticas, estrategias, metas, objetivos y en ruta los nuevos procesos a elevados índices de productividad, efectividad, eficiencia y cumplimiento de metas, la secuencia operacional reajustada después de aplicar teorías provenientes de un diagnóstico suavizan las rutas críticas, controles y registros para hacer los seguimientos pertinentes que permitan identificar situaciones susceptibles de ser mejoradas e implementar acciones de mejoramiento continuo. 
    
    p.mb-5 En adición, los resultados del control permiten liderar estructuras operacionales más organizadas y mejorar los consumos de recursos, tales como: 

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-12.col-lg-5.col-xl-4.px-2.mb-3
        .tarjeta.d-flex(style="background-color: #F7E9E1")
          .col-6
            img.w-100(src="@/assets/curso/temas/tema1/t-1.jpg" style="max-width: 190px;")
          .col-6.px-2.d-flex.flex-wrap.align-content-center
            img.mb-4.w-100(src="@/assets/curso/temas/tema1/1.svg" style="max-width: 65px;")
            p.w-100.mb-0 Las materias primas.
      .col-12.col-lg-5.col-xl-4.px-2.mb-3
        .tarjeta.d-flex(style="background-color: #F7E9E1")
          .col-6
            img.w-100(src="@/assets/curso/temas/tema1/t-2.jpg" style="max-width: 190px;")
          .col-6.px-2.d-flex.flex-wrap.align-content-center
            img.mb-4.w-100(src="@/assets/curso/temas/tema1/2.svg" style="max-width: 65px;")
            p.w-100.mb-0 Los insumos.
      .col-12.col-lg-7.col-xl-4.px-2.mb-3
        .tarjeta.d-flex(style="background-color: #F7E9E1")
          .col-6
            img.w-100(src="@/assets/curso/temas/tema1/t-3.jpg" style="max-width: 190px;")
          .col-6.px-2.d-flex.flex-wrap.align-content-center
            img.mb-4.w-100(src="@/assets/curso/temas/tema1/3.svg" style="max-width: 65px;")
            p.w-100.mb-0 El factor humano, entre otros.
    p.mb-5 Como parte de su aprendizaje autónomo se invita a revisar los siguientes videos sobre diagnóstico en diferentes temas, los cuales le sirven para conceptualizar el tema:
    .d-flex.mb-2
      h4.py-1.px-3(style="background-color: #F0BD51;") Diagnóstico organizacional
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .d-flex.mb-2
      h4.py-1.px-3(style="background-color: #F0BD51;") Diagnóstico empresarial

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-9.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Diagnóstico empresarial (análisis integral)
              p.text-small Para clarificar la temática y afianzar sus conocimientos sobre el diagnóstico empresarial se puede remitir la ayuda bibliográfica de Oscar Gerardo Montalvo, en el documento Diagnóstico empresarial (análisis integral), páginas 9 a la 40 del capítulo 1, que se encuentra en la sección de material complementario.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .titulo-segundo.color-secundario
      h2#t_1_1 1.1 Clasificación
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-8.col-xl-9.order-2.order-lg-1.pe-lg-3
        p Las diferentes actividades llegan a presentar eventualidades en los procesos logísticos, lo que conlleva a la elaboración de diagnósticos empresariales, como herramienta que permite detectar el estado actual de la tecnología procedimental y digital de cultura organizacional, para la toma de decisiones de manera acertada. Es así como se presenta el diagnóstico organizacional: funcional y cultural. 
          br
          br
          |En el entorno organizacional, la empresa que desee proyectarse en el medio competitivo y en un ambiente altamente demandado, debe implementar estrategias diferenciales para enfrentar las evolutivas condiciones del medio ambiente en el cual realiza sus acciones logísticas. 
          br
          br
          |Para ser eficaz y eficiente, periódicamente se deben realizar diagnósticos organizacionales, que consiste en un análisis profundo de sus procesos, esto con enfoque gerencial y administrativo de cada área. 
      img.col-lg-4.col-xl-3.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-10.png" style="max-width: 293px;")

    .bg-img-edit.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #583CB6")
      img.col-12.mx-auto(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 190px; margin-top: -2rem")
      p.py-4.mb-4.mb-md-0.col-12.col-md.mb-0.texto-blanco #[b ¡Importante!] El diagnóstico debe ser diseñado, evaluado, ejecutado, planificado y constantemente ajustado para beneficiar a la empresa y reorientarlo cuando sea necesario.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-4.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-11.svg" style="max-width: 400px")
      .col-xl-8.ps-xl-4
        p En consecuencia, si la logística descrita fuera seguida cuidadosamente, no hay garantía de que el diagnóstico funcional o planeación estratégica por sí misma, corrobore la relevancia de la información documentada recopilada en la corporación, motivo por el cual la implementación de la estrategia y de su puesta en marcha, sea que fuese realizada por líderes de la misma empresa, o por un externo independiente, es una necesidad relevante, #[b por lo que el análisis del desempeño debe realizarse con base en un trabajo diligente, al cual designamos como diagnóstico funcional.]
          br
          br
          |Para que estratégicamente la evaluación del diagnóstico sea eficiente y productiva, la implementación estratégica del diseño debe ajustarse a la realidad del proceso y que no, cause revuelo e incertidumbre entre los ejecutores. Esta debe ser evolutiva y siguiendo una serie de pasos, metódicamente estructurados, y cuyos objetivos y fines deben ser transmitidos continuamente para cumplir con las indicaciones de los entes administrativos de la corporación. Para afianzar el tema, se invita a ver el siguiente video sobre clasificación de los diagnósticos organizacionales.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-12.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ministerio de Justicia y del Derecho
              p.text-small Para reforzar su aprendizaje, se le invita a leer el siguiente documento del Ministerio de Justicia y del Derecho, así como a ver algunos videos que son importantes, porque son parte de las estrategias usadas por el Estado colombiano para analizar la información de las empresas y diagnosticar el uso adecuado del dinero en la gestión financiera del proceso empresarial, en especial cuando se podría producir el lavado de activos como parte del proceso financiero encubierto de una organización.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .d-flex.mb-2
      h4.py-1.px-3(style="background-color: #F0BD51;") Gestión del Sarlaft

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .d-flex.mb-2
      h4.py-1.px-3(style="background-color: #F0BD51;") Los clientes y el Sarlaft
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador

    .titulo-segundo.color-secundario
      h2#t_1_2 1.2 Aplicación de técnicas
    
    .cajon-b.color-primario.edit-cajon-b.p-3.mb-5
      .d-flex.align-items-center
        img(src="@/assets/curso/temas/tema1/img-13.svg" style="max-width: 85px")
        p.mb-0.col.mb-0.ps-3 Para el sistema de gestión de la calidad en los procesos sostenibles de manufactura, la actividad como técnica de apropiación del conocimiento es clave para generar confiabilidad en los equipos de producción y poder alcanzar las metas generales de productividad. 

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-8.col-xl-9.pe-4.order-2.order-lg-1
        p.mb-0 Por lo anterior, #[b se deben incluir todos los tipos de tareas: programadas y las demás técnicas modernas de asignación de actividades, según la infraestructura tecnológica digital y operacional que se tengan a cargo por parte de líderes de proceso y colaboradores. ]
          br
          br
          |Emplear ayudas visuales de asignación de actividades, (denominado Andon), se convierte en la actualidad, en medios que indican las condiciones óptimas de operación e información relevante para los puestos de trabajo y que es responsabilidad directa del equipo realizar la tarea eficaz de agendas visuales, estas ayudas son facilitadoras de canales efectivos de comunicación, limpieza de áreas y chequeo permanente del cumplimiento de actividades, permitiendo que cualquiera realice y este enterado de dicho proceso.
      img.mx-auto.col-lg-4.col-xl-3.order-1.order-lg-2.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/img-14.svg" style="max-width: 295px")
    p.mb-5 Las actividades entonces se constituyen en la columna vertebral de los procesos con base en las afirmaciones del trabajo de Portugal (2017), quien expresa que:

    .col-xl-10.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center(style="background: linear-gradient(90deg, transparent 14%, rgba(240,189,81,1) 14%, rgba(240,189,81,1) 100%);")
        .col-lg-5
          img(src="@/assets/curso/temas/tema1/img-15.png")
        .col-lg-7.p-4
          p.mb-0 “El enfoque que le damos a los procesos, promueve la adopción de rutas a desarrollar e implementar y mejorar la eficacia de un sistema logístico, para aumentar la satisfacción del cliente mediante el cumplimiento de sus requisitos, el reconocimiento, el empoderamiento y la mejora continua de las competencias laborales facilitan al aprendiz el compromiso de lograr los objetivos de la calidad propuestos por la organización”.
    p.mb-5 Igualmente, el enfoque en las técnicas de aplicación en los procesos ayuda a alcanzar resultados coherentes y previsibles de manera más eficaz y eficiente, #[B cuando las actividades se entienden y gestionan como procesos interrelacionados los cuales funcionan como un sistema engranado.]

    .bg-img-edit.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #583CB6")
      img.col-12.mx-auto(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 190px; margin-top: -2rem")
      p.py-4.mb-4.mb-md-0.col-12.col-md.mb-0.texto-blanco #[b ¡Importante!] El sistema de cadena de suministros que utilizan las empresas como regla de oro, debe constar de procesos conectados, entender cómo estos producen los resultados y permite a una organización optimizar su desempeño.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-8.col-xl-9.order-2.order-lg-1
        p #[b La mejora en infraestructura procedimental, es esencial para que una organización mantenga los niveles actuales de competitividad y desempeño,] reaccionar a los cambios en sus condiciones internas y externas y crear nuevas oportunidades es vital en las organizaciones con éxito.
          br
          br
          |Lo anterior facilita que la empresa tenga un enfoque estratégico hacia la toma de decisiones, basadas precisamente en esas evidencias, las decisiones soportadas en el análisis y la evaluación de datos e información tienen mayor probabilidad de producir los resultados deseados.
          br
          br
          |La toma de decisiones puede ser un proceso complejo y siempre implica cierta incertidumbre y temor, con frecuencia puede ser asertivo y generar múltiples opciones de solución y convertirse en fuente de entrada económica extra, así como su interpretación, también puede ser subjetiva y crearle más aristas a un problema. 
      img.mx-auto.col-lg-4.col-xl-3.order-1.order-lg-2.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/img-16.png" style="max-width: 295px")

    .cajon-b.color-primario.edit-cajon-b.p-3
      .d-flex.align-items-center
        img(src="@/assets/curso/temas/tema1/img-17.svg" style="max-width: 85px")
        p.mb-0.col.mb-0.ps-3 También es importante entender las reacciones de causa-efecto y las consecuencias no previstas, porque el análisis de los hechos, las evidencias y los datos conduce a una mayor objetividad y confianza en la toma de decisiones. 

    Separador

    .titulo-segundo.color-secundario
      h2#t_1_3 1.3 Plan de acción categorización de los resultados y estrategias
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-4.col-xl-3.mb-4.mb-lg-0.mx-auto(src="@/assets/curso/temas/tema1/img-18.svg" style="max-width: 295px")
      .col-lg-8.col-xl-9.ps-lg-4
        p.mb-0 #[b La caracterización es la interpretación de eventos en los procesos y la participación de las personas y consiste eventualmente en identificar el rol que cumple cada uno] en la cadena logística de suministros para realizar ajuste a su comportamiento y participación en acciones que interesan al sistema de mejora continua y a la gestión gerencial y administrativa. 
          br
          br
          |El diagnóstico empresarial es la fuente de información de eventos que muestran procesos y situaciones donde las personas mediante sus acciones o falta de ellas afectan cada tarea o actividad, impactando directamente el trabajo de otros, por eso se debe caracterizar mediante condiciones cada elemento y registrarla permanentemente.
          br
          br
          |Por lo anterior, se hace necesario aprender a elaborar una subestructura de caracterización de procesos, por lo que en la mayoría de los casos trabajar el tema de caracterización de áreas logísticas y departamentos es una de las situaciones más significativas, ya que puede elaborar una herramienta para mejorar eventualidades en cada caso. A continuación, se mencionan los eventos más importantes:

    .d-flex.flex-wrap.justify-content-center.pt-5
      .card-row-1.mb-5
        img.mx-auto(src="@/assets/curso/temas/tema1/img-19.svg" style="max-width: 98px; margin-top: -45px; margin-bottom: 1.1rem")
        p.w-100 #[b Subestructura de entrada.]
          |Solicitud de un servicio o producto por parte del cliente.
      .card-row-2.mb-5
        img.mx-auto(src="@/assets/curso/temas/tema1/img-20.svg" style="max-width: 98px; margin-top: -45px; margin-bottom: 1.1rem")
        p.text-center.w-100 #[b Proceso]
      .card-row-1.mb-5
        img.mx-auto(src="@/assets/curso/temas/tema1/img-21.svg" style="max-width: 98px; margin-top: -45px; margin-bottom: 1.1rem")
        p.w-100 #[b Subestructura de salida.]
          |Cotización/presupuesto del producto o servicio.
    
    p.mb-5 #[b Así se está en posición de afirmar que el total de las logísticas de proceso, poseen eventos de entrada y de salida.] En otra instancia de estos eventos de entrada y salida con un análisis característico de logística de procesos también deberás manejar los siguientes elementos:

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-6.col-xl-4.px-lg-2.pe-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-1.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Objetivo:] determinar la característica del objeto del proceso es expresar claramente, porqué se diseña esta lógica.
      .col-lg-6.col-xl-4.px-lg-2.px-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-2.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Responsables:] determinar colaboradores y administrativos de la logística del proceso.
      .col-lg-6.col-xl-4.px-lg-2.ps-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-3.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Elementos de entrada y salida:] identificar las áreas intervinientes en la logística del proceso.
      
      .col-lg-6.col-xl-4.px-lg-2.pe-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-4.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Personas que intervienen en el proceso:] identificar cada una de las personas que intervienen en los procesos y sus roles.
      .col-lg-6.col-xl-4.px-lg-2.px-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-5.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Controles al proceso:] definir filtros en cada uno de los procesos que arrojen información clara.
      .col-lg-6.col-xl-4.px-lg-2.ps-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-6.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Registros asociados al proceso:] establecer qué información documentada se maneja.
      
      .col-lg-6.col-xl-4.px-lg-2.pe-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-7.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Indicadores del proceso:] determinar la trazabilidad e indicadores de gestión para el control preciso del proceso
      .col-lg-6.col-xl-4.px-lg-2.px-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-8.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Descripción de actividades del proceso:]  diseñar procesos, procedimientos, acciones y tareas correlacionadas o reestructurarlas.
      .col-lg-6.col-xl-4.px-lg-2.ps-xl-2.mb-3
        .tarjeta.align-items-center.d-flex(style="background-color: #F7E9E1")
          img(src="@/assets/curso/temas/tema1/c-9.svg" style="max-width: 105px;")
          p.px-3.mb-0 #[b Riesgo de que falle el proceso:] definir qué riesgos puede existir de que falle el proceso. Establecer una matriz de riesgo del proyecto.
    
    p.mb-5 Es importante saber que una logística de caracterización de procesos repercute de manera directa en el cronograma de flujo, por lo que su uso como soporte administrativo de esta se puede expresar según el siguiente listado: 

    .bg-img-edit.py-5.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #E2D9FF")
      .d-flex.flex-wrap.align-items-center.col-xl-10.mx-auto
        .col-xl-6.order-2.order-xl-1
          ul.lista-ul--color
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Escudriñar un proceso a profundidad.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Analizar de forma más rápida.
            li.d-flex.align-items-center
              <svg style="width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Exponer factibilidades de automatizar parte o todo el proceso.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Detectar riesgos y necesidades.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Intervenir fases innecesarias.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Integrar fase de trazabilidad.
        img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-22.svg" style="max-width: 505px")
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-4.col-xl-3.mb-4.mb-lg-0.mx-auto(src="@/assets/curso/temas/tema1/img-23.png" style="max-width: 295px;")
      .col-lg-8.col-xl-9.ps-lg-4
        p Cuando se caracteriza la logística interna de suministro se implementa un enfoque 360º de lo que sucede cerca de ese proceso y de ahí que sea una estrategia tan severa y fuerte a la vez.
          br
          br
          |Se experimenta todo, cómo inicia, cómo termina, quién/qué da las instrucciones para que se ponga a rodar la estructura o termine, qué control documental existen para trazabilidad y análisis, entre otros aspectos. Por lo tanto, una caracterización de procesos es una herramienta básica para realizar un diagnóstico empresarial.
        .d-flex.mb-2
          h4.py-1.px-3(style="background-color: #F0BD51;") Pero, ¿cómo se hace una caracterización de una logística de suministro?
        p.mb-0 El pilar generalmente empleado para caracterizar logística de procesos es la matriz de proceso. Esta plantilla de producto servicio o área la puedes diseñar mediante una hoja de cálculo o un formato de Word.
          br
          br
          |Sencillamente anexa cada columna o fila acorde a las necesidades, como el siguiente ejemplo que puede serle útil:
    img.col-xl-10.mb-5.mx-auto(src="@/assets/curso/temas/tema1/tabla.svg")

    .bg-img-edit.py-5.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #FFF9ED")
      .d-flex.flex-wrap.align-items-center.col-xl-10.mx-auto
        p.w-100.fw-bold Se debe tener presente que cuando se elabora una caracterización deben incluirse los siguientes elementos:
        .col-xl-7.order-2.order-xl-1
          ul.lista-ul--color
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Seleccionar proceso a estudiar.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Establecer comunicación directa con líderes y administrativos de proceso.
            li.d-flex.align-items-center
              <svg style="width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Tomar medidas para diseñar la matriz de logística de proceso.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Documentar información relevante.
            li.d-flex.align-items-start
              <svg style="margin-top: .2rem; width: 16px; min-width: 16px; margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path id="Icon_awesome-atom" data-name="Icon awesome-atom" d="M12.907,8c1.254-1.715,1.3-3.082.786-4-.341-.61-1.267-1.585-3.635-1.309C9.386,1.09,8.364,0,7,0S4.614,1.09,3.943,2.691C1.576,2.417.648,3.39.307,4c-.512.919-.469,2.284.786,4C-.161,9.715-.2,11.082.307,12c.913,1.636,3.178,1.362,3.635,1.309C4.614,14.91,5.636,16,7,16s2.387-1.091,3.058-2.691c.458.053,2.722.327,3.635-1.309C14.2,11.081,14.162,9.716,12.907,8ZM1.981,11c-.126-.225-.006-.775.467-1.509.218.2.444.4.683.6.053.428.125.846.211,1.253-.768.028-1.247-.137-1.362-.343ZM3.131,5.91c-.239.2-.466.4-.683.6C1.975,5.775,1.855,5.225,1.981,5c.107-.192.512-.358,1.185-.358.053,0,.121.009.178.012q-.133.624-.212,1.257ZM7,2c.3,0,.694.423,1.058,1.164-.35.116-.7.25-1.058.4-.357-.152-.708-.286-1.058-.4C6.306,2.423,6.7,2,7,2ZM7,14c-.3,0-.694-.423-1.058-1.164.35-.116.7-.25,1.058-.4.357.152.708.286,1.058.4C7.694,13.578,7.3,14,7,14ZM8.953,9.084A13.362,13.362,0,0,1,7,10.255,13.378,13.378,0,0,1,5.047,9.084a12.6,12.6,0,0,1,0-2.167A13.409,13.409,0,0,1,7,5.746,13.383,13.383,0,0,1,8.953,6.917,12.635,12.635,0,0,1,8.953,9.084ZM12.02,11c-.115.207-.594.369-1.362.342.086-.406.158-.824.211-1.252.239-.2.466-.4.683-.6C12.025,10.225,12.145,10.775,12.02,11Zm-.467-4.491c-.218-.2-.444-.4-.683-.6q-.079-.633-.212-1.257c.057,0,.124-.012.178-.012.673,0,1.078.167,1.185.358.126.226.006.775-.467,1.509ZM7,7A1,1,0,1,0,8,8,1,1,0,0,0,7,7Z" fill="#583cb6"/>
              </svg>
              | Establecer secuencialmente fases de ejecución de la siguiente manera:
        img.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema1/img-24.svg" style="max-width: 400px")
    
    SlyderF.mb-5.py-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color: #FFF9ED")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 113px; margin-top: -80px")
        h2.text-center Fase 01
        p.text-center Diseñar el objetivo que supla la necesidad sentida a solucionar.
      
      .tarjeta.p-4(style="background-color: #F7B174")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 113px; margin-top: -80px")
        h2.text-center Fase 02
        p.text-center Determinar las áreas físicas de intervención
      
      .tarjeta.p-4(style="background-color: #FFF9ED")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 113px; margin-top: -80px")
        h2.text-center Fase 03
        p.text-center Especificar el inicio y el final del proceso, esto es relevante porque aquí es donde delimito el proceso.
      
      .tarjeta.p-4(style="background-color: #F7B174")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 113px; margin-top: -80px")
        h2.text-center Fase 04
        p.text-center Anotar los eventos de Entrada y Salida.
      
      .tarjeta.p-4(style="background-color: #FFF9ED")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 113px; margin-top: -80px")
        h2.text-center Fase 05
        p.text-center Focalizar las partes relevantes que están comprometidas en este proceso.
      
      .tarjeta.p-4(style="background-color: #F7B174")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 113px; margin-top: -80px")
        h2.text-center Fase 06
        p.text-center Contar los pasos o actividades que se llevan a cabo durante el proceso.
    p.mb-5 Por lo general, cuando se finaliza la descripción de todos los eventos del proceso se comprende con detenimiento evento por evento del mismo y da pie a implementar mejora continua en él.

    .bg-img-edit.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #583CB6")
      img.col-12.mx-auto(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 190px; margin-top: -2rem")
      p.py-4.mb-4.mb-md-0.col-12.col-md.mb-0.texto-blanco #[b ¡Importante!] La identificación de eventos en la logística del proceso es un instrumento táctico que facilita la descripción del cómo funciona el proceso a través de la caracterización de compendios primordiales que permiten la gestión y control del proceso.

    .d-flex.flex-wrap.align-items-center.mb-5.pb-5.pb-md-0
      .col-xl-8.order-2.order-xl-1.pe-xl-4
        p.mb-0 La caracterización permite diseñar protocolos de estrategias aplicables para el corto y largo plazo que cronológicamente den solución a necesidades detectadas en el diagnóstico, tiempo de ejecución, responsables, evidencias, indicadores de gestión se plasman en un plan de acción.
          br
          br
          |Con base en garantizar la calidad de la información de toda la gestión administrativa y logística, enmarcada en la reducción de la variabilidad y trazabilidad de los indicadores de gestión, se elaboran listas de chequeo permanentemente para verificar el cumplimiento de los objetivos.
          br
          br
          |El plan de acción se presenta como el pilar donde se condensan las mejores prácticas de la gerencia de los diferentes departamentos administrativos y de los diferentes líderes de soporte con el objetivo de que generen elementos para brindar recomendaciones y colaboren con el recurso humano en tomas de decisiones para mitigar acciones, gastos, eliminar eventualidades y mejorar la calidad; partiendo del equilibrio entre las actividades primarias de la cadena de valor y las actividades de soporte.
      img.mx-auto.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-26.svg" style="max-width: 400px")
    
    .bg-img-edit.mb-5.d-flex.flex-wrap.align-items-center(style="background-color: #F0BD51")
      img.col-12.mx-auto(src="@/assets/curso/temas/tema1/img-27.svg" style="max-width: 294px; margin-top: -5rem")
      p.py-5.mb-4.mb-md-0.col-12.col-md.mb-0.ps-md-4 #[b Recuerde…]
        br
        |Diseñar un excelente plan de acción arroja como resultado la disminución de la variabilidad de los procesos con el objetivo de reorientarlos, estabilizarlos y proveerlos de situaciones que los mantengan en línea, estructurar un sistema de gestión de la calidad es el fundamento de todas las buenas prácticas de manufactura y la prestación de servicios la calidad hoy en día en el mundo, es la pionera sostenible de las empresas, con el tiempo, estas estrategias metodológicas han sido extendidas y re direccionadas a todos los diferentes sectores que la industria posee al interior dando excelentes resultados.
    
    p.mb-5 Para clarificar el tema, se invita a visualizar la siguiente historia sobre el plan de acción que complementará lo visto:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
.bloque-texto-g-edit
  background: linear-gradient(90deg, rgba(240,189,81,1) 0%, rgba(240,189,81,1) 65%, rgba(250,235,205,1) 65%)
  .bloque-texto-g__img
    max-width: 400px
    right: 0
    left: auto
    background-size: 315px
    background-repeat: no-repeat
  .bloque-texto-g__texto
    width: 80%
    padding-right: 7rem !important
    min-height: 244px
    display: flex
    align-items: center
    margin-right: auto
  @media (max-width: 991px)
    background: linear-gradient(0deg, rgba(240,189,81,1) 0%, rgba(240,189,81,1) 65%, rgba(250,235,205,1) 65%)
    .bloque-texto-g__img
      right: 50%
      background-size: 300px
      transform: translate(50%)
    .bloque-texto-g__texto
      width: 100%
      padding-right: 1.5rem !important
      margin-top: 2rem
.card-row-2
  position: relative
  max-height: 160px
  height: 160px
  width: 100%
  padding-left: 65px
  max-width: 313px
  background-color: #E8E1FC
  margin-right: 5px
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    border-left: 60px solid white
    border-right: 60px solid transparent
    border-top: 80px solid transparent
    border-bottom: 80px solid transparent
  &::after
    content: ''
    position: absolute
    z-index: 2
    top: 0
    right: -120px
    border-left: 60px solid #E8E1FC
    border-right: 60px solid transparent
    border-top: 80px solid transparent
    border-bottom: 80px solid transparent
.card-row-1
  position: relative
  max-height: 160px
  height: 160px
  width: 100%
  padding-left: 65px
  max-width: 313px
  background-color: #D1C3FA
  margin-right: 5px
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    border-left: 60px solid white
    border-right: 60px solid transparent
    border-top: 80px solid transparent
    border-bottom: 80px solid transparent
  &::after
    content: ''
    position: absolute
    z-index: 2
    top: 0
    right: -120px
    border-left: 60px solid #D1C3FA
    border-right: 60px solid transparent
    border-top: 80px solid transparent
    border-bottom: 80px solid transparent
</style>
