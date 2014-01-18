document.addEventListener('DOMContentLoaded', function (event) {
	//console.log(event);
});

/*chrome.alarms.create("rTest Alarm", {when : Date.now() } );

chrome.alarms.onAlarm.addListener( function(alarm) {
	console.log("ASD");
});*/
//chrome.tabs.onActive.addListener
chrome.pushMessaging.getChannelId(true, function(channelInfo) {
	console.log(channelInfo.channelId);
})
chrome.tabs.onSelectionChanged.addListener( function(a,b) {
	for( var i in b )
	{
		//if( b.hasOwnProperty(i) )
		//alert(i);
	}
	chrome.notifications.create('rTestNotification'+Date.now(), {
		  type: "basic",
		  title: "Rohit's Notification",
		  message: "Rohit>> Tab is selected",
		  iconUrl: "notificationIcon.png"//,
//		  imageUrl :"notificationIcon.png"
		}
		, function( notiId) {
			console.log(notiId);
		}
	);	
});
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tabs){
   if( changeInfo.status == "complete" )
   {
	chrome.notifications.create('rTestNotification'+Date.now(), {
		  type: "basic",
		  title: "Rohit's Notification",
		  message: "Rohit>> Page is loaded",
		  iconUrl: "notificationIcon.png"//,
//		  imageUrl :"notificationIcon.png"
		}
		, function( notiId) {
			console.log(notiId);
		}
	);
	 var url = tabs.url;
	 if( url.indexOf("google.co") != -1 || url == "" || url.indexOf("chrome-search://") != -1 || url.indexOf("chrome-devtools://") != -1 )
	 {
		chrome.tabs.executeScript(null, {file: "popup2.js"});
	 }
/*   if( changeInfo.status == "loading" )
   {
		chrome.notifications.clear(notiId, function() {	
		});
   }*/
/*chrome.notifications.onClicked.addListener(function( notiId ) {
	if(notiId == "rTestNotification" )
	{
		chrome.notifications.clear(notiId, function() {
			
		});
	}
});*/
   }
/*   else if( changeInfo.status == "loading" )
   {
		chrome.notifications.clear(notiId, function() {	
		});
   }*/
});
//chrome.tabs.query({'active': false}, function (tabs) {
chrome.tabs.query({}, function (tabs) {
 for(var i=0; i <tabs.length; i++ )
 {
	//alert(tabs[i].url);
	 if( tabs[i].url.indexOf("pma") != -1 || tabs[i].url.indexOf("phpmyadmin") != -1 )
	 {
		 console.log("A");
		 chrome.tabs.executeScript(null, {file: "popup3.js"});
	 }
	 else if( tabs[i].url.indexOf("google.co") != -1 || tabs[i].url == "" || tabs[i].url.indexOf("chrome-search://") != -1 || tabs[i].url.indexOf("chrome-devtools://") != -1 )
	 {
		console.log("....URL..."+tabs[i].url);
		chrome.tabs.executeScript(null, {file: "popup2.js"});
		//chrome.tabs.update(tabId, {url:"http://www.yahoo.com"}, function callback() {return true;})
	 }
 }
});
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//chrome.tabs.query({'active': true}, function (tabs) {
//chrome.tabs.query({}, function (tabs) {


 //console.log(tabs);
  var url = tabs[0].url;
  var tabId = tabs[0].id;
  console.log("A..."+url+"...A2");
	if( url.indexOf("google.co") != -1 || url == "" || url.indexOf("chrome-search://") != -1 || url.indexOf("chrome-devtools://") != -1 )
	{
		console.log("YES");
		chrome.tabs.executeScript(null, {file: "popup2.js"});
		//chrome.tabs.update(tabId, {url:"http://www.yahoo.com"}, function callback() {return true;})
	}
	else if( ( url.indexOf("pma") != -1 || url.indexOf("phpmyadmin") != -1 ) )
	{
		chrome.tabs.executeScript(null, {file: "popup3.js"});
	}
	else
	{
		console.log("NO");
	}
});
  
chrome.tabs.onCreated.addListener(function callback(tabs) {



	var url = tabs.url;
	var tabId = tabs.id;
    console.log("B..."+url+"...B2");
	if( url.indexOf("google.co") != -1 || url == "" || url.indexOf("chrome-search://") != -1 || url.indexOf("chrome-devtools://") != -1 )
	{
		console.log("YES");
		chrome.tabs.executeScript(null, {file: "popup2.js"});
		//chrome.tabs.executeScript( { code: 'document.getElementById("logo").remove()' });
		
		//chrome.tabs.executeScript(null, {file: "popup2.js", code: 'document.body.style.backgroundColor="red"'});
		//chrome.tabs.update(tabId, {url:"http://www.yahoo.com"}, function callback() {return true;})
	}
	else if( ( url.indexOf("pma") != -1 || url.indexOf("phpmyadmin") != -1 ) )
	{
		chrome.tabs.executeScript(null, {file: "popup3.js"});
	}
	else
	{
		console.log("NO");
	}	
})

chrome.tabs.onRemoved.addListener(function callback(a,b) {
	//alert("ASD");
 //return false;
/* 	chrome.notifications.create('rTestNotification',{ //+Date.now(), {
		  type: "basic",
		  title: "Rohit's Notification",
		  message: "Rohit>> Tab is closed",
		  iconUrl: "notificationIcon.png"//,
//		  imageUrl :"notificationIcon.png"
		}
		, function( notiId) {
			console.log(notiId);
		}
	);*/
})


