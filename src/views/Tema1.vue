<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materias primas, y materiales en el ensamble de mobiliarios

    p.mb-5 Tradicionalmente la madera ha sido la materia prima predilecta para la fabricación de mobiliarios. Sin embargo, otras fibras naturales como el mimbre, así como materiales como el acero inoxidable y aluminio, son utilizados especialmente en espacios  exteriores.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Habitualmente al referirse al término de mobiliario o mueble, la mayoría de las personas piensan en productos elaborados a partir de la madera. Si bien, esta es una condición cierta, ya que muchas veces se presenta, existen también, variedad de materiales y materias primas, a partir de las cuales es posible llevar a cabo el diseño y la producción de mobiliarios. El diseñador en la preproducción debe establecer qué materiales y materias primas compondrán su producto. 
      
    p.mb-5 Básicamente, el tipo de materia prima y materiales dependerán de las siguientes consideraciones:

    .tarjeta.color-slider.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            h4.ms-5 Función
            p.ms-5 Se refiere al servicio que prestará el mobiliario, esto es, si el destino es para el ocio o el descanso, se encontrarán materiales para brindar más comodidad por mayor tiempo. Aquí juega un papel importante la <b>ergonomía</b> y la percepción<b> organoléptica</b>, que básicamente consiste en que una silla para el descanso, no tendrá la misma forma, ni la misma sensación al tacto que una silla para el trabajo de escritorio o de comedor. Asimismo, si el producto diseñado está orientado a cumplir funciones que impliquen la carga de pesos variables, desplazamiento o solamente ornamental, el tipo de material garantizará la función deseada, en función de las propiedades de <em>rigidez, dureza, etc</em>. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-2.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            .col-lg-8
            h4.ms-5 Ambiente
            p.ms-5 De acuerdo a los tipos de ambientes, principalmente se distinguen dos: interiores y exteriores. El tipo de materia prima y los materiales que componen el producto, deben ser acordes a las exigencias del medio; dicho de otra manera, para ambientes exteriores que están expuestos permanentemente a factores climáticos como el sol, la lluvia, la nieve e incluso salitre; si se opta por la madera para el producto, este puede tener un ciclo de vida más corto y un costo de mantenimiento mayor, respecto a un producto elaborado en aluminio o acero inoxidable, que demandará menos acciones para la preservación y mantenimiento.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-3.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            .col-lg-8
            h4.ms-5 Cliente
            p.ms-5 Existen diferentes tipos de clientes, debido a esto, el diseño del producto puede ser orientado a un mercado amplio y muy general, a uno más pequeño y selecto, o tal vez a un cliente en particular. En todos estos casos, las preferencias y necesidades varían. Por ejemplo, un cliente con un estilo de vida marcado con preferencias hacia las motocicletas y gustos “retro”, muy seguramente preferirá mobiliarios que incluyan o combinen fibras naturales tratadas como el cuero, a diferencia tal vez, de una persona que tenga gustos más orientados a lo natural y con una dieta vegana. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-4.png')

    separador 

    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h3 1.1 Materiales utilizados

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-6
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            p Como se mencionó previamente, la materia prima o material predominante en el proceso de diseño y fabricación de mobiliarios es la madera. No obstante, existen distintos tipos de madera, que, de acuerdo a su procedencia y tratamiento, se dividen en distintas categorías y se destinan para diversos usos. Del mismo modo, otras materias primas, como el acero inoxidable se encuentran en varias presentaciones, de igual forma los aluminios con diferentes tratamientos y por supuesto los plásticos. 
            br
            p Dentro de los materiales que se utilizan como accesorios es posible encontrar herrajes en acero, aluminio, madera y plástico, que, de acuerdo a la función del mobiliario y estilo de diseño, pueden ser empleados para realzar propiedades físicas, estructurales o de impacto visual.

    p Teniendo en lo anterior, a continuación, se presentan las principales materias primas para la producción de mobiliario:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-secundario.pb-0
          p.mb-0.text-small <b>Figura 1</b>.
          p.text-small <em>Materias primas en mobiliarios</em>

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img.mb-4(src='@/assets/curso/temas/tema1/img-6.png')
      .tarjeta.colormodal(x="3.5%" y="20.2%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-61.png')
          .col-7
            p <b> </b>

            p 



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
