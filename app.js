var learnDigest = angular.module('learndigest', []);

learnDigest.controller('playgroundCtrl', function($scope){
    $scope.force = 30;
    
    $scope.reset = function(){
      $scope.force = 0;  
    };
}); 

learnDigest.controller('internalCtrl', function($scope){
   $scope.secret = "shhhhhhh..." + $scope.force; 
});