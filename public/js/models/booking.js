angular
.module('project4')
.factory('Booking', Booking);

Booking.$inject = ['$resource'];
function Booking($resource) {
  return $resource('/bookings/:id', { id: '@_id' }, {
    update: { method: "PUT" }
  })
}