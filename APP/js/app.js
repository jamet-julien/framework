var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider

		.when('/',{
			templateUrl:'html/template/articles.html',
			controller:'homeCtrl'
		})

		.otherwise({redirecTo:'/'});
}]);