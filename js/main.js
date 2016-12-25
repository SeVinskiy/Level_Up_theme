;(function() {
	"use strict";

	//смещение главной менюшки, менюшки курсов и ее анимация
	function windowSize(){
		if ($(window).width() < '769'){ 
				$(".containerHeaderKursMenu").addClass("minimazeKursMenu");
				$(".findKurs").css({"display": "inline"});  
				if(!$(".containerHeaderKursMenu i").hasClass("fa-th-list")) $(".containerHeaderKursMenu").append(`<i class="fa fa-th-list" aria-hidden="true"></i>`);


	      if(!$('.containerHeaderSiteMenu ul li i').hasClass("fa-bars")) {
	        $(".containerHeaderSiteMenu ul").append(`<li class="liMiniMenu MainMenuIsCloced"><i class="fa fa-bars" aria-hidden="true"></i> Меню сайта <i class="fa fa-hand-o-down" aria-hidden="true"></i></li>`);
	      }		
	  } else {
	  		$(".containerHeaderKursMenu").removeClass("minimazeKursMenu");
	  		$(".findKurs").css({"display": "none"});
	  		if($(".containerHeaderKursMenu i").hasClass("fa-th-list")) $(".containerHeaderKursMenu i.fa-th-list").remove();

	  		$("i.fa-search").click(function(event) {
	  			event.stopImmediatePropagation();
	  			$("input.findKurs").css({"display": "inline"});
	  		});

	  		$(document.body).click(function(){
	  			$("input.findKurs").css({"display": "none"});
	  		});
 		
	  		if($('.containerHeaderSiteMenu ul li i').hasClass("fa-bars")) {
	    		$(".containerHeaderSiteMenu ul li:last-child").remove();
	    	}	
	    }
	    //открытие главного меню
	    $("li.MainMenuIsCloced").click(function(event){
	    	event.stopImmediatePropagation();

	    	if(!$(".containerHeaderSiteMenu ul li:last-child").hasClass("MainMenuIsOpen")) {
		        $(".containerHeaderSiteMenu").css({"animation": "openMainMenuAction .7s linear forwards"});
		        $("i.fa-hand-o-down").css({"animation": "hendPointerDown .7s linear forwards"}); 
		        $(".containerHeaderSiteMenu ul li:last-child").removeClass("MainMenuIsCloced");
		        $(".containerHeaderSiteMenu ul li:last-child").addClass("MainMenuIsOpen");   
	    	};
	    });

	    //закрытие главного меню
	    $(document.body).on("click", function(){
	      if($(".containerHeaderSiteMenu ul li:last-child").hasClass("MainMenuIsOpen")) {
			      $(".containerHeaderSiteMenu").css({"animation": "clocedMainMenuAction 1s linear forwards"});
			      $("i.fa-hand-o-down").css({"animation": "hendPointerAp 1s linear forwards"});
			      $(".containerHeaderSiteMenu ul li:last-child").addClass("MainMenuIsCloced");
			      $(".containerHeaderSiteMenu ul li:last-child").removeClass("MainMenuIsOpen");
		    };
		  });

	    window.distanceTop = $('.containerHeaderKursMenu').offset().top;
	};

	$(window).on('load resize',windowSize);

	

	//появление элементов в секции 1
	function opasitiElements() { 
			$(".section1 h2").animate({ opacity: "1"}, 500);
		setTimeout(function() { 
		    $(".section1 h4").animate({ opacity: "1"}, 500);
		}, 750);
		setTimeout(function() { 
		    $(".section1 img").animate({ opacity: "1"}, 500);
		}, 1500);
	};

	$(window).on('load', opasitiElements);


	

	//фиксация меню курсов
	$(window).on("scroll", function() {
			// var distanceTop = $('.containerHeaderKursMenu').offset().top;

    	if ($(window).scrollTop() >= distanceTop) {
    		$('.containerHeaderKursMenu').addClass('fixed');
    		$('.containerHeaderKursMenu').removeClass('container');
    		$(".section1").css({"margin-top": "109px"});
    	}	else {			
    		$('.containerHeaderKursMenu').removeClass('fixed');
    		$('.containerHeaderKursMenu').addClass('container');
    		$(".section1").css({"margin-top": "20px"});
    		}					
  });

	
})();




