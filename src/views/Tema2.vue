<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 2
      h1 Procesos de identificación y calificación
    
    .row.BGIMG04.p-4.justify-content-center.mb-4
      .col-lg-8
        p.mb-4 La identificación inicia con un ejercicio de análisis interpretativo de la situación ambiental, donde se mencionan los procesos de la actividad o proyecto que se esté ejecutando, sean bienes o servicios y que están incorporados a los aspectos ambientales positivos y negativos; después de tener este análisis de identificación se procede a realizar dicha calificación de las variables que permiten cuantificar sus consecuencias en el ambiente y el cumplimiento normativo. Siendo así, a continuación, se podrá encontrar una serie de conceptos que ayudarán a asociar la información de manera práctica:
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema2/img01.png')

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1	Definición de los aspectos ambientales 

    p.mb-4 Son aquellos elementos de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente (Icontec, 2015). Estos aspectos ambientales llegan a causar uno o varios impactos ambientales, algunos de los aspectos ambientales que se deben tener en cuenta y gestionar dentro de una organización son:
 
    .row.mb-4
      .col-lg-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema2/img02.png')

      .col-lg-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Contaminación atmosférica, consumo de energía y combustibles
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Contaminación acústica. 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Contaminación lumínica.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Gestión de residuos. 
          li 
            .lista-ol--cuadro__vineta.mb-4
              span 5
            | Agua, consumos y vertimientos. 

          .row.justify-content-center
            .col-lg-10.BG02.p-4.mb-5
              .row.align-items-center.justify-content-center
                .col-7.mb-4.mb-lg-2
                  p.mb-0 Para profundizar en el tema sobre aspectos ambientales le invito a revisar en la sección de material complementario el Documento   ¨#[i Sistemas de gestión ambiental, requisitos con orientación para su uso]¨.
                .col-auto
                  a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    figure
                      img(src="@/assets/curso/tema2/img04.svg", style="width:150px").m-auto

    separador
    .BGIMG05.p-4
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2	Identificación de aspectos ambientales y qué impactos generan.
      
      p Un aspecto ambiental es la causa o elemento de actividad que interactúa con el medio ambiente, esto repercute necesariamente sobre el contexto produciendo un impacto ambiental, este último sería el efecto; es decir, el que causa el cambio en el medio ambiente ya sea negativo o positivo. 

      .row.justify-content-center.mb-4
        .col-lg-6.cajon.color-primario.mb-4.p-4
          p Los análisis y resultados de los impactos ambientales, fijarán las prioridades que debe tener en cuenta el encargado de la actividad o proyecto desarrollado, para así, definir: 
      
      .row.justify-content-center.mb-5
        .col-md-4  
          SlyderF(columnas="col-12")
            .row.BG01.p-4.justify-content-center.mb-5
              .col-6
                figure.mb-4
                  img.mb-4(src='@/assets/curso/tema2/img03.png' alt='AvatarTop')
              h3.text-center Objetivos
            .row.BG01.p-4.justify-content-center.mb-5
              .col-6
                figure.mb-4
                  img.mb-4(src='@/assets/curso/tema2/img04.png' alt='AvatarTop')
              h3.text-center Metas
            .row.BG01.p-4.justify-content-center.mb-5
              .col-6
                figure.mb-4
                  img.mb-4(src='@/assets/curso/tema2/img05.png' alt='AvatarTop')
              h3.text-center Indicadores
            .row.BG01.p-4.justify-content-center.mb-5
              .col-6
                figure.mb-4
                  img.mb-4(src='@/assets/curso/tema2/img06.png' alt='AvatarTop')
              h3.text-center Estrategias

    .row.justify-content-center.mb-5
      .col-md-8
        p.mb-4 Con el fin de cumplir con la política ambiental a través de programas de gestión ambiental, a continuación en la figura 3, se mencionan algunos aspectos ambientales y los impactos que se generan: 

        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 3.
          span Aspectos e impactos generados 
        
        figure.mb-4
          img.mb-4(src='@/assets/curso/tema2/img07.png' alt='AvatarTop')

        p.mb-4 Por lo anterior, es claro que los aspectos ambientales generan impactos ambientales, pero lo importante es establecer criterios para evaluarlos y así identificarlos y evaluarlos continuamente, con el fin de gestionarlos permanentemente como parte del sistema de calidad de un proyecto y su impacto en un contexto dado.
        
      .col-md-8.BG02.p-4
        .row.align-items-center.justify-content-center
          .col.mb-4.mb-lg-0
            p.mb-0 Para profundizar en el tema le invito a revisar el video que se encuentra en la sección de materiales complementarios con el nombre: ¨#[i Qué son Aspectos e Impactos Ambientales]¨.
          .col-auto
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=rE-m9ZYs0u8" target="_blank")
              figure
                img(src="@/assets/curso/tema2/img04.svg", style="width:150px").m-auto

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3	Clasificación y valoración de los impactos ambientales.

    p.mb-4 Los impactos ambientales se definen como cualquier alteración en el medio ambiente que sea negativo o positivo y que se desarrollen con la ejecución de una actividad o proyecto específico; estos impactos se pueden clasificar de acuerdo a su origen, por lo cual se invita a revisar el siguiente recurso de aprendizaje:

    .row.justify-content-center.mb-4
      .col-lg-10.BGIMG06.p-4
        SlyderA
          .row.justify-content-center.p-4
            .col-md-5.col-lg.mb-5.mb-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Acumulativo
                    p Uso de plástico en grandes cantidades a nivel mundial, que van a los ríos y océanos.
                    br
            .col-md-5.col-lg.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Sinérgico
                    p Sabanalarga, población que fue desaparecida en el 2018, para la construcción de la represa HidroItuango en Antioquia
            .col-md-10
              h4.mb-4 Acumulativo o sinérgico 
              p Los acumulativos son aquellos pequeños impactos que se van sumando en un mismo ecosistema por un determinado tiempo, y los sinérgicos son aquellos que se relacionan entre sí para generar un impacto mayor, por que se dan al mismo tiempo y en contextos muy cercanos, que afectan doblemente una comunidad o un territorio de manera positiva o negativa según el proyecto.  

          .row.justify-content-center.p-4
            h4.text-center.mb-0 Estudios ambientales
            p.text-center Clasificación y valoración de los impactos ambientales
            .col-md-5.col-lg.mb-5.mb-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Directo
                    p Tala de bosques, pérdida inmediata del hábitat de fauna y flora.
                    
            .col-md-5.col-lg.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Indirecto
                    p Industrialización, contaminación del aire, consecuencias a largo plazo.
            .col-md-10
              h4.mb-4 Impacto ambiental directo o indirecto  
              p Los acumulativos son aquellos pequeños impactos que se van sumando en un mismo ecosistema por un determinado tiempo, y los sinérgicos son aquellos que se relacionan entre sí para generar un impacto mayor, por que se dan al mismo tiempo y en contextos muy cercanos, que afectan doblemente una comunidad o un territorio de manera positiva o negativa según el proyecto.

          .row.justify-content-center.p-4
            .col-md-5.col-lg.mb-5.mb-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Reversible
                    p Rio Bogotá, cascada de San Antonio del Tequendama. 
                    br
            .col-md-5.col-lg.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Irreversible
                    p Exposición parmente y regular a sustancias tóxicas, causan enfermedades y hasta la muerte.
            .col-md-10
              h4.mb-4 Reversible e irreversible  
              p El reversible es aquel donde se puede llegar a recuperar una zona determinada de forma natural o por medio de medidas del ser humano, irreversible es cuando un espacio determinado no se puede recuperar de ninguna forma o se afecta la calidad de vida de una o varias personas de manera permanente.

          .row.justify-content-center.p-4
            .col-md-5.col-lg.mb-5.mb-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Actual
                    p Riesgos para la salud y al medio ambiente por el uso de gases tóxicos para erradicar los cultivos ilícitos en Colombia. 
                    br
            .col-md-5.col-lg.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Potencial
                    p Pérdida de playas en Colombia por el cambio climático lo cual produciría migraciones al interior del país.
                    br
            .col-md-10
              h4.mb-4 Actual o potencial 
              p Actual, como la palabra lo dice este indica que está pasando en ese mismo instante y el potencial habla de aquel impacto que puede pasar en el futuro si no se tienen medidas de prevención a tiempo.

          .row.justify-content-center.p-4
            .col-md-5.col-lg.mb-5.mb-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Temporal
                    p Dentro de los retos que Colombia tiene para el 2030, está la reforestación de zona naturales, como: el Amazonas, entre otras.
                    br
            .col-md-5.col-lg.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Permanente
                    p Las grandes cantidades de #[i CO_2] que se lanza a la atmósfera, está haciendo daño a la capa de ozono.
                    <br><br>
            .col-md-10
              h4.mb-4 Temporal o permanente 
              p El temporal indica que la misma naturaleza recupera su estado natural con el paso del tiempo y el permanente indica que es un cambio que sigue con el paso del tiempo.

          .row.justify-content-center.p-4
            .col-md-5.col-lg.mb-5.mb-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Local
                    p Turismo de naturaleza, Amazonas y Guaviare, recibirán dinero para infraestructura, con el fin de hacer de este un modelo  económico que permita reducir la tala de bosques.
                    
            .col-md-5.col-lg.mb-5 
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
                .BG04.p-4
                  <br><br>
                  .text-color-primario.p-4
                    h4 Diseminado
                    p La Amazonía es el pulmón del mundo, al ser destruida por la tala de bosques, el planeta y los ciudadanos globales perderán su hábitat.
                    br
            .col-md-10
              h4.mb-4 Local o diseminado  
              p El impacto local, es aquel que se concentra en un mismo lugar y no se expande en gran extensión y el diseminado, es aquel que llegará a afectar otras zonas, incluso distantes del foco de contaminación o de riesgo ambiental.

    .row.justify-content-center.mb-4
      .col-lg-10
        p El estudio ambiental es el desarrollo formal para pronosticar las consecuencias ambientales del área, por ello es importante realizar claramente la clasificación de los impactos para poder pasar a realizar una valoración del impacto ambiental y dar cumplimiento a la legislación ambiental sin sobrepasar los parámetros permisibles por dicha norma.

    .row.justify-content-center.mb-4
      .col-lg-8.cajon.color-primario.p-4.mb-4
        p.mb-0 La valoración de impactos ambientales es un método técnico que permite analizar cuantitativa y cualitativamente por medio de variables, una vez valorados se priorizan los impactos ambientales; por otro lado, la importancia del impacto se cuantifica de acuerdo a la afectación sobre:

      .col-lg-8.mb-4
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | El recurso.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Tiempo de permanencia del efecto.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Posibilidad de ocurrencia.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | La influencia.
      
      .col-lg-8.mb-4
        p El propósito principal de valorar los impactos es determinar su alcance e importancia en el momento de impactar su entorno y para este trabajo se deben tener en cuenta los siguientes criterios de evaluación:
      
      .col-lg-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Potencial de causar daños al medio ambiente.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Tamaño y frecuencia de aparición del aspecto ambiental.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Importancia de la actividad generadora del aspecto ambiental.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Los requisitos legales, medioambientales involucrados en el aspecto.

    .row.justify-content-center
        .col-lg-6.BG05.p-4.mb-5
          .row.align-items-center.justify-content-center
            .col-10.mb-4.mb-lg-0
              .text-white
                p.text-center.mb-0 A continuación, se identifican los métodos de valoración más empleados, por lo que se invita a revisar la siguiente figura 4:

    .row.justify-content-center.mb-0
      .col-lg-8.mb-0.p-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 4.
          span Métodos de valoración 
        figure.mb-4
          img.mb-4(src='@/assets/curso/tema2/img20.png' alt='AvatarTop')

        p Este procedimiento técnico permite evaluar cuantitativa o cualitativamente el proceso, verificando así si se cumple la normatividad ambiental y cuáles se deben llevar a cabo después de obtener los resultados de la valoración del impacto ambiental.

      .col-lg-8.BG02.p-4.mb-5
        .row.align-items-center.justify-content-center
          .col-7.mb-4.mb-lg-0
            p.mb-0 Para profundizar en el tema le invito a revisar el documento que se encuentra en la sección de materiales complementarios con el siguiente nombre: #[i ¨PIGA, Instructivo diligenciamiento de la matriz de identificación de aspectos y valoración de impactos ambientales¨].
          .col-auto
            a.anexo.mb-4.mb-lg-0(href="https://www.ambientebogota.gov.co/documents/10184/564058/Instructivo+para+el+diligenciamiento+de+la+matriz+de+Identificaci%C3%B3n+de+aspectos+y+valoraci%C3%B3n+de+impactos+ambientales.pdf/e5f7edbd-f5d8-4008-8bda-fb9328d8b98b" target="_blank")
              figure
                img(src="@/assets/curso/tema2/img27.svg", style="width:150px")

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4	 Medidas de control y mitigación

    p.mb-4 Teniendo en cuenta la identificación, calificación y valoración de los impactos ambientales y basándose en el análisis final obtenido, se realiza una planificación de actividades para el manejo de los impactos encontrados a través de labores encaminadas a:

    .row.justify-content-center.mb-0
      .col-lg-6
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema2/img21.svg')

      .col-lg-2.mb-4
        br
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | La prevención.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | La mitigación. 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | El control.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | La compensación. 

      .col-lg-8.BG06.mb-0
        .row.align-items-center.justify-content-center
          .col-7.mb-4.mb-lg-0
            p.mb-0 Todo esto buscando un equilibrio del medio ambiente con las acciones del ser humano y de esta manera eliminar, prevenir y minimizar los impactos ambientales en el área donde se desarrolle dicha actividad o proyecto.

    .row.justify-content-center.mb-4
      .col-lg-12.BG07.p-4
        p Las medidas de control y mitigación tienen como objetivo disminuir los impactos generados o que se puedan llegar a generar dentro de un proyecto o actividad; por lo anterior se mencionan tres (3) medidas que se deben implementar en cualquier fase del proyecto, por lo que se invita a revisar el siguiente recurso de aprendizaje:
               
    BotonesB.mb-5

    p.text-center La finalidad de estas medidas es proteger y conservar los componentes que estén presentes en medio de la actividad, como lo son:  

    .row.justify-content-center.mb-5
      .col-4.mb-4
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3
              h2.text-center  Componentes físicos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img26.svg')})`}")

      .col-4.mb-4
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img26.svg')})`}")
            .tarjeta-slide__contenido.p-3
              h2.text-center Biológicos.             

      .col-4.mb-4
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img26.svg')})`}")
            .tarjeta-slide__contenido.p-3
              h2.text-center Socioeconómicos.              

    separador
</template>
<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema2',
  components: {
    BotonesB,
  },
  data: () => ({}),
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
