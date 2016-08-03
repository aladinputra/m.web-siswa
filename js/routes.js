app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'halaman/Homeview.html',
    controller : 'HomeController'
  })
  .when('/about',{
    templateUrl : 'halaman/aboutview.html',
    controller : 'AboutController'
  })
  .when('login',{
    templateUrl : 'halaman/loginView.html'
  })
.otherwise({
  redirectTo : '/'
})
});

$rootScope.$on('$locationChangeStart',function(event,next,current){
  if($location.path() !== '/login' && !$rootScope.globals.currentUser){
    $location.path('/login');
  }
});
