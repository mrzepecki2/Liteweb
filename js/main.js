(function(){
	
search_bar();


}());

function search_bar(){
	var $input = $("#search .search__input");
	$input.focusout(function(){
		$("#search").removeClass("search--active");
	});
	$input.focus(function(){
		$("#search").addClass("search--active");
	});
}