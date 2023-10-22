/**
 * set nav current page 
 */
 
 $(document).ready(function(){
 	var url = document.location.href;
 	if(url.match("uploadForm")){
 		$("li.nav-item a#upload").addClass("active");
 	} else if(url.match("uploadList")){
 		$("li.nav-item a#list").addClass("active");
 	}
 });