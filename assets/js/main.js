 


 window.fbAsyncInit = function() {
 	FB.init({
 		appId      : '322831918174183',
 		cookie     : true,
 		xfbml      : true,
 		version    : 'v2.8'
 	});
 	FB.AppEvents.logPageView();   
 };

  function checkLoginState() {
 	FB.getLoginStatus(function(response) {
 		statusChangeCallback(response);
 	});
 }