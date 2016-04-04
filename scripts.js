$(document).ready(function(){

	$("section.toggle").on('click', function() {

		if ($("#section_hidden").is(":hidden")) {

			$("#section_hidden").fadeIn(700, function() {
                    alert('More details about your order');
            });

			$(this).removeClass('toggle2').addClass('toggle');

		} else {

			$("#section_hidden").hide();
			$(this).removeClass('toggle').addClass('toggle2');
		}

		return false;

	});

})
