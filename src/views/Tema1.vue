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
        .col-lg-4.col-xl-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-md-5.col-lg-12.col-8
            img(src="@/assets/curso/tema1/1.png" style="z-index:1;")
        .col-lg-8.col-xl-8(data-aos="fade-left" style="place-self:center;")
          .cont_1_2.p-4.p-lg-0
            p.mb-0 El proceso de análisis de requisitos #[strong(style="color:#0F6BD2;") permite, principalmente, el estudio de las necesidades de los usuarios para definir requisitos del sistema por medio de la producción del documento de especificación de requisitos donde se describe lo que el sistema debe hacer], pero no el cómo. Así es como este proceso, además de involucrar un proceso de análisis, también requiere de la síntesis de la información existente. 

    p.mt-5(data-aos="fade-right" style="color:#0F6BD2;font-weight:bold;") A continuación, se describen algunas técnicas que pueden ser utilizadas para entender y ordenar los requisitos identificados para su posterior redacción en un artefacto formal dependiendo del marco de desarrollo de #[em(style="color:#0F6BD2;font-weight:bold;") software] utilizado.

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
          figure.m-auto.col-md-7.col-lg-12.col-8
            img(src="@/assets/curso/tema1/2.png")
      
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
          .col-lg(data-aos="fade-left")
            .h-100.text-white.p-4.p-lg-5.pt-4.pt-lg-4(style="background-color:#273A89;border-radius:10px;")
              .d-flex.justify-content-between
                div
                  figure
                    img(src="@/assets/curso/tema1/9.png" style="max-width:100px;display:inline;")
                div(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema1/8.svg" style="max-width:100px;display:inline;")
              p.mt-3.mb-0 Para usar adecuadamente esta técnica se requiere de un profundo conocimiento de todos los requerimientos definidos y si bien el proceso parece simple, se requiere de un gran esfuerzo por parte del equipo para situar a cada requerimiento en la posición correcta.
    
    .cont_titulo_decorativo.mt-3(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/6.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Técnica de puntos de historia y valor del negocio
    
    p(data-aos="fade-left") Esta consiste en realizar el proceso de priorización de acuerdo con factores como el esfuerzo y la opinión de los gerentes de proyecto o dueños de producto, los clientes, el equipo de desarrollo o incluso una combinación de los anteriores. El valor del negocio corresponde a un valor numérico que cuanto más alto sea, más valor representa para el cliente (Porfirio, 2021).

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-md-7.col-lg-12.col-8
          img(src="@/assets/curso/tema1/10.png")
      .col-lg-7(data-aos="fade-left")
        .p-4(style="background-color:#DCECFE;border-radius:12px;")
          p.mb-0 Usar solo el valor del negocio como elemento de priorización puede generar problemas ya que el valor asociado por el cliente a un requerimiento puede ser muy superfluo y, además, no considera detalles clave como el esfuerzo que se requiere para su desarrollo, por esta razón también se usa el valor de puntos de historia, que no es más que otro valor numérico asignado por el equipo de desarrolladores a cada requerimiento donde expresa una estimación de esfuerzo, cuanto más grande sea el número implica más esfuerzo requerido con miras a realizar el requerimiento.
        p.mt-4 Para lograr la priorización de los requerimientos, se debe realizar el cálculo del cociente obtenido a partir de los puntos de valor del negocio dividido entre los puntos de historia, quedando entonces una priorización donde estarán en los primeros lugares los requerimientos más sencillos de resolver por los desarrolladores y que tengan mayor interés por parte del cliente. #[strong(style="color:#0F6BD2;") A continuación se da un ejemplo].
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
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
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/11.svg")
            .col(style="place-self:center;")
              p.mb-0 Para determinar la prioridad final de un requerimiento, se utiliza una escala de colores que surge a partir de la multiplicación de los valores de las escalas de urgencia y de valor de negocio según la #[strong(style="color:#0F6BD2;") siguiente tabla:]
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-md-7.col-lg-12.col-8
          img(src="@/assets/curso/tema1/12.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Tabla 2. 
      span Referencia para la técnica urgente
    
    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal(style="background-color:#F6F6F6;color:#636363;") Nota: Tomado de Porfirio (2021).
        thead(style="border:0;")
        tbody
          tr
            td.fw-bold.text-center(style="border:1px #345382 solid;" rowspan="8" colspan="3") Valor del negocio
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 5
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 5
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 10
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 15
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 20
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#F37474;") 25
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 8
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 12
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 16
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 20
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 6
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 9
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 12
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFD574;") 15
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 6
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 8
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#FFF2AE;") 10
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 1
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 1
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#C5F5B9;") 5
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 1
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 2
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 3
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 4
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#E3EDF8;") 5
          tr
            td.text-center.fw-bold(style="border:1px #345382 solid;background-color:#F6F6F6;" colspan="6") Urgencia
    
    p.mt-4(data-aos="fade-right") Luego, se consideran los requerimientos de mayor prioridad que están en el sector de color rojo, después los de color naranja, seguido de los de color amarillo y, por último, los requerimientos del sector de color verde. Para entender mejor este estilo de priorización, observar el siguiente ejemplo:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Tabla 3. 
      span Ejemplo de aplicación técnica urgente

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal(style="background-color:#F6F6F6;color:#636363;") Tabla 3 - Ejemplo de aplicación técnica urgente
        thead(style="border:0;")
          tr(style="background-color:#FFCE00;")
            th.text-center(style="border:0;") Requerimientos
            th.text-center(style="border:0;") Valor del negocio
            th.text-center(style="border:0;") Urgencia
            th.text-center(style="border:0;") Sector
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R01
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center.fw-bold(style="border:0;background-color:#C5F5B9;") Verde
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R02
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 2
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center.fw-bold(style="border:0;background-color:#FFF2AE;") Amarillo
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R03
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center.fw-bold(style="border:0;background-color:#FF8B8B;") Rojo
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R04
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center.fw-bold(style="border:0;background-color:#FFF2AE;") Amarillo
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R05
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 5
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 4
            td.text-center.fw-bold(style="border:0;background-color:#FFD574;") Naranja
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R06
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center.fw-bold(style="border:0;background-color:#C5F5B9;") Verde
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R07
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 1
            td.text-center(style="border:0;border-right:1px #AFAFAF solid;") 3
            td.text-center.fw-bold(style="border:0;background-color:#C5F5B9;") Verde
    
    p.mt-4(data-aos="fade-right") Al realizar la multiplicación de los valores de negocio y el valor de la urgencia, se puede establecer en qué sector se encuentra cada requerimiento. Ahora bien, tomando en cuenta los valores del ejemplo de la tabla anterior, se puede concluir que el primer requerimiento a abordar sería el R03 que está en el sector de color rojo, luego el requerimiento R05, que está en el sector de color naranja, y así sucesivamente.

    .cont_titulo_decorativo.mt-5(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/6.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Técnica MoSCoW
    
    p(data-aos="fade-right") Esta técnica se basa en la asignación de etiquetas a cada requerimiento, y las disponibles se relacionan a continuación:

    .row.mt-5
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover1(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema1/18.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema1/13.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema1/14.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 M: indica una funcionalidad que debe estar (#[em Must]).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover1(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema1/18.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema1/13.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema1/15.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 S: indica una funcionalidad que debería estar (#[em Should]).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover1(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema1/18.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema1/13.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema1/16.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 C: indica una funcionalidad que podría estar (#[em Could]).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover1(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover1
              img(src="@/assets/curso/tema1/18.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover2(style="display:none;")
              img(src="@/assets/curso/tema1/13.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema1/17.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-3 W: indica una funcionalidad que no estará por ahora, de pronto más adelante (#[em Wont]).
    
    p.mt-4(data-aos="fade-right") Los requerimientos son priorizados utilizando el siguiente orden: primero los que tienen etiqueta #[strong(style="color:#0F6BD2;") M], luego los requerimientos con etiqueta #[strong(style="color:#0F6BD2;") S], después aquellos con #[strong(style="color:#0F6BD2;") C] y, finalmente, los etiquetados como #[strong(style="color:#0F6BD2;") W].

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-md-7.col-lg-12.col-8
          img(src="@/assets/curso/tema1/19.svg")
      .col-lg-9(data-aos="fade-left")
        .p-4(style="background-color:#E1F6EF;border-radius:12px;")
          p.mb-0 Esta técnica requiere de un proceso de consenso sobre el significado de cada una de las etiquetas asignables a cada requerimiento. Los requisitos de tipo #[strong(style="color:#0F6BD2;") M] son aquellos obligatorios y que, de no ser abordados, implicaría directamente el fracaso; es importante entonces acordar qué se puede entregar y que sea útil, adicionalmente deben formar parte de un conjunto coherente, ya que si, sencillamente se seleccionan todos los requerimientos de tipo #[strong(style="color:#0F6BD2;") M], automáticamente todos se transforman en requerimientos de tipo #[strong(style="color:#0F6BD2;") M] y se pierde la dinámica de la técnica.
        .row.mt-4
          .col-auto.d-none.d-lg-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/20.svg")
          .col(style="place-self:center;")
            p.mb-0 Normalmente el proceso de desarrollo de software es iterativo e incremental por lo que dependiendo del momento en que se encuentre un requerimiento, que ahora puede ser #[strong(style="color:#0F6BD2;") W], en la siguiente iteración puede asumir un valor de #[strong(style="color:#0F6BD2;") M]. 
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/6.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Juicio de expertos
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Es una técnica basada principalmente en función de la complejidad y la exactitud en los resultados, básicamente consiste en realizar el proceso de priorización utilizando como base la opinión del gerente de proyecto o dueño de producto, o de algún #[strong(style="color:#0F6BD2;font-style:italic;") stakeholder] con conocimientos en la industria asociada al producto a desarrollar (Porfirio, 2021).
        .p-4.mt-4(style="background-color:#DCECFE;border-radius:12px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/21.svg")
            .col(style="place-self:center;")
              p.mb-0 Este tipo de técnica funciona muy bien para proyectos pequeños con un dueño de negocio que tiene mucho conocimiento del problema y de la solución que necesita para resolverlo; sin embargo, se debe utilizar esta técnica con cuidado ya que se basa en una visión sesgada del negocio.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure.col-8.col-md-7.col-lg-12.m-auto
          img(src="@/assets/curso/tema1/22.png")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema1/6.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4(style="padding-top:7px;") Matriz de priorización
    
    p(data-aos="fade-right") Esta técnica consiste en construir una tabla donde cada requerimiento es valorado en una escala de #[strong(style="color:#0F6BD2;") 0] a #[strong(style="color:#0F6BD2;") 10] o de #[strong(style="color:#0F6BD2;") 0] a #[strong(style="color:#0F6BD2;") 100] para cada dimensión alineada con los objetivos del producto. Normalmente cada dimensión tiene un peso porcentual, de modo que cada requerimiento tendrá un valor final a partir de la sumatoria de la multiplicación de cada puntuación por el peso de cada dimensión (Porfirio, 2021).

    p.mt-4(data-aos="fade-left") #[strong(style="color:#0F6BD2;") Por ejemplo, se debe considerar la siguiente tabla:]

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Tabla 4. 
      span Ejemplo de aplicación técnica de matriz de priorización

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal.mt-2(style="background-color:#F6F6F6;color:#636363;") Tabla 4 - Ejemplo de aplicación técnica de matriz de priorización
        thead(style="border:0;")
          tr
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;" rowspan="2") Requerimiento
            th.text-center(style="border:0;background-color:#FFA726;border-right:1px #B58F19 solid;")
            th.text-center(style="border:0;background-color:#FFA726;border-right:1px #B58F19 solid;") Criterios
            th.text-center(style="border:0;background-color:#FFA726;border-right:1px #B58F19 solid;") 
            th.text-center.text-white(style="border:0;background-color:#26A69A;border-right:1px #B58F19 solid;") Resultado
            th.text-center(style="border:0;background-color:#FFCA28;" rowspan="2") Ranking
          tr
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") Conversión #[br] 30%
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") Satisfacción de #[br] usuario 40% 
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") Retención #[br] 30%
            th.text-center(style="border:0;background-color:#FFCA28;border-right:1px #B58F19 solid;") 100%
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R01
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 3
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 8
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4,8
            td.text-center(style="border:0;") 2
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R02
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 6
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 3
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4,3
            td.text-center(style="border:0;") 7
          tr(style="background-color:#F6F6F6;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R03
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 8
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 7
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 6
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 7
            td.text-center(style="border:0;") 1,8
          tr(style="background-color:#fff;")
            td.fw-bold.text-center(style="border:0;border-right:1px #B58F19 solid;") R04
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 2
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 4
            td.text-center(style="border:0;border-right:1px #B58F19 solid;") 3,2
            td.text-center(style="border:0;") 1
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        p Suponiendo las dimensiones de conversión con un peso porcentual del 30%, la satisfacción del cliente con un peso porcentual del 40% y la retención de clientes con peso porcentual del 30%, cada uno de los requerimientos (R01-R04) son evaluados en una escala de 0 a 10, a los cuales se les aplica el cálculo de acuerdo con el valor porcentual de cada dimensión evaluada y el resultado se obtendría de la sumatoria de los valores parciales de cada dimensión, con lo cual los mayores valores totales obtenidos serán priorizados sobre los de menor valor.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.m-auto.col-md-7.col-lg-12.col-7
          img(src="@/assets/curso/tema1/23.png")
      .col-lg(data-aos="zoom-in")
        .p-4.h-100(style="background-color:#E1F6EF;border-radius:12px;")
          p Esta técnica sigue siendo muy subjetiva al igual que la técnica de juicio de expertos, aunque quedan claros cuáles son los criterios de evaluación utilizados para determinar la prioridad de los requisitos.
          figure.text-end.mb-0
            img(src="@/assets/curso/tema1/24.svg" style="display:inline;max-width:60px;")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2 Matriz de trazabilidad 
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/25.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#DCECFE;border-radius:12px;")
          p.mb-0 La matriz de trazabilidad es una herramienta que permite alinear los requisitos del proyecto con los logros de los objetivos, es una tabla que relaciona cada uno de los requerimientos con el entregable solicitado. Es decir, permite identificar qué resultado se alcanza con cada requisito y, a la vez, permite visualizar qué requisitos son necesario cumplir para determinado entregable (Pantaleo, 2018).
        p.mt-4 Este es un instrumento clave para el responsable del proyecto, en especial en el proceso de seguimiento y control de cambios, ya que permite analizar qué requerimientos, eventualmente, convendría modificar, eliminar o añadir; así, se puede ajustar la planificación de tareas pendientes del proyecto. También permite identificar inconsistencias entre los requerimientos y los beneficios que se esperan alcanzar, tener una visualización rápida de los requisitos que han sido abordados y cuáles están pendientes por realizar y, por lo tanto, qué entregables están próximos a producirse y cuáles todavía requieren de mayor tiempo.
        p.mt-4 La estructura de la matriz de trazabilidad se puede construir en una hoja de cálculo, en ella se relacionan todos los requisitos y las metas a alcanzar junto con una serie de valores complementarios que aportan información y coherencia a los vínculos generados.
    
    p.mt-4(data-aos="fade-right") Cada organización es responsable de adaptar la matriz de correlación a sus necesidades particulares; en el siguiente recurso se propone el contenido base de una matriz de correlación dividida por secciones.

    TabsC.color-primario.mt-5
      .py-3.py-md-4(titulo="Identificación")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema1/27.svg')
          .col-md-6.col-lg-8.col-xl-9
            h4(style="color:#0F6BD2;") Identificación
            p #[strong Identificador:] código único para cada requisito.
            p #[strong Código jerárquico:] código que permite categorizar cada grupo de requisitos.
            p #[strong Descripción:] texto explicativo del requerimiento.
            p #[strong Tipo:] categoría del requisito (requerimiento de negocio, requerimiento de los interesados, funcionales y no funcionales, requerimientos del proyecto, requerimiento de calidad).
      .py-3.py-md-4(titulo="Estado")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema1/28.svg')
          .col-md-6.col-lg-8.col-xl-9
            h4(style="color:#0F6BD2;") Estado
            p #[strong Versión:] versión del requerimiento (importante para el control de cambios).
            p #[strong Estado:] activo, cancelado, diferido, agregado, aprobado, asignado o completado.
            p #[strong Fecha de estado:] momento en el que se realizó la última modificación del estado.
            p #[strong Responsable:] persona encargada del requisito.
            p #[strong Prioridad:] escalas de prioridad usada en el proyecto (alta, media, baja; 1, 2, 3, 4, 5). #[br] Otras características: cualquier otro campo de valor para la organización.
      .py-3.py-md-4(titulo="Objetivo")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-4.col-xl-3
            figure
              img(src='@/assets/curso/tema1/29.svg')
          .col-md-6.col-lg-8.col-xl-9
            h4(style="color:#0F6BD2;") Objetivo
            p #[strong Objetivo:] objetivo que pretende alcanzar el requerimiento.
            p #[strong Necesidad de negocio:] necesidad de negocio que se pretende cubrir con el objetivo del proyecto y por ende con el requisito.
            p #[strong Entregable:] producto.
    
    p.mt-5(data-aos="fade-right") A continuación, se muestra el ejemplo de la estructura en Excel de una matriz de trazabilidad.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Tabla 5. 
      span Ejemplo de la estructura de una matriz de trazabilidad

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table.tabla_1
        caption.fw-normal.mt-2(style="background-color:#F6F6F6;color:#636363;") Nota: Tomado de Pantaleo (2018).
        thead(style="border:0;")
          tr
            th.text-center(style="border:0;background-color:#FFA726;border-right:2px white solid;border-bottom:2px white solid;" colspan="4") IDENTIFICACIÓN
            th.text-center(style="border:0;background-color:#4DD0E1;border-right:2px white solid;border-bottom:2px white solid;" colspan="4") ESTADO
            th.text-center(style="border:0;background-color:#FFA726;border-right:2px white solid;border-bottom:2px white solid;" colspan="3") CARACTERÍSTICAS
            th.text-center(style="border:0;background-color:#4DD0E1;border-bottom:2px white solid;" colspan="3") OBJETIVO
        tbody
          tr(style="background-color:#FFCA28;")
            td.text-center(style="border:0;font-size:10px;") ID
            td.text-center(style="border:0;font-size:10px;") Código #[br] jerárquico 
            td.text-center(style="border:0;font-size:10px;") Descripción
            td.text-center(style="border:0;font-size:10px;border-right:1px #AFAFAF solid;") Tipo
            td.text-center(style="border:0;font-size:10px;") Versión
            td.text-center(style="border:0;font-size:10px;") Estado 
            td.text-center(style="border:0;font-size:10px;") Fecha de estado
            td.text-center(style="border:0;font-size:10px;border-right:1px #AFAFAF solid;") Responsable
            td.text-center(style="border:0;font-size:10px;") Prioridad
            td.text-center(style="border:0;font-size:10px;") Complejidad
            td.text-center(style="border:0;font-size:10px;border-right:1px #AFAFAF solid;") Grado de #[br] cumplimiento
            td.text-center(style="border:0;font-size:10px;") Objetivo
            td.text-center(style="border:0;font-size:10px;") Necesidad del #[br] negocio
            td.text-center(style="border:0;font-size:10px;") Entregable
          tr(style="background-color:#F6F6F6;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;")
          tr(style="background-color:#fff;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;")
          tr(style="background-color:#F6F6F6;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;border-right:1px #AFAFAF solid;")
            td.p-3(style="border:0;")
    
    p.mt-5(data-aos="fade-right") Cada organización es responsable de adaptar la matriz de correlación a sus necesidades particulares; en el siguiente recurso se propone el contenido base de una matriz de correlación dividida por secciones.
          
    .p-4.mt-5(style="background-color:#273A89;border-radius:12px;" data-aos="flip-up")
      .row
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema1/30.svg" style="max-width:100px;")
        .col-lg.mb-4.mb-md-0.col-md-6
          h4.text-white Ejemplo de la estructura de una matriz de trazabilidad
          p.mb-0.text-small.text-white Al construir una matriz de trazabilidad se deben usar los campos que se consideren útiles para el proyecto, pues no todos los proyectos son iguales y la estructura definida para uno puede no resultar conveniente para otro proyecto. Cuando se usa esta matriz debe permanecer actualizada a lo largo del ciclo de vida de construcción del proyecto. Descargue el modelo de matriz como tabla base para una estructuración de trazabilidad.
        .col-md-auto.text-center(style="place-self:center;")
          a.boton.color-acento-botones(:href="obtenerLink('downloads/Ejemplo_estructura_matriz_trazabilidad.xlsx')" target="_blank")
            span(style="color:initial;") Descargar
            i.fas.fa-file-download(style="color:initial;")
    
    p.mt-5(data-aos="fade-right") Al construir una matriz de trazabilidad se deben usar los campos que se consideren útiles para el proyecto, pues no todos los proyectos son iguales y la estructura definida para uno puede no resultar conveniente para otro proyecto. #[strong(style="color:#0F6BD2;") Cuando se usa, esta matriz debe permanecer actualizada a lo largo del ciclo de vida de construcción del proyecto.]

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_3 1.3 Descomposición funcional
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        p Esta estrategia consiste en definir los requerimientos como una relación de entradas y salidas de un sistema. Normalmente, estos requerimientos se definen de manera muy general y poco detallada y luego empieza a descomponerse en funcionalidades y subfuncionalidades un poco más detallados con el ánimo de analizarlas individualmente hasta lograr un nivel de detalle adecuado para el proyecto. A esta estructura se le conoce como #[em top-down]; el resultado es una estructura jerárquica (Pantaleo, 2018).
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure.m-auto.col-md-7.col-lg-12.col-7
          img(src="@/assets/curso/tema1/31.png")
      .col-lg(data-aos="zoom-in")
        .p-4.h-100(style="background-color:#DCECFE;border-radius:12px;")
          p La descomposición funcional se realiza, por lo general, para identificar y entender los componentes o partes que constituyen un todo; en este proceso es vital identificar las interacciones entre componentes. #[strong(style="color:#0F6BD2;") A continuación, se expone un ejemplo gráfico sobre esta descomposición funcional.]

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Figura 1. 
      span Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos (fragmento)
    
    .cont_1_4.pt-5.pb-5
      .col-xl-10.m-auto
        figure
          img(src="@/assets/curso/tema1/33.svg" data-aos="zoom-in-up" alt="Ejemplo de descomposición funcional de un sistema de gestión comercialización de productos")





    
      
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
  height: 130%
  top: -14%
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
.cont_hover1:hover
  background-color: #273A89 !important
.cont_hover1:hover *
  color: #fff !important
.cont_hover1:hover .cont_image_hover1
  display: none !important
.cont_hover1:hover .cont_image_hover2
  display: block !important
.tabs-c__tab--active span
  font-weight: bold
.tabs-c__header
  margin-bottom: 0px
.tabs-c__content-item
  padding-top: 25px
  background: url(../assets/curso/tema1/26.png)
  background-size: cover
  background-position: center
.tabla_1 td
  word-break: break-word
.cont_1_4
  background: url(../assets/curso/tema1/32.png)
  background-size: cover
  background-position: center
@media screen and (max-width: 992px)
  .cont_1_1:before
    height: 100%
  .cont_1_2:before
    width: 100%
    height: 100%
    left: 0
    top: 0
</style>
