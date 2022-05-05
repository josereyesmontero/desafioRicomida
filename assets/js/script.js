$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();

    $("#enviarCorreo").click(function(){
		alert("El correo fue enviado correctamente...");
	})

    $("#titulo_receta").on("dblclick change", function(){
        $(this).css({
            "color":"red"
        })
    });
    $("#titulo_receta2").on("dblclick change", function(){
        $(this).css({
            "color":"red"
        })
    });

    $(".card-title").click(function(){
		$(".card-text").toggle();
	});
});