export default {
  global: {
    componenteFormativo:
      'Análisis de aspectos técnicos para realizar estudios ambientales',
    descripcionCurso:
      'Los aspectos técnicos para realizar estudios ambientales son fundamentales en evaluación de impacto ambiental, ya que buscan analizar, describir y valorar el medio sobre el que se va a realizar el proyecto, con el fin de prever y mitigar impactos ambientales sobre el área de influencia, los cuales son unos de los principales objetivos de un estudio ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes del sistema socio ecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos biótico, abiótico y sociocultural',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Teoría de sistemas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación y servicios ecosistémicos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos de identificación y calificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición de los aspectos ambientales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Identificación de aspectos ambientales y qué impactos generan',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Clasificación y valoración de los impactos ambientales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Medidas de control y mitigación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estudios ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Antecedentes y definiciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Características y técnicas utilizadas para los estudios ambientales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Legislación relacionada con estudios ambientales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Términos de referencia',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'ANLA. (2019). Términos de referencia.',
      link:
        'https://www.anla.gov.co/normatividad/documentos-estrategicos/terminos-de-referencia',
    },
    {
      referencia:
        'ANLA. (2018). Metodología general para la elaboración y presentación de estudios ambientales.',
      link:
        'http://www.andi.com.co/uploads/metodolog%c3%ada%20estudios%20ambientales%202018.pdf',
    },
    {
      referencia:
        'ANLA. (s.f.). Autorización para otorgar el derecho de uso del Sello Ambiental Colombiano. La cual debe ser validada por ANLA, según normatividad Resolución 2210 de 2018.',
    },
    {
      referencia:
        'Camacho V. y Ruiz L. (2011). Marco conceptual y clasificación de los servicios ecosistémicos. Revista Biociencias:',
      link:
        'http://revistabiociencias.uan.mx/index.php/BIOCIENCIAS/article/view/19/17',
    },
    {
      referencia:
        'Contreras, D. (2017). Resolución 1519 de 2017 “Por la cual se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental (EIA)”. Universidad Externado de Colombia.',
      link:
        'https://medioambiente.uexternado.edu.co/resolucion-1519-de-2017-por-la-cual-se-adoptan-los-terminos-de-referencia-para-la-elaboracion-del-estudio-de-impacto-ambiental-eia-requerido-para-el-tramite-de-la-licencia-ambiental-de-los/',
    },
    {
      referencia:
        'Convención de la ONU sobre diversidad biológica. (2016). Uso de Términos.',
      link: 'https://www.cbd.int/convention/articles.shtml?a=cbd-02',
    },
    {
      referencia:
        'Decreto 870 de 2017. [Presidencia de la República de Colombia]. Por el cual se establece el pago por servicios ambientales y otros incentivos a la conservación.',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=30030677',
    },
    {
      referencia:
        'Decreto 2820 de 2010. [Agencia Nacional de Infraestructura]. Por el cual se reglamenta el título VIII de la Ley 99 de 1993 sobre licencias ambientales.',
      link:
        'https://www.ani.gov.co/normatividad-inco/decreto-no-2820-de-2010-283',
    },
    {
      referencia:
        'Decreto 3678 de 2010. [Congreso de la República de Colombia]. Por el cual se establecen los criterios para la imposición de las sanciones consagradas en el artículo 40 de la Ley 1333 del 21 de julio de 2009 y se toman otras determinaciones. 4 de octubre de 2010.',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=1878340',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. Plan de Desarrollo Nacional 2018-2022. Pacto por la sostenibilidad: producir conservando y conservar produciendo.',
      link:
        'https://www.dnp.gov.co/DNPN/Plan-Nacional-de-Desarrollo/Paginas/Pactos-Transversales/Pacto-por-la-sostenibilidad/Sostenibilidad.aspx ',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. Objetivos de Desarrollo sostenible, agenda 2030 en Colombia.',
      link: 'https://ods.gov.co/es',
    },
    {
      referencia:
        'ICONTEC. Norma Técnica Colombiana, NTC-ISO 14001, 2015. Sistema de Gestión Ambiental, requisitos con orientación para su uso.',
      link:
        'https://informacion.unad.edu.co/images/control_interno/NTC_ISO_14001_2015.pdf',
    },
    {
      referencia:
        'IDEAM. Sistema de Gestión Ambiental. (2019). Manual de identificación y evaluación del componente ambiental.',
      link:
        'http://www.ideam.gov.co/documents/412030/41385931/E-SGI-A-M001+MANUAL+DE+IDENTIFICACI%C3%93N+Y+EVALUACI%C3%93N+DEL+COMPONENTE+AMBIENTAL.pdf/9e1b4c74-6281-4fee-a1c4-10d0c2be8ae0?version=1.0 ',
    },
    {
      referencia:
        'Ley 1931 de 2018. [Congreso de la República de Colombia]. Por la cual se establecen directrices para la gestión del cambio climático.',
      link:
        'https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87765',
    },
    {
      referencia:
        'Ley 1844 de 2017. [Congreso de la República de Colombia]. Por medio de la cual se aprueba el “Acuerdo de París”, adoptado el 12 de diciembre de 2015, en París, Francia.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30032607',
    },
    {
      referencia:
        'Ley 1450 de 2011. [Congreso de la República de Colombia]. Por la cual se expide el Plan Nacional de Desarrollo, 2010-2014',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1680917',
    },
    {
      referencia:
        'Ley 1333 del 2009. [Congreso de la República de Colombia]. Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones. 21 de julio de 2009.',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=1677544',
    },
    {
      referencia:
        'Ley 23 de 1973. [Congreso de la República de Colombia]. Por la cual se conceden facultades extraordinarias al Presidente de la República para expedir el Código de Recursos Naturales y de Protección al Medio Ambiente y se dictan otras disposiciones. 19 de diciembre de 1973.',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=1579056',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, ANLA (2020). Metodología general para la elaboración y presentación de estudios ambientales.',
      link:
        'http://www.andi.com.co/Uploads/Metodologi%E2%95%A0%C3%BCa%20General%20para%20la%20Elaboracio%E2%95%A0%C3%BCn%20y%20Presentacio%E2%95%A0%C3%BCn%20de%20Estudios%20Ambientales.pdf',
    },
    {
      referencia:
        'Resolución 2184 de 2019. [Ministerio de Medio Ambiente y Desarrollo Territorial]. Establece la obligatoriedad del uso racional de bolsas plásticas en almacenes de cadena y su posterior modificación con la resolución 2184 del 2019.',
      link:
        'http://www.andi.com.co/Uploads/res._2184_-_2019_por_la_cual_se_modifica_la_resolucion_668_de_2016_sobre_uso_racional_de_bolsas_plasticas_y_se_adoptan_otras_disposiciones_1.pdf',
    },
    {
      referencia:
        'Resolución 1561 de 2019. [Ministerio de Medio Ambiente y Desarrollo Sostenible]. Por la cual se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental (EIA), requerido para el trámite de la licencia ambiental de los proyectos de explotación de materiales de construcción, amparados en autorizaciones mineras temporales, destinados al mantenimiento, mejoramiento y rehabilitación de vías terciarias y para el programa “Colombia Rural” y, se adoptan otras disposiciones.',
      link:
        'https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambienteds_1561_2019.htm',
    },
    {
      referencia:
        'Resolución 1447 de 2018. [Ministerio de Medio Ambiente y Desarrollo Sostenible]. Por la cual se reglamenta el sistema de monitoreo, reporte y verificación de las acciones de mitigación a nivel nacional de que trata el artículo 175 de la Ley 1753 de 2015, y se dictan otras disposiciones.',
      link:
        'https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambienteds_1447_2018.htm',
    },
    {
      referencia:
        'Resolución 2060 de 2011. [Ministerio de Medio Ambiente y Desarrollo Sostenible]. Por la cual se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias, permisos, autorizaciones y demás instrumentos de control y manejo ambiental y se dictan otras disposiciones.',
      link:
        'https://normograma.info/findeter/docs/resolucion_anla_0260_2011.htm',
    },
    {
      referencia:
        'Resolución 415 de 2010. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se reglamenta el Registro Único de Infractores Ambientales – RUIA- y se toman otras determinaciones.',
    },
    {
      referencia:
        'Resolución 2064 de 2010. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se reglamentan las medidas posteriores a la aprehensión preventiva, restitución o decomiso de especímenes de especies silvestres de Fauna y Flora Terrestre y Acuática y se dictan otras disposiciones.',
      link:
        'https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambientevdt_2064_2010.htm',
    },
    {
      referencia:
        'Resolución 1023 del 2005. [Ministerio de Medio Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se adoptan guías ambientales como instrumento de autogestión y autorregulación.',
      link:
        'https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambientevdt_1023_2005.htm ',
    },
    {
      referencia:
        'Secretaría de Ambiente. (2013). PIGA, Instructivo diligenciamiento de la matriz de identificación de aspectos y valoración de impactos ambientales.',
      link:
        'https://www.ambientebogota.gov.co/documents/10184/564058/Instructivo+para+el+diligenciamiento+de+la+matriz+de+Identificaci%C3%B3n+de+aspectos+y+valoraci%C3%B3n+de+impactos+ambientales.pdf/e5f7edbd-f5d8-4008-8bda-fb9328d8b98b',
    },
    {
      referencia:
        'Zabala, I. y García, M. (2008). Historia de la Educación Ambiental desde su discusión y análisis en los congresos internacionales. Instituto Pedagógico de Caracas.',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1010-29142008000100011',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'Elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Complejos dinámicos de plantas, animales y otras comunidades vivas y el entorno inerte, interactuando como unidades funcionales. Los humanos son parte integral de los ecosistemas.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Cualquier cambio en el medio ambiente, ya sea adverso o beneficioso, como resultado total o parcial de los aspectos ambientales de una organización.',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'Entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones.',
    },
    {
      termino: 'Zonificación Ambiental',
      significado:
        'Proceso de sectorización de un área compleja en áreas relativamente homogéneas de acuerdo a las características y a la sensibilidad ambiental de los componentes de los medios abiótico, biótico y socioeconómico.',
    },
  ],
  complementario: [
    {
      texto:
        'NTC-ISO 14001. (2015). Sistemas de gestión ambiental, requisitos con orientación para su uso.',
      tipo: 'PDF',
      link:
        'https://informacion.unad.edu.co/images/control_interno/NTC_ISO_14001_2015.pdf',
    },
    {
      texto:
        'Montero, A. (2017). Qué son Aspectos e Impactos Ambientales. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rE-m9ZYs0u8',
    },
    {
      texto:
        'Secretaría de Ambiente. (2013). PIGA, Instructivo diligenciamiento de la matriz de identificación de aspectos y valoración de impactos ambientales',
      tipo: 'PDF',
      link:
        'https://www.ambientebogota.gov.co/documents/10184/564058/Instructivo+para+el+diligenciamiento+de+la+matriz+de+Identificaci%C3%B3n+de+aspectos+y+valoraci%C3%B3n+de+impactos+ambientales.pdf/e5f7edbd-f5d8-4008-8bda-fb9328d8b98b',
    },
    {
      texto:
        'IISD. International Institute for Sustainable Development. (s.f.). Ejemplos sobre evaluación de impactos ambientales.',
      tipo: 'Página web',
      link: 'https://www.iisd.org/learning/eia/es/examples/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lizeth Daniela Reinoso',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja.',
      },
      {
        nombre: 'Ana Vela Rodriguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Bogotá- Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica-Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología-Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
