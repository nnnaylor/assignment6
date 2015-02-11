(function() {
  var app = angular.module('tutorial', ['store-directives']);
  
  app.controller('ListController',[ '$scope','$http', function($scope,$http) {
		var $scope = this;

		$scope.tutorials = [];

		$http.get('tutorials.json').success(function(data) {
			$scope.tutorials = data;
		});

		$scope.predicate = '-author';
	}]);
})();