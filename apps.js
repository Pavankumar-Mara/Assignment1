(function()
{
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope)
{
$scope.userInput = "";
$scope.totalNumberOfItems = "";
$scope.OutputText = "";

$scope.DisplayOutput = function()
{
  $scope.totalNumberOfItems = CalculateItems($scope.userInput);
  DisplayMessage($scope.totalNumberOfItems);
};

function CalculateItems(string)
{
    if(string != "")
    {
    var seperateItems = string.split(',');
    var NumberOfItems = seperateItems.length;
    return NumberOfItems;
    }
    else {
      return 0;
    }
};

function DisplayMessage(value)
{
  if(value == 0)
  $scope.OutputText = "Please Enter Data first";
  else if(value <= 3)
  $scope.OutputText = "Enjoy!";
  else if(value > 3)
  $scope.OutputText = "Too Much!"
}

});
})();
