/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseWorkOrders.EmployeeFullName_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.value = contentItem.screen.findContentItem("FirstName") + "  " + contentItem.screen.findContentItem("LastName")
};