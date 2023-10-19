sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator) {
        "use strict";
        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onFilterProducts : function (oEvent) {
                // build filter array
                var aFilter = [], sQuery = oEvent.getParameter("query"),
                // retrieve list control
                oList = this.getView().byId("productsList"),
                // get binding for aggregation 'items'
                oBinding = oList.getBinding("items");
                if (sQuery) {
                aFilter.push(new Filter("ProductID", FilterOperator.Contains,
                sQuery));
                }
                // apply filter. an empty filter array simply removes the filter
                // which will make all entries visible again
                oBinding.filter(aFilter);
                }
        });
    });