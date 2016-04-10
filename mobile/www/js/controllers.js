angular.module('app.controllers', [])
 
 .controller('apply_gameCtrl', function($scope) {

})

.controller('authenticationCtrl', function($scope, User) {
	User.query().$promise.then(function(response){
		console.log("loaded");
		console.log(response);
    	$scope.users = response;
	});
})


.controller('create_gameCtrl', function($scope) {

})

.controller('create_game_validCtrl', function($scope) {

})

.controller('game_detailsCtrl', function($scope) {

})

.controller('game_organizeCtrl', function($scope) {

})
      
.controller('game_participateCtrl', function($scope) {

})

.controller('game_participatedCtrl', function($scope) {

})

.controller('game_set_playersCtrl', function($scope) {

})

.controller('game_settingsCtrl', function($scope) {

})

.controller('game_settings_modifyCtrl', function($scope) {

})

.controller('game_setting_validCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('profilCtrl', function($scope) {

})

.controller('search_gameCtrl', function($scope) {

})

.controller('search_game_resultsCtrl', function($scope, Party) {
	Party.query().$promise.then(function(response){
		console.log(response);
    	$scope.parties = response;
	});
})



.controller('set_profilCtrl', function($scope) {

})

.controller('sign_inCtrl', function($scope) {

})
  
.controller('sign_upCtrl', function($scope) {

})
