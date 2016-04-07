angular.module('project4')
  .service('cartService', CartService);

CartService.$inject = ['$window'];
function CartService($window) {
  var cart = angular.fromJson($window.localStorage.getItem('cart')) || {};

  function saveCart() {
    $window.localStorage.setItem('cart', angular.toJson(cart));
  }

  return {
    setDates: function(startDate, endDate) {
      cart.startDate = startDate;
      cart.endDate = endDate;
      cart.days = ((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24);
      saveCart();
    },
    setCar: function(car) {
      cart.car = car;
      saveCart();
    },
    getTotal: function() {
      return cart.days * cart.car.price;
    },
    getCar: function() {
      return cart.car;
    },
    getDates: function() {

      return { startDate: cart.startDate, endDate: cart.endDate } 

    }
  }
}