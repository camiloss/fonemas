var fonemasApp = angular.module('fonemasApp', [ 'ngRoute' ]);

fonemasApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl : 'partials/public/main.html'
	}).when('/quienessomos', {
		templateUrl : 'partials/public/quienes_somos.html'
	}).when('/quehacemos', {
		templateUrl : 'partials/public/que_hacemos.html'
	}).when('/contacto', {
		templateUrl : 'partials/public/contacto.html'
	}).when('/disfunciones', {
		templateUrl : 'partials/public/disfunciones.html'
	}).when('/estudio', {
		templateUrl : 'partials/public/estudio.html'
	}).when('/otros_trastornos', {
		templateUrl : 'partials/public/otros_trastornos.html'
	}).otherwise({
		redirectTo : '/main'
	});
} ]);

fonemasApp
		.directive(
				'gMap',
				function() {
					return function(scope, elem, attrs) {
						var mapOptions, myLatlng, latitude = attrs.latitude, longitude = attrs.longitude, map;

						latitude = latitude && parseFloat(latitude, 10)
								|| 40.4087745;
						longitude = longitude && parseFloat(longitude, 10)
								|| -3.6355678;
						myLatlng = new google.maps.LatLng(latitude, longitude);
						mapOptions = {
							zoom : 15,
							center : myLatlng,
							disableDefaultUI : true,
							mapTypeId : google.maps.MapTypeId.ROADMAP
						};

						var infowindow = new google.maps.InfoWindow(
								{
									content : '<div>'

											+ '<h2  ><img src="img/logo_trans.png" width="60%"  /></h2>'
											+ '<div style="padding-left:5em;font-size:1.3em;padding-top:1em">'
                                            +   '<p>Avda. Doctor Garcia Tapia, 145</p>'
											+   '<p>Moratalaz, Madrid 28030.</p>'
											+ '</div>' + '</div>'
								});
						map = new google.maps.Map(elem[0], mapOptions);

						var marker = new google.maps.Marker({
							position : myLatlng,
							map : map,
							title : "Centro Fonemas Logopedia"
						});
						mapOptions = {
							zoom : 8,
							center : new google.maps.LatLng(latitude, longitude)
						};

						infowindow.open(map, marker);
					};
				});
