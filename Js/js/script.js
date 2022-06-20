$(function(){
    
    function changeFontColor()
    {
        $('.container').toggleClass('newClass');
    };
    
    $('.container, #ChangeColorButton').on('click', function(){
        changeFontColor();
    });

    $('#OnlyNumber').on('keydown', function(event){
        if(event.which < 48 || event.which > 57)
        {
            return false;
        };
    });

    $('#Focus').on('focus', function(){
        changeFontColor();
        $(this).css('background-color' , 'pink');
    });

    $('#Focus').on('blur', function(){
        $(this).css('background-color' , 'white');
    });

    $('#Blur').on('blur', function(){
        changeFontColor();
    });

    $('a').on('click', function(){
        changeFontColor();
        return false; 
    });
            


    

});
