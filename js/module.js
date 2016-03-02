registerController('LEDController', ['$api', '$scope', function($api, $scope) {
	$scope.device = '';

	$api.request({
		module: 'LEDController',
		action: 'getDeviceType'
	}, function(response) {
		$scope.device = response;
	});
}]);

registerController('TetraYellow', ['$api', '$scope', function($api, $scope) {
	$scope.enabled = false;
	$scope.trigger = '';
	$scope.mode = '';
	$scope.delayOn = '';
	$scope.delayOff = '';
	$scope.interface = '';

	$scope.getTetraYellow = (function() {
		$api.request({
			module: 'LEDController',
			action: 'getTetraYellow'
		}, function(response) {
			$scope.enabled = response.enabled;
			$scope.trigger = response.trigger;
			$scope.mode = response.mode;
			$scope.delayOn = response.delayOn;
			$scope.delayOff = response.delayOff;
			$scope.interface = response.interface;
			console.log(response);
		});
	});

	$scope.setTetraYellow = (function() {
		$api.request({
			module: 'LEDController',
			action: 'setTetraYellow',
			enabled: $scope.enabled,
			trigger: $scope.trigger,
			mode: $scope.mode,
			delayOn: $scope.delayOn,
			delayOff: $scope.delayOff,
			interface: $scope.interface
		}, function(response) {
			$scope.getTetraYellow();
			console.log(response);
		});
	});

	$scope.getTetraYellow();
}]);

registerController('TetraBlue', ['$api', '$scope', function($api, $scope) {
	$scope.enabled = false;
	$scope.trigger = '';
	$scope.mode = '';
	$scope.delayOn = '';
	$scope.delayOff = '';
	$scope.interface = '';

	$scope.getTetraBlue = (function() {
		$api.request({
			module: 'LEDController',
			action: 'getTetraBlue'
		}, function(response) {
			$scope.enabled = response.enabled;
			$scope.trigger = response.trigger;
			$scope.mode = response.mode;
			$scope.delayOn = response.delayOn;
			$scope.delayOff = response.delayOff;
			$scope.interface = response.interface;
			console.log(response);
		});
	});

	$scope.setTetraBlue = (function() {
		$api.request({
			module: 'LEDController',
			action: 'setTetraBlue',
			enabled: $scope.enabled,
			trigger: $scope.trigger,
			mode: $scope.mode,
			delayOn: $scope.delayOn,
			delayOff: $scope.delayOff,
			interface: $scope.interface
		}, function(response) {
			$scope.getTetraBlue();
			console.log(response);
		});
	});

	$scope.getTetraBlue();
}]);

registerController('TetraRed', ['$api', '$scope', function($api, $scope) {
	$scope.enabled = false;
	$scope.trigger = '';
	$scope.mode = '';
	$scope.delayOn = '';
	$scope.delayOff = '';
	$scope.interface = '';

	$scope.getTetraRed = (function() {
		$api.request({
			module: 'LEDController',
			action: 'getTetraRed'
		}, function(response) {
			$scope.enabled = response.enabled;
			$scope.trigger = response.trigger;
			$scope.mode = response.mode;
			$scope.delayOn = response.delayOn;
			$scope.delayOff = response.delayOff;
			$scope.interface = response.interface;
			console.log(response);
		});
	});

	$scope.setTetraRed = (function() {
		$api.request({
			module: 'LEDController',
			action: 'setTetraRed',
			enabled: $scope.enabled,
			trigger: $scope.trigger,
			mode: $scope.mode,
			delayOn: $scope.delayOn,
			delayOff: $scope.delayOff,
			interface: $scope.interface
		}, function(response) {
			$scope.getTetraRed();
			console.log(response);
		});
	});

	$scope.getTetraRed();
}]);
