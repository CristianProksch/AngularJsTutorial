var app = angular.module('ehome',['ehome-directives']); //wenn ich 'ehome-directives auskommenteire zeigt er mir zumindest m.namen an ...' weis nicht was da falsch ist...

app.controller('ehomeController',['$http', function($http){
	var abteilung = this;
	abteilung.mitarbeiter = [];
	$http.get('./mitarbeiter.json').success(function(data){
		abteilung.mitarbeiter= data;
	});
}]);
