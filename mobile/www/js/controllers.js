angular.module('app.controllers', [])
 
.controller('apply_gameCtrl', function($scope) {

})

.controller('menuCtrl', function($scope, $location) {
	$scope.logout = function(argument) {
		window.localStorage['user'] = null;
	    $location.path('/page1');

	}
})

.controller('authenticationCtrl', function($scope) {
	
})

.controller('create_gameCtrl', function($scope, PartyCreate, $location) {
	$scope.party = {};

	$scope.partycreate = function() {
  		var party_create = new PartyCreate({ party: $scope.party });
  		party_create.$save(
	  		function(party){
	      		$location.path('/side-menu21/page7');
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

.controller('create_game_validCtrl', function($scope) {

})

.controller('game_detailsCtrl', function($scope) {

})

.controller('game_organizeCtrl', function($scope, MyParties, $location) {
	MyParties.query().$promise.then(function(response){
  		$scope.parties = response;
	});

	$scope.show = function(party_id) {
		$location.path('/side-menu21/page12').search({party_id: party_id})
	}
})
      
.controller('game_participateCtrl', function($scope) {

})

.controller('game_participatedCtrl', function($scope) {

})

.controller('game_set_playersCtrl', function($scope, $stateParams, $location) {
	$scope.party_id = $stateParams.party_id;
	$scope.show = function(party_id) {
		$location.path('/side-menu21/page13').search({party_id: party_id})
	}
})

.controller('game_settingsCtrl', function($scope, $stateParams, Party) {
	Party.get({id: $stateParams.party_id}).$promise.then(function(response) {
  		$scope.party = response
	});
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
