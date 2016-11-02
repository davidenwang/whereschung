var locationApp = angular.module('locationApp', []);

locationApp.controller('mainController', ['$scope', '$http', '$window', function($scope, $http, $window)
{
  $scope.location = "N/a"
  $scope.timePassed = "Error :/"
  // $http.get('/data/location').then(function(response)
  // {
  //   $scope.location = response.data[0].location;
  //   $('#map').attr('src', "//www.google.com/maps/embed/v1/place?q=" + $scope.location + "&zoom=16&key=AIzaSyCELFzjV40H4dOKpToQLDhOUSP6jmbkc1U")
  //   var time = new Date(response.data[0].createdAt);
  //   var now = new Date();
  //   var diffMS = (now.getTime() - time);
  //
  //   //Calculate hours elapsed from last check in
  //   var diffHrs = Math.round((diffMS % 86400000) / 3600000);
  //
  //   //if hours is fractional e.g. .33 hours then just use minutes
  //   if(diffHrs < 1)
  //   {
  //     var diffMns = Math.round(((diffMS % 86400000) % 3600000) / 60000);
  //     $scope.timePassed = diffMns + " minutes";
  //   }
  //   else
  //   {
  //     $scope.timePassed = diffHrs + " hours";
  //   }
  // });

  $scope.newlocation = function()
  {
    // $scope.latitude + ", " + $scope.longitude
    $('#foundBtn').prop('disabled', true);
    // $http.post("/data/newentry", {location: $scope.latitude + ", " + $scope.longitude});
    location.reload();
  }

  // if (navigator.geolocation)
  // {
  //   window.onload = function()
  //   {
  //     var startPos;
  //     var geoOptions =
  //     {
  //       enableHighAccuracy: true,
  //       maximumAge: 0
  //     }
  //     var geoSuccess = function(position)
  //     {
  //       startPos = position;
  //       console.log(startPos);
  //       $scope.latitude = startPos.coords.latitude;
  //       $scope.longitude = startPos.coords.longitude;
  //       $('#foundBtn').prop('disabled', false);
  //       $scope.$apply();
  //     };
  //     var geoError = function(error)
  //     {
  //       console.log('Error occurred. Error code: ' + error.code);
  //     };
  //     navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  //   };
  // }
  // else
  // {
  //   console.log('Geolocation is not supported for this Browser/OS version yet.');
  // }

}]);
