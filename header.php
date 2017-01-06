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
				<p>Центральный офис, г.Днепр</p>
				<p>ул.Троицкая,21г</p>
				<p>ТСК "Новый металлург", 3 эт.</p>
				<p>+38(056)376 90 66</p>
				<p>+38(099)731 83 85, (096) 084 25 13</p>
				<p>office@levelup.dp.ua</p>
			</div>
			<img src="<?php bloginfo('template_url'); ?>/img/logo.jpg">
			<div class="headerContactRight">
				<p>Филиал, г.Днепр</p>
				<p>ул.Запорожское шоссе,53Б</p>
				<p>2-ой этаж</p>
				<p>+38(095)708 78 76</p>
				<p>+38(068)211 60 50</p>
				<p>office@levelup.dp.ua</p>
			</div>
		</div>

 		<div class="containerHeaderKursMenu container">
			<ul>
				<li><a href="#">Открыт набор</a></li>
				<li>Курсы начальные <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
					<ul>
							<li class="insertedLiKurs">Пользователь ПК <i class="fa fa-caret-down" aria-hidden="true"></i>
									<ul>
										<li><a href="#"><i class="fa fa-windows" aria-hidden="true"></i> Использование компьютера с ОС Windows</a></li>
										<li><a href="#"><i class="fa fa-apple" aria-hidden="true"></i> Использование компьютера Apple Mac</a></li>
										<li><a href="#"><i class="fa fa-indent" aria-hidden="true"></i> Курсы Microsoft Office</a></li>
									</ul>
							</li>
							<li class="insertedLiKurs">Базовые курсы <i class="fa fa-caret-down" aria-hidden="true"></i>
									<ul>
										<li><a href=""><i class="fa fa-star" aria-hidden="true"></i> Интернет-маркетинг</a></li>
										<li><a href=""><i class="fa fa-share-square" aria-hidden="true"></i> Программирование на языке Python</a></li>
										<li><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Курс видеомонтажа — Adobe Premiere Pro</a></li>
										<li><a href=""><i class="fa fa-cogs" aria-hidden="true"></i> Курс “Основы программирования”</a></li>
										<li><a href=""><i class="fa fa-star" aria-hidden="true"></i> Базовые основы ООП (основы программирования и С++)</a></li>
										<li><a href=""><i class="fa fa-hdd-o" aria-hidden="true"></i> Основы программирования на С#</a></li>
										<li><a href=""><i class="fa fa-html5" aria-hidden="true"></i> HTML5, CSS3, и создание сайтов на CMS</a></li>
										<li><a href=""><i class="fa fa-tasks" aria-hidden="true"></i> Управление базами данных SQL</a></li>
									</ul>
							</li>
							<li class="insertedLiKurs">Дизайн <i class="fa fa-caret-down" aria-hidden="true"></i>
								<ul>
									<li><a href="#"><i class="fa fa-picture-o" aria-hidden="true"></i> Курс Web/UI дизайн</a></li>
									<li><a href="#"><i class="fa fa-picture-o" aria-hidden="true"></i> Основы дизайна</a></li>
									<li><a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> 3D моделирование. Базовый курс</a></li>
									<li><a href="#"><i class="fa fa-eye" aria-hidden="true"></i> Графический редактор Adobe Photoshop</a></li>
									<li><a href="#"><i class="fa fa-mobile" aria-hidden="true"></i> Product Design (UI&amp;UX Design)</a></li>
								</ul>
							</li>
					</ul>
				</li>
				<li>Основное <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
					<ul>
							<li class="insertedLiKurs">Разработка программного обеспечения <i class="fa fa-caret-down" aria-hidden="true"></i>
								<ul>
									<li><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Курс С# и объектно-ориентированное программирование</a></li>
									<li><a href="#"><i class="fa fa-wrench" aria-hidden="true"></i> Тестирование программного обеспечения</a></li>
									<li><a href="#"><i class="fa fa-windows" aria-hidden="true"></i> Курс разработки приложений на платформе Microsoft.NET</a></li>
									<li><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Программирование на 1С</a></li>
									<li><a href="#"><i class="fa fa-github" aria-hidden="true"></i> Программирование на Java</a></li>
									<li><a href="#"><i class="fa fa-android" aria-hidden="true"></i> Java программирование под Android</a></li>
									<li><a href="#"><i class="fa fa-apple" aria-hidden="true"></i> Разработка приложений под iOS</a></li>
								</ul>
							</li>
							<li class="insertedLiKurs">Разработка WEB-проектов <i class="fa fa-caret-down" aria-hidden="true"></i>
								<ul>
									<li><a href="#"><i class="fa fa-css3" aria-hidden="true"></i> Front-end разработка</a></li>
									<li><a href="#"><i class="fa fa-html5" aria-hidden="true"></i> Веб-разработка с использованием PHP</a></li>
									<li><a href="#"><i class="fa fa-rocket" aria-hidden="true"></i> JavaScript</a></li>
									<li><a href="#"><i class="fa fa-html5" aria-hidden="true"></i> Разработка WEB-приложений на Ruby on Rails</a></li>
									<li><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Разработка под Magento</a></li>
								</ul>
							</li>
							<li class="insertedLiKurs">IT-менеджмент <i class="fa fa-caret-down" aria-hidden="true"></i>
								<ul>
									<li><a href="#"><i class="fa fa-star" aria-hidden="true"></i> Soft skills for IT</a></li>
									<li><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> IT English Course</a></li>
									<li><a href="#"><i class="fa fa-bar-chart" aria-hidden="true"></i> Курсы Project Management</a></li>
									<li><a href="#"><i class="fa fa-bullhorn" aria-hidden="true"></i> Курс ораторское мастерство</a></li>
									<li><a href="#"><i class="fa fa-indent" aria-hidden="true"></i> Scrum Fundamentals</a></li>
									<li><a href="#"><i class="fa fa-indent" aria-hidden="true"></i> Обучение IT-рекрутингу от ведущих специалистов Украины</a></li>
								</ul>
							</li>
					</ul>
				</li>
				<li><a href="#">IT-инкубатор</a></li>
				<li><a href="#">Карьера в IT</a></li>
				<li><a href="#">Детская IT-школа</a></li>
				<li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a> <div class="inputContainer"><input class="findKurs" type="text" name="kurs" placeholder="Поиск курса..."><div></li>
			</ul>
		</div>
	</header>
