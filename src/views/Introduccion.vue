<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .mt-5.p-4(style="background-color:#273A89;border-radius:4px;")
      .row
        .col-auto(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/intro1.png")
        .col(data-aos="fade-left" style="place-self:center;")
          p.mb-0.text-white En este componente formativo se estudiarán los principios básicos sobre los que se fundamenta el proceso de análisis de requisitos desde marcos de desarrollo de software tradicional y ágiles. También, introduce a diferentes formas (planillas y estándares) para realizar el proceso de documentación de requisitos.
    
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
