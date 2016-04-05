angular
  .module('project4')
  .controller('CarsController', CarsController);

  CarsController.$inject = ['$resource', 'tokenService', '$state']
  function CarsController($resource, tokenService, $state) {

    var self = this;

    var Car = $resource('http://localhost:3000/cars/:id', {id: '@_id'});

    this.selectCar = null;
    this.all       = Car.query();
    this.chooseCars= chooseCars;
    this.addCar    = addCar;
    this.deleteCar = deleteCar;

    this.newCar    = {};


    // if($state.params.id) {
    //   console.log($state.params.id)
    //   Car.get({ $state.params.id }, function(car) {
    //     this.selectCar = car
    //   });
    // }



    this.selectCar = function(car){
      self.selectCar = Car.get({ id:car._id });
      console.log("selected");
    }
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

    function chooseCars () {
      return self.all.filter(function(x) { return x.selected == true; })
    }


}