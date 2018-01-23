    /*Objeto para plantillas*/
    var context = {
    animals:[
      {
        fa: "fa-coffee",
        nombre: "café",
        explicacion: "Los activistas luchan más por la causa"
      },
      {
        fa: "fa-bandcamp",
        nombre: "Brújula",
        explicacion: "La brújula mejora tus acuerdos internacionales"
      },
      {
        fa: "fa-sun-o",
        nombre: "Energia solar",
        explicacion: "Las ecofincas tienen energia solar"
      },
      {
        fa: "fa-credit-card",
        nombre: "Tarjeta de crédito",
        explicacion: "Ahora se pueden hacer donaciones"
      }
    ]
  };

    /*Plantilla 1*/   
  			// Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('#potenciadores').html(theCompiledHtml);

  

  /*Plantilla 2*/
  // Grab the template script
  var theTemplateScript = $("#potenciador-info").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);


  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('#potenciador_info').html(theCompiledHtml);