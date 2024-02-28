<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mt-5.p-4(style="background-color:#273A89;border-radius:4px;")
      .row
        .col-auto(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/intro1.png")
        .col(data-aos="fade-left" style="place-self:center;")
          p.text-white ¿Sabes qué es el análisis de requisitos? Es un documento donde se describe lo que se debe hacer, es el estudio de las necesidades.
          p.mt-4.text-white Es así como en el presente componente formativo, se estudiarán los principios básicos sobre los que se fundamenta el proceso de análisis de requisitos.
          p.mt-4.text-white Conoceremos diferentes formas (planillas y estándares) para realizar el proceso de documentación de requisitos, así como diferentes metodologías ágiles que nos ayudarán en la especificación de requisitos.
          p.mt-4.text-white.mb-0 Bienvenido, y le deseamos muchos éxitos en el proceso de aprendizaje.


    
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
