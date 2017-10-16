<?php
/**

  Synaptic Software
  www.synaptic.co.uk

 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page" class="container-fluid">

  <header class="header" id="header" role="banner">
  
  	<?php print render($page['header']); ?>

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="Synaptic Software Logo" class="header__logo-image" /></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

  </header>
  
  <div id="navigation">
 <div class="navbar navbar-inverse" role="navigation" id="slide-nav">
   <div class="navbar-header">
    <a class="navbar-toggle"> 
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
     </a>
   </div>
   <div id="slidemenu">
      <?php if ($main_menu): ?>
        <nav id="main-menu" role="navigation" tabindex="-1">
          <?php
          // This code snippet is hard to modify. We recommend turning off the
          // "Main menu" on your sub-theme's settings form, deleting this PHP
          // code block, and, instead, using the "Menu block" module.
          // @see https://drupal.org/project/menu_block
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
         <h3 class="quick-links-mobile-head">Quick Links</h3>
         <ul class="quick-links-mobile">
          <li> <a class="menu__link" href="/research-tools">Advisers</a></li>
          <li><a class="menu__link" href="/providers">Providers</a></li>
          <li><a class="menu__link" href="/fund-managers">Fund Managers</a></li>
          <li><a class="menu__link" href="/consumer-solutions">Consumer Solutions</a></li>
          <li><a class="menu__link" href="http://www.synaptic.co.uk/research-and-opinion#subscription-form" title="">Sign up for Connection</a></li>
         </ul>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

</div>
</div>
</div>
  
  <?php if ($page['easy_breadcrumb']): ?><div id="breadcrumb-wrapper"><?php print render($page['easy_breadcrumb']); ?></div><?php endif; ?>
  
  <?php if ($page['service_messages']): ?>
    <?php print render($page['service_messages']); ?>
  <?php endif; ?>

	<?php print $messages; ?>

  <?php if ($is_front): ?>
    <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
  <?php endif; ?>
  
  <div id="main-main-banner">

  <div id="a2a-custom-menu" class="a2a_kit a2a_kit_size_26 a2a_vertical_style">
      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a class="a2a_button_email"></a>
      <a class="a2a_button_facebook"></a>
      <a class="a2a_button_twitter"></a>
      <a class="a2a_button_google_plus"></a>
      <a class="a2a_button_linkedin"></a>
  </div>
  
  <script type="text/javascript">
    // var a2a_config = a2a_config || {};
    // a2a_config.icon_color = "#b9b9b9";
    // a2a_config.prioritize = ["email", "print", "google_gmail", "delicious", "evernote", "google_bookmarks"];
    // a2a_config.num_services = 6;
  </script>
  <script type="text/javascript" src="//static.addtoany.com/menu/page.js"></script>
  
  <?php print render($page['main_banner']); ?>
    
  <div id="main">

    <div id="content" class="column" role="main">
    
      <?php print render($page['content_top']); ?>
    
    	<div class="content-main">
      <?php print render($page['highlighted']); ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title and !$is_front): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
      <?php print render($page['info_dropdowns']); ?>
      </div>
      
      <?php print render($page['content_bottom']); ?>
      
    </div>

  <script>
    // Research Tools product screeshot slideshow resizing
    // if (jQuery('.screenshot-slideshow').length) {
    //   set_height_of_screenshot_slideshow();
    //   jQuery(window).resize(set_height_of_screenshot_slideshow);
    // }
  </script>
	
  <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>
    
  </div><!-- /#main -->

  <script>
    // Move the block down to below the first pullquote
	  // if (jQuery('body.node-type-connection-magazine-article').length && jQuery('.region-sidebar-second .block.below-pullquote').length) {
		 //  var $blockToMoveDown = jQuery('.region-sidebar-second .block.below-pullquote').first();
   //    move_block_to_below_1st_pullquote($blockToMoveDown);
	  // }

    // Adding .notitle class to about field if there's no title field.
    if (jQuery('body.node-type-connection-magazine-article .field-name-field-about-block-body').length) {
      if (!jQuery('.field-name-field-about-block-title').length) {
        jQuery('.field-name-field-about-block-body').addClass('notitle');
      }
    }

    // Adding New flash icon graphic to Synaptic Analyser menu item
    if (jQuery('#block-menu-block-1').length) {
      jQuery('#block-menu-block-1 .menu-mlid-1898 a').append('<span class="new-flash">New</span>');
    }

  </script>
  
  <?php print render($page['bottom']); ?>
  
  <div id="sitemap" class="block label lightblue">
  	<h2 class="block-title">Site Map</h2>
  		<?php print render($page['sitemap']); ?>
  </div><!-- /#sitemap -->
  
  </div><!-- /#main-main-bannner -->

  
  <?php print render($page['footer']); ?>
  
  <?php if ($page['smallprint']): ?>
      <?php print render($page['smallprint']); ?>
  <?php endif; ?>

</div>


