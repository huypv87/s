$.fn.fadeOutAndRemove = function(speed){
    $(this).fadeOut(speed,function(){
        $(this).remove();
    })
}

function Slug(text)
{
    return text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi,'-')
        .replace(/-+/g, '-')
        ;
}
function winopen(a) {

    var wnd = window.open(a, "new", "width=500,height=400,top=10,toolbar=0,scrollbars=1");

}
function updateLi(page)
{
	return;
 new Image().src = '//counter.yadro.ru/hit?r='+ ((typeof(screen)=='undefined')?'':';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?screen.colorDepth: screen.pixelDepth))+';u'+escape(document.URL + page)+ ';h'+escape(document.title.substring(0,80))+';'+Math.random();
}
function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


function GoogleCallback(a, b) {
    window[a](b)
}

function search() {
	//var type = "video"

	//return url = "/video/" + Slug( $('.search-query').val() ), window.location.href = url, !1
	return url = "/?q=" + Slug( $('.search-query').val() ), window.location.href = url, !1
}
function duration(sec) {

                secund  = (sec % 60);
                minut  = (sec - secund) / 60;
                
                if (secund  < 10 )  secund = '0' + secund;
                if (minut < 10) minut = '0' + minut;

            return minut+":"+secund;
}


$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        var a = screen.height;
        var b = document.documentElement.scrollWidth;
        var c = $(this);
        if (b > 1e3) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > a) $(c).fadeIn(500);
                else $(c).fadeOut(500)
            })
        }
        $(this).click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
          
        })
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.fixbottom').fadeIn();
    } else {
        $('.fixbottom').fadeOut();
    }

});



$(document).on('click', '#morebtn', function(){
 return;
 	var page = $(this).data('page');

	$.get(location.pathname, { ajax: 1, page: page }, function(data){
	    $('#thumbs').append(data);
	});


 	$(this).data("page",page+1);
})


$(document).on('click', '.watch', function(){
 
      $('#modal').html('  <h6>'+$(this).data('title')+'</h6><iframe width="100%" height="420" src="//www.youtube.com/embed/'+$(this).data('id')+'?showinfo=0" frameborder="0" allowfullscreen></iframe>  <a class="close-reveal-modal">&#215;</a>')
   $('#modal').foundation('reveal', 'open');

})

$(document).on('click', 'a.close', function(e){
    
    $(this).parent().fadeOutAndRemove('slow');


})

$(document).on('click', '#like, #dislike', function(){
 return;
  var isLike = ( $(this).attr('id') =='like' ? 1 : 0)  ;



  $.post("/cp", { vote: isLike, yid: $('#y-player').data('id') }, function(data){
      $(".liker").html('<span class="label">Ok, you '+(isLike == 1?'':'dis')+'liked video</span>')
  });


})



$("#yt-dll").click(function(){
 return;
  winopen("/dll/"+ $(this).data('site') + "=" + $(this).data('id'))

})





//winget channel
$(document).on('click', '.bt-nav', function(){
 return;
    var page = $(this).parent().data('page');


    $.get('/channel', { ajax: 1, page: page }, function(data){
          $("#ch-main ul" ).html(data);
    });

    page = ( ($(this).data('btn') == 'next' && page >=0) ? (page+1) : (page-1))

    $(this).parent().data('page',  page);

    if (page>0) $('.bt-prev').show()
        else $('.bt-prev').hide()
    
})





//search video
$(document).on('click', '#more', function(){
 return;
      var page = $(this).data('page');
       

      $.get(location.pathname, { ajax: 1, page: page }, function(val){

        var data = JSON.parse("[" + val + "]");

        $('#articals').append(data[0][1]);
        $('#more').data("page", data[0][0]);
    });
      updateLi('?page='+page)
})



$(document).on("keyup", '.search-query', function(e){

           var str = $(this).val();
            var lang = $("html").attr("sublang");

            
        if (e.keyCode != 13 && e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 39 && e.keyCode != 37) {


            if (str.length > 1) {
                $.getJSON("http://www.google.com/complete/search?callback=?&", {client: "chrome",ie: "utf-8",oe: "utf-8",hl: lang,q: str},
                function (json) {
                    if (json[1].length > 0) {
                        $("#search-auto").empty().show();
                        $.each(json[1], function (k, y) {
                            $("#search-auto").append("<li id='sg"+k+"'><a href='/?q=" + Slug(y)+"'>" + y + "</a></li>");
                              if(k > 5) return false;
                        });
                        c_select=-1;
                    }
                });
            } else $("#search-auto").hide();
        }
            $("#search-auto li").removeClass('active');
            //up
         if ( e.keyCode == 38 ) {
            if (c_select >0) c_select--;
                $("#sg"+c_select).addClass('active'); 
                $('.search-query').val($("#sg"+c_select).text());
         }
            //down
          if ( e.keyCode == 40 ) {
                c_select++;
                $("#sg"+c_select).addClass('active'); 
            $('.search-query').val($("#sg"+c_select).text());
         }
         
         
    });
$(document).ready(function () {

  $("#up, #upcontainer").scrollToTop();
    });


// just an url





