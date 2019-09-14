var learnDigest = angular.module('learndigest', []);

learnDigest.controller('playgroundCtrl', function($scope){   
    var vm = this;

    vm.userProperties = {
        favoriteColor: 'white',
        nickname: 'IfWe',
        force: 30
    };
    vm.enableForceEdit = true;
    vm.userProperties.force = 30;
    
    vm.reset = function(){
      vm.userProperties.force = 0;  
    };
    
    // Deep watch
    $scope.$watch('vm.userProperties', function(newVal, oldVal){
        console.log("userProperties is changed to: ", vm.userProperties);
    }, true);
}); 
