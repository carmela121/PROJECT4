 angular
  .module('project4')
  .controller('CarsController', CarsController);

  CarsController.$inject = ['$resource', 'tokenService', '$state', '$rootScope', 'cartService']
  function CarsController($resource, tokenService, $state, $rootScope, cartService) {

    var self = this;

    var Car = $resource('/cars/:id', {id: '@_id'}, {
      update: { method: "PUT" },
      available: { method: "GET", isArray: true, url: '/cars/available' }
    });

    
    this.getAvailableCars = function() {
      if(!!tokenService.getToken()){
        console.log("getting cars");
        cartService.setDates(self.startDate, self.endDate);
        $state.go('allCars');
      return self.all = Car.available({ start: self.startDate, end: self.endDate });
      }
    }


    var Booking = $resource('/bookings/:id', {id: '@_id'});

    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    this.startDate = new Date(today);
    var tomorrow = new Date();
    tomorrow.setDate(this.startDate.getDate()+1);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    tomorrow.setMilliseconds(0);

    this.endDate = tomorrow;

    this.startPickerOpen = false;
    this.endPickerOpen = false;

    this.startDateOptions = {
      dateDisabled: function(data) {
        return data.date < today;
      }
    }

    this.endDateOptions = {
      dateDisabled: function(data) {
        return data.date < self.startDate;
      }
    }

    this.openStartPicker = function() {
      this.startPickerOpen = true;
    }

    this.openEndPicker = function() {
      this.endPickerOpen = true;
    }

    this.selectedCar = null;
    this.all       = Car.query();
    this.addCar    = addCar;
    this.deleteCar = deleteCar;

    this.newCar    = {};

    $rootScope.$on('$stateChangeSuccess', function() {
      if($state.params.id) {
        Car.get({ id: $state.params.id }, function(car) {
          self.selectedCar = car;
          cartService.setCar(car);
        });
      }
    });

    function addCar() {
      self.newCar.user = tokenService.getUser()._id;
      Car.save(self.newCar, function(res) {
        console.log(res);
        self.all.push(self.newCar);
      });
    }

    function deleteCar($index) {
      self.all.splice($index, 1);
    }


}