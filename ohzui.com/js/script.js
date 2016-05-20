( function( $ ) {
$( document ).ready(function() {	
	$('div.menu_responsive span.genericon-search').on('click', function(){
		$(".menucss").css("display","");
		if($("div.top_right_responsive div.searchform").css("display")=="none"){
			$("div.top_right_responsive div.searchform").fadeIn( "slow" );
		}else{
			$("div.top_right_responsive div.searchform").css("display","");
		}
	});
	$('div.menu_responsive span.genericon-menu').on('click', function(){
		var ul = $(".menucss");
		if(ul.css("display")=="none") ul.css("display","block");
		else ul.css("display","none");
	});
	$("a.typesearch").on("click",function(){
		var ul = $(this).next();
		if(ul.css("display")=="none") ul.css("display","block");
		else ul.css("display","none");
	});
	$("img#menuUserMobile").click(function(){
		var userMenu = $("div.menu-user-mobile");
		if(userMenu.css("display")=="none") userMenu.css("display","block");
		else userMenu.css("display","none");
	});
	$("body").on("click","span.parent-menu-icon",function(){
		var ul = $(this).next();
		if(ul.css("display")=="none") ul.css("display","block");
		else ul.css("display","none");
	});
	
	$(".menu-type-search ul li").on("click",function(){
		$(this).parent().hide();
		$("a.typesearch").html($(this).html());
		$("input#typeSearch").val($(this).html());
	});
	$('<span class="genericon genericon-expand parent-menu-icon"></span>').insertAfter("li.menu-item-has-children > a");	
	$("a.typesearch").html($("#typeSearch").val());
	
	$("div.top_right_responsive div.divButton .btsearch").on("click", function(e){
		e.preventDefault();
		$(this).closest("#searchform").submit();
	});
	$("div.top_right div.divButton .btsearch").on("click", function(e){
		e.preventDefault();
		var display = $("div.hideSearch").css("display");
		if(display!="none"){
			if($("#s",$("div.hideSearch")).val()!=""){
				$(this).closest("#searchform").submit();
			}
		}
		$("div.hideSearch").show();
	});
	$("div.hideSearch .genericon-close").on("click", function(e){
		e.preventDefault();		
		$("div.hideSearch").hide();
	});
	$("#searchform div span").on("click", function(){
			
	});	
	$(".responsive-menu-icon").on("click", function(){
		$(".site-header .menucss").toggle();
	});
	$(".circle_slider_text_wrapper").css("width","");

	var offset = 100,		
	offset_opacity = 1200,	
	scroll_top_duration = 700;		
	$('div.cd-top').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0
		 	}, scroll_top_duration
		);
	});
	var isClicked=false;	
	$("p.loadMore").on("click","a",function(event){
		if(isClicked) return;
		isClicked=true;
		event.preventDefault();
		$("p.loadMore img").css("display","inline");
		var page = $(this).attr("page");
		var cate = $(this).attr("category");
		var tag = $(this).attr("tag");
		var type = $(this).attr("type");
		jQuery.post(
			ajaxurl, 
			{
				'action': 'load_more',
				'page':   page,
				'category': cate,
				's':$("#s").val(),
				'tag':tag,
				'type':type
			}, 
			function(response){
				isClicked=false;
				if(response==""){
					$("p.loadMore").css("display","none");
				}else{
					$("p.loadMore a").attr("page",parseInt(page)+1);
					if(page%3==0){
						$("#divContentAjax").html("");
						$('html, body').animate({ scrollTop: $("#divContentAjax").offset().top-50 }, 'slow');
					}
					$("#divContentAjax").append(response);
					$("p.loadMore img").hide("slow");
					var href = window.location.href;
					if(href.indexOf("page=")>0){
						var attr = href.split("page=");
						href = attr[0]+"page="+page;						
					}else{
						if(href.indexOf("\?")!=-1) href+="&page="+page;
						else href+="?page="+page;						
					}
					if(typeof history.pushState !='undefined') history.pushState({}, null,href);
				}
				var total = $(".list-item li").length;
				if(total%postPerPage!=0) $("p.loadMore").css("display","none");
				$("img.lazy").lazyload();
				var lastList = $("#divContentAjax .list-item").last();
				FB.XFBML.parse(lastList.get(0));
			}
		);
	});
	/*begin load top post ajax*/
	if($("div.rightColumn p.option span").length>0){		
		$("p.option span").click(function(){
			if(isClicked) return;
			isClicked=true;
			$("p.option span").removeClass("choose");
			$(this).addClass("choose");
			$("img.lazyTopPost").parent().show();
			var op = $(this).attr("op");
			jQuery.get(
				ajaxurl, 
				{
					'action': 'top_'+op,
					'page':   0
				}, 
				function(response){
					isClicked=false;
					$("div.box div.ajax_load").html(response);
					$("img.lazyTopPost").parent().hide();
					$("div.ajax_load img.lazy").lazyload();
					var lastList = $("div.box div.ajax_load").last();					
				}
			);
		});
	}
	if($(".box img.lazyTopPost").length > 0){		
		$(".box img.lazyTopPost").lazyload({
			load : function(){                
				$(".box p.option span.choose").click();
            }
		});
	}
	if($("div.naviTab").length>0){
		$("div.naviTab").click(function(){
			var items = $("div.scroll_div > div");
			var width = $(items.get(0)).width()+10;/*include margin*/
			var scroll = $(this).parent().find("div.scroll_div");
			var left=scroll.css("marginLeft");
			left = parseInt(left.replace("px",""));
			if($(this).hasClass("prev")){
				if(left==0) return;
				scroll.animate({marginLeft: (left+width)+'px'}, "slow");				
			}else{
				var parentWidth = scroll.parent().width();
				if(items.length * width + left < parentWidth) return;
				scroll.animate({marginLeft: (left-width)+'px'}, "slow");
			}
			$("div.scroll_div img").lazyload();
		});
	}
	if($("div.report_article a").length>0){
		$("div.report_article a").on("click",function(event){
			event.preventDefault();
			tb_show("","#TB_inline?height=340&amp;width=400&amp;inlineId=report","");
			event.stopImmediatePropagation();
		});
	}
	if($("select#pagePlaylist").length>0){
		$("select#pagePlaylist").on("change",function(event){
			event.preventDefault();
			jQuery.get(
				ajaxurl, 
				{
					action:'changePlaylistPage',
					pid:$("h1").first().attr("pid"),
					page:$(this).val()
				}, 
				function(response){
					if(response!="") window.location=response;
				}
			);
		});
	}
	if($("a#nextPlaylist").length>0){
		$("a#nextPlaylist").on("click",function(event){
			event.preventDefault();
			if($(this).hasClass("disabled")) return;
			var pageActive = $("div#divPlaylist a.pageactive");
			var nextPage = pageActive.next();
			window.location = nextPage.attr("href");		
		});
	}
	if($("a#prevPlaylist").length>0){
		$("a#prevPlaylist").on("click",function(event){
			event.preventDefault();
			if($(this).hasClass("disabled")) return;
			var pageActive = $("div#divPlaylist a.pageactive");
			var page = pageActive.prev();
			window.location = page.attr("href");
		});
	}
	if($("input#detail_url").length>0){
		if($("div.viral_result").length>0){
			var listShare = $("div.viral_result div.v_left label");
			if(listShare.length > 0){			
				loadCount($("input#detail_url").val(),listShare);
			}else loadCount($("input#detail_url").val(),[]);
		}else{
			loadCount($("input#detail_url").val(),[]);
		}
	}
	$("div.titleChat").click(function(){
		var bottom = $(this).parent().css("bottom");
		if(typeof bottom!="undefined" && bottom!="" && bottom!="0px"){
			$("span.genericon-close-alt",$(this)).show();		
			$(this).parent().css("bottom","0px");
		}else{
			$("span.genericon-close-alt",$(this)).show();
			$(this).parent().css("bottom","-290px");
		}		
	});
	$("span.genericon-close-alt").click(function(){
		$("div.titleChat").parent().hide();
	});
	/*loadAdsBanerUreka();*/
	preventSpamFB();
	/*end load top post ajax*/
	$("img.lazy").lazyload();
	$(".box img.lazy").lazyload();
});
} )( jQuery );
function show_top_wating(option){
	if(option) $("div#top_waiting").css("display","block");
	else $("div#top_waiting").css("display","none");
}
function loadThumbFace(){
	$( "img.fbimage" ).each(function() {
		var isFinished = $(this).attr("isFinished");
		if(isFinished=="true") return;
		var idfb = $(this).attr("data-id");		
		var img = $(this);
		$.getJSON("https://graph.facebook.com/fql?q=SELECT thumbnails FROM video WHERE vid="+idfb , function(videos) {
			$.each(videos.data, function(ix, el) {				
				var thumbnail = el.thumbnails;
				img.attr("src",thumbnail[thumbnail.length-1].uri);
				img.attr("isFinished","true");
				img.off("ready");
				return;
			});
	   });
	});
}
function encodeCharacter(val){
	val = encodeURIComponent(val).replace(/'/g,"%27").replace(/"/g,"%22");		
	return val;
}
function decodeCharacter(val){
	val = decodeURIComponent(val.replace(/\+/g,  " "));	
	return val;
}
function getKey(){
	return Math.random().toString(36).substring(2);
}
function showWaiting(option){
	if(option){
		$.blockUI({ 
            message: $('#waitingProcess'), 
            css: { 
                top:  ($(window).height() - 50) /2 + 'px', 
                left: ($(window).width() - 50) /2 + 'px', 
                width: '50px',
				border:'none',
				background:'none'
            },
			baseZ:100051
        });
	}else{
		$.unblockUI();
	}
}
function tb_remove2(callback) {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();
	jQuery( 'body' ).removeClass( 'modal-open' );
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	if(callback ==='function') callback();
	return false;
}
function preview(obj,id){
	var href = $(obj).attr("href");			
	if(href.indexOf("preview")<0) {
		href = href+"/?p="+id+"&preview=true";
		$(obj).attr("href",href);
	}
}
function loadData(obj){
	if(typeof initData==="function"){
		initData();
	}
	tb_show("HAI","#TB_inline?height=240&amp;width=405&amp;inlineId=loadData&amp;modal=true",null);
}
function reportData(obj){
	tb_show("HAI","#TB_inline?height=240&amp;width=405&amp;inlineId=reportData&amp;modal=true",null);
}
function getCateSelected(){
	var list = $("div.listCate input[type=checkbox]:checked");
	var strCate = "";
	for(var i=0;i<list.length;i++){
		strCate+= $(list[i]).val()+",";
	}
	return strCate;
}
function clearAllTypeMedia(obj){
	obj.removeAttr("tid");
	obj.removeAttr("img_link");
	obj.removeAttr("youtube_id");
	obj.css("background-image","none");
}
function setBackgroundImage(divObject,dataJson){
	clearAllTypeMedia(divObject);
	divObject.attr("tid",dataJson.id);
	var d = new Date();
	var n = d.getTime(); 
	if(typeof dataJson.sizes!=='undefined' && typeof dataJson.sizes.large !=="undefined"){
		divObject.css("background","#CECECE url('"+dataJson.sizes.large.url+"?t="+n+"') center center no-repeat");
		var parent = divObject.parent();
		if(divObject.hasClass("image") && parent.hasClass("content-image")) parent.css("height",dataJson.sizes.large.height+"px");
	}else{
		divObject.css("background","#CECECE url('"+dataJson.url+"?t="+n+"') center center no-repeat");		
	}
	
	divObject.attr("data-full-img",dataJson.url);
	$("span",divObject).css("display","block");
}

var _validFileExtensions = [".jpg", ".jpeg",".gif", ".png"];    
function validateExtension(sFileName) {
    if (sFileName != "") {        
         if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.toLowerCase().indexOf(sCurExtension.toLowerCase()) >-1 ) {
                    blnValid = true;
                    break;
                }
            }
             
            if (!blnValid) {                
                return false;
            }
        }
    }else return false;
    return true;
}
function tb_show2(title,url){
	tb_show(title,url,null);
	$("#TB_ajaxContent").css("width","100%");
}
function getTime(){
	var d = new Date();
	var n = d.getTime();
	return n;
}
function extract_youtube_id(url){	
    var regExp = /^.*((v=)|(embed\/)|(e\/)|(v\/))([^\&]*)/;
    var match = url.match(regExp);
    if (match&&match[6].length==11){
        return match[6];
    }
	return "";
}
function getYoutubeListId(url){
	var regExp = /^.*((list=))([^\&]*)/;
    var match = url.match(regExp);
    if (match){
        return match[3];
    }
	return "";
}
function getIndexVideo(url){
	var regExp = /^.*((index=))([^\&]*)/;
    var match = url.match(regExp);
    if (match){
        return match[3];
    }
	return "";
}

