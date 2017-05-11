/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.
		
		// Support > Training – Course Catalogue – Info dropdowns 
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
		$('#block-block-16 .logo.fund').click(function() {
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


  }
};


})(jQuery, Drupal, this, this.document);