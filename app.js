var learnDigest = angular.module('learndigest', []);

learnDigest.controller('playgroundCtrl', function($scope){
    var vm = this;
    //$scope.playGround = vm; // ControllerAs syntax
    
    vm.force = 30;
    
    vm.reset = function(){
      vm.force = 0;  
    };
}); 

learnDigest.controller('internalCtrl', function($scope){
    var vm = this;
    
    vm.secret = "shhhhhhh..." + $scope.playGround.force; 
});
