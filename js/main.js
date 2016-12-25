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


// createScript("si");

// function createScript(units) {
//     let basicUrl = "https://api.darksky.net/forecast/ec3fbd40a813ea151e1b794b9369fc8f/",
//         url = "48.4589,34.9719",            //Лондон: 51.5023,-0.1327   Днепр: 48.4589,34.9719  Каир: 30.0568,31.2668   Рейкьявик: 64.126540, -21.817755   Хельсинки: 60.173440,24.942312  Анкоридж: 61.217274,-149.901187  Пуэрто-Рико: 18.213614,-66.216773
//     	keys = "&exclude=minutely,hourly,alerts,flags&lang=ru&units=",
//         cb = "?callback=getWeather",
//         script = document.createElement("script");

//     script.src = basicUrl + url + cb + keys + units;

//     document.body.appendChild(script);
// }

// function getWeather(data) {
//   	console.log(data.daily);

//   	for(let y = 0; y < $(".container1day").length; y++) {
//     		// console.log($(".container1day")[y]);
        
//     		//вставка температуры
//         var TempMax = data.daily.data[y].temperatureMax.toFixed(0),
//             TempMin = data.daily.data[y].temperatureMin.toFixed(0);
//     		$("<p class='smallContainetTempr'></p>").appendTo($(".container1day")[y]).text(TempMax + `...` + TempMin);

//     		//вставка иконки погоды
//         console.log(data.daily.data[y].icon);

//     		$("<p class='smallContainerIcon'></p>").appendTo($(".container1day")[y]).html(function() {
//     			switch(data.daily.data[y].icon) {
//     				case "snow": var x = "o"; break;
//     				case "partly-cloudy-day": x = "D"; break;
//     				case "clear-day": x = "A"; break;
//                     case "partly-cloudy-night": x = "D"; break;
//                     case "rain": x = "R"; break;
//                     case "fog": x = "G"; break;
//                     case "wind": x = "Z"; break;
//     				default: var x = "?";
//     			}
//     			return x;
//     		});

//     		//вставка дня недели
//     		let x = new Date(data.daily.data[y].time * 1000);
//   		        // console.log(`${x}`.substring(0,3));                 //Название дня нелели первые три буквы
//         $("<p class='smallContainerData'></p>").appendTo($(".container1day")[y]).html(FindDay(x));     //число и месяц
//   	}

//     $(".smallContainerData:first").html("Today");   //подпись для первого дня

//     if($('.container1day').hasClass("currentDay")) {console.log("Текущий день определен уже")}
//         else {
//             $(".day1").addClass("currentDay");
//         }
    
//     //Вставка погоды для Today
//     let tempBigCont = $(".currentDay .smallContainetTempr").text();
//     $(".containerMain").append(`<p class="MainTemp">_</p>`);
//     $(".MainTemp").text(tempBigCont);

//     let iconBigCont = $(".currentDay .smallContainerIcon").text();
//     if($(".containerMain").hasClass("MainIcon")) { clearInfo(); }
//         else {  
//             $(".containerMain").append(`<p class="MainIcon">_</p>`);
//             $(".MainIcon").text(iconBigCont);
//         }
 
//     //события по клику на один из четырех дней
//     $('.container1day').on('click', function(){
//         if($(this).hasClass("day2")) { $(".containerIamge").css({"left":"25%"}); $(".shadow").css({"left":"25%"}); clearCurrentDay(); $(".day2").addClass("currentDay"); pushCurrentDay();}   //клик по день: 2
//           else if($(this).hasClass("day3")) { $(".containerIamge").css({"left":"50%"}); $(".shadow").css({"left":"50%"}); clearCurrentDay(); $(".day3").addClass("currentDay"); pushCurrentDay();}  //клик по день: 3
//             else if($(this).hasClass("day4")) { $(".containerIamge").css({"left":"75%"}); $(".shadow").css({"left":"75%"}); clearCurrentDay(); $(".day4").addClass("currentDay"); pushCurrentDay();}   //клик по день: 4
//               else if($(this).hasClass("day1")) { $(".containerIamge").css({"left":"0"}); $(".shadow").css({"left":"0%"}); clearCurrentDay(); $(".day1").addClass("currentDay"); pushCurrentDay();}   //клик по день: today
//     });

//     //события по клику на кнопку фарингейт
//     $(".fahrenheit").on("click", function( event ){
//         if($('.fahrenheit').hasClass("activButton")) {console.log("Единицы индикации уже определены")}
//           else { $(".fahrenheit").addClass("activButton");
//                  $('.celsius').removeClass("activButton");
//                     clearInfo();  
//                     createScript("us");
//                     $( this ).off( event );
//                }
//     });

//     //события по клику на кнопку цельсий
//     $(".celsius").on("click", function( event ){
//         if($('.celsius').hasClass("activButton")) {console.log("Единицы индикации уже определены")}
//           else { $(".celsius").addClass("activButton");
//                  $('.fahrenheit').removeClass("activButton");
//                     clearInfo();
//                     createScript("si");
//                     $( this ).off( event );
//                }
//     });

//     setTimeout(function() {
//         $(".container4day").append(`<img class=clickMe src="img/Click1.png">`);
//     }, 2000);
// }

// Date.prototype.MyMetodforData = function(string) {
// 	let MM = ("0" + (this.getMonth() + 1)).slice(-2),
// 		DD = this.getDate();
// 	return string.replace("MM", MM).replace("DD", DD);
// }

// function FindDay(data) {
//   return data.MyMetodforData("DD.MM");;
// }

// function clearCurrentDay() {
//   $('.container1day').removeClass("currentDay");
// }

// function pushCurrentDay() {
//     let tempBigCont = $(".currentDay p.smallContainetTempr").text();
//     $(".MainTemp").text(tempBigCont);
//     let iconBigCont = $(".currentDay .smallContainerIcon").text();
//     $(".MainIcon").text(iconBigCont);
// }

// function clearInfo() {
//     $(".container1day p").remove();
//     $(".containerMain p").remove();
//     $("script:last-child").remove();
// }




