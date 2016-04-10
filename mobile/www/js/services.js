angular.module('app.services', [])

.factory('User', function($resource) {
  return $resource("http://localhost:3000/users/:id.json");
})

.factory('Party', function($resource) {
  return $resource("http://localhost:3000/parties/:id.json");
})