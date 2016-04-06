angular
  .module('project4')
  .controller('CarsController', CarsController);

  CarsController.$inject = ['$resource', 'tokenService', '$state', '$rootScope']
  function CarsController($resource, tokenService, $state, $rootScope) {

    var self = this;

    var Car = $resource('http://localhost:3000/cars/:id', {id: '@_id'});

    this.selectedCar = null;
    this.all       = Car.query();
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