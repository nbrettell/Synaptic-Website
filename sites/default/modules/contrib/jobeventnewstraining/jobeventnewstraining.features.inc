<?php

/**
 * Implementation of hook_node_info().
 */
function jobeventnewstraining_node_info() {
  $items = array(
    'event' => array(
      'name' => t('Event'),
      'base' => 'node_content',
      'description' => t('An <em>event</em>, item has a title and a body'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'job' => array(
      'name' => t('Job'),
      'base' => 'node_content',
      'description' => t('A <em>job</em>, item has a title and a body'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'news' => array(
      'name' => t('News'),
      'base' => 'node_content',
      'description' => t('A <em>news</em>, item has a title and a body'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'training' => array(
      'name' => t('Training'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function jobeventnewstraining_views_api() {
  return array(
    'api' => '3.0-alpha1',
  );
}
