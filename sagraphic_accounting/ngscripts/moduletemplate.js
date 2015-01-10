(function(){
	/**
	*  Module moduletemplate
	*
	* Description
	*/
	var app=angular.module('moduletemplate', []);

	app.directive('navheader',  function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'includes/navheader.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		};
	});

	app.directive('appheader',  function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'includes/appheader.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		};
	});

	app.directive('sidebarmenu',  function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function() {
				/* Navigation */

				$(document).ready(function(){

				  $(window).resize(function()
				  {
				    if($(window).width() >= 765){
				      $(".sidebar #nav").slideDown(350);
				    }
				    else{
				      $(".sidebar #nav").slideUp(350); 
				    }
				  });
				  
				   $(".has_sub > a").click(function(e){
				    e.preventDefault();
				    var menu_li = $(this).parent("li");
				    var menu_ul = $(this).next("ul");

				    if(menu_li.hasClass("open")){
				      menu_ul.slideUp(350);
				      menu_li.removeClass("open")
				    }
				    else{
				      $("#nav > li > ul").slideUp(350);
				      $("#nav > li").removeClass("open");
				      menu_ul.slideDown(350);
				      menu_li.addClass("open");
				    }
				  });
				});
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'includes/sidebarmenu.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		};
	});
})();