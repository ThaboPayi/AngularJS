app.controller('EmployeeCtrl', ['$scope', 'EmployeeService',
    // we inject EmployeeService  inject becuse we call getAll method for get all employees  
    function ($scope, EmployeeService) {
        // this is base url   
        var baseUrl = '/api/employee/';
        // get all employee from databse  
        $scope.getEmployees = function () {
            var apiRoute = baseUrl + 'GetEmployees/';
            var _employee = EmployeeService.getAll(apiRoute);
            _student.then(function (response) {
                    $scope.students = response.data;
                },
                function (error) {
                    console.log("Error: " + error);
                });

        }
        $scope.getEmployees();

    }]);

