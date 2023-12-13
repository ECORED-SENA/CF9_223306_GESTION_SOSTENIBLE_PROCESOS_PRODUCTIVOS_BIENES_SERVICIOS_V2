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
        p.col.mb-0.ps-3 En la actualidad, las empresas deben realizar un proceso de gestión de calidad constante que les permita identificar posibles fallos en cualquier momento de su producción. Es así como definen, mediante el diagnóstico empresarial, el área o departamento en el cual se está presentando el problema y al cual se le diseña un plan de mejora continua, partiendo siempre de un conjunto de herramientas que ofrecen información documentada.
    
    p.mb-5.fw-bold(style="color: #583CB6") Tenga un acercamiento a los temas de estudio de este componente, chequeando el siguiente video, el cual contextualiza sobre los elementos generales y claves que se desarrollarán:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CPAZpC981GQ?si=LMgiOQ5dEoAT3iJZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. El diagnóstico y la aplicación de la información documentada en los sistemas de producción
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
