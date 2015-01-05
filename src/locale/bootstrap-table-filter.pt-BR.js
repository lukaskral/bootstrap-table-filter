/**
 * Bootstrap Table Filter Brazilian Portuguese translation
 * Author: Paulo Miguel Almeida Rodenas (paulo.ubuntu@gmail.com)
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Remover filtros';
        },
        formatSearchMessage: function () {
            return 'Buscar';
        }
    });
    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Remover filtros';
        },
        formatSearchMessage: function () {
            return 'Buscar';
        }
    });

    $.fn.bootstrapTableFilter.filterSources.range.rows[0].i18n.msg = 'Menor que';
    $.fn.bootstrapTableFilter.filterSources.range.rows[1].i18n.msg = 'Maior que';
    $.fn.bootstrapTableFilter.filterSources.range.rows[2].i18n.msg = 'Igual';

    $.fn.bootstrapTableFilter.filterSources.search.rows[0].i18n.msg = 'Igual';
    $.fn.bootstrapTableFilter.filterSources.search.rows[1].i18n.msg = 'Diferente';
    $.fn.bootstrapTableFilter.filterSources.search.rows[2].i18n.msg = 'Contém';
    $.fn.bootstrapTableFilter.filterSources.search.rows[3].i18n.msg = 'Não contém';
    $.fn.bootstrapTableFilter.filterSources.search.rows[4].i18n.msg = 'Esta vazio';
    $.fn.bootstrapTableFilter.filterSources.search.rows[5].i18n.msg = 'Não esta vazio';

})(jQuery);
