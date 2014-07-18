/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePO.PurchaseOrderStatus_postRender = function (element, contentItem) {
    // Write code here.
};


myapp.BrowsePO.RowTemplate_postRender = function (element, contentItem) {
    // Write code here.
    //element.
    var POStatus = contentItem.findItem("PurchaseOrderStatus");
    if (POStatus.value) {
        contentItem.findItem("POStatusDescription").value = "รอรับสินค้า";
    } else {
        contentItem.findItem("POStatusDescription").value = "ปิดการรับ";
    }
};


myapp.BrowsePO.POStatusDescription_postRender = function (element, contentItem) {
    // Write code here.

};
myapp.BrowsePO.PurchaseOrderDate_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(moment(value).format("DD/MM/YYYY"));
        }
    });
};