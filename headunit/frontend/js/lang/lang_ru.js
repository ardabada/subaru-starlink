var _ru = "ru";

Lang = Lang || {};
Lang[_ru] = Lang[_ru] || {};
(function(lang) {
    lang.alias = _ru;
    lang.name = "Русский";
})(Lang[_ru]);

Lang[_ru].errors = Lang[_ru].errors || {};
(function(errors) {
    errors.mapLoad = {
        title: 'Невозможно загрузить карты',
        text: 'Ошибка'
    };
    errors.gpsLoad = {
        title: 'Невозможно загрузить карты',
        text: 'Ошибка'
    };
})(Lang[_ru].errors);