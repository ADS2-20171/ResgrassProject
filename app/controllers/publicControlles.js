app
// =========================================================================
// Show View and Delete Autor
// =========================================================================
    .controller("publicCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr, $filter) {
        //Valores iniciales
        $scope.fields = 'nombre_local';
        var params = {};
        $scope.canchas = [];
        $scope.local = {};

        $scope.list = function(params) {
            console.log("=========================");
            $scope.isLoading = true;
            catalogoService.Canchas.query(params, function(r) {
                console.log("==========================="+r.results)
                $scope.canchas = r.results;
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
        $scope.reservar = function(){

            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: "app/views/publico/form-reserva.html",
                controller: function DialogController($scope, $mdDialog) {

                    $scope.save = function() {

                        consejoService.Consejo.save($scope.consejo, function (r) {
                            $state.go('acuerdo.acuerdo.calendarizar', {id: $stateParams.id}, {reload: 'acuerdo.acuerdo.calendarizar'});
                            $mdDialog.hide();
                            toastr.success('Se insertó Evento del dia ' + r.consejo_nombre);
                        }, function (err) {
                            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
                        });
                    };
                    $scope.cancel = function() {
                        $mdDialog.hide();
                    };
                }
            });
        };


    })

    .controller("localSaveCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr, $filter) {
        //Valores iniciales
        var params =  {};
        $scope.local = {};
        $scope.empresas = [];
        $scope.sel = function() {
            catalogoService.Local.get({ id: $stateParams.id }, function(r) {
                $scope.local = r;
            }, function(err) {
                $log.log("Error in get:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        };
        if ($stateParams.id) {
            $scope.sel();
        }

        $scope.empresasList = function() {
            params.all = true;
            catalogoService.Empresa.query(params, function(r) {
                $scope.empresas = r.results;
                console.log(r.results);
                console.log('---------------------');
            }, function(err) {
                $log.log("Error in list:" + JSON.stringify(err));
                toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
            });
        };
        $scope.empresasList();

        $scope.save = function() {

            if ($scope.local.id) {
                catalogoService.Local.update({ id: $scope.local.id }, $scope.local, function(r) {
                    $log.log("r: " + JSON.stringify(r));
                    toastr.success('Se editó Categoria Sector  ' + r.cat_sect_nombre, 'Categoria Sector');
                    $state.go('catalogo.catalogo.local');
                }, function(err) {
                    $log.log("Error en actualizar:" + JSON.stringify(err));
                    toastr.error(err.data.detail, err.status + ' ' + err.statusText);
                });
            } else {
                catalogoService.Local.save($scope.local, function(r) {
                    $log.log("r: " + JSON.stringify(r));
                    toastr.success('Se insertó categoria ' + r.nombre, 'Categoria Sector');
                    $state.go('catalogo.catalogo.local');
                }, function(err) {
                    $log.log("Error in save:" + JSON.stringify(err));
                    toastr.error(err.data.detail, err.status + ' ' + err.statusText);
                });
            }

        };

        $scope.cancel = function() {
            $state.go('catalogo.catalogo.local');
        };
    });
