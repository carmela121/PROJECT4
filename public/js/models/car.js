angular
.module('project4')
.factory('Car', Car);

Car.$inject = ['$resource'];
function Car($resource) {
  return $resource('/cars/:id', { id: '@_id' }, {
    update: { method: "PUT" }
  })
}