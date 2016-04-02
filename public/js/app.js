angular
  .module('project4', ['ngResource', 'ui.router', 'angular-jwt'])
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
    url: '/home',
    templateUrl: '/views/home.html'
  })
  .state('login', {
    url: '/',
    templateUrl: '/views/login.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html'
  });

  $urlRouterProvider.otherwise('/');

}