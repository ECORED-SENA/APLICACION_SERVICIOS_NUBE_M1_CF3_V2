<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="Imagen decorativa")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Técnicas de análisis de requisitos
        p.mb-4 Afianzar algunos de los conceptos más importantes asociados al proceso de priorización de requisitos.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad_01/story.html')" target="_blank")
                span Emparejamiento
                i.fas.fa-puzzle-piece
    
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
