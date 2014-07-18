/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditSaleOrderDetail.deleteSelected_execute = function (screen) {
    screen.SaleOrderDetail.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {

        myapp.cancelChanges();

        throw e;

    });
};