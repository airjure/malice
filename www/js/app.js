// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function() {
var app = angular.module('malice', ['ionic']);

// Controler for the view
app.controller("MaliceCtrl", function($http, $scope) {

  $scope.refreshMe = function () {
    $scope.malice = [
      {
        naslov: "Malica 12",
        malica: "ričet, klobasa"
      },
      {
        naslov: "Malica 22",
        malica: "rižota, solata"
      },
      {
        naslov: "Malica 32",
        malica: "svinjski zrezek v omaki, krompir, solata"
      },
      {
        naslov: "Malica 42",
        malica: "ocvrti sir, krompir, solata"
      },
      {
        naslov: "Malica 52",
        malica: "solata s testeninami, šunko in sirom"
      }
    ];
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.malice = [
    {
      naslov: "Malica 1",
      malica: "ričet, klobasa"
    },
    {
      naslov: "Malica 2",
      malica: "rižota, solata"
    },
    {
      naslov: "Malica 3",
      malica: "svinjski zrezek v omaki, krompir, solata"
    },
    {
      naslov: "Malica 4",
      malica: "ocvrti sir, krompir, solata"
    },
    {
      naslov: "Malica 5",
      malica: "solata s testeninami, šunko in sirom"
    }
  ];

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}());
