/**
 * Created by LYW on 13-10-26.
 */
var Main = function(){
    return {
        init:function(){
            var PageContent = $("#page-content");

            $("#system-info").click(function(){
                PageContent.html("系统信息");
                $("#system-info").attr('class','active');
                $("#system-info").parent().parent().attr('class','active');
            });
            $("#role-manage").click(function(){
                var content = $("<div></div>").attr({"class":"row-fluid","id":"main-content"});
                content.append(Main.UserPlan);
                PageContent.html( $("<div></div>").attr("class","container-fluid").append(content));
                Main.userInit();
            });





        },

        UserPlan:function(){
            var par = $("<div></div>").attr("class","span3");
            var box = $("<div></div>").attr({"class":"portlet box grey","style":"min-height:786px"});
            var portlet = $("<div></div>").attr("class","portlet-title");
            var caption = $("<div></div>").attr("class","caption");
            caption.append($("<i class='icon-user'></i>"));
            caption.append("角色管理");
            var buttons = $("<div></div>").attr("class","actions");
            buttons.append($("<a href='javascript:;' id='addUserBtn' class='btn green' style='margin-left: 8px'>添加</a> "));
            buttons.append($("<a href='javascript:;' id='setBtn' class='btn yellow' style='margin-left: 8px'>修改</a> "));
            buttons.append($("<a href='javascript:;' id='delBtn' class='btn red'  style='margin-left: 8px'>删除</a> "));
            portlet.append(caption);
            portlet.append(buttons);
            var portlet_body = $("<div></div>").attr("class","portlet-body");
            var pb_ul = $("<ul></ul>").attr("class","tree");
            var title_li = $('<li><a href="#" data-role="branch" class="tree-toggle" data-toggle="branch" data-value="Bootstrap_Tree"><i class="icon-group"></i>角色列表</a> </li>');

            var subUL = $("<ul></ul>").attr("class","branch in");
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            subUL.append('<li><a href="#" data-role="leaf"><i class="icon-user"></i> admin</a></li>');
            title_li.append(subUL);


            pb_ul.append(title_li);
            portlet_body.append(pb_ul);
            box.append(portlet);
            box.append(portlet_body);

            par.append(box);
            return par;

        },
        addUser:function(){
            var content = $("#main-content");
            var rightPar = $("<div></div>").attr("class","span9");


            content.append(rightPar);
        },
        alterUser:function(){

        },
        delUser:function(){

        },
        userInit:function(){
            $("#addUserBtn").click(function(){
                Main.addUser();
            });
        }
    }

}();