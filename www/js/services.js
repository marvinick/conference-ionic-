angular.module("starter.service", ["ngResource"])

.factory("Session", function ($resource) {
	return $resource("http://localhost:5000/sessions/:sessionId");
});