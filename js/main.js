var app = angular.module("feedback",[]);

app.value("dummy",{defined: true});

app.controller("questions",function($scope, $http) {
  $scope.hasSubmitted = false;

  $scope.answers = {
    hear: "", friend: "", offer: " ", comments: ""
  }

  $scope.submit = function() {
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://codebar-feedback.herokuapp.com/api/feedback');
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(JSON.stringify({data: $scope.answers}));
    $scope.hasSubmitted = true;
    /*success(function(data, status, headers, config) {
        $scope.hasSubmitted = true;
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });*/
  }
});


// angular.injector(["ng"]).invoke(function($http) {

//   var err = console.error.bind(console);
//   var yay = console.log.bind(console);

//   // retrieve all
//   $http.get("/api/things")
//     .then(yay,err)

//   // complete CRUD example
//   $http.post("/api/things",{name: "hi"})
//     .then(function(resp) {
//       return $http.put("/api/things/" + resp.data.id,{name: "changed"})
//     })
//     .then(function(resp) {
//       return $http.get("/api/things/" + resp.data.id).then(function(resp) {
//         if(resp.data.name !== "changed") throw new Error("Couldn't update/retrieve")
//         return resp
//       })
//     })
//     .then(function(resp) {
//       return $http.delete("/api/things/" + resp.data.id)
//     },err)

// });
