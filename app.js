var learnDigest = angular.module('learndigest', []);

learnDigest.controller('playgroundCtrl', function($scope){   
    var vm = this;
    
    vm.enableForceEdit = true;
    vm.force = 30;
    
    vm.reset = function(){
      vm.force = 0;  
    };
    
    $scope.$watch('vm.force', function(newVal, oldVal){
        //console.log("Force is changed to: ", vm.force);
        console.log("Force is changed to: ", newVal, " from: ", oldVal);
    });
    
    $scope.$watch(
        function(){
            return vm.force % 2 == 0;
        }, function(newVal, oldVal){
            console.log(newVal ? "Force is even" : "Force is odd");
    });
    
    // Binding with 'bindme' DOM element
    $scope.$watch('vm.force', function(newVal, oldVal){
        document.getElementById('bindme').innerHTML = vm.force;
    });
}); 

/*
learnDigest.controller('internalCtrl', function($scope){
    var vm = this;
    vm.playGround = $scope.$parent.vm;
    vm.secret = "shhhhhhh..." + vm.playGround.force; 
});*/
