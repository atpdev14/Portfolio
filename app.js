$(document).ready(function(){

var leadPhoto = $(".leadPhoto");
var infoCard = $(".infoCard");
var websiteThumb = $(".websiteThumb");


leadPhoto.on("mouseover", function(){
	var id = $(this).attr("id");
	var lastLetter = id[id.length -1];
	var infoCardId = "#infoCard"+lastLetter;
	$(infoCardId).removeClass("invisible");

	$(".infoCard").on("mouseout", function(){
		$(infoCardId).addClass("invisible");
	});
	
});



websiteThumb.on("mouseover", function(){
	var id = $(this).attr("id");
	var lastLetter = id[id.length -1];
	var infoCardId = "#portInfoCard" + lastLetter;
	$(infoCardId).removeClass("invisible");
	
	
	websiteThumb.on("mouseout", function(){
		$(infoCardId).addClass("invisible");
	});
});

}); 