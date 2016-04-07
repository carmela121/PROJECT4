angular
  .module('project4', ['ngResource', 'ui.router', 'angular-jwt', 'ui.bootstrap'])
  .constant('API', 'http://localhost:3000')
  .config(InterceptorConfig)
  .config(Router)
  .config(function() {
      Stripe.setPublishableKey('pk_test_BfHSI7eQdN9W0cOp1UOrUKFp');
    });

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
  })
  .state('payment', {
    url: '/payment',
    templateUrl: '/views/payment.html'
  })
  .state('map', {
    url: '/map',
    templateUrl: '/views/map.html'
  })
  .state('allCars', {
    url: '/cars',
    templateUrl: '/views/allCars.html'
  })
  .state('selectCar', {
    url: '/cars/:id',
    templateUrl: '/views/showCars.html'
  })
  .state('bookCar', {
    url: '/bookCar/:id',
    templateUrl: '/views/bookCar.html'
  });

  $urlRouterProvider.otherwise('/');

}