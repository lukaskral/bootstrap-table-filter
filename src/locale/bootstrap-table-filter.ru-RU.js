/**
 * Bootstrap Table Filter Russian translation
 * Author: Vladimir Ivanenko (pyotruk@gmail.com)
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Очистить фильтр';
        },
        formatSearchMessage: function () {
            return 'Поиск';
        }
    });
    $.extend($.fn.bootstrapTableFilter.defaults, {
        formatRemoveFiltersMessage: function () {
            return 'Очистить фильтр';
        },
        formatSearchMessage: function () {
            return 'Поиск';
        }
    });

    $.fn.bootstrapTableFilter.filterSources.range.rows[0].i18n.msg = 'Меньше чем';
    $.fn.bootstrapTableFilter.filterSources.range.rows[1].i18n.msg = 'Больше чем';
    $.fn.bootstrapTableFilter.filterSources.range.rows[2].i18n.msg = 'Равно';

    $.fn.bootstrapTableFilter.filterSources.search.rows[0].i18n.msg = 'Равно';
    $.fn.bootstrapTableFilter.filterSources.search.rows[1].i18n.msg = 'Не равно';
    $.fn.bootstrapTableFilter.filterSources.search.rows[2].i18n.msg = 'Содержит';
    $.fn.bootstrapTableFilter.filterSources.search.rows[3].i18n.msg = 'Не содержит';
    $.fn.bootstrapTableFilter.filterSources.search.rows[4].i18n.msg = 'Пустой';
    $.fn.bootstrapTableFilter.filterSources.search.rows[5].i18n.msg = 'Не пустой';

})(jQuery);