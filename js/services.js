
fonemasApp.controller('facturasController',function($scope){
	$scope.factura={
			numero:"1214-01",
			fecha:"26/03/2014",
			emisor:{
				nombre:"Fonemas Logopedia S.L.",
				direccion:"Avda. Doctor García Tapia,145",
				codigoPostal:"28030",
				localidad:"Madrid",
				cif:"83.202.200-B"
			},
			receptor:{
				nombre:"Camilo Simon",
				direccion:"Urbanizacion las Colinas 53",
				codigoPostal:"28030",
				localidad:"Madrid",
				nif:"50186755L"
			},
			conceptos:[
			 {
				concepto:"Sesiones de logopedia  realizadas durante el mes de Febrero de 2013",
				importe:195
			}],
			total:195	
			
	};
});
