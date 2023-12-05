<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cajon-b.color-primario.edit-cajon-b.p-3.mb-5
      .d-flex
        img(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px")
        p.col.mb-0.ps-3 Las empresas hoy deben realizar un proceso de gestión de calidad constante que les permita identificar posibles fallos que en el momento se estén produciendo o que se puedan producir en el futuro, para definir mediante el diagnóstico empresarial el área o departamento en el cual se está presentando el problema para diseñar el plan de mejora continua, partiendo siempre de un conjunto herramientas que ofrecen información documentada. 
    
    p.mb-5 Por lo anterior, se invita a ver el siguiente video introductorio sobre la temática a tratar en el componente formativo #[b “El Diagnóstico y la aplicación de la información documentada en los sistemas de producción”.]

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
