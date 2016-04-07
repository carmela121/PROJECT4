angular
  .module('project4')
  .controller('BookingsController', BookingsController);

BookingsController.$inject = ['$resource', 'tokenService', '$state', '$rootScope','Booking', 'Car']
function BookingsController($resource, tokenService, $state, $rootScope, Booking, Car) {

  var self = this;

  this.selectedBooking = null;
  this.all = Booking.query();
  this.addBooking = addBooking;
  this.deleteBooking = deleteBooking;

  this.newBooking   = {};


  this.removeCar = function(car) {
    console.log(car)
  }

  $rootScope.$on('$stateChangeSuccess', function() {
    if($state.params.id) {
      self.selectedBooking = Booking.get({ id: $state.params.id });
      console.log(self.selectedBooking);
    }
  });
}