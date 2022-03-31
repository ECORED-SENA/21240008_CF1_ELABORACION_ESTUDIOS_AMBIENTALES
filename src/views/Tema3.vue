<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 3
      h1 Estudios ambientales
    .row.justify-content-center.BGIMG07.mb-5
      .col-lg-10.p-0
        br
        p Los estudios ambientales tienen como propósito la difusión de conceptos técnicos, por parte de las autoridades ambientales competentes. Un estudio ambiental se desarrolla con base en los términos de referencia y la autoridad ambiental lo podrá adaptar a la actividad o proyecto que se esté desarrollando en su momento.
        .row.align-items-center.mb-4
          .col-lg-6
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema3/img02.png')

          .col-lg-6
            p Un estudio ambiental debe contener los siguientes elementos:
            ul.lista-ul
              li 
                <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                |  El objetivo del proyecto.
              li 
                <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                |  Localización de la actividad. 
              li 
                <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                |  Análisis de las actividades que se realizarán en las fases del proyecto.
              li 
                <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                |  Una descripción de los materiales utilizados en el área.  
              li 
                <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                |  Por último, se debe contemplar la descripción:
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | De cantidades y tipos de residuos generados 
                  li
                    i.lista-ul__vineta
                    | Vertimientos 
                  li
                    i.lista-ul__vineta
                    | Emisiones atmosféricas
                  li
                    i.lista-ul__vineta
                    | Cualquier otro elemento que genere dicha actividad
            
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Antecedentes y definiciones

    p A lo largo de la historia, se identifican varios hechos relevantes que dieron lugar a la importancia del medio ambiente a nivel global, entre los cuales se destacan los que se mencionan a continuación en la figura 5:

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 5.
          span Evolución.
    .row.justify-content-center.lg-10.mb-4
      .col-lg-5.BGIMG08
        .row.justify-content-center.mb-4
          .col-lg-5.p-4
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema3/img05.png')
        p.text-center En la década de los setenta (1972) la Declaración de Estocolmo sobre el Medio Ambiente Humano donde se generó importancia para garantizar la subsistencia de todas las especies en nuestro planeta.

      .col-lg-5.BGIMG07
        .row.justify-content-center.mb-4
          .col-lg-5.p-4
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema3/img06.png')
        p.text-center Otro hecho importante fue la Carta de Belgrado (1975) donde la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO) y el Plan de las Naciones Unidas para el Medio Ambiente (PNUMA) fomentan la educación para el cuidado del medio ambiente y empieza a jugar un papel importante a la hora de impartir cambios.

    .row.justify-content-center.mb-4
      .col-md-10
        p Lo anterior, fue un pilar fundamental para la óptima gestión y desarrollo de los diferentes estudios ambientales; de igual manera, cabe resaltar que la recopilación de toda la información ayuda a una toma de decisiones acertadas a la hora de proponer soluciones y diferentes alternativas. A continuación, se describen algunos conceptos básicos, por lo que se invita a revisar el siguiente recurso de aprendizaje:
    .row.justify-content-center.mb-4
      .col-md-6
        img(src='@/assets/curso/tema3/img07.svg')
    .row.justify-content-center.mb-4
      .col-md-10
        h4.text-center <span style="color:#537E39;"> Estudios ambientales </span>
        p.text-center A continuación, se presentan algunas definiciones que son indispensables para que se incorporen en su léxico.

    SlyderD.mb-5(:datos="datosSlyder")

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Características y técnicas utilizadas para los estudios ambientales

    p.mb-4 El propósito de identificar las características y técnicas de un estudio ambiental radica en constituir unas condiciones mínimas de recolección, procesamiento y análisis para finalizar con la evaluación de dichos impactos ambientales generados en el sector específico de la actividad ejecutada. Para la realización de estos se debe tener en cuenta una serie de ítems con el fin de conocer los parámetros iniciales de cualquier investigación y/o proyecto, los cuales se pueden revisar en la siguiente tabla 1:

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Tabla 1.
          span Características de estudios ambientales.

    .row.justify-content-center
      .col-md-10
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header        
          table        
            tr
              th(style="background-color: #F6F6F6") Espacialidad
              td(style="background-color: #F6F6F6") Se debe mencionar concretamente cuáles son los límites donde se desarrollará el estudio o sus zonas de influencia.
            tr
              th(style="background-color: #FFFFFF") Temporalidad
              td(style="background-color: #FFFFFF") Definir los tiempos que se emplearán en el desarrollo de las diferentes tareas, estos deben ser dados con la mayor precisión posible.
            tr
              th(style="background-color: #F6F6F6") Justificación
              td(style="background-color: #F6F6F6") Se debe dar los lineamientos claros del por qué la realización del proyecto, además se debe tener en cuenta que se debe justificar tanto lo ambiental como socioeconómico.
            tr
              th(style="background-color: #FFFFFF") Sectorización
              td(style="background-color: #FFFFFF") En el estudio hay que elegir los sectores sensibles y de importancia ambiental, todo esto puede ser cartografiado y delimitado.
            tr
              th(style="background-color: #F6F6F6") Complementariedad
              td(style="background-color: #F6F6F6") Brindar información clara, completa y cuantificable (donde sea necesario).
            tr
              th(style="background-color: #FFFFFF") Localización
              td(style="background-color: #FFFFFF") Se debe tener la localización georreferenciada de cada actividad que conforme el proyecto, además de todas las acciones ambientales que surjan.
            tr
              th(style="background-color: #F6F6F6") Sustentabilidad
              td(style="background-color: #F6F6F6") El estudio debe sustentar los diferentes análisis o conclusiones que se hagan sobre cada área de referencia, para esto se debe justificar por medio de documentos, información o de distintas fuentes que se tengan.
            tr
              th(style="background-color: #FFFFFF") Coherencia
              td(style="background-color: #FFFFFF") Se deben dar las razones por las cuales se definieron las áreas del proyecto, además de las zonas sensibles, zonas de manejo y los impactos ambientales.
            tr
              th(style="background-color: #F6F6F6") Integralidad
              td(style="background-color: #F6F6F6") Interacciones de los diferentes componentes ambientales y actividades del proyecto.
            tr
              th(style="background-color: #FFFFFF") Secuencialidad
              td(style="background-color: #FFFFFF") Los componentes de estudio deben tener coherencia entre sí, de igual manera cada análisis ambiental debe relacionarse a las características del proyecto.
            tr
              th(style="background-color: #F6F6F6") Aplicabilidad
              td(style="background-color: #F6F6F6") Cada medida de manejo ambiental debe tener conexión sobre los impactos ambientales dados, de igual manera, desde un punto de vista técnico se deben dar posibles soluciones.
            tr
              th(style="background-color: #FFFFFF") Especificidad
              td(style="background-color: #FFFFFF") Los resultados específicos deben provenir de un análisis de componentes ambientales, donde se conozca cómo se dinamiza el entorno y los posibles efectos del proyecto.
            tr
              th(style="background-color: #F6F6F6") Resultados
              td(style="background-color: #F6F6F6") Con base en los diferentes análisis propuestos, se dan los resultados y conclusiones de cada proyecto.

      .row.justify-content-center.mb-4
        .col-lg-10.cajon.color-primario.p-4.mb-4
          p Es importante resaltar que las técnicas que se pueden utilizar para un estudio ambiental son varias, pero de acuerdo a la complejidad de la actividad, así se escogerá la más acorde, teniendo en cuenta el área de influencia y los resultados que se estén buscando, los cuales deben describirse de forma cuantitativa o cualitativa en el análisis de sus resultados.


    
      .col-lg-10.position-relative
        TabsC.color-acento-botones
          .py-3.py-md-4(titulo="Sistemas de red y gráficos")
            p Los sistemas de red y gráficos son aquellos métodos que se utilizan de manera generalizada para evaluar los impactos ambientales en una actividad o proyecto, por lo que se indica en las filas de la matriz los factores ambientales y en las columnas se disponen las acciones del proyecto a evaluar, esto arrojará un resultado con el que se podrá llegar a diferentes alternativas de solución a aquello que se encuentre o de cómo resultado con estas metodologías, a continuación se mencionan las más usadas: 
            .row.justify-content-center.mb-4
              .col.BGIMG10
                .row.align-items-center
                  .col-lg-8.p-4                 
                    ul.lista-ul
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Matrices causa-efecto (Leopold):</b></span> es una matriz, donde las filas simbolizan los distintos factores ambientales y las columnas todas las acciones que se hagan en un proyecto.
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Listas de Chequeo:</b></span> estas listas ayudan al realizar los análisis previos, son sencillas de manejar y tienen una cobertura óptima en todas las áreas, se basan en factores o vectores que afecten al medio ambiente.
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Sorensen:</b></span> representa de forma gráfica la relación causa-condición-efecto.
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Bereano:</b></span> es importante para saber cuáles opciones son las óptimas en un proyecto, las alternativas van en las columnas y los factores en las filas para luego así relacionarlas entre sí.                     
                  .col-lg-4.p-0
                    figure(data-aos="flip-left")
                      img.RA03(src='@/assets/curso/tema3/img22.png')
      
          .py-3.py-md-4(titulo="Sistemas cartográficos")
            p La cartografía es aquella disciplina que se encarga de estudiar y producir los mapas, buscando resolver la problemática que se encuentra en las ciencias de la tierra; es decir, que los sistemas cartográficos son la representación gráfica que se da entre el orden de los puntos curvos de la tierra y la superficie plana de un mapa, utilizando como medida una escala que indica la relación entre el mapa y la realidad. A continuación, se mencionan algunos sistemas cartográficos:
            .row.justify-content-center.mb-4
              .col.BGIMG10
                .row.align-items-center
                  .col-lg-8.p-4                  
                    ul.lista-ul
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Superposición de transparencias: </b></span> superponer mapas de impacto con un mapa de transparencia, donde se verán los diferentes grados de impacto previsibles por medio de diversos símbolos.
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>GIS: </b></span> son sistemas de información geográfica que usan la superposición de capas de información.
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Mc Harg: </b></span> se identifican las características de un territorio, pero tiene como fin identificar de manera eficiente los recursos por medio de inventarios que son localizados por mapas con distintos factores.                    
                  .col-lg-4.p-0
                    figure(data-aos="flip-left")
                      img.RA04(src='@/assets/curso/tema3/img23.png')
      
          .py-3.py-md-4(titulo="Métodos basados en indicadores, índices e integración de la evaluación")
            p Estos, al igual que los anteriores, son otros tipos de procedimientos para la evaluación de impactos ambientales, solo que son desarrollados por diferentes universidades, los cuales se mencionan a continuación:
            .row.justify-content-center.mb-4
              .col.BGIMG10 
                .row.align-items-center
                  .col-lg-8.p-4                  
                    ul.lista-ul
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Método de Holmes: </b></span> el orden de importancia juega un papel muy importante, clasificando así los valores ambientales, donde se compara cualitativamente cada variable y se escoge la mejor de acuerdo con su nivel de importancia.
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Método de la Universidad de Georgia. </b></span>
                      li 
                        <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
                        p.mb-0 <span style="color:#537E39;"><b>Método de Fisher-Davies. </b></span> 
                  .col-lg-4.p-0
                    figure.RA04(data-aos="flip-left")
                      img(src='@/assets/curso/tema3/img24.png')
      
          .py-3.py-md-4(titulo="Métodos cuantitativos")
            p La mayoría de estos métodos se han creado para implementar en proyectos específicos, siendo así que en cada caso dependiendo de la labor se escogerá la metodología más apropiada, los métodos cuantitativos son aquellos que permiten medir indicadores y que dan un resultado en porcentaje, para así medir y evaluar el impacto que se está generando. A continuación, se menciona el método de un instituto que puede aportar gran conocimiento en el tema.
            .row.justify-content-center.mb-4
              .col.BGIMG10
                .row.align-items-center
                  .col-lg-8.p-4                 
                    p.mb-0 <span style="color:#537E39;"><b>Método del Instituto Batelle-Columbus: </b></span> planificación de proyectos a mediano y largo plazo, garantizando el menor impacto ambiental posible.
                  .col-lg-4.p-0
                    figure(data-aos="flip-left")
                      img.RA04(src='@/assets/curso/tema3/img25.png')
    separador
