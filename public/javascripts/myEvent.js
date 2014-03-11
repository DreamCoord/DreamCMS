/**
 * Created with JetBrains WebStorm.
 * User: ywinlee
 * Date: 14-1-3
 * Time: 下午5:56
 * To change this template use File | Settings | File Templates.
 */
var ec = {};
ec.UserOption = {
    username:"admin",
    name:"管理员"
}
ec.comstyle = {
    TablStyle:function(){
        $('.data-table').dataTable({
            "bJQueryUI": true,
            "sPaginationType": "full_numbers",
            "sDom": '<""l>t<"F"fp>',
            "oLanguage": {
                "sProcessing": "正在加载中......",
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "对不起，查询不到相关数据！",
                "sEmptyTable": "没有数据存在！",
                "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
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
        $('input[type=checkbox],input[type=radio],input[type=file]').uniform();

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
    }

};
ec.Article={
    UpdateEvent : function(obj){
        return function(){
            $("#UpdateMode").modal({show:true});
            var id = ECon.editbox({name:'id',width:'span5'}).hide();
            var name = ECon.editbox({title:'文章标题',name:'title2',width:'span5'});
            var alias = ECon.editbox({title:'内容',name:'content2',width:'span5'});
            var dropbox = ECon.dropbox({title:'分类',array:obj.textArr,val:obj.valArr,name:'classify2'});
            var leftContent = $("<div ></div>").addClass('form-horizontal');
            leftContent.append(id);
            leftContent.append(name);
            leftContent.append(alias);
            leftContent.append(dropbox);
            $("#updateBody").html($("<div></div>").addClass("row-fluid").append(leftContent));
            $("input[name='id']").val(obj.id);
            $("input[name='title2']").val(obj.title);
            $("input[name='content2']").val(obj.content);
            var footer = $("<div></div>");
            footer.append(ECon.button({title:'保存',class:'btn btn-success'}).click(function(){
                var update= function() {
                    var options = {
                        type : "post",
                        dataType : "json",
                        url : "updateClassify",
                        beforeSubmit : function(){
                        },
                        success : function(){
                            $("#UpdateMode").modal('hide');
                            $("#SaveMode").modal({show:true});
                        },
                        error : function(){
                            $("#UpdateMode").modal('hide');
                            $("#ErrMode").modal({show:true});
                        }
                    };
                    // 异步提交登陆请求
                    $("#UpdateMode").ajaxSubmit(options);
                };
                //表单验证
                $("#UpdateMode").validate(ec.ValidateOption(update).Option);

            }));

            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#UpdateMode").modal('hide');
                return false;
            }));
            $("#updateFooter").html(footer);

            $("select").select2();
        }

    },
    DelEvent : function(obj){
        return function(){
            $("#DelMode").modal({show:true});
            $("#delBody").html($('<h4>确认删除 '+obj.title+' 这篇文章？</h4>').append($("<span id='udid' style='visibility: hidden'>"+obj.id+"</span>")));

            var footer = $("<div></div>");
            footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                console.log($("#udid").text());
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'delClassify',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        $("#SaveMode").modal({show:true});
                    }
                });
                return false;
            }));
            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
                return false;
            }));
            $("#delFooter").html(footer);
        }
    }
}

