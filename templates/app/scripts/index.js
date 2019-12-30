import '@/polyfill';
import 'jq';
import 'jquery-migrate';

$(() => {
  console.log('jQuery', $);
  console.log('jQuery Migrate', $.migrateVersion);
});
