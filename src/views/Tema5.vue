<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Emisión, revisión y gestión de la planimetría

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-8
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-4
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            p Los planos son los documentos en los cuales se plasma la información necesaria para el diseño y fabricación de un objeto, sistemas, partes y de cualquier elemento tangible. Desde lo más pequeño como una tuerca, hasta lo más complejo como un edificio o un avión de pasajeros. El plano reúne todo el proceso de diseño, que se plasma en líneas de dibujos sobre un papel, con una serie de normas y estándares internacionales, que dictan la manera adecuada en la que se deben disponer las composiciones gráficas, letras, vistas y ayudas visuales.
      
    p.mb-5 Como se ha venido revisando a lo largo del componente estudiado, el proceso de diseño se presenta en los siguientes pasos: 

    .row.justify-content-center.align-items-top.mb-5
      .col-md-4.mb-5.mb-md-0
        img(src='@/assets/curso/temas/tema5/img-2.png')

      .col-md-8.mb-5.mb-md-0.modificado1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Paso 1")
            .col-md-12.mb-4.mb-md-0
              p.text-small El primer paso se da desde el inicio de una idea, que se plasma en un papel. 
          .row(numero="2" titulo="Paso 2")
            .col-md-12.mb-4.mb-md-0
              p.text-small Después de desarrollar la idea, se obtiene un boceto.  
          .row(numero="3" titulo="Paso 3")
            .col-md-12.mb-4.mb-md-0
              p.text-small Con el boceto creado se trabaja, se perfecciona y se obtiene una representación.
          .row(numero="4" titulo="Paso 4")
            .col-md-12.mb-4.mb-md-0
              p.text-small Finalmente, se obtiene un plano del objeto desarrollado.  

    .row 
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img-3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La planimetría hace referencia al <b>conjunto de pasos y actividades que intervienen en el desarrollo de planos y la gestión de los mismos</b>. Cuando se refiere a gestión se abarca todo lo relacionado al manejo de los planos, esto es, el tipo de plano, la cantidad de planos, el tamaño, la ubicación, e incluso el procedimiento para la eliminación de los planos que no se utilizan o que van a ser reemplazados por otros nuevos. 

    .row.justify-content-end
      .col-lg-10
        .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-9
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-5
            .col-lg-4.mb-4.mb-lg-0.col-md-10
            .col-lg-8.col-md-10
              .bloque-texto-a__texto.p-4.order-md-first.order-sm-last.texto_tarjeta_verde
                p Existen dos maneras de generar planos, una es,<b> a partir del objeto o sólido construido en los programas de diseño y dibujo mecánico</b>, a través de la opción que estos tienen de<b> exportación o generación de planos y vistas</b> y, la <b>forma manual</b> como de manera habitual se hacía anteriormente. En la actualidad, no es común encontrar que los planos se desarrollen o emitan de manera manual, debido a que la utilización de los programas de diseño y dibujo mecánico se han posicionado fuertemente en el mercado y debido a la gran competencia de desarrolladores, existen numerosas opciones de bajo costo, e incluso gratuitas, que permiten hacer estos de forma rápida y eficiente. 

    p.mb-5 Sin embargo, en cualquiera de los dos casos en los que el diseñador se encuentre al momento de emitir o generar un plano, encontrará que existen elementos básicos que los abarcan, estos son: 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img-5.png")
          .crd_hover_txt--body
            h4.mb-3 Norma aplicable   
            p.mb-0 Existen muchas normas que se aplican para la elaboración de planos, entre las más usadas se encuentran ISO, ANSI, DIM y ASTM. Sin embargo, para el caso del diseñador digital de mobiliario, no es indispensable ni necesario conocer en detalle estas normas ya que, en las opciones de exportación, una vez diseñado o elaborado el producto digitalmente, y de acuerdo a la configuración que se establezca desde su instalación, así se representarán los planos. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img-6.png")
          .crd_hover_txt--body
            h4.mb-3 Cajetín
            p.mb-0 El cajetín es la sección del plano en donde se consignan datos como: nombre del plano, código del plano, fecha, versión del plano, nombre del diseñador o emisor del plano, nombre de quien revisa o aprueba el plano, versiones del plano, nombre de la empresa (si aplica), logo de la empresa, si aplica. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema5/img-7.png")
          .crd_hover_txt--body
            h4.mb-3 Codificación
            p.mb-0 La codificación es la manera en la cual el diseñador, o el área de producción designa un plano con el propósito de garantizar la accesibilidad a este, una vez se archiva o almacena. Por lo general, en la codificación de los planos, se asignan parámetros como: fecha de emisión, versión, y nombre representativo de lo que contiene el plano.

    p.mb-5 Un ejemplo de codificación para un producto como el de la mesa auxiliar de las imágenes del tema anterior, fabricado el 8 de agosto de 2022, para exportación a Ecuador, en su codificación podría ser:<b> 8-09-2022-V1.0-MesaAux11-41-INT-ECU</b>, donde: 

    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="8-09-2022")
            p Corresponde a la fecha de emisión de la versión. 
          .tarjeta.clr-paleYellow.p-4(titulo="V1.0")
            p Representa la versión del plano.
          .tarjeta.clr-paleYellow.p-4(titulo="MesaAux11-41")
            p Indica con las letras representativas de mesa auxiliar “MesaAux”, 11 color negro y 41 caoba, que la mesa auxiliar es de color negro y caoba.
          .tarjeta.clr-paleYellow.p-4(titulo="INT")
            p Que es de exportación, internacional.
          .tarjeta.clr-paleYellow.p-4(titulo="ECU")
            p Es el país o mercado al cual se destina el producto, en este caso a Ecuador. 

      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema5/img-8.png").m-auto

    .row 
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema5/img-9.png").m-auto
      .col-lg-7
        p.mb-5 En el caso presentado la codificación permite que el diseñador o el equipo de producción, ubique u organice los planos generados de manera consecutiva, esto es, en orden de <b>antigüedad de emisión</b>. Si por el contrario, se manejase la opción de codificación a través de letras, podría llevarse a cabo mediante orden alfabético. 

        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-acento-botones.p-4.mb-4
              p En el caso de los planos que reciben actualizaciones, algunos diseñadores optan por incluir en el cajetín hasta tres revisiones y sus fechas, para facilitar la interpretación y comprensión sobre los cambios al diseño realizado. En el caso de optar por esta alternativa, es conveniente manejar una bitácora o base de datos de los planos y diseños que contiene y, actualizarla cada vez que se modifique alguno. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-secundario.pb-0
          p.mb-0.text-small <b>tabla 1</b>. Ejemplo del cajetín

        figure
          img(src="@/assets/curso/temas/tema5/img-10.png").m-auto
          figcaption Nota: Adaptada de El cajetín. The finite element. Mercado, F. (2022)



    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .cajon.color-bloque-2.p-4.mb-4
          p Ejemplo para el diseño y diligenciamiento de un cajetín, los espacios de unidades, cantidad y número son elementos que el diseñador o equipo de producción puede crear o cambiar por otros ítems que se consideren relevantes para el seguimiento y la gestión del plano. 

    p Se recomienda explorar los demás recursos que se encuentran disponibles en este componente formativo, para hacerlo es importante ir al menú principal en donde se encuentra la síntesis, una actividad didáctica, el material complementario, entre otros. 
</template>

<script>
export default {
  name: 'Tema5',
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
