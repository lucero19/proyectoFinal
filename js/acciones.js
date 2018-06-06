// JavaScript Document
//$(document).ready(function() {
	//alert ('hola que haces');
//});
//$(document).ready(function() {
	//$('.redesSociales').on('click', function() {
	//	alert ($(this).text());
//}); //click de redes sociales
//}) //ready
$(document).ready(function() {
	$('.redesSociales').on('click', function() {
		if ($(this).text() =="t")
	{ alert ('click en twwitter');}
	if ($(this).text() =="f")
	{ alert ('click en facebook');}
}); //click de redes sociales
$('#vuelta').on('click', function() {
	$(this).addClass('giro');
}); //vuelta
$('#anima4').on('click', function() {
		$(this).addClass('animated shake').one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$(this).removeClass('animated shake');
		});//one, fin animation
	});//click anima4
	$('#anima5').on('click', function() {
	$(this).addClass('giro');
	
}); //vuelta
}); //ready