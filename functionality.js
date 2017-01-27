$('.panel-expand').click(function() {
	if ($(this).parent().hasClass('panel-body-short')) {
		$(this).parent().removeClass('panel-body-short');
		$(this).parent().addClass('panel-body-long');
		$(this).html('-');
	} else {
		$(this).parent().removeClass('panel-body-long');
		$(this).parent().addClass('panel-body-short');
		$(this).html('+');	
	}
});

$('.all-panel-control').click(function() {
	if ($(this).hasClass('all-closed')) {
		$('.panel-body').removeClass('panel-body-short');
		$('.panel-body').addClass('panel-body-long');
		$('.panel-expand').html('-');
		$('.all-panel-control').removeClass('all-closed');
		$('.all-panel-control').addClass('all-open');
		$('.all-panel-control').html('CONTRACT ALL');
	} else {
		$('.panel-body').removeClass('panel-body-long');
		$('.panel-body').addClass('panel-body-short');
		$('.panel-expand').html('+');
		$('.all-panel-control').removeClass('all-open')
		$('.all-panel-control').addClass('all-closed');
		$('.all-panel-control').html('EXPAND ALL');
	}
});

$('#nav-about').click(function() {
	CloseOverlay();
	$(this).addClass('about-open')
	$('#about-overlay').show();
});

$('#nav-list').click(function() {
	CloseOverlay();
	$(this).addClass('list-open')
	$('#list-overlay').show();
});

$('#nav-contact').click(function() {
	CloseOverlay();
	$(this).addClass('contact-open')
	$('#contact-overlay').show();
});

$('.exit-overlay').click(function() {
	CloseOverlay();
});


function CloseOverlay() {
	$('#nav-about').removeClass('about-open');
	$('#nav-list').removeClass('list-open');
	$('#nav-contact').removeClass('contact-open');

	$('#about-overlay').hide();
	$('#list-overlay').hide();
	$('#contact-overlay').hide();
}