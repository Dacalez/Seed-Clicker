$( document ).ready(function() {
    /*Semillas por Click*/
    let semillasParaGastar=0;
		let semillasPorClick=0;

$("#clicker").click(function(event){
    	let incrementoPorClick=1+bonus
    	semillasParaGastar+=incrementoPorClick;

		$('#SemillasParaGastar').text('Tienes '+Math.floor(semillasParaGastar)+ ' semillas');
      	let diff=$("#getSeed").offsetParent().position();
     	$("#getSeed").css("top", event.pageY-diff.top+15);
      	$("#getSeed").css("left", event.pageX-diff.left);
      	$("#getSeed").text("+" + incrementoPorClick);

});


		/*Semillas por segundo*/
		let bonus=null;
		setInterval(function(){
			semillasPorClick=1*bonus;
			semillasParaGastar+=semillasPorClick;
			$('#SemillasParaGastar').text('Tienes '+Math.floor(semillasParaGastar)+ ' semillas');
			$('#SemillasPorClick').text('Generas '+semillasPorClick+ ' por segundo');
			}, 1000);

		/*Noticias*/
	
		/*Tienda*/
		       /*Potenciadores*/
    $( ".potenciador" ).click(function() {
        $( "#potenciador_info" ).toggle();
      });


		/* Variables items*/
		let precioArboles=15;
		let numArboles=null;
		let precioActivistas=100;
		let numActivistas;
		let precioEcofinca=1000;
		let numEcofinca;
		let precioOng= 12000;
		let numOng;
		let precioPlanta=130000;
		let numPlanta;
		let precioAcuerdos=1400000;
		let numAcuerdos;

		function incremento(numItem){
			let potencial= numItem *3.5;
			Math.floor(potencial);
			return potencial;
		}


		$("#arboles_tienda").click(function(){
			if(semillasParaGastar>precioArboles ||semillasParaGastar==precioArboles){
			$("#arboles").css("display", "block");
    		bonus+=0.2;

    		numArboles+=1;
    		console.log(numArboles);

    		semillasParaGastar-=precioArboles;
    		precioArboles+=incremento(numArboles);


    		$('#arboles_tienda p').text(Math.floor(precioArboles) + ' semillas');
    		$('#arboles').append('<i class="fa fa-tree fa-2x" aria-hidden="true"></i>')
    		}
		});

		/*Activistas*/
		$("#activistas_tienda").click(function(){
			if(semillasParaGastar>precioActivistas ||semillasParaGastar==precioActivistas){
			$("#activistas").css("display", "block");
    		bonus+=1;
    		semillasParaGastar-=precioActivistas;
    		precioActivistas+=15;
    		$('#activistas_tienda p').text(precioActivistas + ' semillas');
    		$('#activistas').append('<i class="fa fa-user fa-2x" aria-hidden="true"></i>')
    		}
		});

		/*ecofinca*/
		$("#ecofinca_tienda").click(function(){
			if(semillasParaGastar>precioEcofinca ||semillasParaGastar==precioEcofinca){
			$("#ecofinca").css("display", "block");
    		bonus+=1;
    		semillasParaGastar-=precioEcofinca;
    		precioEcofinca+=200;
    		$('#ecofinca_tienda p').text(precioEcofinca + ' semillas');
    		$('#ecofinca').append('<i class="fa fa-home fa-2x" aria-hidden="true"></i>')
    		}
		});

		/*ong*/
		$("#ong_tienda").click(function(){
			if(semillasParaGastar>precioOng ||semillasParaGastar==precioOng){
			$("#ong").css("display", "block");
    		bonus+=1;
    		semillasParaGastar-=precioOng;
    		precioActivistas+=1800;
    		$('#activistas_tienda p').text(precioOng + ' semillas');
    		$('#ong').append('<i class="fa fa-institution fa-2x" aria-hidden="true"></i>')
    		}
		});

		/*planta*/
		$("#planta_tienda").click(function(){
			if(semillasParaGastar>precioPlanta ||semillasParaGastar==precioPlanta){
			$("#planta").css("display", "block");
    		bonus+=1;
    		semillasParaGastar-=precioPlanta;
    		precioActivistas+=1800;
    		$('#activistas_tienda p').text(precioPlanta + ' semillas');
    		$('#planta').append('<i class="fa fa-recycle fa-2x" aria-hidden="true"></i>')
    		}
		});

		/*acuerdos*/
		$("#acuerdos_tienda").click(function(){
			if(semillasParaGastar>precioAcuerdos ||semillasParaGastar==precioAcuerdos){
			$("#acuerdos").css("display", "block");
    		bonus+=1;
    		semillasParaGastar-=precioAcuerdos;
    		precioAcuerdos+=200000;
    		$('#acuerdos_tienda p').text(precioAcuerdos + ' semillas');
    		$('#acuerdos').append('<i class="fa fa-handshake-o fa fa-2x" aria-hidden="true"></i>')
    		}
		});

});

