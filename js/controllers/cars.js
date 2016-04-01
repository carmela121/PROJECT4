angular
  .module('MyFavouriteCars')
  .controller('CarsController', CarsController);

  CarsController.$inject = ['$resource']
  function CarsController($resource) {

    var self = this;

    var Car = $resource('http://localhost:3000/api/cars/:id', {id: '@_id'});

    this.selectCar = null;
    this.all       = Car.query();
    this.chooseCars= chooseCars;
    this.addCar    = addCar;
    this.deleteCar = deleteCar;

    this.selectCar = function(car){
      self.selectCar = Car.get({id:car._id});
      console.log("selected");
    }
    function addCar() {
      self.car.push({ name: car.name, selected: false, image: car.image });

    }
    function deleteCar($index) {
      self.car.splice($index, 1);
    }

    function chooseCars () {
      return self.car.filter(function(x) { return x.selected == true; })
    }


}