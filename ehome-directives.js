var app = angular.module('ehome-directives', []);

app.directive("Publicationen", function() {
	return {
		templateUrl: "Publicationen.html"
	};
});

app.directive("Info-Text", function() {
	return {
		templateUrl:"Info.html"
	};
});
