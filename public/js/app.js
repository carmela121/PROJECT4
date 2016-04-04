angular
  .module('project4', ['ngResource', 'ui.router', 'angular-jwt', 'ui.bootstrap'])
  .constant('API', 'http://localhost:3000')
  .config(InterceptorConfig)
  .config(Router);

InterceptorConfig.$inject = ['$httpProvider'];
  function InterceptorConfig($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptor');
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/views/home.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html'
  })
  .state('addCar', {
    url: '/addCar',
    templateUrl: '/views/addCar.html'
  });

  $urlRouterProvider.otherwise('/');

}