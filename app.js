$(document).ready(function(){


// $(window).onscroll($("#pageTitleDiv").addClass("hideTitle"));

var leadPhoto = $(".leadPhoto");
var infoCard = $(".infoCard");
var websiteThumb = $(".websiteThumb");


leadPhoto.on("mouseenter", function(){
	var id = $(this).attr("id");
	var lastLetter = id[id.length -1];
	var infoCardId = "#infoCard"+lastLetter;
	$(infoCardId).addClass("zoomIn");
	$(infoCardId).removeClass("invisible");

	$(".infoCard").on("mouseleave", function(){
		$(infoCardId).removeClass("zoomIn");
		$(infoCardId).addClass("invisible");
	});
	
});



websiteThumb.on("mouseenter", function(){
	var id = $(this).attr("id");
	var lastLetter = id[id.length -1];
	var infoCardId = "#portInfoCard" + lastLetter;
	$(infoCardId).addClass("fadeInLeftBig");
	$(infoCardId).removeClass("invisible");

	
	
	websiteThumb.on("mouseleave", function(){
		$(infoCardId).removeClass("fadeInLeftBig");
		$(infoCardId).addClass("invisible");
	});
});

}); 