<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.p-4
      .col-lg-10
        .bloque-texto-g.BGIMG19.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/sintesis01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este documento contiene la descripción de las características y procedimientos que se deben tener en cuenta para la identificación y valoración de impactos ambientales. Esta metodología es aplicable a la gestión propia de las entidades u organismos en diferentes escenarios, esto se hace con el fin de identificar los aspectos y valorar los impactos ambientales de acuerdo a los procesos y actividades que estas desarrollan y que generen o puedan generar alguna afectación positiva o negativa al ambiente.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        p El objetivo principal de este componente formativo es instruir en la Identificación de los aspectos técnicos de los estudios ambientales según los requisitos legales. Por tal motivo, se describen los procedimientos a tener en cuenta y cómo determinar e identificar aspectos que generan impactos; por otro lado, se enseña a hacer un análisis del resultado de dicha valoración y así poder llegar a utilizar e implementar términos de referencia para la elaboración de un estudio ambiental del área en el que se esté trabajando, al tener las bases para construir dicho documento se podrá dar cumplimiento a la normatividad legal ambiental establecida, ver figura 8.  

    .row.justify-content-center
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8.
      .col-lg-10
        figure
          img(src="@/assets/curso/sintesis.png", alt="alt")

      
</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
