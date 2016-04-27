jQuery(function($){
    
    
    $(document).on('keyup',function(event){
        if( ! ( $.browser.msie && parseInt( $.browser.version ) <= 9 ) ) {
            var keycode = event.which || event.keyCode;
            switch(keycode) {
                case 39://next
                    alert("Next");
                    break;
                case 37://previous
                    alert("Previous");
                    break;
            }
        }
    });
    
    $('#main-content').delegate('.font-size-minus', 'click',function(event){
        event.preventDefault();
        var entry = $('.entry-content'),
            fontSize = parseInt( entry.css('font-size').replace('px','') );
        if( fontSize <= 12 ) {
            return false;
        } else {
            entry.css('font-size', fontSize - 2).css('line-height','1.5');
        }      
    });
    $('#main-content').delegate('.font-size-plus', 'click',function(event){
        event.preventDefault();
        var entry = $('.entry-content'),
            fontSize = parseInt( entry.css('font-size').replace('px','') );
        if( fontSize >= 28 ) {
            return false;
        } else {
            entry.css('font-size', fontSize + 2).css('line-height','1.5');
        }      
    });
    
    $('.cat_view_more').on('click',function(event){
        $('.cat_tip').toggleClass('in');
    });
});