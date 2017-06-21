(function(){
	
searchBar();
mobileMenu();
sideMenu();
customRadioSelect();
sliderProduct();



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

function customRadioSelect(){
	$("input.custom_radio").click(function(){
		$("input.custom_radio").each(function(){
			$(this).closest("label").removeClass("active");
		})
		$(this).closest("label").addClass("active");
	})
}

function sliderProduct(){
	$("#slider__carusel").slick({
		slidesToShow: 3,
  		slidesToScroll: 3,
  		variableWidth: true,
  		infinite: false,
  		arrows: false
	});

	$(document).ready(function(){
		//load first
		var $first_img = $("#slider__carusel").find("img").data("imgsrc");
		console.log($first_img);
		$("#slider__photo__big").attr("src", $first_img);
		$("#slider__carusel .slider__slide").first().addClass("slider__slide--active");

		//load on click
		$("#slider__carusel .slider__slide").click(function(){
			var $image = $(this).find("img").first().data("imgsrc");
			$("#slider__photo__big").attr("src", $image);

			$("#slider__carusel .slider__slide").each(function(){
				$(this).removeClass("slider__slide--active");
			});
			$(this).addClass("slider__slide--active");
		})
	}) 
	
}