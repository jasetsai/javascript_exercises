var sabio.page = {};

sabio.page.startup = function(){
	$("#cmdShowComments").on("click", sabio.page.handlers.onShowComments);
	$("#cmdShowForm").on("click", sabio.page.handlers.onShowForm);
	$("#cmdSubmitComment").on("click", sabio.page.handlers.addComment);
}

sabio.page.addNewComment = function(commentData, targetElement){

	var newClone = sabio.page.getNewElementClone();
	targetElement.append(newClone);

}

sabio.page.handlers.onAddComment = function() {

	var formData = {};

	var targetcontainer  $(".comments");
	sabio.page.addNewComment(formData, targetContainer);
}

sabio.page.handlers.onShowComments = function(){
	$(".comments").toggleClass("hidden");

	$("html").animate.("click",{
		scrollTo: $(".comments").position().top;
	}, 900);
}

sabio.page.handlers.onShowForm = function(){
	$(".comments-form").toggleClass("hidden");

	$("html").animate.("click", {
		scrollTo: $(".comments").position().top;
	}, 900);
}

$(document).ready(sabio.layout.startup);



}