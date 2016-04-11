angular.module('app.controllers', [])
 
.controller('apply_gameCtrl', function($scope) {

})

.controller('menuCtrl', function($scope, $location) {
	$scope.logout = function(argument) {
		console.log('hello, world');
		window.localStorage['user'] = null;
	    $location.path('/page1');

	}
})

.controller('authenticationCtrl', function($scope) {
	
})

.controller('create_gameCtrl', function($scope) {

})

.controller('create_game_validCtrl', function($scope) {

})

.controller('game_detailsCtrl', function($scope) {

})

.controller('game_organizeCtrl', function($scope, MyParties) {
	MyParties.query().$promise.then(function(response){
		console.log(response);
  		$scope.parties = response;
	});

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

.controller('sign_inCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope) {
	$scope.data = {};

	$scope.login = function() {
  		var user_session = new UserSession({ user: $scope.data });
  		user_session.$save(
	  		function(data){
	      		window.localStorage['user'] = data
	      		$location.path('/side-menu21/page4');
	    	},
	    	function(err){
	      		var error = err["data"]["error"] || err.data.join('. ')
	      		var confirmPopup = $ionicPopup.alert({
	        		title: 'An error occured',
	        		template: error
	      		});
	    	}
	    );
	}
})
  
.controller('sign_upCtrl', function($scope, $location, UserCreate, $ionicPopup, $rootScope) {
	$scope.user = {};

	$scope.signup = function() {
  		var user_create = new UserCreate({ user: $scope.user });
  		user_create.$save(
	  		function(user){
	      		window.localStorage['user'] = data
	      		$location.path('/side-menu21/page4');
	    	},
	    	function(err){
	      		var error = err["data"]["error"] || err.data.join('. ')
	      		var confirmPopup = $ionicPopup.alert({
	        		title: 'An error occured',
	        		template: error
	      		});
	      	}
	    );
  	}
})
