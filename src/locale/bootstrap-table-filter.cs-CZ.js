/**
 * Bootstrap Table Filter Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Odebrat filtry';
        },
        formatSearchMessage: function () {
            return 'Vyhledat';
        }
    });
    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Odebrat filtry';
        },
        formatSearchMessage: function () {
            return 'Vyhledat';
        }
    });

    $.fn.bootstrapTableFilter.filterSources.range.rows[0].i18n.msg = 'Méně než';
    $.fn.bootstrapTableFilter.filterSources.range.rows[1].i18n.msg = 'Více než';
    $.fn.bootstrapTableFilter.filterSources.range.rows[2].i18n.msg = 'Je rovno';

    $.fn.bootstrapTableFilter.filterSources.search.rows[0].i18n.msg = 'Je rovno';
    $.fn.bootstrapTableFilter.filterSources.search.rows[1].i18n.msg = 'Není rovno';
    $.fn.bootstrapTableFilter.filterSources.search.rows[2].i18n.msg = 'Obsahuje';
    $.fn.bootstrapTableFilter.filterSources.search.rows[3].i18n.msg = 'Neobsahuje';
    $.fn.bootstrapTableFilter.filterSources.search.rows[4].i18n.msg = 'Je prázdné';
    $.fn.bootstrapTableFilter.filterSources.search.rows[5].i18n.msg = 'Není prázdné';

})(jQuery);