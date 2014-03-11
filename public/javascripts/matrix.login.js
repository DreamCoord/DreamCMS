
$(document).ready(function(){

	var login = $('#loginform');
	var recover = $('#recoverform');

	$('#to-recover').click(function(){
		
		$("#loginform").hide();
		$("#recoverform").fadeIn();
	});
	$('#to-back').click(function(){
		$("#recoverform").hide();
		$("#loginform").fadeIn();
	});
    $('#to-register').click(function(){
        $("#loginform").hide();
        $("#recoverform").fadeIn();
    });
	
	
	$('#to-login').click(function(){
        var loginoption = function() {
            var options = {
                type : "post",
                dataType : "json",
                url : "verification",
                beforeSubmit : function(){

                },
                success : function(data){
                    console.log(data);
                    if(data.state=="ok"){
                        window.location.href="index";
                    }else{
                        $("#err").show();
                    }
                },
                error : function(){

                }
            };
            // 异步提交登陆请求
            $("#loginform").ajaxSubmit(options);

        };
        //表单验证
        $("#loginform").validate(ec.ValidateOption(loginoption).Option);

	});

    
//    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
//        $('input[placeholder]').each(function(){
//
//        var input = $(this);
//
//        $(input).val(input.attr('placeholder'));
//
//        $(input).focus(function(){
//             if (input.val() == input.attr('placeholder')) {
//                 input.val('');
//             }
//        });
//
//        $(input).blur(function(){
//            if (input.val() == '' || input.val() == input.attr('placeholder')) {
//                input.val(input.attr('placeholder'));
//            }
//        });
//    });

        
        
//    }
});