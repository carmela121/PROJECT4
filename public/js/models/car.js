angular
.module('project4')
.factory('Car', Car);

Car.$inject = ['$resource', 'API'];
function Car($resource, API) {
  return $resource(API + '/cars/:id', { id: '@_id' }, {
    update: { method: "PUT" }
  })
}