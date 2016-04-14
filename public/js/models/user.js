angular
  .module('project4')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  return $resource('/users/:id', { id: '@_id' }, {
    update: { method: "PUT" },
    login: { method: "POST", url: '/login'},
    register: { method: "POST", url: '/register' },
    
  });
}