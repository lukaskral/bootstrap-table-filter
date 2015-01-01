/**
 * Bootstrap Table Filter Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Eliminar Filtros';
        },
        formatSearchMessage: function () {
            return 'Buscar';
        }
    });

    $.fn.bootstrapTableFilter.filterSources.range.rows[0].i18n.msg = 'Más que';
    $.fn.bootstrapTableFilter.filterSources.range.rows[1].i18n.msg = 'Menos que';
    $.fn.bootstrapTableFilter.filterSources.range.rows[2].i18n.msg = 'Equivale a';

    $.fn.bootstrapTableFilter.filterSources.search.rows[0].i18n.msg = 'Equivale a';
    $.fn.bootstrapTableFilter.filterSources.search.rows[1].i18n.msg = 'No equivale a';
    $.fn.bootstrapTableFilter.filterSources.search.rows[2].i18n.msg = 'Contiene';
    $.fn.bootstrapTableFilter.filterSources.search.rows[3].i18n.msg = 'No contiene';
    $.fn.bootstrapTableFilter.filterSources.search.rows[4].i18n.msg = 'Está vacio';
    $.fn.bootstrapTableFilter.filterSources.search.rows[5].i18n.msg = 'No está vacio';

})(jQuery);