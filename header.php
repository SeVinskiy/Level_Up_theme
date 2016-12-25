<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" name="viewport" name="viewport" content="width=device-width, initial-scale=1">
	<title>Level_UP</title>
	<!-- <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>"> -->
	
	<?php wp_head(); ?> 
</head>
<body>

	<header>
		
		<?php wp_nav_menu(array('theme_location'=>'main_menu', 'container_class' => 'containerHeaderSiteMenu',) ); ?>

		<div class="headerNameCenter"><p>Учебный центр</p><p>подготовки IT-специалистов</p></div>

		<div class="containerHeaderLogo">
			<div class="headerContactLeft">
				<p>Центральный офис</p>
				<p>г.Днепр, ул.Троицкая,21г</p>
				<p>ТСК "Новый металлург", 3 эт.</p>
				<p>+38(056)376 90 66</p>
				<p>+38(099)731 83 85, (096) 084 25 13</p>
				<p>office@levelup.dp.ua</p>
			</div>
			<img src="<?php bloginfo('template_url'); ?>/img/logo.jpg">
			<div class="headerContactRight">
				<p>Филиал</p>
				<p>г.Днепр, ул.Запорожское шоссе,53Б</p>
				<p>2-ой этаж</p>
				<p>+38(095)708 78 76</p>
				<p>+38(068)211 60 50</p>
				<p>office@levelup.dp.ua</p>
			</div>
		</div>

 		<div class="containerHeaderKursMenu container">
			<ul>
				<li><a href="#">Открыт набор</a></li>
				<li>Курсы начальные <i class="fa fa-caret-down" aria-hidden="true"></i></li>
				<li>Основное <i class="fa fa-caret-down" aria-hidden="true"></i></li>
				<li><a href="#">IT-инкубатор</a></li>
				<li><a href="#">Карьера в IT</a></li>
				<li><a href="#">Детская IT-школа</a></li>
				<li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a> <input class="findKurs" type="text" name="kurs" placeholder="Поиск курса..." autofocus=""></li>
			</ul>
		</div>
	</header>