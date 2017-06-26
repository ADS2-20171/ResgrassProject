app
// =========================================================================
// Show View and Delete Autor
// =========================================================================
    .controller("AgendaCtrl", function($scope, $state, $stateParams, acuerdosService, $window, $mdDialog, $log, toastr, $filter) {
    //Valores iniciales
    $scope.fields = 'nombre_agenda';
    var params = {};
    $scope.list = [];
    $scope.agenda = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        acuerdosService.Agenda.query(params, function(r) {
            $scope.list = r.results;
            console.log("====================>>"+r.results.nombre)
            $scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
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
            acuerdosService.Agenda.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó agenda:" + JSON.stringify(d));
                toastr.success('Se eliminó agenda ' + d.nombre_agenda, 'Agenda');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Autor
// =========================================================================
.controller("AgendaSaveCtrl", function($scope, $state, $stateParams, acuerdosService, $window, $mdDialog, $log, toastr, $filter) {
    //Valores iniciales
    $scope.agenda = {};
    $scope.sel = function() {
        acuerdosService.Agenda.get({ id: $stateParams.id }, function(r) {
            $scope.agenda = r;
            console.log('r.fecha_nac=' + r.fecha_nac);
            console.log("new Date(r.fecha_nac +' 00:00:00')=" + new Date(r.fecha_nac + ' 00:00:00'));
            //console.log('$filter(date)(r.fecha_nac)='+$filter('date')(r.fecha_nac));


            if (r.fecha_nac) $scope.agenda.fecha_nacT = (new Date(r.fecha_nac + ' 00:00:00'));
            console.log('$scope.autor.fecha_nacT=' + $scope.agenda.fecha_nacT);
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.agenda.fecha_nacT) {
            //fecha_nac = models.DateField(null=True, blank=True)
            $scope.agenda.fecha_nac = $filter('date')(new Date($scope.genda.fecha_nacT), 'yyyy-MM-dd');
        }
        if ($scope.agenda.id) {
            acuerdosService.Agenda.update({ id: $scope.agenda.id }, $scope.agenda, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó agenda ' + r.nombre_agenda, 'Agenda');
                $state.go('catalogo.catalogo.agendas');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            acuerdosService.Agenda.save($scope.agenda, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó agenda ' + r.nombre_agenda, 'Agenda');
                $state.go('catalogo.catalogo.agendas');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }

    };

    $scope.cancel = function() {
        $state.go('catalogo.catalogo.autores');



    };
});
