!function($) {

    'use strict';

    var getTypeByValues = function(vals, useAjax) {
        var typeFloat = true, typeInt = true;
        $.each(vals, function(i, val) {
            if (typeInt && (parseInt(val) != val)) {
                typeInt = false;
            }
            if (typeFloat && (parseFloat(val) != val)) {
                typeFloat = false;
            }
        });
        if (typeInt || typeFloat) {
            return {type: 'range'};
        }
        if (useAjax) {
            return {type: 'selectAjax', source: 'XXXXX'}
        }
        return {type: 'select'};
    };
    var getCols = function(cols, data, useAjax) {
        var ret = {};
        $.each(cols, function(i, col) {
            ret[col.field] = {
                field: col.field,
                label: col.title,
                values: []
            };
        });
        $.each(data, function(i, row) {
            $.each(ret, function(field, filter) {
                if (ret[field].values.indexOf(row[field]) < 0) {
                    ret[field].values.push(row[field]);
                }
            });
        });
        $.each(ret, function(field, def) {
            ret[field] = $.extend(ret[field], getTypeByValues(def.values));
        });
        return ret;
    };

    $.fn.bootstrapTableFilter.externals.push(function() {
        if (this.options.connectTo) {
            var that = this;
            var $table = $(this.options.connectTo);
            var data = $table.bootstrapTable('getData');
            var cols = $table.bootstrapTable('getColumns');
            console.log(cols);
            var dataSourceServer = false;
            var filters = getCols(cols, data, dataSourceServer);

            $.each(filters, function(field, filter) {
                that.addFilter(filter);
            });
        }
    });

}(jQuery);