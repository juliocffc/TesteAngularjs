var alunosApp = angular.module('alunosApp', []);
var gravarAlunosApp = angular.module('gravarAlunosApp', []);


alunosApp.controller('AlunosCtrl',['$scope', '$http', 
	function ($scope, $http) {
	  $http.get('http://localhost:8090/teste/aluno').success(function(data) {
	    $scope.alunos = data;
	  });
	  $scope.orderProp = 'contato';
	$scope.addRowAsyncAsJSON = function(){		
		$scope.alunos.push({ 'nome':$scope.nome, 'contato': $scope.contato});
		var dataObj = {
				nome : $scope.nome,
				contato : $scope.contato
		};	
		var res = $http.post('http://localhost:8090/teste/aluno', dataObj);
		res.success(function(data) {
			//$scope.message = data;
		});
		res.error(function(data) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		$scope.nome='';
		$scope.contato='';
	};
}]);




