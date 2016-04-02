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
    templateUrl: 'index.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'login.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'register.html'
  });

  $urlRouterProvider.otherwise('/');

}