ec.Classfiy={
    UpdateEvent : function(obj){
        return function(){
            $("#UpdateMode").modal({show:true});
            var id = ECon.editbox({name:'id',width:'span5'}).hide();
            var name = ECon.editbox({title:'名称',name:'classname2',width:'span5'});
            var alias = ECon.editbox({title:'别名',name:'aliasname2',width:'span5'});
            var describe = ECon.editbox({title:'描述',name:"miaoshu2",width:'span5'});
            var dropbox = ECon.dropbox({title:'父级',array:obj.textArr,val:obj.valArr,name:'parName2'});
            var leftContent = $("<div ></div>").addClass('form-horizontal');
            leftContent.append(id);
            leftContent.append(name);
            leftContent.append($('<span style="margin-left: 200px">这将是它在站点上显示的名字。</span>'));
            leftContent.append(alias);
            leftContent.append(dropbox);
            leftContent.append($("<br/>"));
            leftContent.append(describe);
            leftContent.append($('<span style="margin-left: 200px">描述只会在一部分主题中显示。</span>'));
            $("#updateBody").html($("<div></div>").addClass("row-fluid").append(leftContent));
            $("input[name='id']").val(obj.data.id);
            $("input[name='classname2']").val(obj.data.name);
            $("input[name='aliasname2']").val(obj.data.alias);
            $("input[name='miaoshu2']").val(obj.data.miaoshu);
            var footer = $("<div></div>");
            footer.append(ECon.button({title:'保存',class:'btn btn-success'}).click(function(){
                var update= function() {
                    var options = {
                        type : "post",
                        dataType : "json",
                        url : "updateClassify",
                        beforeSubmit : function(){
                        },
                        success : function(){
                            $("#UpdateMode").modal('hide');
                            $("#SaveMode").modal({show:true});
                        },
                        error : function(){
                            $("#UpdateMode").modal('hide');
                            $("#ErrMode").modal({show:true});
                        }
                    };
                    // 异步提交登陆请求
                    $("#UpdateMode").ajaxSubmit(options);
                };
                //表单验证
                $("#UpdateMode").validate(ec.ValidateOption(update).Option);

            }));

            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#UpdateMode").modal('hide');
                return false;
            }));
            $("#updateFooter").html(footer);

            $("select").select2();
        }

    },
    DelEvent : function(obj){
        return function(){
            $("#DelMode").modal({show:true});
            $("#delBody").html($('<h4>确认删除 '+obj.data.name+' 这个用户？</h4>').append($("<span id='udid' style='visibility: hidden'>"+obj.data.id+"</span>")));

            var footer = $("<div></div>");
            footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                console.log($("#udid").text());
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'delClassify',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        $("#SaveMode").modal({show:true});
                    }
                });
                return false;
            }));
            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
                return false;
            }));
            $("#delFooter").html(footer);
        }
    }
}


ec.User={
    UpdateEvent :function(obj){
      return function(){
          $("#UpdateMode").modal({show:true});
          var udid = ECon.editbox({name:'id',width:'span5'}).hide();
          var username = ECon.editbox({title:'用户名（必填）',name:'username2',width:'span5'});
          var email = ECon.editbox({title:'电子邮件（必填）',name:'email2',width:'span5'});
          var name = ECon.editbox({title:'名字',name:'name2',width:'span5'});
          var password = ECon.editbox({title:'密码',name:'udpassword',width:'span5',type:"password"});
          var apassword = ECon.editbox({title:'确认密码',name:'udpassword2',width:'span5',type:"password"});
          var role = ECon.dropbox({title:'用户组',array:obj.grouplistname,val:obj.grouplistID,name:'group2'});
          var state = ECon.dropbox({title:'状态',array:['有效','无效'],val:['有效','无效'],name:'state2'});
          var leftContent =$("<div style='height: 350px'></div>").addClass('form-horizontal');
          leftContent.append(udid);
          leftContent.append(username);
          leftContent.append(email);
          leftContent.append(name);
          leftContent.append(password);
          leftContent.append(apassword);
          leftContent.append(role);
          leftContent.append($('<br>'));
          leftContent.append(state);
          $("#updateBody").html($("<div></div>").addClass("row-fluid").append(leftContent));
          $("input[name='id']").val(obj.data.id);
          $("input[name='username2']").val(obj.data.username);
          $("input[name='name2']").val(obj.data.name);
          $("input[name='email2']").val(obj.data.email);
          $("input[name='udpassword']").val();
          $("input[name='udpassword2']").val();
          var footer = $("<div></div>");
          footer.append(ECon.button({title:'保存',class:'btn btn-success'}).click(function(){
              var update= function() {
                  var options = {
                      type : "post",
                      dataType : "json",
                      url : "updateUser",
                      beforeSubmit : function(){
                      },
                      success : function(){
                          $("#UpdateMode").modal('hide');
                          $("#SaveMode").modal({show:true});
                      },
                      error : function(){
                          $("#UpdateMode").modal('hide');
                          $("#ErrMode").modal({show:true});
                      }
                  };
                  // 异步提交登陆请求
                  $("#UpdateMode").ajaxSubmit(options);
              };
              //表单验证
              $("#UpdateMode").validate(ec.ValidateOption(update).Option);

          }));

          footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
              $("#UpdateMode").modal('hide');
              return false;
          }));
          $("#updateFooter").html(footer);
          $('select').select2();

      }
    },
    DelEvent : function(obj){
        return function(){
            $("#DelMode").modal({show:true});
            $("#delBody").html($('<h4>确认删除 '+obj.data.name+' 这个用户？</h4>').append($("<span id='udid' style='visibility: hidden'>"+obj.data.id+"</span>")));
        }
    },
    AllDelEvent : function(obj){
        return function(){
            $("#DelMode").modal({show:true});
//            var checkbox = $('.widget-box').find('tr td:first-child input:checkbox');
            var num = 0;
            $(':checkbox').each(function(){
                if($(this).attr('checked')){
                    $(this).closest('tr').remove()();
                    num++;
                }
            })
            alert('共删除了【'+num+'】行');
        }
    }
}

