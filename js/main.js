(function(){
	
searchBar();
mobileMenu();


}());

function searchBar(){
	var $input = $("#search .search__input");
	$input.focusout(function(){
		$("#search").removeClass("search--active");
	});
	$input.focus(function(){
		$("#search").addClass("search--active");
	});
}

function mobileMenu(){
	$("#menu__mobile").click(function(){
		var $menu = $(".menu__list");
		$menu.stop().slideToggle();
	});
}