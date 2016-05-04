jQuery(document).ready(function(){
	//--Tìm kiếm
	var fixKeyword=function (str) {  
		str= str.toLowerCase();   
		str= str.replace(/[^\s0-9a-zA-ZấầẩẫậẤẦẨẪẬắằẳẵặẮẰẲẴẶáàảãạâăÁÀẢÃẠÂĂếềểễệẾỀỂỄỆéèẻẽẹêÉÈẺẼẸÊíìỉĩịÍÌỈĨỊốồổỗộỐỒỔÔỘớờởỡợỚỜỞỠỢóòỏõọôơÓÒỎÕỌÔƠứừửữựỨỪỬỮỰúùủũụưÚÙỦŨỤƯýỳỷỹỵÝỲỶỸỴđĐ]+/g," "); 
		str= str.replace(/^\s+|\s+$/g,""); 
		str= str.replace(/\s{1,}/g,"+"); 		
		return str;  
	}   
	jQuery('#form-search').submit(function(){
		var keywordObj=jQuery(this).find('input[name=keyword]')[0];
		
		if(typeof keywordObj !='undefined' && keywordObj!=null)
		{
			var keyword=jQuery(keywordObj).val();
			keyword=fixKeyword(keyword);
			keyword=jQuery.trim(keyword);
			if(keyword=='')
			{
				alert('Bạn chưa nhập từ khóa. (Không tính các ký tự đặc biệt vào độ dài từ khóa)');
				jQuery(keywordObj).focus();
				return false;
			}
			window.location.replace('tim-kiem/'+keyword+'/');
		}
		return false;
	});
});


var BlogspotTester=function(){
	/**
	 *  @brief Track sự kiện bằng GA
	 *  
	 *  @param [in] category Parameter_Description
	 *  @param [in] action Parameter_Description
	 *  @param [in] label Parameter_Description
	 *  @return void
	 *  
	 *  @details Details
	 */
	this.trackEvent=function(category,action,label){
		if(typeof category!="string" || category=="")
			return false;
		if(typeof action!="string" || action=="")
			return false;
		if(typeof label!="string" || label=="")
			label="";
		
		if(typeof ga=="function")
		{
			ga('send', 'event', category, action, label);
			console.log('GA Tracking Sent: Category='+category+'; Action='+action+'; Label='+label);
		}
		else
		{
			_gaq.push(function() {
				var pageTracker = _gat._getTrackerByName(); // Gets the default tracker.
				//var accountId = pageTracker._getAccount();
				pageTracker._trackEvent(category,action,label);
				console.log('GA Tracking Sent: Category='+category+'; Action='+action+'; Label='+label);
			});
		}
	}
	
	this.testBlogspotCallback=function(obj,ctype){
		try{
			jQuery(obj).remove();
			if(typeof ctype=="string" && ctype=="error")
			{
				document.cookie="blogspot_ok=; path=/;";
				document.cookie="blogspot_ip="+CLIENT_IP+"; path=/;";
				var label=CLIENT_IP;
				if(typeof CLIENT_ISP=="string" && CLIENT_ISP!="")
					label=CLIENT_ISP;
				this.trackEvent('Error','Test Blogspot',label);
			}
			else
			{
				document.cookie="blogspot_ok=1; path=/;";
				document.cookie="blogspot_ip="+CLIENT_IP+"; path=/;";
			}
		}catch(err){}
	}
	
	this.test=function(){
		if(typeof CLIENT_IP=="string" && CLIENT_IP!="")
		{
			jQuery('body').append('<img style="width:0px;height:0px;" onload="blogspotTester.testBlogspotCallback(this);" onerror="blogspotTester.testBlogspotCallback(this,\'error\');" src="https://3.bp.blogspot.com/-jW4MNmtTmkU/Vjqxr7VZTcI/AAAAAAAAJyA/P773ur93ehw/s0-Ic42/test.gif">');
		}
	}
}

var blogspotTester=null;
jQuery(document).ready(function(){
	if(typeof watching=="undefined" || !watching)
	{
		blogspotTester=new BlogspotTester();
		blogspotTester.test();
	}
});
