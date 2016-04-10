angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('authentication', {
    url: '/page1',
    templateUrl: 'templates/authentication.html',
    controller: 'authenticationCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('sign_in', {
    url: '/page2',
    templateUrl: 'templates/sign_in.html',
    controller: 'sign_inCtrl'
  })


  .state('sign_up', {
    url: '/page3',
    templateUrl: 'templates/sign_up.html',
    controller: 'sign_upCtrl'
  })

  .state('menu.home', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.apply_game', {
    url: '/page5',
    views: {
      'side-menu21': {
       templateUrl: 'templates/apply_game.html',
       controller: 'apply_gameCtrl'
      }
    }
  })

  .state('menu.create_game', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/create_game.html',
        controller: 'create_gameCtrl'
      }
    }
  })

  .state('menu.create_game_valid', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/create_game_valid.html',
        controller: 'create_game_validCtrl'
      }
    }
  })

  .state('menu.game_details', {
    url: '/page8',
    views: {
      'side-menu21':{
        templateUrl: 'templates/game_details.html',
       controller: 'game_detailsCtrl'      
      }
    }  
  })

  .state('menu.game_organize', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_organize.html',
        controller: 'game_organizeCtrl'
      }
    }
  })


  .state('menu.game_participate', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_participate.html',
        controller: 'game_participateCtrl'
      }
    }
  })

  .state('menu.game_participated', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_participated.html',
        controller: 'game_participatedCtrl'
      }
    }
  })

  .state('menu.game_set_players', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_set_players.html',
        controller: 'game_set_playersCtrl'
      }
    }
  })

  .state('menu.game_settings', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_settings.html',
        controller: 'game_settingsCtrl'
      }
    }
  })
  .state('menu.game_settings_modify', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_settings_modify.html',
        controller: 'game_settings_modifyCtrl'
      }
    }
  })

  .state('menu.game_settings_valid', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/game_settings_valid.html',
        controller: 'game_settings_validCtrl'
      }
    }
  })

  .state('menu.profil', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profil.html',
        controller: 'profilCtrl'
      }
    }
  })

  .state('menu.search_game', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search_game.html',
        controller: 'search_gameCtrl'
      }
    }
  })

  .state('menu.search_game_results', {
    url: '/page18',
    views: {
      'side-menu21':{
        templateUrl: 'templates/search_game_results.html',
        controller: 'search_game_resultsCtrl'
      }
    }
  })

  .state('menu.set_profil', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/set_profil.html',
        controller: 'set_profilCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1')

  

});