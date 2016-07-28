app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'halaman/Homeview.html',
    controller : 'HomeController'
  })
  .when('/about',{
    templateUrl : 'halaman/aboutview.html',
    controller : 'AboutController'
  })
.otherwise({
  redirectTo : '/'
})
});
