import './polyfill';
import $ from 'jquery';
window.jQuery = $;
import('jquery-migrate');

$(() => {
  console.log('jQuery', $);
  console.log('jQuery Migrate', $.migrateVersion);
});
