app
// =========================================================================
// Show View and Delete Autor
// =========================================================================
    .controller("InstitucionesCtrl", function($scope, $state, $stateParams, acuerdosService, $window, $mdDialog, $log, toastr, $filter) {
    //Valores iniciales
    $scope.fields = 'nombre Categoria Sector';
    var params = {};
    $scope.lista = [];
    $scope.consejo = {};

    $scope.list = function(params) {
        console.log("=========================");
        $scope.isLoading = true;
        acuerdosService.Instituciones.query(params, function(r) {
             console.log("==========================="+r.results)
            $scope.lista = r.results;
           ;
            $scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("==================Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            acuerdosService.Instituciones.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó Categoria Sector:" + JSON.stringify(d));
                toastr.success('Se eliminó Consejo ' + d.cat_sect_nombre , 'Categoria Sector');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})



.controller("InstitucionesSaveCtrl", function($scope, $state, $stateParams, acuerdosService, $window, $mdDialog, $log, toastr, $filter) {
    //Valores iniciales
    $scope.instituciones = {};
    $scope.sel = function() {
        acuerdosService.Instituciones.get({ id: $stateParams.id }, function(r) {
            $scope.instituciones = r;
            
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
      
        if ($scope.instituciones.id) {
            acuerdosService.Instituciones.update({ id: $scope.instituciones.id }, $scope.instituciones, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó Categoria Sector  ' + r.cat_sect_nombre, 'Categoria Sector');
                $state.go('catalogo.catalogo.instituciones');
            }, function(err) {
                $log.log("Error en actualizar:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            acuerdosService.Instituciones.save($scope.instituciones, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó categoria ' + r.nombre, 'Categoria Sector');
                $state.go('catalogo.catalogo.instituciones');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }

    };

    $scope.cancel = function() {
        $state.go('catalogo.catalogo.instituciones');



    };
});
