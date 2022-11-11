<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Renderizado y explosionado de conjuntos y partes

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las acciones de renderizado y explosionado en el proceso de diseño de productos mobiliarios van de la mano. A continuación, se invita a observar en qué consiste cada uno de ellos. 

    .row.mb-5
      .col-lg-9
        h3 Renderizado 
        
        p El <em>renderizado</em> consiste en llevar el diseño constructivo del producto mobiliario, a <b>espacios virtuales que recreen las condiciones más cercanas a la realidad del cliente</b>. Esto es, presentar el diseño en un espacio como una oficina junto a elementos propios de dicho espacio como escritorios, personas, puertas, etc.

        p.mb-5 También es propio del renderizado utilizar aspectos influyentes a nivel estético como: 
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png')

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-8.mb-3
              img(src='@/assets/curso/temas/tema2/img-3.png')
          p.mb-4.text-center La luz. 
          br
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-botones.p-5
          .row.justify-content-center.mb-5
            .col-8.mb-3
              img(src='@/assets/curso/temas/tema2/img-3.png')
          p.mb-4.text-center La tonalidad de la luz.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0  
        .tarjeta--boton.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/temas/tema2/img-3.png')
          p.text-center Los brillos o reflejos generados en superficies y bordes.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0  
        .tarjeta--boton.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-8
              img(src='@/assets/curso/temas/tema2/img-3.png')
          p.text-center Estética en función del tipo de material en el que está diseñado. 

    .row 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img-4.png')
      .col-lg-7
        p Si bien dentro del proceso de diseño, el <em>renderizado</em> no constituye una fase imprescindible para el diseñador, este ayuda en el proceso de revisión de pertinencia, contraste con el medio y además, genera una excelente opción para estrategias de <em>marketing</em>, en la medida que le transmite un concepto mucho más real y la interacción del mismo con su entorno. 
        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-acento-botones.p-4.mb-4
              p Según (Iglesias, 2021) dentro de los <em>softwares</em> de diseño o dibujo mecánico revisados hasta ahora, a excepción de la plataforma en línea <em>Thinkercad</em>, las operaciones de renderizado se llevan a cabo mediante plug-ins como el V-ray. Este se puede adicionar a programas como <em>Sketchup</em>, Revit, 3dsMax, entre otros. En el caso de Autocad, el motor de renderizado incluido, permite llevar a cabo estas operaciones sin necesidad de la instalación de más componentes. 

    p.mb-5 Ejemplo de <em>renderizado</em> de mueble y butaca de madera en un espacio cerrado con iluminación diurna:  

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-7
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            p En este ejemplo de renderizado, puede observarse cómo el diseñador presenta dos productos mobiliarios en madera en un espacio cerrado y la forma en la que se destacan algunas funciones como soportar plantas decorativas, para el caso de la butaca. Además, cómo se relaciona o ve esta, junto al estante con otra planta; cuyos colores contrastan con el tono de la pared de fondo y el piso, con respecto a los empleados en los productos, así como con la tonalidad de la luz de la habitación. El recurso del renderizado también es utilizado para la producción de videos publicitarios o animaciones de realidad virtual y aumentada. 

    h3 Explosionado

    .row.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img-6.png')
      .col-lg-9
        p El explosionado es una función propia de los programas de diseño y dibujo mecánico, que, <b>mediante la descomposición de las piezas, partes y componentes de un cuerpo, y a través de líneas punteadas o segmentadas</b>, muestra la posición de cada uno de estos. Este recurso se vuelve <b>imprescindible</b>, en cualquier formato o conjunto de indicaciones que pretendan indicar cómo armar o ensamblar un producto.  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-bloque-2.p-4.mb-4
              p Al explosionado también se le conoce con el nombre de <b>despiece</b>, este término es muy común, pero a nivel de diseño computacional se referencia más como explosionado. 

    p.mb-5 El siguiente es un ejemplo de explosionado: 

    .tarjeta.color-slider.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Ejemplo de explosionado de conjunto. Se observa que corresponde al diseño de una mesa auxiliar.  
          .col-md-6
            figure.row.justify-content-center.align-items-center.mb-5
              .col-lg-8
              img.img-300(src='@/assets/curso/temas/tema2/img-7.png')
        .row
          .col-md-6.mb-4.mb-md-0
            br
            br
            br
            br
            p.ms-5 Ejemplo de explosionado de partes del conjunto de la puerta de la mesa auxiliar, se aprecian elementos de fijación mecánica entre las bisagras y la superficie del producto. 

            p.ms-5 En esta figura, se aprecia en un círculo el aumento de la imagen del conjunto: bisagra, puerta y tronillos. A esta acción se le denomina, <em>vista de detalle o auxiliar</em>, que se desarrollará en el siguiente tema. (Ovela, s/f).   
          .col-md-6
            figure.row.justify-content-center.mb-0
              .col-lg-8
              img.img-300(src='@/assets/curso/temas/tema2/img-8.png')

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img-9.png')
      .col-lg-7
        br
        p En ambas imágenes del <em>explosionado de la mesa auxiliar</em>, se aprecian <b>letras</b> y <b>números</b>, este recurso es utilizado por el diseñador para designar tipos de tornillos, pernos, herrajes, entre otros y para diferenciar las partes o piezas que componen el conjunto del producto. Normalmente se utilizan letras para los elementos de fijación y accesorios como herrajes y números para las piezas.

        p La designación de letras y/o números para las operaciones de ensamble deben estar definidas desde el principio del proceso de preproducción parte del diseñador. Pues a partir de esta, en el manual de ensamble o instrucciones, se encontrará el índice que le permite al cliente o al equipo de diseño, identificar y seleccionar los elementos y piezas requeridos para el ensamble o armado. 


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

<style lang="sass"></style>
