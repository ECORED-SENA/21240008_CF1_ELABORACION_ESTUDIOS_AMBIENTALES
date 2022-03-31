<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 4
      h1 Marco normativo
    .row.justify-content-center.BGIMG11.mb-5
      .col-lg-8.p-4
        br
        p Establecen las bases normativas de un estudio ambiental con la intención de reducir, mitigar, corregir y compensar los impactos, por medio de un sistema que identifica, prevé, supervisa y hace correcciones de manera anticipada a los impactos ambientales negativos que emanan de acciones humanas.
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema4/img02.svg')
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Legislación relacionada con estudios ambientales

    p La legislación ambiental ha tenido un desarrollo progresivo e importante, puesto que cada vez se da más importancia a lo que sucede con el medio ambiente; es por eso que las entidades regulatorias se han concientizado y han concientizado al ciudadano para establecer acciones de prevención y mitigación para dar solución a la problemática que se presenta. 

    .row.align-items-center.BGIMG12.mb-5(data-aos="fade-right")
      .col-lg-4
        figure(data-aos="flip-right")
          img(src='@/assets/curso/tema4/img04.svg')
      .col-lg-8.p-4
        p Esto ha dado paso para la creación de otras normas que buscan la protección de los recursos naturales, mediante las cuales se han establecido parámetros permisibles para el sector industrial, donde se realiza la implementación de estudios ambientales y por lo que quien no cumpla lo establecido en las normas ambientales será sancionado.
        p Es importante resaltar que la normatividad ambiental constantemente se modifica o se actualiza, pero, siempre será en pro del medio ambiente y de la salud humana, buscando un bienestar común que permita seguir avanzando en el desarrollo industrial sin afectar los ecosistemas.
    
    p.text-center A continuación, se mencionan algunas leyes importantes sobre el impacto de los estudios ambientales que han marcado un hito histórico en Colombia:

    .row.justify-content-center.mb-4
      .col-lg-8
        .tarjeta.BGIMG13.p-4
          LineaTiempoC.color-acento-contenido(text-small)(data-aos="fade-right")
            .row.align-items-center(titulo="1973")
              .col-md-10.mb-4.mb-md-0
                h3 LEY 23 DE 1973
                p Se expide el código de los recursos naturales y protección al medio ambiente para todo el territorio colombiano.
                p Artículos del 1 al 20.
            .row(titulo="2005")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambientevdt_1023_2005.htm" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 RESOLUCIÓN 1023 DE 2005
                p Establece las guías ambientales como instrumento de autogestión y autorregulación.
            .row(titulo="2009")
              .col-md-10.mb-4.mb-md-0
                h3 LEY 1333 DE 2009
                p Se crea el procedimiento sancionatorio ambiental para Colombia.
            .row(titulo="2010")
              .col-md-10.mb-4.mb-md-0
                h3 DECRETO 3678 DE 2010
                p Define los criterios que deben tener en cuenta las autoridades para imponer sanciones tipo ambiental.
            .row(titulo="2010")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.ani.gov.co/normatividad-inco/decreto-no-2820-de-2010-283" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 DECRETO 2820 DE 2010
                p Reglamenta el tema de las licencias ambientales en el sector de hidrocarburos, minero, construcción, energía nuclear, sector marítimo, etc.
            .row(titulo="2010")
              .col-md-10.mb-4.mb-md-0
                h3 RESOLUCIÓN 415 DE 2010
                p Reglamenta el registro único de infractores ambientales, publicados en la ventanilla integral de trámites ambientales VITAL.
            .row(titulo="2010")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambientevdt_2064_2010.htm" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 RESOLUCIÓN 2064 DE 2010
                p Establece las alternativas de disposición provisional y final de la fauna y flora terrestre y acuática después de ser decomisadas.
            .row(titulo="2011")
              .col-md-10.mb-4.mb-md-0
                h3 LEY 1450 DE 2011
                p Plan de desarrollo Nacional 2014-2018. - Artículos 223 al 226. Directrices para los estudios de impacto ambiental.
            .row(titulo="2011")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://normograma.info/findeter/docs/resolucion_anla_0260_2011.htm" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 RESOLUCIÓN 260 DE 2011
                p Fija las tarifas para el cobro de los servicios de evaluación y seguimiento de las licencias ambientales de Colombia.
            .row(titulo="2016")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="http://www.andi.com.co/Uploads/res._2184_-_2019_por_la_cual_se_modifica_la_resolucion_668_de_2016_sobre_uso_racional_de_bolsas_plasticas_y_se_adoptan_otras_disposiciones_1.pdf" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 RESOLUCIÓN 668 DE 2016
                p Establece la obligatoriedad del uso racional de bolsas plásticas en almacenes de cadena y su posterior modificación con la resolución 2184 del 2019.
            .row(titulo="2017")
              .col-md-10.mb-4.mb-md-0
                h3 LEY 1844 DE 2017
                p Adopta el acuerdo de París del convenio marco de las naciones unidas sobre el cambio climático.
            .row(titulo="2017")
              .col-md-10.mb-4.mb-md-0
                h3 DECRETO 870 DE 2017
                p Crea el sistema de pago por servicios ambientales y otros incentivos a la conservación.
            .row(titulo="2018")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87765" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 LEY 1931 DE 2018
                p Define las directrices para la gestión del cambio climático de las personas públicas y privadas.
            .row(titulo="2018")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambienteds_1447_2018.htm" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 RESOLUCIÓN 1447 DE 2018
                p Reglamenta el sistema de monitoreo, reporte y verificación de las acciones de mitigación a nivel nacional frente a los gases de efecto invernadero.
            .row(titulo="2018")
              .col-md-10.mb-4.mb-md-0
                h3 RESOLUCIÓN 2210 DE 2018
                p Reglamenta el uso del sello minero ambiental colombiano de naturaleza voluntaria. El cual debe ser avalado por ANLA mediante la resolución 2210 de 2018. 
            .row(titulo="2019")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambienteds_1561_2019.htm" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 RESOLUCIÓN 1561 DE 2019
                p Establece términos de referencia para elaborar estudios de impacto ambiental, para poder tramitar licencias ambientales de los proyectos de explotación de materiales de construcción.
            .row(titulo="2018-2022")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://www.dnp.gov.co/DNPN/Plan-Nacional-de-Desarrollo/Paginas/Pactos-Transversales/Pacto-por-la-sostenibilidad/Sostenibilidad.aspx" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 PLAN DE DESARROLLO
                p El Plan de Desarrollo del 2018 al 2022, establece unos acuerdos o pactos que son los ejes del mismo, entre ellos esta: el Pacto por la Sostenibilidad.
            .row(titulo="2030")
              .col-auto
                a.anexo.mb-4.mb-lg-0(href="https://ods.gov.co/es" target="_blank")
                  figure
                    img(src="@/assets/curso/tema4/img07.svg", style="width:150px").m-auto
              .col-md-6.mb-4.mb-md-0
                h3 COLOMBIA Y LA AGENDA 2030
                p Colombia como país miembro de la UNESCO, debe implementar los Objetivos de Desarrollo Sostenible, entre los cuales hay varios que tienen que ver con el medio ambiente.

      .col-lg-2
        figure(data-aos="flip-right")
          img(src='@/assets/curso/tema4/img06.svg')

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Términos de referencia

    .row.align-items-center.BG11.mb-5.p-4
      .col.lg-10.p-4(data-aos="fade-right")
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular.mb-0 Los términos de referencia son lineamientos generales que la autoridad ambiental señala y pública para la elaboración y ejecución de los Estudios de Impacto Ambiental (EIA) y el Diagnóstico Ambiental de Alternativas DAA presentados ante la autoridad ambiental competente al momento de solicitar el otorgamiento de una licencia ambiental.
            i.fas.fa-quote-right.p-0
          .bloque-texto-d__autor 
            .h5.mb-0 - -(ANLA, 2019).

    p.mb-4 Cabe resaltar que cada acto administrativo es una herramienta para cada proyecto, la cual facilita la elaboración del estudio de impacto ambiental; es decir, sirve como guía para la preparación de este, de igual manera estos pueden o no tener información adicional que se considere relevante para cada autoridad ambiental respectiva.
    br
    .row.justify-content-center
      .col-lg-4
        figure(data-aos="flip-left")
              img(src='@/assets/curso/tema4/img09.svg')     

    .row.justify-content-center.mb-4
      .col-lg-5.col-sm-6.BGIMG15.p-5.mb-4(data-aos="fade-right")
        p.mb-4 Es importante a la hora de realizar los términos de referencia de un EIA, que estos contengan las generalidades de cada proyecto, donde se vean reflejados:
        ul.lista-ul
          li 
            <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
            h5 Los objetivos
          li 
            <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
            h5 Antecedentes
          li 
            <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
            h5 Alcance
          li 
            <i class="fas fa-circle fa-xs" style="color:#A8BC8B!important;"></i>
            h5 Metodología a usar

      .col-lg-5.col-sm-6.BGIMG16.p-5.mb-4(data-aos="fade-left")
        p.mb-4 Por otro lado, al realizar un proyecto este debe llevar la descripción, abarcando temas como:
        ul.lista-ul
          li 
            <i class="fas fa-circle fa-xs" style="color:#EBB294!important;"></i>
            h5 Localización
          li 
            <i class="fas fa-circle fa-xs" style="color:#EBB294!important;"></i>
            h5 Características
          li 
            <i class="fas fa-circle fa-xs" style="color:#EBB294!important;"></i>
            h5 Operación
          li 
            <i class="fas fa-circle fa-xs" style="color:#EBB294!important;"></i>
            h5 Funcionamiento, entre otras
      .col-lg-10(data-aos="fade-right")
        p.mb-4 Luego de esto se procede a caracterizar los diferentes medios socio ecológicos (biótico, abiótico y socioeconómico), para así saber qué plan de manejo ambiental es el más adecuado usar en cada proyecto.

    .row.justify-content-center.mb-0
      .col-lg-6.BGIMG17.p-2(data-aos="fade-right")
        h4.text-white.text-center.mb-0 Para reforzar su aprendizaje se le invita  a revisar el siguiente video.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FgZTUUgIcIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-10.BG08.p-4(data-aos="fade-right")
        .row.align-items-center
          .col-lg-9.mb-4.mb-lg-0
            p Para profundizar en el aprendizaje sobre estudios ambientales le invito a revisar la página #[i web IISD. International Institute for Sustainable Development], en la cual puede encontrar algunos ejemplos en español sobre evaluación de impactos ambientales, esta información la puede conseguir en la sección del material complementario.
          .col-lg-3     
            a.anexo.RA02.mb-4(href="https://www.iisd.org/learning/eia/es/examples/" target="_blank")
              .anexo__icono
                figure.RA05
                  img(src="@/assets/curso/tema2/img04.svg")
              .anexo__texto
                h5.mb-0 Enlace web
 
    separador
</template>
<script>
export default {
  name: 'Tema4',
  components: {},
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
