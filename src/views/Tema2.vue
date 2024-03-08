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
            a.boton.color-acento-botones(:href="obtenerLink('downloads/Infografia_EstandarIEEE830.pdf')" target="_blank")
              span(style="color:initial;") Descargar
              i.fas.fa-file-download(style="color:initial;")
      p.mt-4.fw-bold(data-aos="fade-right") Sumado a esto, se presenta la estructura base de un documento SRS, indicando cuáles son los apartados principales.

      .titulo-sexto.color-acento-contenido.mt-4(data-aos="zoom-in-down")
        h5 
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
    
    .cont_2_2.pb-5
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
      p.mt-5.fw-bold(data-aos="fade-right") El estándar IEEE 29148:2018 está estructurado de la siguiente forma:
      .row.mt-5
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 1
              | Introducción, resumen y tabla de contenido.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 2
              | Propósito, alcance del estándar, generalidades.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 3
              | Explicación de los otros estándares que lo conforman.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 4
              | Referencias a normas que lo conforman.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 5
              | Clarificación de la terminología, lo que es muy valioso para cuando se quiere establecer nuevos procesos de ingeniería de requerimientos en una empresa.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 6
              | Clarificación de los conceptos y procesos.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 7
              | Explicación y contenido de los ítems de información que vienen a través de la especificación de requerimientos o que debemos considerar incluir en la especificación de requerimientos.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 8
              | Anexos adicionales para mayor detalle.
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/9.svg")
      p.mt-5(data-aos="fade-right") Esta norma propone un listado de requerimientos mínimos los cuales son la base de la especificación de requerimientos; en ese sentido, se proponen los siguientes tipos de requerimientos del sistema:
      .row.mt-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/10.svg")
        .col-lg-7(data-aos="fade-left")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 1
              div Requerimientos funcionales: representan necesidades de los interesados del #[em software].
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 2
              | Requerimientos de usabilidad: requerimientos que son utilizados directamente por los involucrados en la solución (requerimientos de uso).
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 3
              | Requerimientos de desempeño: disponibilidad de servicios y procesos transaccionales.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 4
              div Interfaces del sistema: interacción entre personas con el #[em software].
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 5
              | Operaciones del sistema.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 6
              | Modos y estados del sistema.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 7
              div Características físicas (#[em hardware]).
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 8
              | Condiciones del ambiente (operativas y operacionales).
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 9
              | Seguridad del sistema.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 10
              | Manejo de la información.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 11
              div Políticas y regulación: normas y estándares que fundamenta el #[em software].
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 12
              | Ciclo de vida del sistema: establece las etapas y duración del desarrollo y uso en producción.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_3 2.3 La especificación de requisitos a través de marcos de trabajo ágiles
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Los marcos de trabajo ágiles promueven la comunicación oral sobre la documentación exhaustiva en la mayoría de los procesos del ciclo de vida, particularmente en los procesos de identificación de necesidades y diseño. Sin embargo, uno de los artefactos presentes para el modelado de requerimientos son las historias de usuario.
        .p-4.mt-4(style="border-radius:12px;background-color:#DCECFE;")
          .row
            .col-lg-auto.col-md-12.col-12.mb-4.mb-lg-0(style="place-self:center;")
              figure.col-3.m-auto.col-lg-12
                img(src="@/assets/curso/tema2/11.svg")
            .col-lg(style="place-self:center;")
              p.mb-0 Las historias de usuario son una explicación general e informal de una función del #[em software] escrita desde la perspectiva del usuario final o cliente. Permiten describir de una manera muy breve un requerimiento, estimar prioridades, alcance y tiempo de realización (Rivadeneira, 2014). En la siguiente tabla, se puede observar la estructura base de un documento de historia de usuario.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/12.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5
      span #[b Tabla 6.] Estructura base de un documento de historia de usuario

    .tabla-a.color-acento-botones.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal.mt-2(style="background-color:#F6F6F6;color:#636363;") Nota: Tomado de Rivadeneira (2014).
        thead(style="border:0;")
          tr
            th.text-center(style="border:0;background-color:#FFCE00;" colspan="2") Historia de usuario
        tbody
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Número: #
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Nombre de la historia de usuario:
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Usuario:
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Prioridad:
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;") Puntos estimados:
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Descripción: 
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Observaciones: 
          tr(style="background-color:#F6F6F6;")
            td.fw-bold(style="border:0;border: 1px #AFAFAF solid;" colspan="2") Criterios de aceptación:
    
    p.mt-5(data-aos="fade-right") Las historias de usuario tienen varios beneficios respecto a otros instrumentos de redacción de requerimientos, entre los cuales se pueden listar:

    .row.mt-4
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover21
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover22(style="display:none;")
              img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema2/13.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias de usuario se centran en solucionar problemas a usuarios reales.

      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover21
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover22(style="display:none;")
              img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema2/14.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias de usuario permiten la colaboración, ya que como su descripción es corta se necesita que el equipo colabore para decidir cómo dar solución a la historia para cumplir con la necesidad expresada por el usuario.

      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover21
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover22(style="display:none;")
              img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema2/15.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias impulsan la creatividad, ya que fomentan que el equipo piense de forma crítica y creativa sobre cómo solucionar de la mejor manera el objetivo.

      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
          .text-end 
            figure.cont_image_hover21
              img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
            figure.cont_image_hover22(style="display:none;")
              img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
          .text-center 
            figure
              img(src="@/assets/curso/tema2/16.svg" style="max-width:100px;display:inline;")
          p.text-center.mb-0.mt-1 Las historias de usuario motivan, pensar en la mejor solución para una problemática particular representan retos y pequeñas victorias para el equipo.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_4 2.4 Scrum y la especificación de requisitos
    
    p(data-aos="fade-left") El marco de trabajo Scrum está soportado en un proceso de construcción iterativo e incremental evolutivo, en el que se identifican tres roles principales: el equipo de trabajo (#[em team]) conformado por los desarrolladores, diseñadores, personal de calidad y de infraestructura requerido para la construcción del producto de #[em software]; el scrum master que realizan funciones parecidas a las de un director de proyecto, pero más enfocados en garantizar que el equipo de trabajo tenga todas las herramientas y recursos necesarios para el desarrollo de su trabajo; y, finalmente, el dueño del producto (#[em product owner]) que se convierte en un representante del cliente y quien es el único encargado de la gestión de requisitos del proyecto (#[em ScrumStudy], 2021). En el siguiente video se explica un poco más sobre el Scrum y la especificación de los requisitos.

    figure.mt-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yGtQE5dNdnk" title="Scrum y la especificación de requisitos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mt-3(style="background-color:;") Video: Scrum y la especificación de requisitos
      
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        figure.m-auto.col-5.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/19.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#E1F6EF;border-radius:12px;")
          p #[strong(style="color:#0F6BD2;") Scrum] establece el concepto de #[strong(style="color:#0F6BD2;font-style:italic;") sprint] para referirse a una iteración que contempla tiempos fijos entre 2 y 4 semanas dependiendo del equipo de trabajo, durante este tiempo se incluye la planeación del #[strong(style="color:#0F6BD2;font-style:italic;") sprint], donde se definen los requerimientos a desarrollar en ese periodo de tiempo, una fase de construcción del producto y, finalmente, un proceso de despliegue para poder hacer la respectiva demostración de lo construido al final de iteración en reuniones de revisión; en este marco de trabajo se redefine el concepto de requerimiento hecho y normalmente va mucho más allá de construir el código, por lo general, se incluyen procesos de validación con pruebas unitarias y pruebas de integración.
          p.mt-4 El artefacto mediante el cual se condensan todos los requerimientos del sistema se denomina #[strong(style="color:#0F6BD2;") pila de producto (#[em product backlog])], la cual es una lista ordenada por prioridad de todos los requerimientos del sistema generalmente descritos en la forma de #[strong(style="color:#0F6BD2;") historias de usuario].
        p.mt-4 Todas las historias de usuario se priorizan utilizando números enteros consecutivos de 1 hasta N, donde 1 representa la máxima prioridad. Esta priorización la realiza únicamente el dueño del producto y, para eso, utiliza la información que tiene sobre el negocio y recomendaciones de expertos buscando el mayor retorno de inversión a sus clientes. La priorización de las historias de usuario en la pila de producto puede variar en el transcurso del tiempo, pero solo la podrá realizar el dueño del producto.
    
    .cont_2_3.pb-5.mt-5
      .p-4(style="background-color:#273A89;border-radius:12px;" data-aos="zoom-in")
        p.mb-0.text-white Scrum, siendo un marco de trabajo ágil, no requiere para su funcionamiento que todas las historias de usuario de la pila de producto estén detalladas, pero sí, por lo menos, las de mayor prioridad para poder iniciar el trabajo con el equipo en sus respectivos #[em.text-white sprints] (ScrumStudy, 2021).
      p.fw-bold.mt-5(data-aos="fade-right") Al inicio de cada #[em sprint] se realiza el proceso de planeación que involucra principalmente tres tareas:
      .col-xl-8.m-auto.mt-5.col-lg-10
        .row.pt-4.pb-4(style="border-top:1px #273A89 solid;border-bottom:1px #273A89 solid;" data-aos="flip-up")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/21.svg")
          .col(style="place-self:center;")
            p.mb-0 Estimar el valor de esfuerzo requerido para un conjunto de historias de usuario de la pila de producto, trabajo que es realizado únicamente por el equipo de desarrollo.
        .row.pt-4.pb-4(style="" data-aos="flip-up")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/22.svg")
          .col(style="place-self:center;")
            p.mb-0 Selección de las historias de usuario a desarrollar durante al #[em sprint] tomando como referencia la prioridad y el valor del esfuerzo asociado a cada historia. Esto genera un artefacto llamado pila del #[em sprint] (#[em sprint backlog]) que lista los requerimientos descritos como historias de usuario a ser realizadas y evaluadas en el #[em sprint].
        .row.pt-4.pb-4(style="border-top:1px #273A89 solid;border-bottom:1px #273A89 solid;" data-aos="flip-up")
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/23.svg")
          .col(style="place-self:center;")
            p.mb-0 Descomposición de cada historia de usuario en tareas y, de ser necesario, asignar responsables a cada tarea.
    
      p.mt-5(data-aos="fade-right") A continuación, se expone una figura en la que se representan los artefactos generados dentro del marco de trabajo Scrum y que permiten la gestión de los requisitos y el evento desde el cual se construye inicialmente.

      .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
        h5 
        span #[b Figura 2.] Pila de producto vs. pila del #[em Sprint]
      .col-xl-10.m-auto.mt-4(data-aos="zoom-in-up")
        .bg-white.p-3.p-lg-5
          .col-xl-11.m-auto
            figure
              img(src="@/assets/curso/tema2/24.svg" alt="Pila de producto vs. pila del Sprint")
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_5 2.5 Kanban y la especificación de requisitos
    
    .row
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        p.mb-0 Kanban es una metodología para gestionar el trabajo que surge del sistema de producción Toyota Production System (TPS) a finales de la década de 1940, el cual representaba un sistema de producción basado en la demanda de los clientes y no en la producción masiva, lo anterior sentó los fundamentos para los sistemas de producción ajustada que consisten en minimizar los desperdicios sin afectar la producción y en crear más valor a los clientes sin generar más gastos.
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/25.png")
      .col-lg(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#E1F6EF;border-radius:12px;")
          p.mb-0 A principios del siglo XXI, la industria del #[em software] adoptó el Kanban para cambiar la forma en la que se producían y entregaban productos y servicios; además, tiene en cuenta los principios de las metodologías ágiles, en especial de Scrum, pero busca darle más protagonismo al proceso de experimentación y mejora continua (Rivadeneira, 2014).
    
    p.mt-4.fw-bold(data-aos="fade-right") Kanban en la industria del #[em software] se basa en cuatro principios fundamentales:

    .cont_2_2
      .row.mt-4
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
            .text-end 
              figure.cont_image_hover21
                img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
              figure.cont_image_hover22(style="display:none;")
                img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
            .text-center 
              figure
                img(src="@/assets/curso/tema2/26.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Calidad garantizada, todo lo que se produce debe salir bien sin márgenes de errores, prima la calidad sobre la rapidez.
        
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
            .text-end 
              figure.cont_image_hover21
                img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
              figure.cont_image_hover22(style="display:none;")
                img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
            .text-center 
              figure
                img(src="@/assets/curso/tema2/27.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Reducción del desperdicio: hacer solamente lo justo y necesario, pero hacerlo bien.
        
        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
            .text-end 
              figure.cont_image_hover21
                img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
              figure.cont_image_hover22(style="display:none;")
                img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
            .text-center 
              figure
                img(src="@/assets/curso/tema2/28.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Mejora continua.

        .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.p-3.cont_hover21(style="background-color:#DEE1ED;border-radius:12px;")
            .text-end 
              figure.cont_image_hover21
                img(src="@/assets/curso/tema2/17.svg" style="max-width:60px;display:inline;")
              figure.cont_image_hover22(style="display:none;")
                img(src="@/assets/curso/tema2/18.svg" style="max-width:60px;display:inline;")
            .text-center 
              figure
                img(src="@/assets/curso/tema2/29.svg" style="max-width:100px;display:inline;")
            p.text-center.mb-0.mt-1 Flexibilidad: se pueden priorizar tareas entrantes según las necesidades del momento.
      p.mt-5.fw-bold(data-aos="fade-right") Además de los principios, Kanban propone seis (6) prácticas:

      .row.mt-5
        .col-lg-1
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 1
              div Visualizar el flujo de trabajo.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 2
              div Eliminar interrupciones.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 3
              div Gestionar el flujo.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 4
              div Hacer políticas explícitas que fomenten la visibilidad.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 5
              div Circuitos de realimentación.
            li.d-flex
              .lista-ol--cuadro__vineta(style="background-color:#1682FB;")
                span 6
              div Mejorar colaborando. 
        .col-lg-6(data-aos="fade-left")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/30.svg")
    
    p.mt-5(data-aos="fade-right") Tal vez la herramienta más conocida que permite implementar los principios de Kanban es el #[strong(style="color:#0F6BD2;") tablero Kanban], el cual permite mapear y visualizar el flujo de trabajo. Este se divide en columnas a través de las cuales se pueden visualizar cada una de las fases del proceso; las filas del tablero representan los diferentes tipos de actividades específicas que se desarrollan en el marco del proyecto.

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/31.png")
      .col-lg-8(data-aos="fade-left")
        .p-4(style="background-color:#DCECFE;border-radius:12px;")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/32.svg")
            .col(style="place-self:center;")
              p.mb-0 Normalmente, el tablero tiene #[strong(style="color:#0F6BD2;") tres secciones] que representan el estado de cada una de las tareas: #[strong(style="color:#0F6BD2;") por hacer, en proceso, hecho.]
        p.mt-4 Cada equipo de trabajo puede realizar un mapeo más detallado de su proceso y agregar tanta sección como considere pertinente, como se muestra en la siguiente figura.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 
      span #[b Figura 3.] Tablero Kanban
    .cont_2_4.mt-4(data-aos="zoom-in-up")
      .col-xl-8.col-lg-10.m-auto.pt-4.pb-4.pt-lg-5.pb-lg-5
        figure
          img(src="@/assets/curso/tema2/34.svg" alt="Tablero Kanban")
    
    p.mt-5(data-aos="fade-right") Dependiendo del marco de trabajo, varía la forma en la que se describen cada una de las tareas del tablero Kanban, por ejemplo, dentro de un marco de trabajo como Scrum cada una de las tareas se podría describir en el formato de historias de usuario.

           

    
  

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
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/8.png)
  background-size: cover
  background-position: top
.cont_hover21:hover
  background-color: #273A89 !important
.cont_hover21:hover *
  color: #fff !important
.cont_hover21:hover .cont_image_hover21
  display: none !important
.cont_hover21:hover .cont_image_hover22
  display: block !important
.cont_2_3, .cont_2_3 *
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/20.png)
  background-size: cover
  background-position: top
.cont_2_4
  background: url(../assets/curso/tema2/33.png)
  background-size: cover
  background-position: center
</style>
