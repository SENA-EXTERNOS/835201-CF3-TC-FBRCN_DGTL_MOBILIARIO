<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Vistas auxiliares y detalle en el ensamble

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como se pudo ver, el explosionado parte de la construcción de un elemento sólido y la separación en vista isométrica de los elementos y piezas que la conforman. Las vistas auxiliares, como su nombre lo indica, corresponden a las vistas que utiliza el diseñador para representar más componentes que hacen parte de una sección del conjunto, que, en una vista isométrica normal, pudiesen no identificarse de manera clara, o sobre una sección del conjunto que requiera ser ampliada. 

    p.mb-5 Algunas particularidades de las vistas auxiliares son: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-tar-tres.p-3
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema3/img-2.png')
        p.text-center Las vistas auxiliares no necesariamente conservan el tamaño o proporción del isométrico original. 
      .tarjeta.color-tar-tres.p-3
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema3/img-2.png')
        p.text-center Pueden ser aumentadas, ajustadas, ubicadas o reducidas, según el criterio del diseñador.  
      .tarjeta.color-tar-tres.p-3
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema3/img-2.png')
        p.text-center Las vistas auxiliares son ampliamente utilizadas, en especial en los instructivos de ensamble de los productos.  
      .tarjeta.color-tar-tres.p-3
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema3/img-2.png')
        p.text-center Estas vistas ayudan mucho al cliente a entender y comprender los pasos de un procedimiento de ensamble. 
      .tarjeta.color-tar-tres.p-3  
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema3/img-2.png')
        p.text-center Se recomienda al diseñador, no escatimar en la utilización de vistas auxiliares. 

    p.mb-5 Como se puede ver, estas vistas son de gran ayuda para el diseño y los instructivos para el ensamble, a continuación, se pueden analizar algunas características específicas sobre las <b>vistas auxiliares y las vistas de detalle</b>: 

    .tarjeta.color-slider.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Por lo general, las vistas auxiliares se distinguen porque se encuentran delimitadas o encerradas por líneas continuas y una forma en el perímetro de la misma triangular, que indica de que vista originalmente ha sido tomada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-3.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 En esta imagen se puede apreciar cómo el diseñador utiliza dos vistas auxiliares para indicar, en una, la manera correcta de la posición de un perno de fijación y en la otra, los tornillos que ajustan el riel a la madera.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-4.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Las <b>vistas de detalle </b>contienen mayor información visual y procedimental, específica de una operación, proceso de ensamble o condición de una pieza o un componente. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-5.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Las vistas de destalle, por lo general están acompañadas de anotaciones escritas, que ayudan a clarificar dudas sobre el ensamble o el producto por parte del cliente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-6.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Al igual que con las vistas auxiliares, se recomienda al diseñador, no escatimar en la utilización e implementación de las vistas de detalle que sean necesarias.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-7.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 En este ejemplo de vista de detalle, se puede observar cómo el diseñador hace énfasis en el detalle de las bisagras, de las puertas de la mesa auxiliar. También implementa dentro de los pasos de ensamble otros nuevos pasos, para dar mayor claridad en la manera de instalar las bisagras a la madera. (Ovela, s/f).  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 En este conjunto de vistas de detalle, puede observarse cómo el diseñador ilustra los elementos de fijación mecánica y las cantidades de los mismos, que componen dentro del conjunto, el ensamble de la sección de la mesa auxiliar. (Ovela, s/f).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-9.png')
</template>

<script>
export default {
  name: 'Tema3',
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
