angular.module('app.services', [])

.factory('User', function($resource) {
  return $resource("http://localhost:3000/users/:id.json");
})