;(function() {
	"use strict";

	//действия при смене ширины экрана или загрузке страницы
	function windowSize(){
		if ($(window).width() < '769'){
				//основное меню
				if(!$('.containerHeaderSiteMenu ul li i').hasClass("fa-bars")) {
	        $(".containerHeaderSiteMenu ul").append(`<li class="liMiniMenu MainMenuIsCloced"><i class="fa fa-bars" aria-hidden="true"></i> Меню сайта <i class="fa fa-hand-o-down" aria-hidden="true"></i></li>`);
	      }

				//меню курсов
				$(".containerHeaderKursMenu").addClass("minimazeKursMenu");

				//поиск курса
				$("div.inputContainer").css({"display": "inline-block"});

				//добавление иконки меню курсов
				if(!$(".containerHeaderKursMenu i").hasClass("fa-th-list")) $(".containerHeaderKursMenu").append(`<i class="fa fa-th-list" aria-hidden="true"></i>`);

				//разворачивание меню курсов
				$("i.fa-th-list").click(function(event) {
					event.stopImmediatePropagation();
					$("div.minimazeKursMenu > ul").addClass("kursColumnDisplay");
				});

				//сворачивание меню курсов
				$(document.body).on("click", function(){
					$("div.minimazeKursMenu > ul").removeClass("kursColumnDisplay");
				});

				kursMenu();

	  } else {
	  		$(".containerHeaderKursMenu").removeClass("minimazeKursMenu");
	  		$("div.inputContainer").css({"display": "none"});
	  		if($(".containerHeaderKursMenu i").hasClass("fa-th-list")) $(".containerHeaderKursMenu i.fa-th-list").remove();

				//клики поиск курса
	  		$("i.fa-search").click(function(event) {
	  			event.stopImmediatePropagation();
	  			$("div.inputContainer").css({"display": "inline-block"});
	  		});

				//закрытие поиска курсов
				$(document.body).on("click", function(){
					$("div.inputContainer").css({"display": "none"});
				});

	  		if($('.containerHeaderSiteMenu ul li i').hasClass("fa-bars")) {
	    		$(".containerHeaderSiteMenu ul li:last-child").remove();
	    	};

				//закрытие меню курсов
				$("div.containerHeaderKursMenu ul").removeClass("kursColumnDisplay");
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

	    $(document.body).on("click", function(){
				//закрытие главного меню
	      if($(".containerHeaderSiteMenu ul li:last-child").hasClass("MainMenuIsOpen")) {
			      $(".containerHeaderSiteMenu").css({"animation": "clocedMainMenuAction 1s linear forwards"});
			      $("i.fa-hand-o-down").css({"animation": "hendPointerAp 1s linear forwards"});
			      $(".containerHeaderSiteMenu ul li:last-child").addClass("MainMenuIsCloced");
			      $(".containerHeaderSiteMenu ul li:last-child").removeClass("MainMenuIsOpen");
		    };
		  });

			kursMenu();

	    window.distanceTop = $('.containerHeaderKursMenu').offset().top;			//var не видит условный оператор
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


	function kursMenu() {
		//клики по основным/начальным курсам
		$(`.containerHeaderKursMenu > ul > li:has(ul)`).click(function(event) {
			event.stopImmediatePropagation();
			if($("ul").hasClass("liChildKurs")) {		//проверка на наличие курсов
				$("ul").removeClass("liChildKurs");
			};
			$('ul:first',this).addClass("liChildKurs");
		});

		//клики по вложенным категориям курсов
		$("li.insertedLiKurs").click(function(event) {
			event.stopImmediatePropagation();
			if($("ul").hasClass("secontInsertedUl")) {		//проверка на наличие открытых подменю курсов
				$("ul").removeClass("secontInsertedUl");
			};
			$('ul:first',this).addClass("secontInsertedUl");
		});

		//закрытие менюшки курсов
		$(document.body).on("click", function(){
			if($("li ul").hasClass("liChildKurs")) {
				$("ul").removeClass("liChildKurs");
			};
			$("ul").removeClass("secontInsertedUl");
		});
	}

	//фиксация меню курсов при скроллинге
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
