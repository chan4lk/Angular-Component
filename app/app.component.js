(function () {
    function fetchMovies($http) {
        return $http.get("/movies.json").then(function (response) {
            return response.data;
        });
    }
    
    function Controller($http) {
            var vm = this;
            
            vm.$onInit = function () {
               
                fetchMovies($http).then(function (data) {
                    vm.movies = data;
                });
            }
            
            vm.upRating = function (movie) {
                if(movie.rating < 5){
                    movie.rating += 1;
                }
            }
            
            vm.downRating = function (movie) {
                if(movie.rating > 0){
                    movie.rating -= 1;
                }
            }
        }
        
    angular.module('app')
    .component('movieList', {
         bindings:{
            myname: '<?'
        },
        templateUrl: "/app/HTML/movielist.html",
        controllerAs: "vm",
        controller: ['$http', Controller]       
    });
    
    angular.bootstrap(document.getElementById('container'), ['app']);
})();