ec.UserGroup={
    UpdateEvent :function(obj){
        return function(){
            $("#UpdateMode").modal({show:true});
            var udid = ECon.editbox({name:'id',width:'span5'}).hide();
            var groupname = ECon.editbox({title:'用户组名称（必填）',name:'groupname2',width:'span5'});
            var state = ECon.dropbox({title:'状态',array:['有效','无效'],val:['有效','无效'],name:'state2',width:'span5'});
            var role = ECon.dropbox({title:'角色',array:obj.rolelistname,val:obj.rolelistID,name:'role2',width:'span5',multiple:"multiple",id:"role2"});
            var parArr = ECon.dropbox({title:'父级',array:obj.grouplistname,val:obj.grouplistID,name:'par2',width:'span5'});
            var leftContent =$("<div method='post'></div>").addClass('form-horizontal');
            var describe = ECon.editbox({title:'备注',name:'beizhu2',width:'span5'});
            leftContent.append(udid);
            leftContent.append(groupname);
            leftContent.append(state);
            leftContent.append($('<br>'));
            leftContent.append(parArr);
            leftContent.append($('<br>'));
            leftContent.append(describe);
            leftContent.append(role);
            leftContent.append($('<br>'));
            $("#updateBody").html($("<div></div>").addClass("row-fluid").append(leftContent));
            console.log("修改");
            $("input[name='id']").val(obj.data.id);
            $("input[name='groupname2']").val(obj.data.groupname);
            $("input[name='beizhu2']").val(obj.data.remark);
            var roleselectArr = [];
            for(var i in obj.rolelistname){
                for(var m in obj.data.role){
                    if(obj.data.role[m]==obj.rolelistname[i]){
                        roleselectArr.push(obj.rolelistID[i]);
                    }
                }
            }

            $('select').select2();
            $("#role2").select2('val',roleselectArr);


            var footer = $("<div></div>");
            //bug
            footer.append(ECon.button({title:'保存',class:'btn btn-success'}).click(function(){
                console.log("update 执行了");

                var update= function() {
                    var options = {
                        type : "post",
                        dataType : "json",
                        url : "updateUserGroup",
                        beforeSubmit : function(){
                        },
                        success : function(){
                            $("#UpdateMode").modal('hide');
                            $("#SaveMode").modal({show:true});
                        },
                        error : function(){
                            $("#UpdateMode").modal('hide');
                            $("#ErrMode").modal({show:true});
                        }
                    };
                    // 异步提交登陆请求
                    $("#UpdateMode").ajaxSubmit(options);
                };
                //表单验证
                $("#UpdateMode").validate(ec.ValidateOption(update).Option);

            }));
            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#UpdateMode").modal('hide');

                return false;
            }));
            $("#updateFooter").html(footer);


        }
    },
    DelEvent : function(obj){
        return function(){
            $("#DelMode").modal({show:true});
            $("#delBody").html($('<h4>确认删除 '+obj.data.groupname+' 这个用户？</h4>').append($("<span id='udid' style='visibility: hidden'>"+obj.data.id+"</span>")));
            var footer = $("<div></div>");
            footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'delUserGroup',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        $("#SaveMode").modal({show:true});
                    }
                });
            }));
            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
            }));

            $("#delFooter").html(footer);

        }
    },
    AllDelEvent : function(obj){
        return function(){
            $("#DelMode").modal({show:true});
//            var checkbox = $('.widget-box').find('tr td:first-child input:checkbox');
            var num = 0;
            $(':checkbox').each(function(){
                if($(this).attr('checked')){
                    $(this).closest('tr').remove()();
                    num++;
                }
            })
            alert('共删除了【'+num+'】行');
        }
    }
}
ec.Role = {
    CheckEvent :function(obj){
        return function(){
            $("#NodeCheckMode").modal({show:true});
            console.log(obj.id);
            var pushData = {};
            pushData.id = obj.id
            $.ajax({
                url:"checkNav",
                type:"Post",
                data:pushData,
                error: function(result){},
                success:function(result){
                    var setting = {
                        check: {
                            enable: true,
                            chkDisabledInherit: true
                        },
                        data: {
                            simpleData: {
                                enable: true
                            }
                        }
                    };
                    var zNodes = result.treeList;
                    $.fn.zTree.init($("#treeNode2"), setting, zNodes);
                }
            });
        }
    },
    UpdateEvent:function(obj){

    },
    DelEvent:function(obj){
        return function(){
            $("#DelMode").modal({show:true});
            $("#delBody").html($('<h4>确认删除 '+obj.name+' 这个角色？</h4>').append($("<span id='udid' style='visibility: hidden'>"+obj.id+"</span>")));

        }
     }
}

