registerController('LEDController', ['$api', '$scope', function($api, $scope) {
    $scope.device = '';

    $api.request({
        module: 'LEDConfigurator',
        action: 'getDeviceType'
    }, function(response) {
        $scope.device = response;
    });
}]);


registerController('TetraYellowLEDController', ['$api', '$scope', function($api, $scope) {
    $scope.trigger = '';
    $scope.mode = '';
    $scope.interface = '';
    $scope.timeon = 0;
    $scope.timeoff = 0;

    $api.request({
        module: 'LEDConfigurator',
        action: 'getTetraYellowLEDInfo'
    }, function(response){
        $scope.enabled = response.enabled;
        $scope.trigger = response.trigger;
        $scope.mode = response.mode;
        $scope.interface = response.interface;
        $scope.timeon = response.timeon;
        $scope.timeoff = response.timeoff;
    });
}]);

registerController('TetraBlueLEDController', ['$api', '$scope', function($api, $scope) {
    $scope.trigger = '';
    $scope.mode = '';
    $scope.interface = '';
    $scope.timeon = 0;
    $scope.timeoff = 0;

    $api.request({
        module: 'LEDConfigurator',
        action: 'getTetraBlueLEDInfo'
    }, function(response){
        $scope.enabled = response.enabled;
        $scope.trigger = response.trigger;
        $scope.mode = response.mode;
        $scope.interface = response.interface;
        $scope.timeon = response.timeon;
        $scope.timeoff = response.timeoff;
    });
}]);

registerController('TetraRedLEDController', ['$api', '$scope', function($api, $scope) {
    $scope.trigger = '';
    $scope.mode = '';
    $scope.interface = '';
    $scope.timeon = 0;
    $scope.timeoff = 0;

    $api.request({
        module: 'LEDConfigurator',
        action: 'getTetraRedLEDInfo'
    }, function(response){
        $scope.enabled = response.enabled;
        $scope.trigger = response.trigger;
        $scope.mode = response.mode;
        $scope.interface = response.interface;
        $scope.timeon = response.timeon;
        $scope.timeoff = response.timeoff;
    });
}]);

registerController('NanoLEDController', ['$api', '$scope', function($api, $scope) {
    $scope.enabled = false;
    $scope.trigger = '';

    $api.request({
        module: 'LEDConfigurator',
        action: 'getNanoLEDInfo'
    }, function(response){
        $scope.enabled = response.enabled;
        $scope.trigger = response.trigger;
        console.log(response);
    });
}]);