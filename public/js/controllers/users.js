angular
  .module('project4')
  .controller('usersController', UsersController);

UsersController.$inject = ['User', 'tokenService']
function UsersController(User, tokenService) {
  var self = this;

  self.all = [];
  self.currentUser = tokenService.getUser();

  function handleLogin(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    if(token) {
      console.log(res);
      self.getUsers();
      self.currentUser = tokenService.getUser();
    }

    self.message = res.message;
  }

  self.login = function() {
    User.login(self.currentUser, handleLogin);

  }

  self.register = function() {
    User.register(self.currentUser, handleLogin);

  }

  self.logout = function() {
    tokenService.removeToken();
    self.all = [];
    self.currentUser = null;
    self.message = "";

  }

  self.getUsers = function() {
    self.all = User.query();
  }
  self.isLoggedIn = function() {
    return !!tokenService.getToken();
  }
  if(self.isLoggedIn()) self.getUsers();


  return self;
}