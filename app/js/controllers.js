var alunosApp = angular.module('alunosApp', []);
var gravarAlunosApp = angular.module('gravarAlunosApp', []);


alunosApp.controller('AlunosCtrl',['$scope', '$http', 
	function ($scope, $http) {
	  $http.get('http://localhost:8090/teste/aluno').success(function(data) {
	    $scope.alunos = data;
	  });
	  $scope.orderProp = 'contato';

	  
	$scope.addRowAsyncAsJSON = function(){		
		var dataObj = {
				nome : $scope.nome,
				contato : $scope.contato
		};	
		var res = $http.post('http://localhost:8090/teste/aluno', dataObj);
		res.success(function(data) {
			var rel = $http.get('http://localhost:8090/teste/aluno');
			rel.success(function(datax) {
	    		$scope.alunos = datax;
	  		});

		});
		res.error(function(data) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		$scope.nome='';
		$scope.contato='';
	};
	$scope.deleteRowAsyncAsJSON = function(){		
		//$scope.alunos.push({ 'nome':$scope.nome, 'contato': $scope.contato});
	
		var res = $http.delete('http://localhost:8090/teste/aluno/'+$scope.ra);
		res.success(function(data) {
			var rel = $http.get('http://localhost:8090/teste/aluno');
			rel.success(function(datay) {
	    		$scope.alunos = datay;
	  		});
		});
		res.error(function(data) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
		$scope.ra='';
	};
	$scope.teste = function(){		
		alert(document.getElementById("1").value);
		$scope.rae=document.getElementById("1").value
		$scope.nomee=document.getElementById("2").value
		$scope.contatoe=document.getElementById("3").value

	};


}]);




