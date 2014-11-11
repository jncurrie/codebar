var app = angular.module("feedback",[]);

app.value("dummy",{defined: true});

app.controller("questions",function($scope, $http) {
  $scope.hasSubmitted = false;

  $scope.answers = {
    times: "", hear: "", favourite: "", improve: "", likely: "", comments: ""
  }

  $scope.submit = function() {
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://codebar-feedback.herokuapp.com/api/feedback');
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(JSON.stringify({data: $scope.answers}));
    $scope.hasSubmitted = true;
  }
});

