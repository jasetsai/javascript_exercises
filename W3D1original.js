sabio.page.startup = function () {
    $("#cmdShowComments").on("click", sabio.page.handlers.onShowComments);
    $("#cmdHideComments").on("click", sabio.page.handlers.onHideComments);
    $("#cmdShowForm").on("click", sabio.page.handlers.onShowForm);
    $("#cmdHideForm").on("click", sabio.page.handlers.onHideForm);
    $("#commentsForm").on("submit", sabio.page.handlers.onAddComment);
    $(".cmdReplyButton").on("click", sabio.page.handlers.onReplyButton);
    $("#replyForm").on("submit", sabio.page.handlers.onReplyAddComment);

}



sabio.page.replyButtonTriggersModal = function (clickedReplyButton) {
    $(".modal").modal("show");
    sabio.page.lastReplyClicked = clickedReplyButton;

}

sabio.page.handlers.onReplyButton = function (event) {
    var lastClickedReplyButton = $(this);
    sabio.page.replyButtonTriggersModal(lastClickedReplyButton);
    
}

sabio.page.prepareClone = function () {
    return $("#commentTemplate").clone().removeAttr("id");
    
}

sabio.page.addComment = function (commentsForm, targetElement) {
    //create template #commentTemplate, clone the div 
    var newClone = sabio.page.prepareClone();
    newClone.removeClass("hidden");

    $(".commentName", newClone).html(commentsForm[0].value);
    $(".commentSubject", newClone).html(commentsForm[1].value);
    $(".commentMessage", newClone).html(commentsForm[2].value);
    //.find(".commentName").html(commentsForm[0].value);

    if (commentsForm[0].value == "Bob") {
        $("img", newClone).attr("src", "http://s3-ec.buzzfed.com/static/2014-02/enhanced/webdr04/28/14/anigif_enhanced-30636-1393615860-3.gif");
    }
    else if (commentsForm[0].value == "Bill") {
        $("img", newClone).attr("src", "http://media.tumblr.com/tumblr_likyame7Nj1qznrqt.gif");
    }
    else {
           }
    targetElement.append(newClone);
    
    commentsForm.reset();


    }


sabio.page.handlers.onReplyAddComment = function (event) {
    event.preventDefault();
    $(".modal").modal("hide");
    var replyForm = $("#replyForm").serializeArray();
    var targetReply = sabio.page.lastReplyClicked;
    console.log(targetReply);
    targetReply = targetReply.closest(".comment.clearfix");

    sabio.page.addComment(replyForm, targetReply);
}

    sabio.page.handlers.onAddComment = function (event) {
        event.preventDefault();
        var commentsForm = $("#commentsForm").serializeArray();
        var targetCommentContainer = $("#commentsContainer");
        sabio.page.addComment(commentsForm, targetCommentContainer);
    }

    //actual functions
    sabio.page.showComments = function () {
        $(".comments").show(1000);
        $(".comments").removeClass("hide");
        if ($("#cmdHideComments").hasClass("hide")){
            $("#cmdHideComments").removeClass("hide");
        }
    }
    sabio.page.hideComments = function () {
        $(".comments").hide(1000);
        $("#cmdHideComments").addClass("hide");
    }

    sabio.page.showForm = function () {
        $(".comments").show(1000);
        $(".comments-form").removeClass("hide");
    }

    sabio.page.hideForm = function () {
        $(".comments-form").addClass("hide");
        $("html").animate({
            scrollTop: $(".comments").position().top
        }, 900);
    }

    //not showing any business logic
    sabio.page.handlers.onShowComments = function () {
        sabio.page.showComments();
    }

    sabio.page.handlers.onHideComments = function() {
        sabio.page.hideComments();
    }

    sabio.page.handlers.onShowForm = function(){
        sabio.page.showForm();
    }

    sabio.page.handlers.onHideForm = function(){
        sabio.page.hideForm();
    }

    sabio.page.startup();


    /*
    var toggleComments = function () {
        $(".comments").slideToggle(1000);
    
        $("html").animate({
            scrollTop: $(".comments").position().top
        }, 900);
    
    };
    
    
    var toggleAddComments = function() {
        $(".comments-form").slideToggle(1000);
        
        $("html").animate({
            scrollTop: $(".comments-form").position().top
        }, 900);
        
    };
    
    $("#cmdCommentsButton").on("click", toggleComments);
    
    
    $("#cmdAddCommentsButton").on("click", toggleAddComments);
    */

    /*
    var toggle = function (toggleDiv) {
        toggleDiv.slideToggle(1000);
    
        $("html").animate({
            scrollTop: toggleDiv.position().top
        }
        , 900);
    };
    
    
    
    
    var  onButtonClickHandler = function()
    {
        toggle($(this));
    }
    
    $("#cmdCommentsButton").on("click", onButtonClickHandler);
    
    $("#cmdAddCommentsButton").on("click", onButtonClickHandler);
    */




    /*inline function
    $(".commentsButton").click(function () {
        $(".comments").slideToggle(1000);
    
        $("html").animate({
            scrollTop: $("#commentsTitle").position().top
        }
        , 900);
    });
    
    global scope - named function
    function toggleComments() {
        $(".comments").slideToggle(1000);
        var animateOptions = {
            scrollTop: $("#commentsTitle").position().top
        };
        $("html").animate(animateOptions, 900);
    };
    
    $(".commentsButton").click(toggleComments);
    
     */
