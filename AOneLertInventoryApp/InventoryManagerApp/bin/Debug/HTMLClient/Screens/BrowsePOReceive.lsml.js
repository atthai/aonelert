﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePOReceive.PurchaseOrderDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};