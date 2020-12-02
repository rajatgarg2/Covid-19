const URL = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp",[]);

app.controller("MyCtrl",($scope, $http) => {
    //this is controller
    $scope.title = "Stay Home Stay Safe";

    $http.get(URL).then((response) => {
        //success

        $scope.all_data = response.data;

        console.log(response);
        }, (error) => {
        //fail
        console.log(error);
        }
    );

    //get country data
    $scope.get_c_data = () => {
        let country = $scope.c;
        if(country=="")
        {
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`).then((response) => {
            //success
            $scope.c_data = response.data;
            console.log(response);
            }, (error) => {
                //fail
                console.log(error);
            }
        );
    }
});

//API: https://covid19.mathdro.id/api
//API: https://covid19.mathdro.id/api/countries/india