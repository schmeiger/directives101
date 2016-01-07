angular.module('signUp')
.directive('signUpForm', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './components/sign-up-form.html',
		replace: true
	}
});