ec.FLinks = {
    UpdateEvent:function(obj){
        return function(){
            $("#UpdateMode").modal({show:true});
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span12");
            var id = ECon.editbox({name:'id',width:'span6'}).hide();
            var wsname = ECon.editbox({title:'网站名称（必填）',name:'wsname',width:'span6'});
            var wsURL = ECon.editbox({title:'网站地址（必填）',name:'wsurl',width:'span6'});
            var wsms = ECon.editbox({title:'描述',name:'wsms',width:'span6'});
            var leftContent =$("<div method='post'></div>").addClass('form-horizontal');
            leftContent.append(id);
            leftContent.append(wsname);
            leftContent.append(wsURL);
            leftContent.append(wsms);
            leftbox.append(leftContent);
            contentbox.append(leftbox);
            $("#upBody").html(contentbox);
            $("input[name='id']").val(obj.id);
            $("input[name='wsname']").val(obj.wsname);
            $("input[name='wsurl']").val(obj.wsurl);
            $("input[name='wsms']").val(obj.remark);
            var footer = $("<div></div>");
            footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                var addink = function() {
                    var options = {
                        type : "post",
                        dataType : "json",
                        url : "updatelinks",
                        beforeSubmit : function(){
                        },
                        success : function(){
                            $("#UpdateMode").modal('hide');
                            $("#SaveMode").modal({show:true});
                        },
                        error : function(){
                            $("#UpdateMode").modal('hide');
                            $("#ErrMode").modal({show:true});
                        }
                    };
                    // 异步提交登陆请求
                    $("#UpdateMode").ajaxSubmit(options);
                };
                //表单验证
                $("#UpdateMode").validate(ec.ValidateOption(addink).Option);

//                return false;
            }));
            footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#UpdateMode").modal('hide');
                return false;
            }));
            $("#upFooter").html(footer);
        }

    },
    DelEvent:function(obj){
        return function(){
            $("#DelMode").modal({show:true});
            $("#delBody").html($('<h4>确认删除 '+obj.wsname+' 这个友情链接？</h4>').append($("<span id='udid' style='visibility: hidden'>"+obj.id+"</span>")));

        }
    }
}

ec.ValidateOption = function(obj){
    return {
        Option : {
            rules: {
                username: "required",
                username2: "required",
                password: "required",
                password2: {
                    equalTo: "#password"
                },
                udpassword: "required",
                udpassword2: {
                    equalTo: "#udpassword"
                },
                name: "required",
                name2: "required",
                email: { required: true, email: true },
                email2: { required: true, email: true },

                groupname: "required",
                groupname2: "required",

                rolename:"required",
                roleid:"required",

                websitename:"required",
                websiteURL:{ required: true, url: true },
                wsname:"required",
                wsurl:{ required: true, url: true },


                classname:"required",
                aliasname:"required",
                classname2:"required",
                aliasname2:"required",

            },
            messages: {
                username: "请输入用户名",
                name: "请输入姓名",
                password: "请输入密码",
                password2: { equalTo: "两次密码不一致" },
                email: { required: "请输入Email地址", email: "请输入正确的格式：name@moyuan798.com" },
                username2: "请输入用户名",
                name2: "请输入姓名",
                udpassword: "请输入密码",
                udpassword2: { equalTo: "两次密码不一致" },
                email2: { required: "请输入Email地址", email: "请输入正确的格式：name@moyuan798.com" },
                groupname: "请输入用户组名称",
                groupname2: "请输入用户组名称",

                rolename:"请输入角色名称",
                roleid:"请输入角色ID" ,

                websitename:"请输入网站名称",
                websiteURL:{ required: "请输入网址", url: "请输入正确的网址格式：http://www.moyuan798.com" },
                wsname:"请输入网站名称",
                wsurl:{ required: "请输入网址", url: "请输入正确的网址格式：http://www.moyuan798.com" },


                classname:"请输入分类名称",
                aliasname:"请输入分类别名",
                classname2:"请输入分类名称",
                aliasname2:"请输入分类别名",
            },
            errorClass: "help-inline",
            errorElement: "span",
            highlight:function(element, errorClass, validClass) {
                $(element).parents('.control-group').addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).parents('.control-group').removeClass('error');
            },

            /*执行ajaxsubmit  */
            submitHandler: function() {
                obj();
                console.log("执行了");
                return false;
            }
        }
    }
}