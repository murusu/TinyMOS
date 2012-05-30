// JavaScript Document
function OnLoginClick() {
	//$(".login_part").addClass("disable");
	//$(".main_part").removeClass("disable");
	$(".login_status").html("loging in");
	$.ajax({
		   url: "login/test/password",
           type:"get",
		   dataType:"json",
           success: function(result){
			   alert("test1");
		   },
		   error: function(){
               alert("test2");
           }
    })
}