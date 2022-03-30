<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 1
      h1 Componentes del sistema socio ecológico
    
    .row.BGIMG02.p-4.justify-content-center.mb-4
      .col-lg-8
        p.mb-4 Para contribuir a un desarrollo sostenible, equilibrado y compatible con la conservación del medio natural, es preciso aplicar herramientas que contribuyan a la gestión ambiental, aplicando principios de prevención y/o corrección de los deterioros causados al ambiente y potenciando los impactos positivos, siendo la evaluación del impacto ambiental un instrumento que permite determinar estas alteraciones para su gestión posterior.
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema1/img01.png')

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos biótico, abiótico y sociocultural
    
    p.mb-4 Para iniciar el aprendizaje sobre estudios ambientales, es indispensable conocer los conceptos base que le permitirán empezar a asociar ideas sobre cómo realizarlo y qué tener en cuenta. A continuación, se mencionan y describen los tres conceptos principales, por lo que se le invita a revisar el siguiente recurso de aprendizaje:
    
    BotonesA.mb-5

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Teoría de sistemas

    p.mb-4 Un sistema representa una unión e interacción de elementos que cumplen una función determinada dentro de este; por lo anterior, se debe tener en cuenta el intercambio de materia y energía, por lo que se identifican tres tipos:

    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img02.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5        
              p Este tipo de sistema es en el que interactúan materia y energía, con el exterior y donde se recibe y expulsa energía y materia. 

      .col-sm-6.col-xl-4.mb-4.mb-xl-0  
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img03.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5        
              p En este tipo de sistema interactúa energía con exterior, se recibe energía de una forma y se emite de otra forma diferente.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img04.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5        
              p Este tipo de sistema es aquel donde no interactúa, ni materia, ni energía con el medio, este sistema es utilizado a grandes dimensiones.

    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Hablando de los sistemas ambientales, es importante resaltar que el medio ambiente está formado por distintos componentes que se relacionan entre sí, como los que se muestran en el siguiente recurso de aprendizaje:

        .row.mb-4
          .col-lg-3.col-sm-6.mb-sm-4
            img(src='@/assets/curso/tema1/img05.png')
          .col-lg-3.col-sm-6.mb-sm-4
            img(src='@/assets/curso/tema1/img06.png')
          .col-lg-3.col-sm-6.mb-sm-4
            img(src='@/assets/curso/tema1/img07.png')
          .col-lg-3.col-sm-6.mb-sm-4
            img(src='@/assets/curso/tema1/img08.png')
          
        p.mb-5 Por lo cual si alguno de estos componentes se modifica afecta directamente a los otros. El medio ambiente se divide en otros sistemas y de ellos subsistemas. Por tal motivo, a continuación en la figura 1, puede ver una imagen que le muestra la organización del sistema:

        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 1.
          span Sistemas Ambientales
        figure.mb-4
          img.mb-4(src='@/assets/curso/tema1/img09.png')

        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular.mb-0 Como se puede observar se establecen interacciones entre los sistemas naturales y los sistemas humanos, ya que a veces la actividad humana afecta de forma negativa, por lo que da como resultado sobreexplotación de los recursos, aumentando deforestación y la contaminación ambiental; y de otra parte la naturaleza también afecta al ser humano, ya que representan desastres naturales como inundaciones, terremotos y deslizamientos de terreno, entre otros. Por lo anterior, se busca la solución a todos estos problemas que se han venido presentando, desde el entendimiento y aplicación de los sistemas anteriormente explicados.           
            i.fas.fa-quote-right.p-0
          .bloque-texto-d__autor 
            .h5.mb-0 Nota. SENA (2021).
             
    separador
    .row.BGIMG03.p-4
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Clasificación y servicios ecosistémicos   

      p.mb-4 Hace referencia a todos los servicios que ofrece la naturaleza al ser humano, dichos beneficios se pueden recibir en forma de: valores, bienes y servicios. Estos se dividen en cuatro grupos, los cuales son, ver figura 2:

      .row.justify-content-center.mb-5
        .col-md-6
          SlyderF(columnas="col-12")
            .row.BG01.p-4.justify-content-center.mb-5
              h3.text-center.mb-4 Servicios culturales 
              p.mb-0 Son aquellos beneficios inmateriales, que sirven al ser humano para construir vida social.
            .row.BG01.p-4.justify-content-center.mb-5
              h3.text-center.mb-4 Servicios de regulación  
              p.mb-0 Son aquellos procesos ecológicos que realizan su misma regulación y ayudan a minimizar impactos ambientales.
            .row.BG01.p-4.justify-content-center.mb-5
              h3.text-center.mb-4 Servicios de aprovisionamiento  
              p.mb-0 Son aquellos productos extraídos del medio ambiente para ser utilizados o consumidos.
            .row.BG01.p-4.justify-content-center.mb-5
              h3.text-center.mb-4 Servicios de sostenimiento  
              p.mb-0 Son aquellos procesos ecológicos que son necesarios para que los otros servicios sigan existiendo. Estos son vitales para la supervivencia.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 2.
          span Sistemas ecosistémicos.
      .col-lg-8  
        figure.mb-5
          img.mb-4(src='@/assets/curso/tema1/img10.png')
      .col-lg-10
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2  
            i.fas.fa-quote-left        
            h3.text-regular La importancia de los servicios ecosistémicos repercute en la acción del ser humano y en los procesos biológicos de manera directa o indirecta, ya que dependiendo de su comportamiento los ecosistemas pueden tener cambios positivos o negativos. Es por este motivo que las políticas ambientales se deben tener en cuenta para facilitar la toma de decisiones y para mitigar el cambio climático.
            i.fas.fa-quote-right
          .bloque-texto-d__autor.lg-2  
            h5 Nota. SENA (2021)              
  
    separador
</template>
<script>
import BotonesA from '../components/BotonesA.vue'
export default {
  name: 'Tema1',
  components: {
    BotonesA,
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
