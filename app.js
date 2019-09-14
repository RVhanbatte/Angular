var learnDigest = angular.module('learndigest', []);

learnDigest.controller('playgroundCtrl', function($scope){   
    var vm = this;
    
    vm.force = 30;
    
    vm.reset = function(){
      vm.force = 0;  
    };
}); 


learnDigest.controller('internalCtrl', function($scope){
    var vm = this;
    vm.playGround = $scope.$parent.vm;
    
    /*$scope.$watch('vm.playGround.force', function(){
        console.log("Force is changed to: ", vm.playGround.force);
    });*/
    
    /***
    // This will leake the $watch.
    var firstValue = vm.playGround.force;
    // watch on 'force' of playgroundCtrl
    $scope.$parent.$parent.$watch('vm.force', function(){
        console.log("Force of parent is changed to: ", firstValue, vm.playGround.force);
    });
    ***/
    
    // To prevent leake use destroy watch like below
    var watchesRemain = 3;
    var watchesDestroyed = $scope.$parent.$parent.$watch('vm.force', function(){
        console.log("Force of parent is changed to: ", vm.playGround.force);
        watchesRemain--;
        if (watchesRemain ==0)
            watchesDestroyed();
    });
    
});
