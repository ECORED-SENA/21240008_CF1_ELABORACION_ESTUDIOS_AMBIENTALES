<template lang="pug">
.btns
  img(src='@/assets/curso/tema1/img11.svg')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-3.py-4(v-if="index === hover" :style="{left:boton.left, top:boton.top}")
      .col-md-12.p-2
        h5.mb-3.font-weight-bold
          | {{ boton.titulo }}
        p.mb-0.text-center(v-html="boton.texto")  

</template>

<script>
export default {
  name: 'BotonesA',
  data: () => ({
    indicador: true,
    hover: null,
    size: '7%',
    botones: [
      {
        pos_x: '46.5%',
        pos_y: '4%',
        left: '50%',
        top: '-200%',
        texto:
          'Son aquellos elementos inertes, que están presente en el ambiente pero que no tienen vida, pueden ser físicos, químicos,  geológicos y el clima.',
      },
      {
        pos_x: '21%',
        pos_y: '47%',
        left: '-50%',
        top: '-270%',
        texto:
          'Son aquellos organismos que poseen vida y constituyen una comunidad de seres vivos que cumplen con el ciclo vital de nacer, crecer, reproducirse y morir. Se pueden encontrar organismos como: animales, plantas y microorganismos.',
      },
      {
        pos_x: '73%',
        pos_y: '47%',
        left: '75%',
        top: '-215%',
        texto:
          'Son todos los procesos relacionados con aspectos culturales y sociales de una comunidad, los rasgos o actividades pueden delimitar y representar la forma en que esta se organiza.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: auto
    background-repeat: no-repeat
    cursor: pointer
    background-position: center
    transition: background-image 0.2s ease-in-out
  &__text
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
    border-radius: 20px
    position: absolute
    left: 200%
    background-color: #FEFBDC
    width: 400px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    .number
      position: absolute
      top: -10px
      left: 3%
      width: 91px

@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>
