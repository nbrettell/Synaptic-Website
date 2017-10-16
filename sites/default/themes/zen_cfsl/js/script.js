/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

/*** Functions ***/

// Move the block down to below the first pullquote
function move_block_to_below_1st_pullquote($el) {
	var blockFromTop = $el.offset().top,
		$previousBlocks = $el.prevAll().not(':first'), // All siblings apart from the closest
		$firstPullQuote = jQuery('#content div.pullquote').first(),
		firstPullQuoteBottomFromTop = $firstPullQuote.offset().top + $firstPullQuote.outerHeight(),
		blockOffset = firstPullQuoteBottomFromTop - blockFromTop;

	$previousBlocks.css('border', '1px solid red');

	if (blockFromTop < firstPullQuoteBottomFromTop) {
		$el.css('margin-top', blockOffset + 'px');
	}
	$el.show();
}


// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.

		// Front page slideshow pager background colours

		function whichCapitaColour(capitaColour) {
			if (capitaColour === 'Light Blue') {
				return 'light-blue';
			} else if (capitaColour === 'Dark Blue') {
				return 'dark-blue';
			} else if (capitaColour === 'Dark Grey') {
				return 'dark-grey';
			} else if (capitaColour === 'Purple') {
				return 'purple';
			} else if (capitaColour === 'Deep Green') {
				return 'deep-green';
			} else if (capitaColour === 'Orange') {
				return 'orange';
			} else if (capitaColour === 'Raspberry') {
				return 'raspberry';
			} else if (capitaColour === 'Deep Pink') {
				return 'deep-pink';
			} else if (capitaColour === 'Lavender') {
				return 'lavender';
			} else if (capitaColour === 'Bright Green') {
				return 'bright-green';
			} else if (capitaColour === 'Gold') {
				return 'gold';
			} else if (capitaColour === 'Sky Blue') {
				return 'sky-blue';
			} else {
				return;
			}
		}

		$('#block-views-front-page-slideshow-block .views-slideshow-cycle-main-frame-row').each(function(i) {
//		    var slideId = this.id;
//		    var slideNumber = slideId.substr(slideId.length - 1);
//		    slideNumber = parseInt(slideNumber);
		    var capitaColour = $(this).find('.views-field-field-capita-colour .field-content').text();
		    var colourClass = whichCapitaColour(capitaColour);

		    $('#block-views-front-page-slideshow-block .views-slideshow-pager-field-item').each(function(j) {
//		        var pagerId = this.id;
//		        var pagerNumber = pagerId.substr(pagerId.length - 1);
//		        pagerNumber = parseInt(pagerNumber);

		        if (i === j){
		        	$(this).addClass(colourClass);
		        }
		    });
		});


		// Adding hash tag to training block morelink in product section for /support/training page info dropdowns

		var pathname = window.location.pathname;

		if(pathname.indexOf('/research-tools/synaptic-product-and-fund') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#product-and-fund');
		}
		if(pathname.indexOf('/research-tools/synaptic-comparator') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#comparator');
		}
		if(pathname.indexOf('/ccd') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#client-care');
		}
		if(pathname.indexOf('/research-tools/synaptic-webline') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#webline');
		}
		if(pathname.indexOf('/research-tools/synaptic-modeller') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#modeller');
		}
		if(pathname.indexOf('/research-tools/synaptic-illustrator') > -1){
			$('#block-block-53 a.morelink').attr('href', $('#block-block-53 a.morelink').attr('href') + '#illustrator');
		}

		// /support/training page info dropdowns

		// If the URL has a hash tag display appropriate dropdown
		if ($('body.page-node-63').length > 0) {
			if (window.location.hash == '#product-and-fund') {
				$('#block-block-17').css( 'display', 'block' );
				$('#block-block-17').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#comparator') {
				$('#block-block-18').css( 'display', 'block' );
				$('#block-block-18').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#client-care') {
				$('#block-block-19').css( 'display', 'block' );
				$('#block-block-19').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#webline') {
				$('#block-block-20').css( 'display', 'block' );
				$('#block-block-20').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#modeller') {
				$('#block-block-21').css( 'display', 'block' );
				$('#block-block-21').siblings().css( 'display', 'none' );
			}
			if (window.location.hash == '#illustrator') {
				$('#block-block-22').css( 'display', 'block' );
				$('#block-block-22').siblings().css( 'display', 'none' );
			}
		}
		// When a logo is clicked display appropriate dropdown
		$('#block-block-16 .logo.product').click(function() {
			$('#block-block-17').css( 'display', 'block' );
			$('#block-block-17').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.comparator').click(function() {
			$('#block-block-18').css( 'display', 'block' );
			$('#block-block-18').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.client-care').click(function() {
			$('#block-block-19').css( 'display', 'block' );
			$('#block-block-19').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.webline').click(function() {
			$('#block-block-20').css( 'display', 'block' );
			$('#block-block-20').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.modeller').click(function() {
			$('#block-block-21').css( 'display', 'block' );
			$('#block-block-21').siblings().css( 'display', 'none' );
		});
		$('#block-block-16 .logo.illustrator').click(function() {
			$('#block-block-22').css( 'display', 'block' );
			$('#block-block-22').siblings().css( 'display', 'none' );
		});


		// Knowledgebase iframe URL stuff

		if ($('body.page-node-65').length > 0) {
			var url='kb.capitafinancialsoftware.co.uk';
			var frameUrl= queryString("frame");
			if (frameUrl.indexOf(url) != -1) {
				document.getElementById("kbframe").src = frameUrl;
			}
		}

		// Quick links block - Add target="_blank" attribute for external links

		$('#block-views-quick-links-block .linktype-87').parent('a').attr('target','_blank');

		// Twitter Feed block - Add target="_blank" attribute to 'more' link

		$('#block-views-tweets-block .more-link a').attr('target','_blank');


		// Training video page logo anchor links

		// Whether .view-header should be shown
		if ($('#block-menu-block-4 li.menu-mlid-734 li').length) {
			$('.view-training-videos .view-header').css( 'display', 'block' );
		}

		// Logos

		// Synaptic Suite
		if ($('#block-menu-block-4 li.menu-mlid-1581').length) {
			$('a.logo-synaptic-suite').css( 'display', 'inline-block' );
		}
		// Product & Fund
		if ($('#block-menu-block-4 li.menu-mlid-739').length) {
			$('a.logo-product').css( 'display', 'inline-block' );
		}
		// Comparator
		if ($('#block-menu-block-4 li.menu-mlid-736').length) {
			$('a.logo-comparator').css( 'display', 'inline-block' );
		}
		// Modeller
		if ($('#block-menu-block-4 li.menu-mlid-738').length) {
			$('a.logo-modeller').css( 'display', 'inline-block' );
		}
		// Risk
		if ($('#block-menu-block-4 li.menu-mlid-1582').length) {
			$('a.logo-risk').css( 'display', 'inline-block' );
		}
		// Client Care
		if ($('#block-menu-block-4 li.menu-mlid-735').length) {
			$('a.logo-ccd').css( 'display', 'inline-block' );
		}
		// Webline
		if ($('#block-menu-block-4 li.menu-mlid-740').length) {
			$('a.logo-webline').css( 'display', 'inline-block' );
		}
		// Web Services
		if ($('#block-menu-block-4 li.menu-mlid-1583').length) {
			$('a.logo-web-services').css( 'display', 'inline-block' );
		}
		// Cover Me Now
		if ($('#block-menu-block-4 li.menu-mlid-1584').length) {
			$('a.logo-cover-me-now').css( 'display', 'inline-block' );
		}
		// Analyser
		if ($('#block-menu-block-4 li.menu-mlid-1901').length) {
			$('a.logo-analyser').css( 'display', 'inline-block' );
		}


		// Quick fix for Entity Reference module bug (https://www.drupal.org/node/2012250): Hides Author details for 'Anonymous' author

		var strAnon = $('div.field-name-field-author h2.node-title').text();

		if (strAnon.indexOf('Anonymous') >= 0) {
			$('div.field-name-field-author').css( 'display', 'none' );
		}

		// Previous Connection issues & subscription tabs

		$('#block-block-67 .tab.sub-form, #block-views-5af7c61a64894bca563354129b4c963a a#mag-signup-link').click(function() {
			$('#block-views-5af7c61a64894bca563354129b4c963a').css( 'display', 'none' );
			$('#block-block-67 .tab.connection-issues').addClass( 'tab-off' );
			$('#block-webform-client-block-121').css( 'display', 'block' );
			$('#block-block-67 .tab.sub-form').removeClass( 'tab-off' );
		});
		$('#block-block-67 .tab.connection-issues').click(function() {
			$('#block-views-5af7c61a64894bca563354129b4c963a').css( 'display', 'block' );
			$('#block-block-67 .tab.connection-issues').removeClass( 'tab-off' );
			$('#block-webform-client-block-121').css( 'display', 'none' );
			$('#block-block-67 .tab.sub-form').addClass( 'tab-off' );
		});


		// If there's a '#subscription-form' hash tag in the URL

		if ($('#block-block-67').length > 0) {
			if (window.location.hash == '#subscription-form') {
				$('#block-views-5af7c61a64894bca563354129b4c963a').css( 'display', 'none' );
				$('#block-block-67 .tab.connection-issues').addClass( 'tab-off' );
				$('#block-webform-client-block-121').css( 'display', 'block' );
				$('#block-block-67 .tab.sub-form').removeClass( 'tab-off' );
			}
		}



	$(window).load(function(){ /* The below code needs to be in .load() for the .outerHeight()s to return correct values. See: http://stackoverflow.com/questions/10268892/outerheighttrue-gives-wrong-value */

		// Research & Opinions page: Setting the height of the current Connection magazine block so that it matches the height of the longest of the other two columns

		var setConnectionMagBlockHeightRO = function() {
			var viewContent = $('#content .block-views.connection-articles .view-content');
			var firstColumnHeight = $('.region-sidebar-first').outerHeight();
			var secondColumnHeight = $('.region-sidebar-second').outerHeight();
			var connectionBlockHeight = $('#content .block-views.connection-articles').outerHeight();
			var viewContentHeight = $(viewContent).outerHeight();
			var lastBlock;
			var margin = 0;
			//var margin = 24;
			var columnHeight = 0;
			//var columnHeight = ($('#main').outerHeight()) - margin;
			var viewHeader = $('#content .block-views.connection-articles .view-header').outerHeight();
			var viewHeaderHeight = connectionBlockHeight - viewContentHeight;
			//var viewHeaderHeight = 197;

			if (firstColumnHeight > secondColumnHeight) {
				lastBlock = $('.region-sidebar-first .block:last-child');
				margin = ($(lastBlock).outerHeight(true)) - ($(lastBlock).outerHeight());
				columnHeight = ($('.region-sidebar-first').outerHeight()) - margin;
			} else {
				lastBlock = $('.region-sidebar-second .block:last-child');
				margin = ($(lastBlock).outerHeight(true)) - ($(lastBlock).outerHeight());
				columnHeight = ($('.region-sidebar-second').outerHeight()) - margin;
			}

			var setViewContentHeight = columnHeight - viewHeaderHeight;
			$(viewContent).css('height', setViewContentHeight + 'px');

			// console.log('Column Height: ' + columnHeight);
			// console.log('Margin Height: ' + margin);
			// console.log('View Header Height: ' + viewHeaderHeight);
			// console.log('View Content Height: ' + viewContentHeight);
			// console.log('Set View Content Height: ' + setViewContentHeight);
		};

		if ($('body.page-node-244').length) {
			setConnectionMagBlockHeightRO();
		}

		// Setting height of Connection menu on article pages if menu is longer than content area

		var setConnectionMagBlockHeight = function() {
			//var $contentLastElement = $('.node-connection-magazine-article > div:last-child');
			var contentHeight = $('.content-main').outerHeight()/* - ($($contentLastElement).outerHeight(true) - $($contentLastElement).outerHeight())*/;
			var blockHeight = $('.block-views.connection-articles').outerHeight();
			var viewHeaderHeight = $('.block-views.connection-articles .view-header').outerHeight();
			//var viewHeaderHeightAlt = $('.block-views.connection-articles').outerHeight() - $('.block-views.connection-articles .view-content').outerHeight();
			//var viewContentHeight = $('.block-views.connection-articles .view-content').outerHeight();

			if (blockHeight > contentHeight) {
				var setHeight = contentHeight - viewHeaderHeight;
				$('.block-views.connection-articles .view-content').css('height', setHeight);
			}

//			console.log('Content height: ' + contentHeight);
//			console.log('View Header height: ' + viewHeaderHeight);
//			console.log('View Header height Alternate: ' + viewHeaderHeightAlt);
//			console.log('Set height: ' + setHeight);
		};

		if ($('body.node-type-connection-magazine-article').length) {
			//setTimeout(function(){
				setConnectionMagBlockHeight();
			//}, 1000);
		}


	});


	// Fixing AddToAny menu

	var fixA2aPosition = function() {
		var a2aMenu = $('#a2a-custom-menu');
		//var a2aMenuPosition = a2aMenu.offset();
		var windowPosition = $(window).scrollTop();
		//console.log('Top Position: ' + a2aMenuPosition.top);
		//console.log('Window Position: ' + windowPosition);

		if (windowPosition >= 166) {
			$(a2aMenu).addClass('fixed');
			//console.log('Class Added');
		} else {
			$(a2aMenu).removeClass('fixed');
		}

	};

	$(window).scroll(fixA2aPosition);
	fixA2aPosition();




  // Adding anchor links to reference superscripts in articles to link to smallprint at bottom

  $('.node-connection-magazine-article .field-name-field-small-print, .node-synaptic-guides-article .field-name-field-small-print').attr('id', 'smallprint');
  $('.node-connection-magazine-article sup, .node-synaptic-guides-article sup').not('.node-connection-magazine-article div.field-name-field-small-print sup, .node-synaptic-guides-article div.field-name-field-small-print sup').wrap('<a class="sup-ref" href="#smallprint"></a>');



  // Research Tools page: Table: 'The Synaptic Research and Back Office automation suite.'
  // Making tr th height consistent across both th rows

  function researchSuiteTableHeaderHeight() {
  	var tableHeaderHeight = $('#synaptic-research-suite-logos tr th').height();
  	// console.log(tableHeaderHeight);
  	$('#synaptic-research-suite-logos tr th').css('height', tableHeaderHeight + 'px');
  }
  if ($('#synaptic-research-suite-logos').length) {
  	researchSuiteTableHeaderHeight();
  }


	// Move the block down to below the first pullquote
	// if (jQuery('body.node-type-connection-magazine-article').length && jQuery('.region-sidebar-second .block.below-pullquote').length) {

	// 	//jQuery('.region-sidebar-second .block img').css('border', '3px solid red');

	// 	setTimeout(function(){
	// 		var $blockToMoveDown = jQuery('.region-sidebar-second .block.below-pullquote').first();
	// 		move_block_to_below_1st_pullquote($blockToMoveDown);
	// 	}, 2000);


	// 	// jQuery('.region-sidebar-second .block img').load(function() {
	// 	// 	console.log('Why?');
	// 	// 	var $blockToMoveDown = jQuery('.region-sidebar-second .block.below-pullquote').first();
	// 	// 	move_block_to_below_1st_pullquote($blockToMoveDown);
	// 	// });

	// }

  	// Match height of front page 3 column blocks
	if ($('body.front .width-3col').length) {
		$('#main-main-banner .width-3col').matchHeight();
	}

	if ($('a.colorbox').length && !$('a.colorbox div.ico-magnify').length) {
		$('a.colorbox img').after('<div class="ico-magnify">');
	}

	// Product slideshow
	function set_height_of_screenshot_slideshow() {
		var $slideshow = $('.screenshot-slideshow'),
			$img = $slideshow.find('.views-field-field-image img'),
			maxHeight = 0;
			
			$img.each(function() {
				if ($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				}
			})

		$slideshow.height(maxHeight + 50);
		// console.log(maxHeight);
	}
	if (jQuery('.screenshot-slideshow').length) {
		set_height_of_screenshot_slideshow();
		jQuery(window).resize(set_height_of_screenshot_slideshow);
	}


  }

};


})(jQuery, Drupal, this, this.document);

