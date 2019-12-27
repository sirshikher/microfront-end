import { registerApplication, start } from 'single-spa'

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.startsWith(prefix);
  }
}


registerApplication(
  // Name of our single-spa application
  'home',
  // Our loading function
  () => import('./src/home/home.app.js'),
  // Our activity function
  () => location.pathname === "" || 
    location.pathname === "/" || 
    pathPrefix('/home')
);
registerApplication(
  'navBar', 

  () => import('./src/navBar/navbar.app.js').then(module => module.navBar),  () => true
);
registerApplication(
  'angularJS', 
  () => import ('./src/angularJS/angularJS.app.js'), 
  pathPrefix('/angularJS')
);



start();