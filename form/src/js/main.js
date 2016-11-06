$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});

			// Плавный скролл по якорям
			$('a[href^="#"]').click(function(){
			var el = $(this).attr('href');
			$('body').animate({
			scrollTop: $(el).offset().top - 90}, 1000);
			return false;
			});
			});