angular
  .module('project4')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  return $resource(API + '/api/users/:id', { id: '@_id' }, {
    update: { method: "PUT" },
    login: { method: "POST", url: API + '/login'},
    register: { method: "POST", url: API + '/register' },
    
  });
}