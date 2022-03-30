<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción
    
    .row.BGIMG01.justify-content-center.p-4.mb-4
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .bloque-texto-a__texto.p-4
                p La Unesco y otras entidades a nivel mundial están trabajando arduamente en el logro de los Objetivos de Desarrollo Sostenible (ODS)- Agenda 2030, para que entre todos se pueda dejar un mundo mejor a las siguientes generaciones.
            .col-lg-4(data-aos="fade-left")
              img(src='@/assets/curso/intro/img02.svg')
      .col-lg-10
        p.mb-0 Es por ello, que Colombia le ha apostado al cumplimiento de los 17 ODS, con el fin de que cada ciudadano responda con sus acciones frente al cuidado del medio ambiente. Es por esa razón, que se hace necesario revisar el tema “Apropiación de aspectos técnicos y normativos para la elaboración de estudios ambientales” con el fin de que, al conocer la normatividad, cada uno sea veedor de los proyectos privados y estatales que impacten el contexto y la comunidad. Por lo anterior, se invita a ver el siguiente video con el cual inicia el aprendizaje.
              
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/n9YnrpJvYWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
