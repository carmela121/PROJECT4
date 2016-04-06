angular
  .module('project4')
  .controller('CarsController', CarsController);

  CarsController.$inject = ['$resource', 'tokenService', '$state', '$rootScope']
  function CarsController($resource, tokenService, $state, $rootScope) {

    var self = this;

    var Car = $resource('http://localhost:3000/cars/:id', {id: '@_id'}, {
      update: { method: "PUT" },
      available: { method: "GET", isArray: true, url: 'http://localhost:3000/cars/available' }
    });

    
    this.getAvailableCars = function() {
      self.all = Car.available({ start: self.starDate, end: self.endDate });
      console.log('clicked');
    }


    var Booking = $resource('http://localhost:3000/bookings/:id', {id: '@_id'});

    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    this.startDate = new Date(today);
    var tomorrow = new Date();
    tomorrow.setDate(this.startDate.getDate()+1);
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
    // this.all       = Car.query();
    // this.chooseCars= chooseCars;
    this.addCar    = addCar;
    this.deleteCar = deleteCar;

    this.newCar    = {};

    $rootScope.$on('$stateChangeSuccess', function() {
      if($state.params.id) {
        self.selectedCar = Car.get({ id: $state.params.id });
      }
    });



    // this.selectCar = function(car){
    //   self.selectCar = Car.get({ id:car._id });
    //   console.log("selected");
    // }
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

    // function chooseCars () {
    //   return self.all.filter(function(x) { return x.selected == true; })
    // }


}