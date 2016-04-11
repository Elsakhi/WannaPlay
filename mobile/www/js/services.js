angular.module('app.services', [])

.factory('User', function($resource) {
  return $resource("http://localhost:3000/users/:id.json");
})

.factory('Party', function($resource) {
  return $resource("http://localhost:3000/parties/:id.json");
})

.factory('MyParties', function($resource) {
  return $resource("http://localhost:3000/parties/mine.json");
})

.factory('UserSession', function($resource) {
  return $resource("http://localhost:3000/users/sign_in.json");
})

.factory('UserCreate', function($resource) {
  return $resource("http://localhost:3000/users.json");
})

.factory('PartyCreate', function($resource) {
  return $resource("http://localhost:3000/parties.json");
})