var app=angular.module('appContact',['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'homeCtrl'
            })
            .when('/new', {
                templateUrl : 'views/new.html',
                controller  : 'newCtrl'
            })
            .when('/view', {
                templateUrl : 'views/view.html',
                controller  : 'viewCtrl'
        })
            .when('/uc', {
                templateUrl : 'views/uc.html',
                controller  : 'ucCtrl'
            })
            .otherwise('/home');

});
app.controller('mainCtrl',mainController);
app.controller('homeCtrl',homeController);
app.controller('newCtrl',newController);
app.controller('viewCtrl',viewController);
app.controller('ucCtrl',ucController);


function mainController($scope){
    $scope.name="Varma";
}
function homeController($scope){
    $scope.title="Home Page";
}
function newController($scope){
    $scope.title="New Page";
}
function viewController($scope){
    $scope.title="View Page";
}
function ucController($scope){
    $scope.title="Under Construction";
}
