angular
.module('project4')
.factory('Booking', Booking);

Booking.$inject = ['$resource', 'API'];
function Booking($resource, API) {
  return $resource(API + '/bookings/:id', { id: '@_id' }, {
    update: { method: "PUT" }
  })
}