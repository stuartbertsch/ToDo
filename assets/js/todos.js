//check off specifi todos by clicking
$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});


// click on X to delete a line item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
	$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and ad ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})