function extract_facebook_id(data){
	if(data.indexOf("http")==0){
		if(data.indexOf("/vb.")>-1){
			var regExp = /^.*((videos\/vb\.[^\/]*\/)|(embed\??video_id=)|(v=))([^#\&\?\/]*).*/;
			var match = data.match(regExp);
			if (match&&match[5]!=""){
				return match[5];
			}
		}else{
			var regExp = /^.*((videos\/)|(embed\??video_id=)|(v=))([^#\&\?\/]*).*/;
			var match = data.match(regExp);
			if (match&&match[5]!=""){
				return match[5];
			}
		}
	}else{
		if(data.indexOf("fb-video")){
			var elementArr = $(data);
			var href="";
			if(data.indexOf("fb-root")){
				href=$(elementArr[2]).attr("data-href");
			}else href=$(".fb-video",element).attr("data-href");
			if(href.indexOf("/vb.")>-1){
				var regExp = /^.*((videos\/vb\.[^\/]*\/)|(embed\??video_id=))([^#\&\?\/]*).*/;
				var match = href.match(regExp);
				if (match&&match[4]!=""){
					return match[4];
				}
			}else{
				var regExp = /^.*((videos\/)|(embed\??video_id=))([^#\&\?\/]*).*/;
				var match = href.match(regExp);
				if (match&&match[4]!=""){
					return match[4];
				}
			}
			
		}
	}
	return data;
}
function loadBackground(divObject,data){
	$("span",divObject).css("display","block");
	if (typeof data.attachment !== 'undefined'){
		setBackgroundImage(divObject,data.attachment);
	}else if (typeof data.img_link !== 'undefined'){
		divObject.attr("img_link",data.img_link);
		divObject.css("background","#CECECE url('"+data.img_link+"') center center no-repeat");
	}else if (typeof data.youtube_id !== 'undefined'){
		divObject.attr("youtube_id",data.youtube_id);
		var linkImg = "https://img.youtube.com/vi/"+data.youtube_id+"/hqdefault.jpg";
		divObject.css("background","#CECECE url('"+linkImg+"') center center no-repeat");
	}else if (typeof data.video_id !== 'undefined'){
		divObject.attr("video_id",data.video_id);
		var linkImg = "https://img.youtube.com/vi/"+data.video_id+"/hqdefault.jpg";
		divObject.css("background-image","url('"+linkImg+"')");
	}else{
		$("span",divObject).css("display","none");
	}
}


function clearAllTypeMedia(obj){
	obj.removeAttr("tid");
	obj.removeAttr("img_link");
	obj.removeAttr("video_id");
	obj.removeAttr("playlist_id");
	obj.removeAttr("index");
	obj.css("background-image","none");
	obj.parent().removeAttr("style");
}
function extrachDomain(url){
	return $('<a>').prop('href', url).prop('hostname');
}
function getText(str) {
	return $("<div/>").html(str).text();
}
function getUrlFromBackgroundCss(element){
	var bg = element.css("background-image");
	bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
	return bg;
}
function decodeHTMLEntities(str) {
	if (str && typeof str === 'string') {		
		return getText(getText(str));
	}
}
function rand(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor( Math.random() * range) + offset;
  return randomNumber;
} 
function rgb2hex(bg) {
    bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+).*\)$/);
	if(typeof bg == 'undefined' || bg == "null" || bg==null) return "";
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
}
function loadImageInCenter(element,bg){
	$("<img/>")
	    .attr("src",bg)
	    .load(function() {
			var height = this.height;
			var width = this.width;			
			var divHeight = element.height();
			var divWidth = element.width();
			var ratioWidth = divWidth/width;
			var ratioHeight = divHeight/height;
			var cssBg = "url("+bg+")";
			var backgroundSize="";
			if(ratioWidth >= ratioHeight){
				if(ratioHeight>1){
					var distance = (divHeight-height)/2;
					cssBg+=" center  "+distance+"px ";
					backgroundSize = "auto 100%";
				}else{
					cssBg+=" center top";
					backgroundSize = "auto 100%";
				}
			}else{
				if(ratioWidth>1){
					var distance = (divHeight-height)/2;
					cssBg+=" center  "+distance+"px ";
					backgroundSize = "auto auto";
				}else{
					var heightAfterScale = height* ratioWidth;
					var distanceHeight = (divHeight - heightAfterScale)/2;
					cssBg+=" center  "+distanceHeight+"px ";
					backgroundSize = "100% auto";
				}
			}
			cssBg+=" no-repeat";
			element.css("background",cssBg);
			element.css("backgroundColor","#000");
			element.css("backgroundSize",backgroundSize);
		});
}
function getIEVersion() {
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.test(ua) != null)
			rv = parseFloat( RegExp.$1 );
	}
	return rv;
}

function isMobile(){
	var width = $( window ).width();
	if(typeof width =='undefined') width=0;
	return (width<600);
}
function checkVersion() {
	var ver = getIEVersion();
	if ( ver != -1 ) {
		if (ver <= 9.0) {
			return true;
		}
	}
	return false;
}
function disableSelect(el){
	el.attr('unselectable','on')
     .css({'-moz-user-select':'-moz-none',
           '-moz-user-select':'none',
           '-o-user-select':'none',
           '-khtml-user-select':'none', /* you could also put this in a class */
           '-webkit-user-select':'none',/* and add the CSS class here instead */
           '-ms-user-select':'none',
           'user-select':'none'
     }).bind('selectstart', function(){ return false; });
}
function increasePageView(){
	jQuery.get(
		ajaxurl,{
			'action': 'increase_view',						
			'pid':$("h1.title").attr("pid")
		}, 
		function(response){			
			$(".page_view").html(response);
		}
	);
}
function loadCount(url,element){
	try{
		$.getJSON( 'https://api.facebook.com/method/links.getStats?urls=' +url+"&format=json" , function( fbdata ) {
			if(element.length>0)element.html(fbdata[0].share_count);	
			var totalComment = 0;
			if(fbdata.length>0 && typeof fbdata[0].commentsbox_count!="undefined") totalComment = fbdata[0].commentsbox_count;
			jQuery.get(
				ajaxurl,
				{
					'action': "update_comment_count",					
					'post_comment':totalComment,
					'url':url
				}, 
				function(response){				
				}
			);
		});
	}catch(ex){
	}
}
function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function initEditorDetail(id){	
	if(typeof tinyMCE!== 'undefined'){
		try{
			if(typeof tinyMCE.get(id)!="undefined" && tinyMCE.get(id)!=null ) tinyMCE.remove("#"+id);
		}catch(ex){
		}		
		tinymce.init({
			plugins: "textcolor,code,image,link",
			pagebreak_split_block: true,
			selector :"textarea#"+id ,
			menubar: false,
			min_height: 80,			
			toolbar: [
				"undo redo | styleselect | bold italic | alignleft aligncenter alignright | forecolor backcolor | link image | code "
			]
		});		
		tinymce.editors;
	}
}
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
}
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function preventSpamFB(){
	try{
		var pid = "";
		if($("#pid").length>0) pid = $("#pid").val();
		else if($("h1.title").length>0) pid = $("h1.title").attr("pid");
		if($("div#comment_box").length==0 || pid=="") return;
		var checkComment = $.cookie('comment_'+pid);
		if(typeof checkComment !='undefined' && checkComment!=''){
			hideComment();
		}
		FB.Event.subscribe("comment.create",function(){
			hideComment();
			var date = new Date();
			var minutes = 1;
			date.setTime(date.getTime() + (minutes * 60/3 * 1000));/*20second*/
			var pid = "";
			if($("#pid").length>0) pid = $("#pid").val();
			else if($("h1.title").length>0) pid = $("h1.title").attr("pid");
			$.cookie('comment_'+pid,'comment', { expires:date, path: '/' });
		});
		
	}catch(ex){
		
	}
}
function hideComment(){
	$("div#comment_box div.preventSpamLab").html($("input#preventSpamLab").val()).show();
	var height = $("div#comment_box").first().height();
	if(height<150) height=150;
	else if(height>300) height = 300;
	$("div#comment_box div.divHideComment").show().css("height",(height)+"px");
}
function loadAdsBanerUreka(){
	try{
		googletag.cmd.push(function() {
			var isMobileDv = isMobile();		
			var slot1,slot2,slot3;
			if(!isMobileDv){			
				if($("#div-gpt-ad-1444897787359-0").length>0) googletag.defineSlot('/2627062/ohzui.com_ROS_728x90', [728, 90], 'div-gpt-ad-1444897787359-0').addService(googletag.pubads());
				if($("#div-gpt-ad-1444897699884-0").length>0) googletag.defineSlot('/2627062/ohzui.com_ROS_300x250', [300, 250], 'div-gpt-ad-1444897699884-0').addService(googletag.pubads());
				if($("#div-gpt-ad-1444897728168-0").length>0) googletag.defineSlot('/2627062/ohzui.com_ROS_300x600', [300, 600], 'div-gpt-ad-1444897728168-0').addService(googletag.pubads());
			}else{
				if($("#div-gpt-ad-1445234936339-0").length>0) googletag.defineSlot('/2627062/m.ohzui.com_ROS_300x50', [300, 50], 'div-gpt-ad-1445234936339-0').addService(googletag.pubads());
				if($("#div-gpt-ad-1445235254003-0").length>0) googletag.defineSlot('/2627062/m.ohzui.com_ROS_320x50', [320, 50], 'div-gpt-ad-1445235254003-0').addService(googletag.pubads());
				if($("#div-gpt-ad-1444897625366-0").length>0) googletag.defineSlot('/2627062/m.ohzui.com_ROS_300x250', [300, 250], 'div-gpt-ad-1444897625366-0').addService(googletag.pubads());
			}
			/*googletag.pubads().enableSyncRendering();*/		
			googletag.pubads().enableAsyncRendering();
			googletag.pubads().collapseEmptyDivs();
			googletag.enableServices();
			if(!isMobileDv){			
				if($("#div-gpt-ad-1444897787359-0").length>0) googletag.display('div-gpt-ad-1444897787359-0');
				if($("#div-gpt-ad-1444897699884-0").length>0) googletag.display('div-gpt-ad-1444897699884-0');			
				if($("#div-gpt-ad-1444897728168-0").length>0) googletag.display('div-gpt-ad-1444897728168-0');
			}else{
				if($("#div-gpt-ad-1445234936339-0").length>0) googletag.display('div-gpt-ad-1445234936339-0');
				if($("#div-gpt-ad-1445235254003-0").length>0) googletag.display('div-gpt-ad-1445235254003-0');
				if($("#div-gpt-ad-1444897625366-0").length>0) googletag.display('div-gpt-ad-1444897625366-0');
			}		
		});
	}catch(ex){
	}	
}
function initListTag(element){
	if($(element).length==0)  return;
	
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
	jQuery.get(
		ajaxurl,
		{
			'action': "get_list_tag"
		}, 
		function(response){
			var json = JSON.parse(response);			
			jQuery.data(document.body, "tag",json.tag);			
			jQuery.data(document.body, "playlist",json.playlist);
		}
	);
    $(element)
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 2,
        source: function( request, response ) {
			var availableTags = jQuery.data(document.body, "tag");
			if(typeof availableTags=="undefined") availableTags=[];
            response( $.ui.autocomplete.filter(availableTags, extractLast( request.term ) ) );
        },
        focus: function() {          
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );         
          terms.pop();          
          terms.push( ui.item.value );         
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
    });
}
function initListTaxonomy(element,taxonomy){
	if($(element).length==0)  return;	
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }	
    $(element)
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 2,
        source: function( request, response ) {
			var availableTags = jQuery.data(document.body, taxonomy);
			if(typeof availableTags=="undefined") availableTags=[];
            response( $.ui.autocomplete.filter(availableTags, extractLast( request.term ) ) );
        },
        focus: function() {          
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );         
          terms.pop();          
          terms.push( ui.item.value );         
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
    });
}
function loginSiteAjax(response){
	if($("div.menu-user ul").length>0) return;
	jQuery.post(
		ajaxurl, 
		{
			'action': 'login_fb2',										
			'data':encodeCharacter(JSON.stringify(response)),
			'accessToken':accessToken
		}, 
		function(response){
			if(response!="0"){				
				$("div.menu-user").html(response);
			}
		}
	);
}