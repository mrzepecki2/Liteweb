(function(){
	
searchBar();
mobileMenu();
sideMenu();

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
function sideMenu(){
	$(".hasChild").click(function(event){
		event.preventDefault();
		var active = true;
		if($(this).hasClass("active")){

			$(this).removeClass("active");
			$(this).siblings(".listChild").stop().slideUp();
		}else{
			$(".hasChild").each(function(){
				console.log("a");
				$(this).removeClass("active");
				$(this).siblings(".listChild").stop().slideUp();
			})

			$(this).addClass("active");
			$(this).siblings(".listChild").stop().slideDown();
		}
		
	})
	$("#side__open").click(function(){
		$(".side__box").slideDown();
	});
	$("#side__close").click(function(){
		$(".side__box").slideUp();
	})
	
}