$(document).ready(function(){
    $('button').click(function(){
        $('button').removeClass('active');
        $(this).addClass('active');
    });
    $('.ft').click(function(){ $('#shape').removeClass().addClass('show-ft'); });
    $('.rt').click(function(){ $('#shape').removeClass().addClass('show-rt'); });
    $('.bk').click(function(){ $('#shape').removeClass().addClass('show-bk'); });
    $('.lt').click(function(){ $('#shape').removeClass().addClass('show-lt'); });
    $('.tp').click(function(){ $('#shape').removeClass().addClass('show-tp'); });
    $('.bm').click(function(){ $('#shape').removeClass().addClass('show-bm'); });
    
    $('.zi').click(function(){ $('#shape').removeClass('zi').addClass('zi'); });
    $('.zo').click(function(){ $('#shape').removeClass('zi'); });
    
    $('.spinstart').click(function(){ $('#shape').addClass('spin'); });
    $('.spinstop').click(function(){ $('#shape').removeClass('spin'); });
});