<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Técnicas de análisis de requisitos

    .cont_1_1.p-4.p-lg-5
      .row
        .col-lg-4.col-xl-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-md-5.col-lg-12
            img(src="@/assets/curso/tema1/1.png" style="z-index:1;")
        .col-lg-8.col-xl-9(data-aos="fade-left" style="place-self:end;")
          .cont_1_2.p-4
            p.mb-0 El proceso de análisis de requisitos #[strong(style="color:#0F6BD2;") permite, principalmente, el estudio de las necesidades de los usuarios para definir requisitos del sistema por medio de la producción del documento de especificación de requisitos donde se describe lo que el sistema debe hacer], pero no el cómo. Así es como este proceso, además de involucrar un proceso de análisis, también requiere de la síntesis de la información existente. 

    p.mt-5(data-aos="fade-right" style="color:#0F6BD2;font-weight:bold;") A continuación, se describen algunas técnicas que pueden ser utilizadas para entender y ordenar los requisitos identificados para su posterior redacción en un artefacto formal dependiendo del marco de desarrollo de software utilizado.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1 Priorización de requisitos
    
    p(data-aos="fade-right") Esta es una actividad clave para el éxito en la construcción de producto de software y su objetivo es maximizar el valor entregado por el proyecto a sus clientes; es decir, identificar cuáles requisitos se deben priorizar tomando en cuenta factores como la complejidad, las dependencias y el retorno de inversión a los clientes, entre otros indicadores.

    .cont_1_3.mt-4.pb-5.pt-4
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4(style="background-color:#ADD3FD;border-radius:15px;")
            p.mb-0 La priorización de requisitos, por lo general, es responsabilidad de los gerentes del proyecto o dueños de producto dependiendo del tipo de enfoque utilizado; sin embargo, se requiere de la participación activa de los analistas de requisitos, ya que si bien es el cliente o su representante quien determina cuáles requisitos son más importantes para su negocio, el analista debe asesorar, facilitar e informarle al cliente para no darle prioridad superior a requisitos que tienen otras dependencias no resueltas; por ejemplo, no se podría priorizar un requerimiento asociado a un carrito de compras sin antes tener resuelto los requerimientos asociados al registro y consulta de productos.
          .p-4.mt-4(style="background-color:#fff;border-radius:15px;")
            p.mb-0 El proceso de priorización es continuo, es decir, la prioridad de un requisito puede variar a lo largo del proyecto, así como los requisitos también pueden variar a lo largo del mismo. La priorización no es un proceso sencillo, por lo que, además de conocer las diferentes técnicas, es importante la toma de decisiones y estas, en el marco de un proyecto, siempre van a generar inconformidades, pero si no se decide respecto a la priorización de requisitos es como si no se fundamentaran las bases sobre las que el equipo de desarrollo va a construir el sistema.
            figure.text-end.mt-2
              img(src="@/assets/curso/tema1/4.svg" style="max-width:100px;display:inline;")
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/2.png")
      .row.mt-4
        .col-auto(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/5.svg")
        .col(data-aos="fade-left")
          p.mb-0 El proceso de priorización es continuo, es decir, la prioridad de un requisito puede variar a lo largo del proyecto, así como los requisitos también pueden variar a lo largo del mismo. La priorización no es un proceso sencillo, por lo que, además de conocer las diferentes técnicas, es importante la toma de decisiones y estas, en el marco de un proyecto, siempre van a generar inconformidades, pero si no se decide respecto a la priorización de requisitos es como si no se fundamentaran las bases sobre las que el equipo de desarrollo va a construir el sistema.
      
      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema1/6.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4(style="padding-top:7px;") Técnica de clasificación de lista 
      
      p(data-aos="fade-left") Esta técnica de clasificación no requiere ningún tipo de entrenamiento o preparación, ya que es una forma de priorización natural que se usa en la vida cotidiana. Este tipo de priorización simple es una de las más utilizadas y consiste en darle un valor numérico a cada requerimiento iniciando por el número 1 y continuando de forma sucesiva con 2, 3 y hasta el número total de requisitos definidos (Porfirio, 2021).

      .col-xl-10.m-auto.mt-5
        .row
          .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
            .h-100.text-white.p-4.p-lg-5.pt-4.pt-lg-4(style="background-color:#273A89;border-radius:10px;")
              .d-flex.justify-content-between
                div
                  figure
                    img(src="@/assets/curso/tema1/7.png" style="max-width:100px;display:inline;")
                div(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema1/8.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Esta técnica tiene la ventaja de que solo puede existir un número 1, lo cual evita muchos problemas por parte de los interesados o responsables del negocio que quieren que todos los requerimientos tengan prioridad 1; adicionalmente, aporta claridad y evita confusiones. Cada elemento se prioriza con relación al resto de elementos, lo que simplifica el proceso.
          .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
            .h-100.text-white.p-4.p-lg-5.pt-4.pt-lg-4(style="background-color:#273A89;border-radius:10px;")
              .d-flex.justify-content-between
                div
                  figure
                    img(src="@/assets/curso/tema1/9.png" style="max-width:100px;display:inline;")
                div(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema1/8.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Para usar adecuadamente esta técnica se requiere de un profundo conocimiento de todos los requerimientos definidos y si bien el proceso parece simple, se requiere de un gran esfuerzo por parte del equipo para situar a cada requerimiento en la posición correcta.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/6.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Técnica de puntos de historia y valor del negocio
    
    p(data-aos="fade-left") Esta consiste en realizar el proceso de priorización de acuerdo con factores como el esfuerzo y la opinión de los gerentes de proyecto o dueños de producto, los clientes, el equipo de desarrollo o incluso una combinación de los anteriores. El valor del negocio corresponde a un valor numérico que cuanto más alto sea, más valor representa para el cliente (Porfirio, 2021).

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/10.png")
      .col-lg-7(data-aos="fade-left")
        .p-4(style="background-color:#DCECFE;border-radius:12px;")
          p.mb-0 Usar solo el valor del negocio como elemento de priorización puede generar problemas ya que el valor asociado por el cliente a un requerimiento puede ser muy superfluo y, además, no considera detalles clave como el esfuerzo que se requiere para su desarrollo, por esta razón también se usa el valor de puntos de historia, que no es más que otro valor numérico asignado por el equipo de desarrolladores a cada requerimiento donde expresa una estimación de esfuerzo, cuanto más grande sea el número implica más esfuerzo requerido con miras a realizar el requerimiento.
        p.mt-4 Para lograr la priorización de los requerimientos, se debe realizar el cálculo del cociente obtenido a partir de los puntos de valor del negocio dividido entre los puntos de historia, quedando entonces una priorización donde estarán en los primeros lugares los requerimientos más sencillos de resolver por los desarrolladores y que tengan mayor interés por parte del cliente. #[strong(style="color:#0F6BD2;") A continuación se da un ejemplo].
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-up")
      h5 Tabla 1. 
      span Ejemplo de aplicación técnica de puntos de historia y valor del negocio
    
    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        thead(style="border:0;")
          tr(style="background-color:#FFCE00;")
            th.text-center(style="border:0;") Requerimientos
            th.text-center(style="border:0;") Valor del negocio
            th.text-center(style="border:0;") Puntos de historia
            th.text-center(style="border:0;") Cociente
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R01
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 6
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;") 2
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R02
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 7
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center(style="border:0;") 7
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R03
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 9
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;") 1,8
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R04
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;") 1
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R05
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 2
            td.text-center(style="border:0;") 2
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R06
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center(style="border:0;") 1,25
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R07
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 2
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 8
            td.text-center(style="border:0;") 0,25
    
    p.mt-4(data-aos="fade-right") Si se trata de un proyecto de siete (7) requerimientos con los valores de negocio, puntos de historia y cocientes como se describe en la tabla anterior, al realizar el proceso de priorización quedaría en el primer lugar el requerimiento R02 ya que tiene el cociente más alto; es decir, representa un requerimiento fácil de construir para el grupo de desarrolladores y, adicionalmente, tiene un alto valor de negocio para el cliente; luego, en el segundo lugar, el requerimiento R01 y R05 y así sucesivamente se registran las prioridades de acuerdo con el valor del cociente de mayor a menor.

    .cont_titulo_decorativo.mt-5(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/6.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Técnica urgente
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Aquí se utiliza una tabla de dos dimensiones, donde la horizontal estará determinada por el valor de la urgencia en el requerimiento, el cual corresponde a un valor numérico entre 1 y 5, donde un valor de 5 implica la mayor urgencia y 1 que no hay tanto apuro en el desarrollo de requerimiento; y la dimensión vertical estará determinada por el valor del negocio, solo que esta vez, a diferencia de la técnica anterior, el valor del negocio también se rige por una escala de 1 a 5, siendo 5 el de mayor valor de negocio posible para un requerimiento (Porfirio, 2021).
        .p-3.p-lg-4.mt-4(style="background-color:#E1F6EF;border-radius:12px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/11.svg")
            .col
              p.mb-0 Para determinar la prioridad final de un requerimiento, se utiliza una escala de colores que surge a partir de la multiplicación de los valores de las escalas de urgencia y de valor de negocio según la #[strong(style="color:#0F6BD2;") siguiente tabla:]
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/12.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-up")
      h5 Tabla 2. 
      span Referencia para la técnica urgente
          






    
      
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 100%
  height: 80%
  bottom: 0
  background-color: #BAE9D9
  left: 0
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 117%
  height: 140%
  top: -24%
  background-color: #fff
  left: -15%
  z-index: 0
  border-radius: 10px
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  top: 15%
  bottom: 15%
  background: url(../assets/curso/tema1/3.png)
  background-size: cover
  background-position: top
@media screen and (max-width: 992px)
  .cont_1_1:before
    height: 100%
  .cont_1_2:before
    width: 100%
    height: 100%
    left: 0
    top: 0
</style>