</template>
<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorImagenZoom: true,
    datosSlyder: [
      {
        texto:
          '<b>Alcance del proyecto, obra o actividad: </b> incluye la planeación,  el emplazamiento,  la instalación y la construcción, por otro lado, se debe tener en cuenta también el montaje, la operación,  el mantenimiento, el desmantelamiento y abandono y/o terminación de todas las acciones, en adición los usos del espacio, actividades e infraestructura relacionados y asociados con su desarrollo.',
        imagen: require('@/assets/curso/tema3/img08.png'),
      },
      {
        texto:
          '<b>Ambiente: </b> fracción del globo terráqueo que comprende los elementos naturales, tanto físicos como biológicos, adicionalmente se deben tener en cuenta los siguientes puntos: elementos artificiales, sociales y culturales, y las interacciones de estos entre sí.',
        imagen: require('@/assets/curso/tema3/img09.png'),
      },
      {
        texto:
          '<b>Área de estudio: </b>superficie de contexto general, continua o discontinua, en la que se manifestarían los <b>impactos ambientales significativos</b> que potencialmente generarían las alternativas, técnica y ambientalmente racionales y que se contemplen para la ejecución de un proyecto, obra o actividad en el marco de un diagnóstico ambiental de alternativas.',
        imagen: require('@/assets/curso/tema3/img10.png'),
      },
      {
        texto:
          '<b>Área de influencia: </b>zona en la cual se manifiestan de manera objetiva y en lo posible cuantificable, los <b>impactos ambientales significativos</b> ocasionados por la ejecución de un proyecto, obra o actividad, sobre los medios abiótico, biótico y socioeconómico, en cada uno de los componentes de dichos medios. Por otro lado, debido a que las áreas de los impactos pueden variar dependiendo del componente que se analice, el área de influencia podrá corresponder a varios polígonos distintos que se entrecrucen entre sí.',
        imagen: require('@/assets/curso/tema3/img11.png'),
      },
      {
        texto:
          '<b>Componente: </b>unidad conceptual que agrupa factores ambientales y que a su vez constituye uno de los elementos que conforman un medio (abiótico, biótico o socioeconómico); por ejemplo, los componentes geológico, hidrológico, hidrogeológico, oceanográfico, geotécnico y atmosférico,  que hacen parte del medio abiótico.',
        imagen: require('@/assets/curso/tema3/img12.svg'),
      },
      {
        texto:
          '<b>Dinámica poblacional: </b>cambios y proyección de población en un territorio.',
        imagen: require('@/assets/curso/tema3/img13.png'),
      },
      {
        texto:
          '<b>Ecosistema: </b>complejo dinámico de comunidades vegetales, animales y microorganismos y su medio no viviente que interactúan como una unidad funcional.',
        imagen: require('@/assets/curso/tema3/img14.png'),
      },
      {
        texto:
          '<b>Factor ambiental: </b>atributo de un componente ambiental que puede ser descrito mediante parámetros ambientales.',
        imagen: require('@/assets/curso/tema3/img15.svg'),
      },
      {
        texto:
          '<b>Impacto ambiental: </b>cualquier alteración en el medio ambiente biótico, abiótico y socioeconómico, que sea adverso o beneficioso, total o parcial y que pueda ser atribuido al desarrollo de un proyecto, obra o actividad.',
        imagen: require('@/assets/curso/tema3/img16.png'),
      },
      {
        texto:
          '<b>Parámetro ambiental: </b>valor que caracteriza alguna propiedad de un proceso o fenómeno que ocurre en el ambiente, por ejemplo: pH del agua o del suelo, conductividad eléctrica o la temperatura.',
        imagen: require('@/assets/curso/tema3/img17.png'),
      },
      {
        texto:
          '<b>Zonificación ambiental: </b>proceso de sectorización de un área compleja en áreas relativamente homogéneas, de acuerdo con las características y la sensibilidad ambiental de los componentes de los medios abiótico, biótico y socioeconómico.',
        imagen: require('@/assets/curso/tema3/img18.png'),
      },
    ],
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

<style lang="sass"></style>
