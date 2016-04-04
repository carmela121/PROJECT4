angular
    .module("project4")
    .controller("navBarController", navBarController);


function navBarController() {
  var self = this

  self.accountItems = [{
    name: "Log out",
    url: "users.logout()"
  }, {
    name: "My Account",
    url: ""
  }, {
    name: "Search for Cars",
    url: ""
  }]

  self.status = {
    isopen: false
  }

  self.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  self.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  self.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}