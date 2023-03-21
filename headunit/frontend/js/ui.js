var UI = UI || {};
(function(ui) {
    ui.showSettings = function() {
        $('#settings').fadeIn();
    }
})(UI);

UI.GlobalLoading = UI.GlobalLoading || {};
(function(GlobalLoading) {
    GlobalLoading.show = function(progress) {
        GlobalLoading.setProgress(progress);
        $('.global-loading').fadeIn();
    }
    GlobalLoading.hide = function() {
        $('.global-loading').fadeOut();
    }
    GlobalLoading.setProgress = function(percentage) {
        var filler = document.querySelector('.global-loading .progress-bar .filler');
        if (percentage === null || percentage === undefined) {
            filler.style.width = '200px';
            filler.style['-webkit-animation'] = 'indeterminateAnimation 1.5s infinite ease-in-out';
        }
        else {
            filler.style.width = percentage + '%';
            filler.style['-webkit-animation'] = '';
        }
    }
})(UI.GlobalLoading);

UI.GlobalError = UI.GlobalError || {};
(function(GlobalError) {
    GlobalError.show = function(title, message, icon) {
        var titleToShow = '';
        var textToShow = '';
        if (typeof title === 'object' && (title.hasOwnProperty('title') || title.hasOwnProperty('text'))) {
            if (title.title) {
                titleToShow = title.title;
            } 
            if (title.text) {
                textToShow = title.text;
            }
        }
        else {
            if (title) {
                titleToShow = title;
            }
            if (message) {
                textToShow = message;
            }
        }
        $('.global-error h1').text(titleToShow);
        $('.global-error h3').text(textToShow);
        $('.global-error').fadeIn();
    }
    GlobalError.hide = function() {
        $('.global-error').fadeOut();
    }
})(UI.GlobalError);