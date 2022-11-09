<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-6.order-md-first.order-sm-last
          p.mt-5 Apreciado aprendiz, bienvenido a este recurso educativo. En el desarrollo de esta parte del proceso de fabricación digital de mobiliario, se profundiza en el reconocimiento de las principales materias primas, haciendo énfasis en las maderas. Además, se abordan algunos materiales como el acero y el aluminio, utilizados en el diseño y fabricación de mobiliarios. Posteriormente, se resalta la importancia de proveer diseños ajustados a las necesidades del mercado. Por otra parte, se revisa la forma en la que se deben realizar las instrucciones, dirigidas a los mobiliarios que requieran operaciones de ensamble poscompra. Asimismo, se observan las ayudas que las tecnologías 4.0 brindan al público sobre este proceso. Finalmente, una vez comprobado el éxito de un diseño y la materialización del mismo, en la fabricación de un producto, se muestra la manera en la cual se debe gestionar el insumo, lo que permite la mejora o cambios a futuro en los planos, donde queda consignada toda la información.   

          p En el siguiente video se muestran, de manera general, los temas y aspectos que se desarrollan a lo largo del componente formativo. 

          h5 ¡Esperamos que la experiencia de aprendizaje sea exitosa! 

        .col-md-5.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/temas/introduccion/img-1.png")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
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
