; DRUPAL VERSION
core = 7.x
api = 2

;projects[] = transliteration
;projects[] = image_resize_filter
projects[] = wysiwyg
projects[] = imce_wysiwyg
projects[] = imce

; for wysiwyg filter, we need to use a D7 port from a git sandbox
;projects[wysiwyg_filter_d7_port][type] = module
;projects[wysiwyg_filter_d7_port][download][type] = git
;projects[wysiwyg_filter_d7_port][download][url] = http://git.drupal.org/sandbox/axel.rutz/1105784.git
;projects[wysiwyg_filter_d7_port][download][branch] = '7.x-1.x'
;projects[wysiwyg_filter_d7_port][directory_name] = 'wysiwyg_filter'

; ckeditor library
libraries[ckeditor][download][type] = 'get'
libraries[ckeditor][download][url] = 'http://download.cksource.com/CKEditor/CKEditor/CKEditor%203.5.3/ckeditor_3.5.3.tar.gz'
libraries[ckeditor][directory_name'] = 'ckeditor'
