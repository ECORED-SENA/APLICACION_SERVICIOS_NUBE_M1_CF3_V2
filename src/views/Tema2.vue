<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Especificación de requisitos
    
    .p-3.p-lg-4(style="background-color:#E1F6EF;border-radius:12px;")
      .row
        .col-auto(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/1.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 En esta sección se describen algunos estándares y/o técnicas que pueden ser usadas por las organizaciones para describir formalmente cada uno de los requisitos del sistema.
    
    Separador

    .titulo-segundo.mb-0(data-aos="zoom-in-right")
      h2#t_2_1 2.1 Estándar IEEE 830
    
    .cont_2_1.pt-5.pb-5
      p(data-aos="fade-right") Este estándar presenta un conjunto de prácticas recomendadas para la redacción de un documento de especificación de requerimientos mejor conocido como SRS. Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. #[strong(style="color:#0F6BD2;") A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).]
      .p-4.mt-5(style="background-color:#273A89;border-radius:12px;" data-aos="flip-up")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema2/3.svg" style="max-width:100px;")
          .col-lg.mb-4.mb-md-0.col-md-6
            h4.text-white Ejemplo de la estructura de una matriz de trazabilidad
            p.mb-0.text-small.text-white Este documento está dividido en secciones y cada una de ellas aborda aspectos particulares. A continuación, se describirá de forma general algunos de los elementos que conforman este documento (IEEE 830-1998).
          .col-md-auto.text-center(style="place-self:center;")
            a.boton.color-acento-botones(:href="obtenerLink('downloads/Ejemplo_estructura_matriz_trazabilidad.xlsx')" target="_blank")
              span(style="color:initial;") Descargar
              i.fas.fa-file-download(style="color:initial;")
      p.mt-4.fw-bold(data-aos="fade-right") Sumado a esto, se presenta la estructura base de un documento SRS, indicando cuáles son los apartados principales.
    
  

</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/2.png)
  background-size: cover
  background-position: top
</style>
