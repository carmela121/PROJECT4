angular
  .module('project4')
  .controller('BookingsController', BookingsController);

  BookingsController.$inject = ['$resource', 'tokenService', '$state', '$rootScope']
  function BookingsController($resource, tokenService, $state, $rootScope) {

    var self = this;

    

    this.selectedBooking = null;
    this.all       = Booking.query();
    this.addBooking= addBooking;
    this.deleteBooking = deleteBooking;

    this.newBooking   = {};


    this.removeCar = function(car) {
      console.log(car)
    }

    $rootScope.$on('$stateChangeSuccess', function() {
      if($state.params.id) {
        self.selectedBooking = Booking.get({ id: $state.params.id });
      }
    });

    function removeCar() {
      console.log("hello")
    }

    function addBooking() {
      self.newBooking.car = tokenService.getCar()._id;
      Booking.save(self.newBooking, function(res) {
        console.log(res);
        self.all.push(self.newBooking);
      });

    }
    function deleteBooking($index) {
      self.all.splice($index, 1);
    }


}