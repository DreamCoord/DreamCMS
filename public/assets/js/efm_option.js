/**
 * Created with JetBrains WebStorm.
 * User: ywinlee
 * Date: 14-3-21
 * Time: 上午2:55
 * To change this template use File | Settings | File Templates.
 */
var efmOption = {};
efmOption.validate_option =  function(obj){
    return {
        Option : {
            errorElement: 'div',
            errorClass: 'help-block',
            rules: {
                title: {required: true},
//                username: "required",
//                username2: "required",
//                password: "required",
//                password2: {
//                    equalTo: "#password"
//                },
//                udpassword: "required",
//                udpassword2: {
//                    equalTo: "#udpassword"
//                },
                name: "required",
//                name2: "required",
//                email: { required: true, email: true },
//                email2: { required: true, email: true },
//
//                groupname: "required",
//                groupname2: "required",
//
//                rolename:"required",
//                roleid:"required",
//
//                websitename:"required",
//                websiteURL:{ required: true, url: true },
//                wsname:"required",
//                wsurl:{ required: true, url: true },
//
//
//                classname:"required",
//                aliasname:"required",
//                classname2:"required",
//                aliasname2:"required",

            },
            messages: {
                title: {
                    required: "请输入文章标题"
                },
//                username: "请输入用户名",
                name: "请输入",
//                password: "请输入密码",
//                password2: { equalTo: "两次密码不一致" },
//                email: { required: "请输入Email地址", email: "请输入正确的格式：name@moyuan798.com" },
//                username2: "请输入用户名",
//                name2: "请输入姓名",
//                udpassword: "请输入密码",
//                udpassword2: { equalTo: "两次密码不一致" },
//                email2: { required: "请输入Email地址", email: "请输入正确的格式：name@moyuan798.com" },
//                groupname: "请输入用户组名称",
//                groupname2: "请输入用户组名称",
//
//                rolename:"请输入角色名称",
//                roleid:"请输入角色ID" ,
//
//                websitename:"请输入网站名称",
//                websiteURL:{ required: "请输入网址", url: "请输入正确的网址格式：http://www.moyuan798.com" },
//                wsname:"请输入网站名称",
//                wsurl:{ required: "请输入网址", url: "请输入正确的网址格式：http://www.moyuan798.com" },
//
//
//                classname:"请输入分类名称",
//                aliasname:"请输入分类别名",
//                classname2:"请输入分类名称",
//                aliasname2:"请输入分类别名",
            },
            errorClass: "help-inline",
            errorElement: "span",
            invalidHandler: function (event, validator) { //display error alert on form submit
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function (e) {
                $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
            },


            /*执行ajaxsubmit  */
            submitHandler: function() {
                console.log("执行了");
                obj();

//                return false;
            }
        }
    }
}

efmOption.TablStyle =  function(){
    $('.data-table').dataTable({
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",
//        "sDom": '<""lf>t<"F">',
        "sDom": '<<"col-sm-6"l><"col-sm-6"f>>tr<"row"<"col-sm-6"i><"col-sm-6"p>>',
        "oLanguage": {
            "sProcessing": "正在加载中......",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "对不起，查询不到相关数据！",
            "sEmptyTable": "没有数据存在！",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
            sInfoEmpty:"当前显示 0 到 0 条，共 0 条记录",
            "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
            "sSearch": "搜索",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上一页",
                "sNext": "下一页",
                "sLast": "末页"
            }
        }
    });
    $('select').select2();
//    $('input[type=checkbox],input[type=radio],input[type=file]').uniform();

    $("span.icon input:checkbox, th input:checkbox").click(function() {
        var checkedStatus = this.checked;
        var checkbox = $(this).parents('.widget-box').find('tr td:first-child input:checkbox');
        checkbox.each(function() {
            this.checked = checkedStatus;
            if (checkedStatus == this.checked) {
                $(this).closest('.checker > span').removeClass('checked');
            }
            if (this.checked) {
                $(this).closest('.checker > span').addClass('checked');
            }
        });
    });
};