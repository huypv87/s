function nl2br( str ) {

	return str.replace(/([^>])\n/g, '$1<br/>');
}
function slug( str )

{

	str = str.replace(/\s+/g, '-');
	return str;
}
function getRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numF( nStr )
{
	nStr += '';
	  x = nStr.split('.');
	  x1 = x[0];
	  x2 = x.length > 1 ? '.' + x[1] : '';
	  var rgx = /(\d+)(\d{3})/;
	  while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ' ' + '$2');
	  }
	  return x1 + x2;
}


strRT = function (text) {	
	var s = 'pbcdefghajklmnoSqrstuvwxyz0-:_|,;.$123456789ABCDEFGHIJKLMNOPQRiTUVWXYZ'
    var f = '123456789ABCDEFGHIJKLMNOPQRiTUVWXYZpbcdefghajklmnoSqrstuvwxyz0-:_|,;.$'
	var str ='';
	for (var i=0; i<text.length; i++) {
		var os = text[i];
		var pos = s.indexOf( os );
		if( pos != -1 ){
				str += f[pos]
		} 
			else 
				str += text[i]
	}

	return str;
}


	$.extend({
		getInfo: function(id) {
			var result = null;
			$.ajax({
				url: "http://gdata.youtube.com/feeds/api/videos/"+ id + "?v=2&alt=json",
				type: 'get',
				dataType: 'json',
				async: false,
				success: function(data) {
					result = data;
				}
			});
		   return result;
		}
	});

	$.extend({
		getRelated: function(id, key) {
			var result = null;
			$.ajax({
				url: "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId="+ id + "&type=video&maxResults=10&key=" + key,
				type: 'get',
				dataType: 'json',
				async: false,
				success: function(data) {
					result = data;
				}
			});
		   return result;
		}
	});

	$.extend({
		getTopicsName: function(id) {


			var result = null;
			var topics = id.split(',');
			var url = topics.join(' mid:');
			
			$.ajax({
				url: "https://www.googleapis.com/freebase/v1/search?filter=(any mid:" +url + ")" ,
				type: 'get',
				dataType: 'json',
				async: false,
				success: function(data) {
					result = data;
				}
			});
		   return result;
		}
	});

	$.extend({
		getTopicsInfo: function(id) {
			var result = null;
			$.ajax({
				url: "https://www.googleapis.com/freebase/v1/topic"+ id ,
				type: 'get',
				dataType: 'json',
				async: false,
				success: function(data) {
					result = data;
				}
			});
		   return result;
		}
	});
	

function fromView () {
		try {				
			var key = ['AIzaSyCdn4qNExuH_6dbFs60XYe0p8ih5zRWIfM',	'AIzaSyDJEdFyYrGmrhJnHnnTyIbJCgAZ7iXb1rw', 'AIzaSyD6-WYMzO3isBtdSvih2I4da1hnSrUz7dc'];
		
				/* getRelated */
				var kid = getRandom(0,2);
			

				var yRelated = $.getRelated($("#y-player").data('id'), key[kid] );
				var rLi  = '';
				var tLi  = '';
		
				

				$.each( yRelated.items, function( k, t ) {
				
				// console.log(t.media$group)
						rLi += '<li>'
							+'<div class="li_wrap">'
							
							//	+'<div class="label duration" >'+duration(t.media$group.yt$duration.seconds)+'</div>'
								+'<a href="/view/yt='+strRT(t.id.videoId) +'" title="'+ t.snippet.title +'" >'
									+'<img src="'+t.snippet.thumbnails.default.url+'"  width="120"  />'
									+'<strong>'+ t.snippet.title +'</strong>'
								+'</a>'	
							//	+'<div class="view"><i class="fa fa-eye"></i> '+ ( t.yt$statistics != undefined ? addCommas(t.yt$statistics.viewCount) :'' )  +'</div>'
						+'	</div>'
					+'</li>';
					
			
					
				});

				$(".related-video").html("<ul class='y-related'>" + rLi + "</ul>");
						// console.log(yRelated)



				//topics
				var mids = $(".topicsId").data('topics');
				if ( mids!='') {
						var yTopicsName = $.getTopicsName(mids);
					
			

					$.each( yTopicsName.result, function( key, t ) {

							tLi += '<a class="tag tag-small" data-mid="'+t.mid+'" href="/video/'+Slug(t.name)+'"><span class="tag-wrap">'+t.name+'</span></a>';
					});
				

					$(".topicsId").html(tLi);
				}
		}	catch(err){}

}

var key = ['AIzaSyCdn4qNExuH_6dbFs60XYe0p8ih5zRWIfM',	'AIzaSyDJEdFyYrGmrhJnHnnTyIbJCgAZ7iXb1rw', 'AIzaSyD6-WYMzO3isBtdSvih2I4da1hnSrUz7dc'];

$(document).ready(function(){

					fromView ()	
						
	
});