<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row 
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-10.col-md-9.col-lg-12 
          img(src="@/assets/curso/intro1.png")
      .col-lg-7(data-aos="fade-left")
        .p-4.h-100(style="background-color:#273A89;border-radius:12px;")
          p.text-white #[strong(style="background-color:#FFCE00;color:#12263F !important;padding:2px;") ¿Sabes qué es el análisis de requisitos?] Es un documento donde se describe lo que se debe hacer, es el estudio de las necesidades.
          p.mt-4.mb-0.text-white Es así como en el presente componente formativo, se estudiarán los principios básicos sobre los que se fundamenta el proceso de análisis de requisitos.
    
    .p-4.mt-4(style="background-color:#DCECFE;border-radius:12px;" data-aos="flip-up")
      p Conoceremos diferentes formas (planillas y estándares) para realizar el proceso de documentación de requisitos, así como diferentes metodologías ágiles que nos ayudarán en la especificación de requisitos.
      p.mt-4.mb-0 #[strong(style="color:#0F6BD2;") Bienvenido, y le deseamos muchos éxitos en el proceso de aprendizaje.]


  


    
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
