<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materias primas y materiales en el ensamble de mobiliarios

    p.mb-5 Tradicionalmente la madera ha sido la materia prima predilecta para la fabricación de mobiliarios. Sin embargo, otras fibras naturales como el mimbre, así como materiales como el acero inoxidable y aluminio, son utilizados especialmente en espacios  exteriores.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
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
            p.ms-5 Se refiere al servicio que prestará el mobiliario, esto es, si el destino es para el ocio o el descanso, se encontrarán materiales para brindar más comodidad por mayor tiempo. Aquí juega un papel importante la <b>ergonomía</b> y la percepción<b> organoléptica</b>, que básicamente consiste en que una silla para el descanso, no tendrá la misma forma, ni la misma sensación al tacto que una silla para el trabajo de escritorio o de comedor. Asimismo, si el producto diseñado está orientado a cumplir funciones que impliquen la carga de pesos variables, desplazamiento o solamente <em>ornamental,</em> el tipo de material garantizará la función deseada, en función de las propiedades de <em>rigidez, dureza, etc</em>. 
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

    #t_1_1.titulo-segundo.color-acento-botones.pb-2
      h3 1.1 Materiales utilizados

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-6(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-11
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            p Como se mencionó previamente, la materia prima o material predominante en el proceso de diseño y fabricación de mobiliarios es la <b>madera</b>. No obstante, existen distintos tipos de madera, que, de acuerdo a su procedencia y tratamiento, se dividen en distintas categorías y se destinan para diversos usos. Del mismo modo, otras materias primas, como el <b>cacero inoxidable</b> se encuentran en varias presentaciones, de igual forma los <b>aluminios</b> con diferentes tratamientos y por supuesto los <b>plásticos</b>. 
            p Dentro de los materiales que se utilizan como accesorios es posible encontrar herrajes en acero, aluminio, madera y plástico, que, de acuerdo a la función del mobiliario y estilo de diseño, pueden ser empleados para realzar propiedades físicas, estructurales o de impacto visual.

    p Teniendo en lo anterior, a continuación, se presentan las principales materias primas para la producción de mobiliario:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-secundario.pb-0
          p.mb-0 <b>Figura 1</b>
          p <em>Materias primas en mobiliarios</em>

    ImagenInfograficaB.color-acento-botones.mb-5.img-infografica-b__item__numero-2
      template(v-slot:imagen)
        figure
          img.mb-4(src='@/assets/curso/temas/tema1/img-6.svg')
      .tarjeta.colormodal(x="20%" y="36%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-61.png')
          .col-7
            p.tamanio La madera es una materia prima que, a partir de su tratamiento en bruto puede generar.
      .tarjeta.colormodal(x="30.8%" y="54.5%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-62.png')
          .col-7
            p.tamanio Son las maderas que como su nombre lo indica, al pasar por los procesos de un aserradero, se pueden destinar para la construcción de edificaciones, barcos y mobiliarios, que requieren altas prestaciones a nivel de resistencia estructural. A partir de estas maderas se encuentra una amplia oferta de mobiliario del tipo rústico. (Departamento de Planeación Nacional, s/f).
      .tarjeta.colormodal(x="30.8%" y="71.7%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-62.png')
          .col-7
            p.tamanio Son maderas que luego de pasar por los procesos de aserraderos, reciben un tratamiento con agentes químicos que previenen la aparición de daños producidos por agentes biológicos como plagas (termitas, por ejemplo), y agentes ambientales como la lluvia, el sol, el calor, el frío, la humedad y la salinidad. Están destinadas también a prestaciones estructurales a nivel de construcción y, en el mobiliario, se utilizan para productos que van a prestar su función en ambientes con condiciones adversas, normalmente en exteriores. Este tipo de maderas, gracias a los procesos de inmunización a los que son sometidas, garantizan un ciclo de vida del producto mucho más largo, respecto a maderas que no son inmunizadas. (Departamento de Planeación Nacional, s/f).
      .tarjeta.colormodal(x="30.8%" y="88.2%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-62.png')
          .col-7
            p.tamanio A partir de los procesos que se llevan a cabo en los aserraderos con diferentes maderas en bruto, se obtienen <b>maderas de tipo contrachapa y aglomerada,</b> que son los residuos o partículas sometidas a alta presión y temperatura, utilizando aglutinantes o resinas, para obtener tableros o tablas de un nuevo material compuesto por varios tipos de madera. Estos productos son ampliamente utilizados, sobre todo en los mobiliarios de tipo modular. No son resistentes a la humedad ni al agua y no se recomiendan para el uso en exteriores, o funciones que requieran de gran resistencia estructural. A diferencia de los anteriores tipos de maderas, estas son más económicas de adquirir en el mercado, en su presentación en forma de tablero. (Departamento de Planeación Nacional, s/f).
      .tarjeta.colormodal(x="52%" y="36%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-63.png')
          .col-7
            p.tamanio Estos dos metales son ampliamente utilizados en los mobiliarios industriales y de espacios exteriores, debido a su resistencia y gran durabilidad. En el caso de estos, se resaltan las siguientes presentaciones.
      .tarjeta.colormodal(x="63.6%" y="54.6%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-64.png')
          .col-7
            p.tamanio Como lo indica su nombre son tubos con forma circular, cuyo espesor o calibre varía en función de la necesidad. Con el acero en mayor medida que el aluminio, al momento de hacer dobleces, se presenta un fenómeno denominado “endurecimiento por deformación”, que es aprovechado por los diseñadores y fabricantes para hacer la mayoría de soportes o partes de muebles que resistirán pesos, sin necesidad de cortar o seccionar partes. Un ejemplo, puede ser visto en las sillas escolares hechas de tubos de acero o las sillas de cafetería en aluminio.
      .tarjeta.colormodal(x="63.6%" y="71.4%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-65.png')
          .col-7
            p.tamanio Son tubos que tienen una presentación rectangular, variando no solo el calibre, sino el largo y ancho. A diferencia de los redondos, estos no se endurecen a medida que se deforman o doblan, por el contrario, tienden a fracturarse o partirse. En los tubos cuadrados, los dobleces son reemplazados por cortes, que, mediante técnicas de unión o fijación, permitirán el ensamble o ajuste con otras piezas o partes.
      .tarjeta.colormodal(x="63.6%" y="88.1%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-66.png')
          .col-7
            p.tamanio Al igual que los tubos, poseen un espesor o calibre, su presentación es cuadrada o rectangular. Gracias a esta geometría, es posible llevar a cabo dobleces en una sola lámina o chapa. Son ampliamente utilizadas en la producción de mobiliario de la industria de alimentos, medicina, cárnicos y cocinas. Así como, para la conformación de superficies de muebles de uso frecuente y ambientes exteriores. Como ejemplo, se resaltan las mesas de cafeterías y lavaderos de cocina.
      .tarjeta.colormodal(x="85%" y="36%" numero="+")
        .row.justify-content-center.mb-5.p-5

            p.tamanio Los plásticos son materias primas que han incursionado en todos los campos e industrias, en el caso del mobiliario es muy común encontrar una gran variedad de propuestas a nivel comercial de este tipo. Especialmente para propósitos que van desde lo ornamental, hasta el ocio a espacios abiertos; como en soluciones que reemplacen muebles que tradicionalmente se fabrican en madera como armarios, estantes o repisas. El plástico más utilizado en la fabricación de productos mobiliarios es el polipropileno, gracias a las propiedades físicas que se asemejan a las prestaciones de dureza y flexibilidad de algunas maderas. Por tratarse de un material sintético, a diferencia de la madera, no requiere muchas consideraciones en cuanto al tipo de uso o ambiente en el que se vaya a utilizar. Sin embargo, el proceso de fabricación con plásticos vírgenes (aquellos plásticos que provienen como subproducto del proceso de refinamiento del petróleo), es muy diferente al llevado a cabo con maderas o metales, ya que estos, son inyectados en moldes y, por lo general, el producto final resulta en una sola pieza o en varias, si es el caso de mobiliarios modulares.

      .tarjeta.colormodal(x="96.4%" y="54.5%" numero="+")
        .row.justify-content-center.mb-5.p-5(data-aos="fade-left")
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img-67.png')
          .col-7
            p.tamanio Por otra parte, los plásticos reciclados, aunque también pueden ser inyectados en moldes para la conformación de nuevos productos, debido a la facilidad de conformación de vigas o tubos redondos o cuadrados. Son utilizados de esta manera, para luego construir nuevos productos, mediante procesos de mecanizados similares a los de la madera y los metales. El plástico al igual que el aluminio y el acero, puede ser combinado con la madera para obtener productos sofisticados y disruptivos.

    separador 

    #t_1_2.titulo-segundo.color-acento-botones.pb-2
      h3 1.2 Esquematización de procedimientos de ensamble

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ensamble de los productos mobiliarios representa una acción importante desde la fase de diseño, hasta la producción. Desde el proceso de diseño, el diseñador debe contemplar los elementos que intervienen en una acción de ensamble, para los productos que no son proyectados en una sola pieza y para los de tipo modular. Dentro de los procesos de ensamble, se distinguen dos en particular, el que corresponde al <b>preensamblado</b> desde la producción, y al del <b>ensamble</b> por parte del cliente en los productos que lo requieren.
        br
        br
        p Los preensambles en la fase de producción, por lo general se llevan a cabo utilizando elementos de sujeción mecánica como tornillos, pernos o remaches, o ensambles a través de encajes angulares, en el caso del aluminio y acero. Además de los elementos de fijación mecánica, también se llevan a cabo ensambles mediante la aplicación de soldadura. A continuación, se muestran algunos elementos y tipos de ensamble.

    h5.mb-5  Elementos de sujeción o fijación mecánica  

    .row.mb-5
      .col-lg-2
        figure.mb-3
          img(src='@/assets/curso/temas/tema1/img-8.png')(data-aos="fade-left")
      .col-lg-10
        p En el caso de los mobiliarios de madera se encuentran los conocidos tornillos o pernos, tuercas, tarugos o tacos. Por su parte, en los mobiliarios producidos en materiales metálicos como el aluminio y el acero, además de utilizarse tornillos, pernos y tuercas, también es muy común el uso de remaches. Todos estos elementos no requieren la adición de calor o intervención en las propiedades químicas de los materiales, siempre son utilizados a partir de la generación de un orificio con una herramienta como el taladro, dentro del cual se alojarán.  

        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-acento-botones.p-4.mb-4
              p Los <em>software</em> de diseño CAD y dibujo mecánico, mediante el uso de bibliotecas incluidas, permiten la revisión e inserción al diseño de los tipos de elementos de fijación mecánica y/o soldadura, con el que se proyecta el diseño del producto. 

        p A continuación, se observan algunas características de los elementos de sujeción o fijación mecánica: 

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo=" Los pernos hexagonales" :icono="require('@/assets/curso/temas/tema1/img-9.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            br
            br
            br
            p Requieren del uso de tuercas y arandelas para garantizar la fuerza de unión entre las piezas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-12.png')
      .py-4.py-md-5(titulo="Los tornillos de cabeza plana y tipo estrella" :icono="require('@/assets/curso/temas/tema1/img-10.png')")
        .row
          .col-md-6
            br
            br
            br
            p.mb-3 Son empleados directamente sobre superficies de madera, aglomerados y plásticos. 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-13.png')
      .py-4.py-md-5(titulo="Los tarugos o tacos" :icono="require('@/assets/curso/temas/tema1/img-11.png')")
        .row
          .col-md-6
            br
            br
            br
            p.mb-3 Pueden encontrarse en presentaciones de madera o plástico. Los de madera mayormente se utilizan con la aplicación de pegante natural para madera y, en el caso de los plásticos, se insertan directamente entre los agujeros de las piezas del mismo material a ensamblar. 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png')

    h4.mb-5 Ensambles angulares 

    p Los ensambles angulares son técnicas, que la mayoría de las veces, utilizan los ebanistas más expertos para conseguir uniones y ensambles entre piezas del mismo material, sin necesidad de recurrir a elementos de fijación mecánica o sustancias pegantes.  
    p.mb-5 A continuación, se muestran algunas características de los elementos de ensambles angulares:

    .tarjeta.color-slider.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Los ensambles angulares consisten básicamente en la generación de cortes transversales en las puntas o secciones de piezas, que encajan en otras formando ángulos rectos (de 90 °) entre ellos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-15.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 En el caso particular de la madera, este tipo de ensamble es agradable y atractivo a la vista estéticamente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-16.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            p.ms-5 Algunos ejemplos de los ensambles angulares más conocidos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-17.png')

    h4.mb-5 Soldadura

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img-18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el proceso de soldadura, contrario a los ensambles angulares y las fijaciones mecánicas, sí se presenta un fenómeno de aumento en la temperatura de los materiales, hasta el punto que genera el cambio de la composición de los materiales metálicos, fundiéndolos y permitiendo la unión entre estos. 
        br
        br
        p Al igual que los pernos, remaches y tornillos, los programas CAD y de dibujo mecánico, traen opciones para la aplicación de este tipo de ensamble.

    p.mb-5 Se pueden observar algunas características de la soldadura a continuación: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-lado-izq.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img-19.png')

        p.text-center.ms-5.me-5 La soldadura es un proceso considerablemente más complejo y costoso, que, por lo general se emplea en mobiliarios muy especializados.  
      .col-md.tarjeta.color-lado-der.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img-20.png')

        p.text-center.ms-5.me-5 Existen diferentes tipos de soldaduras, la aplicación de cada una de ellas varía en función del material, el tipo de acabado deseado y, de la función que desempeñará el producto diseñado. 

    .row.row.justify-content-end.align-items-center.mb-5
      .col-lg-10
        p Con base en lo anterior, la esquematización de un ensamble está dada por 3 pasos básicos: <b>presentación del isométrico, pasos ordenados para el ensamble, anotaciones y ayudas adicionales para el ensamble.</b>

        p En la siguiente figura se explican un poco más estos pasos:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-secundario.pb-0
          p.mb-0 <b>Figura 2</b>
          p <em>Esquema de un ensamble</em>

    ImagenInfograficaB.color-acento-botones.mb-5.img-infografica-b__item__numero-3
      template(v-slot:imagen)
        figure
          img.mb-4(src='@/assets/curso/temas/tema1/img-21.png')
      .tarjeta.colormodal-2(x="6.7%" y="35%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img-22.png')
          .col-lg-7.col-sm-12
            br
            p.tamanio El isométrico o renderizado del producto, permite tanto al diseñador, el equipo de producción y a los clientes, identificar el producto sobre el cual se llevarán a cabo los procesos y pasos para el ensamble. Esto es muy importante, porque a medida que se van generando más diseños de productos, las nuevas versiones u ofertas, surgen a partir de la revisión y mejora de los anteriores. En el caso de los clientes, les permite tener un marco de referencia sobre el producto.
      .tarjeta.colormodal-2(x="40.2%" y="35%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img-23.png')
          .col-lg-7.col-sm-12
            br
            p.tamanio Los pasos ordenados son el conjunto de instrucciones que, para el diseñador, el equipo de diseño y los clientes, representan desde la apertura del envoltorio del mobiliario, hasta el último elemento o tornillo que componen el producto. Para el caso de los muebles modulares, gracias a la opción de explosionado, el diseñador puede tomar partes o secciones para mostrar de manera detallada el procedimiento de forma sencilla y entendible. En esta fase, se representan también los elementos de fijación mecánica empleados o los ensambles angulares, si el producto los requiere.
      .tarjeta.colormodal-2(x="74%" y="35%" numero="+")
        .row.justify-content-center.mb-5.p-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img-24-.svg')
          .col-lg-7.col-sm-12
            br
            p.tamanio Las anotaciones y ayudas corresponden a las indicaciones que permiten tener un mayor entendimiento al diseñador y en especial al cliente, en cuanto a la utilización de herramientas, o consideraciones de seguridad aplicables tanto en el proceso de ensamble, como en el uso del mueble. Aspectos aplicables a la garantía, mantenimiento, contacto y similares.
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
