//config file fr require js application

requirejs.config({
	baseUrl : 'js',

	paths : {
		jquery :  'jquery.min',
		angular : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min'
	}
});

require(['../custom/test']);