/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditSaleOrder.created = function (screen) {
    var currDate = new Date();
    screen.SaleOrder.SaleOrderDate = currDate;
    //screen.SaleOrder.PaymentStatus = 1;
    $('PaymentStatus').val('1');
};