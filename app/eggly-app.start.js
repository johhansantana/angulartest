angular.module('Eggly', [

])

.controller('MainCtrl', function($scope) {
	var self = this;
	self.hello = 'hello world';

	self.categories = [
		{"id": 0, "name": "Development"},
		{"id": 1, "name": "Design"},
		{"id": 2, "name": "Exercise"},
		{"id": 3, "name": "Humor"}
	];

	self.bookmarks = [
		{"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
		{"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development"},
		{"id": 2, "title": "A list apart", "url": "http://angularjs.org", "category": "Design"},
		{"id": 3, "title": "One page love", "url": "http://angularjs.org", "category": "Design"},
		{"id": 4, "title": "Mobility", "url": "http://angularjs.org", "category": "Exercise"},
		{"id": 5, "title": "Robb Wolf", "url": "http://angularjs.org", "category": "Exercise"},
		{"id": 6, "title": "Senor gif", "url": "http://angularjs.org", "category": "Humor"},
		{"id": 7, "title": "Wimp", "url": "http://angularjs.org", "category": "Humor"},
		{"id": 8, "title": "Dump", "url": "http://angularjs.org", "category": "Humor"},
	];

	$scope.currentCategory = null;

	function setCurrentCategory(category) {
		$scope.currentCategory = category;
	}

	function isCurrentCategory(category) {
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	}

	// makes public the function
	$scope.setCurrentCategory = setCurrentCategory;
	$scope.isCurrentCategory = isCurrentCategory;
});