$(function () {
    $.stellar.positionProperty.horz = {
        setPosition: function ($element, newLeft, originalLeft, newTop, originalTop) {
            $element.css('transform', 'translate3d(' + ($element.hasClass('horz') ? originalTop - newTop : 0) + 'px, ' + ($element.hasClass('horz') ? originalTop :  newTop) + 'px, ' +
                '0)');
        }
    }




   
	$.stellar({
		positionProperty: 'transform', 
		responsive: true,
		horizontalScrolling: false,
		hideDistantElements: false,
	});
});