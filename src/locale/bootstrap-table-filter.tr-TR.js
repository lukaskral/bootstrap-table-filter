/**
 * Bootstrap Table Filter Turkish translation
 * Author: Yasin Kuyu @yasinkuyu
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Süzmeyi temizle';
        },
        formatSearchMessage: function () {
            return 'Süz';
        }
    });

    $.fn.bootstrapTableFilter.filterSources.range.rows[0].i18n.msg = 'Büyükse';
    $.fn.bootstrapTableFilter.filterSources.range.rows[1].i18n.msg = 'Küçükse';
    $.fn.bootstrapTableFilter.filterSources.range.rows[2].i18n.msg = 'Eşitse';

    $.fn.bootstrapTableFilter.filterSources.search.rows[0].i18n.msg = 'Eşitse';
    $.fn.bootstrapTableFilter.filterSources.search.rows[1].i18n.msg = 'Eşit değilse';
    $.fn.bootstrapTableFilter.filterSources.search.rows[2].i18n.msg = 'İçeriyorsa';
    $.fn.bootstrapTableFilter.filterSources.search.rows[3].i18n.msg = 'İçermiyorsa';
    $.fn.bootstrapTableFilter.filterSources.search.rows[4].i18n.msg = 'Boşsa';
    $.fn.bootstrapTableFilter.filterSources.search.rows[5].i18n.msg = 'Boş değilse';

})(jQuery);
