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

      .titulo-sexto.color-acento-contenido.mt-4(data-aos="zoom-in-down")
        h5 Tabla 6. 
        span Estructura base de un documento SRS
      
      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .h-100.bg-white.p-4(style="border:1px #273A89 solid;border-radius:20px;")
            h4.mb-0 1. Introducción
            p.mb-0 1.1. Propósito
            p.mb-0 1.2. Ámbito del sistema
            p.mb-0 1.3. Definiciones, Acrónimos y Abreviaturas
            p.mb-0 1.4. Referencias
            h4.mt-3.mb-0 2. Descripción general
            p.mb-0 2.1. Perspectiva del producto
            p.mb-0 2.2. Funciones del producto
            p.mb-0 2.3. Características de los usuarios
            p.mb-0 2.4. Restricciones
            p.mb-0 2.5. Suposiciones y dependencias
            h4.mt-3.mb-0 3. Requerimientos específicos
            p.mb-0 3.1. Interfaz
            p.mb-0 3.2. Requisitos funcionales
            p.mb-0 3.3. Requerimientos no funcionales
            p.mb-0 3.4. Otros requisitos
            h4.mt-3.mb-0 4. Apéndices
        .col-lg-8(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/4.png")
      .p-4.bg-white.mt-4(style="border-radius:12px;" data-aos="zoom-in")
        .row
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/5.svg")
          .col(style="place-self:center;")
            p.mb-0 #[strong Se sugiere revisar algunos ejemplos de proyectos, que se presentan sobre el diligenciamiento del formato SRS, los cuales se encuentran en el material complementario.]
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_2 2.2 Estándar IEEE 29148:2018
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#DEE1ED;border-radius:12px;")
          p Este estándar reemplaza los estándares IEEE 830, IEEE 1233, IEEE 1362, y contiene disposiciones para los procesos y productos relacionados con la ingeniería de requisitos para sistemas, productos y servicios de #[em software] a lo largo del ciclo de vida (Penzenstadler, 2021).
          figure.mt-4.text-end
            img(src="@/assets/curso/tema2/7.svg" style="max-width:90px;display:inline;")
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/6.png")
      .col-lg(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#DCECFE;border-radius:12px;")
          p Además, define la construcción de un buen requisito, proporciona atributos y características de los requisitos, y analiza la aplicación iterativa y recursiva del proceso de requisitos a lo largo del ciclo de vida. También proporciona orientación adicional en la aplicación de procesos de ingeniería y gestión de requerimientos relacionados con la ingeniería de requisitos al tiempo que define los elementos de información aplicables a la ingeniería de requisitos y su contenido.

    
  

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
