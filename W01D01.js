
//bootstrap js with "hidden" in the class 

var toggleComments = function () {

    $(".comments").toggleClass("hidden");

    $("html").animate({
        scrollTop: $(".comments").position().top
    }, 900);
};

$("#cmdCommentsButton").on("click", toggleComments);

var toggleAddComments = function () {

    $(".comments-form").toggleClass("hidden");
    
    $("html").animate({
        scrollTop: $(".comments-form").position().top
    }, 900);

};

$("#cmdAddCommentsButton").on("click", toggleAddComments);

var addNameOnSubmit = function () {
    var addCommentName = $("input[name=name4]").val();

};

$("form .comments").on("submit", addOnSubmit);

