<?php 

function theme_name_scripts() {
	
	wp_enqueue_script( 'jquery.min', get_template_directory_uri() . '/js/jquery.min.js');
	wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js');
	// wp_enqueue_style( 'style', get_stylesheet_uri());
	wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');
	wp_enqueue_style( 'variables', get_template_directory_uri() . '/css/variables.css');
	wp_enqueue_style( 'fonts', get_template_directory_uri() . '/css/fonts/fonts.css');
	wp_enqueue_style( 'font-awesome.min', get_template_directory_uri() . '/css/fonts/font-awesome.min.css');
}

add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );

//меню
register_nav_menu ( 'main_menu', 'главное меню');

?>