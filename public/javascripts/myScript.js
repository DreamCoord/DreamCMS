
var easycms = function(){
    return {
        init :function(){
//          首页
            $("#home").click(function(){
                return easycms().SystemConfig();
            });
//          文章
//          所有文章
            $("#allarticle").click(function(){
                return easycms().AllArticle();
            });
//          添加文章
            $("#addarticle").click(function(){
                return easycms().AddArticle();
            });
            //所有作品
            $("#allworks").click(function(){
                return easycms().AllWorks();
            });
//          添加作品
            $("#addworks").click(function(){
                return easycms().AddWorks();
            });
//          分类
            $("#programa").click(function(){
                return easycms().Classfiy();
            });
//          添加页面
            $("#addpage").click(function(){
                return easycms().AddPage();
            });
//          页面管理
            $("#allpage").click(function(){
                return easycms().Pages();
            });
//          名家推荐管理
            $("#mjtj").click(function(){
                return easycms().Mjtj();
            });
//          会员管理
            $("#hygl").click(function(){
                return easycms().Hygl();
            });
//          Banner管理
            $("#banner").click(function(){
               return easycms().Banner();
            });
//          Banner管理
            $("#hzmt").click(function(){
               return easycms().MediaPartners();
            });
//          多媒体
            $("#media").click(function(){
                easycms().SelectMenu("media");
            });
//          广告
            $("#ad").click(function(){
                easycms().SelectMenu("ad");
            });
////          主题
//            $("#theme").click(function(){
//                easycms().SelectMenu("theme");
//            });
////          插件
//            $("#plugin").click(function(){
//                 easycms().SelectMenu("plugin");
//            });
//          用户
            $("#user").click(function(){
                return easycms().User();
            });
//          用户组
            $("#usergroup").click(function(){
                return easycms().UserGroup();
            });
//          角色
            $("#role").click(function(){
                return easycms().Role();
            });
//          权限
            $("#node").click(function(){
                return easycms().Node();
            });
//          设置
            $("#setting").click(function(){
                return easycms().Setting();
            });
//          友情链接管理
            $("#flinks").click(function(){
                return easycms().FLinks();
            });
//          菜单管理
            $("#menus").click(function(){
                return easycms().Menus();
            });
        },

        SelectMenu:function(id){
             $("#sidebar li").filter(".active").removeClass("active");
             $("#"+id).addClass("active");
        },
        SelectTabMenu:function(id){
            $("#"+id).trigger("click");
        },
        SystemConfig : function(){
            easycms().SelectMenu("home");






            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"运行概要",icon:"icon-home"}]});
            par.append(header);

            var contentfluid = $('<div></div>').addClass("container-fluid");

            par.append(contentfluid);

            var content2 = $("<div></div>").addClass('row-fluid');

            var artlist = $('<ul class="recent-posts"></ul>');
            artlist.append($('<li><div class="user-thumb"> <img width="40" height="40" alt="User" src="../public/img/demo/av1.jpg"> </div><div class="article-post"> <span class="user-info"> 时间 </span>                <p><a href="#">文章测试123</a> </p> </div> </li>'));
            artlist.append($('<li><div class="user-thumb"> <img width="40" height="40" alt="User" src="../public/img/demo/av1.jpg"> </div> <div class="article-post"> <span class="user-info"> 时间 </span>                <p><a href="#">文章测试123</a> </p> </div> </li>'));
            artlist.append($('<li><div class="user-thumb"> <img width="40" height="40" alt="User" src="../public/img/demo/av1.jpg"> </div> <div class="article-post"> <span class="user-info"> 时间 </span>                <p><a href="#">文章测试123</a> </p> </div> </li>'));
            var artbox = ECon.widgetbox({title:"最新文章",icon:"icon-align-justify",content:artlist});
            content2.append($('<div class="span6"></div>').append( artbox));



            var worklist = $('<ul class="recent-posts"></ul>');
            worklist.append($('<li><div class="user-thumb"> <img width="40" height="40" alt="User" src="../public/img/demo/av1.jpg"> </div>                  <div class="article-post"> <span class="user-info"> 时间 </span>                <p><a href="#">文章测试123</a> </p> </div> </li>'));
            worklist.append($('<li><div class="user-thumb"> <img width="40" height="40" alt="User" src="../public/img/demo/av1.jpg"> </div>                  <div class="article-post"> <span class="user-info"> 时间 </span>                <p><a href="#">文章测试123</a> </p> </div> </li>'));
            worklist.append($('<li><div class="user-thumb"> <img width="40" height="40" alt="User" src="../public/img/demo/av1.jpg"> </div>                  <div class="article-post"> <span class="user-info"> 时间 </span>                <p><a href="#">文章测试123</a> </p> </div> </li>'));
            var workbox = ECon.widgetbox({title:"最新作品",icon:"icon-align-justify",content:worklist});
            content2.append($('<div class="span6"></div>').append( workbox));




            contentfluid.append($('<div></div>').append(content2));
            contentfluid.append($('<hr/>'));

            var wzfxbox = $('<div class="row-fluid"></div>');
            wzfxbox.append($('<div class="span8"><div class="chart"></div> </div>'));
            var sitestats = $('<ul class="stat-boxes2"></ul>');
            sitestats.append($('<li><div class="left peity_bar_neutral"><span><span style="display: none;">2,4,9,7,12,10,12</span><canvas width="50" height="24"></canvas></span>+10%</div><div class="right"> <strong>12</strong> 总访问量 </div> </li>'));
            sitestats.append($('<li><div class="left peity_line_neutral"><span><span style="display: none;">12,6,9,23,14,10,17</span><canvas width="50" height="24"></canvas></span>+10%</div><div class="right"> <strong>2</strong> 今日访问量 </div> </li>'));
            sitestats.append($('<li><div class="left peity_bar_good"><span><span style="display: none;">10,15,8,14,13,10,10,15</span><canvas width="50" height="24"></canvas></span>+10%</div><div class="right"> <strong>33</strong> 新闻数量 </div> </li>'));
            sitestats.append($('<li><div class="left peity_line_good"><span><span style="display: none;">3,5,6,16,8,10,6</span><canvas width="50" height="24"></canvas></span>+10%</div><div class="right"> <strong>14</strong> 作品数量 </div> </li>'));
            sitestats.append($('<li><div class="left peity_bar_bad"><span><span style="display: none;">12,4,9,7,12,10,12</span><canvas width="50" height="24"></canvas></span>+10%</div><div class="right"> <strong>1</strong> 会员数量 </div> </li>'));
            sitestats.append($('<li><div class="left peity_line_bad"><span><span style="display: none;">2,4,9,7,12,10,12</span><canvas width="50" height="24"></canvas></span>+10%</div><div class="right"> <strong>2</strong> 运行时间 </div> </li>'));
//            sitestats.append($('<li class="bg_lh"><i class="icon-signal"></i> <strong>2540</strong> <small>总访问量</small></li>'));
//            sitestats.append($('<li class="bg_lh"><i class="icon-signal"></i> <strong>2540</strong> <small>今日访问量</small></li>'));
//            sitestats.append($('<li class="bg_lh"><i class="icon-align-justify"></i> <strong>2540</strong> <small>新闻数量</small></li>'));
//            sitestats.append($('<li class="bg_lh"><i class="icon-tag"></i> <strong>2540</strong> <small>作品数量</small></li>'));
//            sitestats.append($('<li class="bg_lh"><i class="icon-user"></i> <strong>2540</strong> <small>会员数量</small></li>'));
//            sitestats.append($('<li class="bg_lh"><i class="icon-time"></i> <strong>2540</strong> <small>无故障运行时间</small></li>'));
            wzfxbox.append($('<div class="span4"></div>').append(sitestats));
            var content = $("<div></div>").addClass('row-fluid');
            content.append(ECon.widgetbox({title:"网站分析",icon:"icon-signal",content:wzfxbox}));
            contentfluid.append($('<div "></div>').append(content));





            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Classfiy();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });



            var delmodal = {id:'DelMode',
                header : "删除提示",
                body : $("<div></div>").attr("id","delBody"),
                footer : $("<div></div>").attr("id","delFooter")
            };
            var Updatemodal = {id:'UpdateMode',
                header: "更改用户信息",
                body : $("<div></div>").attr("id","updateBody"),
                footer : $("<div></div>").attr("id","updateFooter")
            };
            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(Updatemodal));
            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        },
        AllArticle : function(){
            easycms().SelectMenu("allarticle");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"文章管理",icon:"icon-home"},{title:"所有文章"}]});
            par.append(header);
            $.ajax({
                url: '/admin/allArticle',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var allbox = ECon.boxcheck();
                    var tbodyArr = [];
                    for(var i in result.data){
                        var arry = [];
                        console.log(result.data[i].id);
                        arry.push(ECon.boxcheck());
                        arry.push(result.data[i].title);
                        arry.push(result.data[i].author);
                        arry.push(result.data[i].time);
                        arry.push(result.data[i].tags);
                        arry.push(result.data[i].time);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        arry.push(czbox);
                        tbodyArr.push(arry);
                        var obj = result.data[i];
                        updateBtn.click(new ec.Article.UpdateEvent(obj));
                        delBtn.click(new ec.Article.DelEvent(obj));
                    }
                    var table = ECon.tableview({thead:[allbox,"标题","作者","分类","标签","时间","操作"],tbody:tbodyArr});
                    var content = $("<div></div>").addClass('row-fluid');
                    content.append(ECon.widgetbox({title:"所有文章",icon:"icon-home",content:table}));
                    par.append($('<div class="container-fluid"></div>').append(content));

                    ec.comstyle.TablStyle();

                }
            });
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Classfiy();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });



            var delmodal = {id:'DelMode',
                header : "删除提示",
                body : $("<div></div>").attr("id","delBody"),
                footer : $("<div></div>").attr("id","delFooter")
            };
            var Updatemodal = {id:'UpdateMode',
                header: "更改用户信息",
                body : $("<div></div>").attr("id","updateBody"),
                footer : $("<div></div>").attr("id","updateFooter")
            };
            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(Updatemodal));
            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        },
        AddArticle:function(){
            easycms().SelectMenu("addarticle");
            var edit;
            //主体框架
            var par = $("<div></div>");//.addClass('row-fluid');

            //标题
            var header = ECon.headerview({nav:[{title:"文章管理",icon:"icon-home"},{title:"文章上传"}]});
            par.append(header);

            //标题输入框
            var titleEditView = ECon.editview({width:'span12',title:"文章标题",name:"titleStr"}).css("margin-bottom","20px");
            var controls = ECon.controls();
            controls.append(titleEditView);

            //内容输入
            var content = $('<textarea id="contentStr" name="content" style="height:500px;visibility:hidden;" class="span12" ></textarea>');
            controls.append(content);
            var formbox =$("<div></div>").addClass('form-horizontal');

            //发布选项
            var widgetRightBox = ECon.controls().addClass('row-fluid');
            var cgbtn = ECon.button({class:' ',title:"保存草稿"});
//                widgetRightBox.append(cgbtn);
//                widgetRightBox.append($('<hr style="margin-left: -20px;margin-top: 10px">'));

            //发布
            //状态
            var statedivS = $("<div></div>");
            var state = $('<span>状态：</span>');
            var statetext = $('<strong id="statetext">草稿 </strong>');
            var statebtn =ECon.button({class:'btn-success btn-mini',title:"修改"}).attr("id","updatebtn").css("margin-left","20px").click(function(){
                $("#statediv").show();
                $("#updatebtn").hide();
            });
            statedivS.append(state);
            statedivS.append(statetext);
            statedivS.append(statebtn);

            //隐藏区域
            var statediv = $("<div id='statediv'></div>").hide();
            var statedrop = ECon.defaultdropbox({array:['草稿','等待审核'],id:'statedrop'});
            var statebtnq =ECon.button({class:'btn-success btn-mini',title:"确认"}).css("margin-left","20px").click(function(){
                $("#statediv").hide();
                $("#updatebtn").show();

                $("#statetext").html($("#statedrop").find("option:selected").text());
            });;
            var statebtnb =ECon.button({class:' btn-mini',title:"取消"}).css("margin-left","20px").click(function(){
                $("#statediv").hide();
                $("#updatebtn").show();
            });;
            statediv.append(statedrop);
            statediv.append(statebtnq);
            statediv.append(statebtnb);

            widgetRightBox.append(statedivS);
            widgetRightBox.append(statediv);
            widgetRightBox.append( $('<hr style="margin-left: -20px;margin-top: 10px">'));
            //置顶
            var  stickdivS = $("<div></div>");
            var  stick = $('<span>是否置顶：</span>');
            var  sticktext = $('<strong   id="sticktext">否</strong>');
            var  stickbtn =ECon.button({class:'btn-success btn-mini',title:"修改"}).attr("id","stickbtn").css("margin-left","20px").click(function(){
                $("#stickdiv").show();
                $("#stickbtn").hide();
            });
            stickdivS.append(stick);
            stickdivS.append(sticktext);
            stickdivS.append(stickbtn);

            //隐藏区域
            var stickdiv = $("<div id='stickdiv'></div>").hide();
            var stickdrop = ECon.defaultdropbox({array:['是','否'],id:'stickdrop'});
            var stickbtnq =ECon.button({class:'btn-success btn-mini',title:"确认"}).css("margin-left","20px").click(function(){
                $("#stickdiv").hide();
                $("#stickbtn").show();

                $("#sticktext").html($("#stickdrop").find("option:selected").text());
            });;
            var stickbtnb =ECon.button({class:' btn-mini',title:"取消"}).css("margin-left","20px").click(function(){
                $("#stickdiv").hide();
                $("#stickbtn").show();
            });;
            stickdiv.append(stickdrop);
            stickdiv.append(stickbtnq);
            stickdiv.append(stickbtnb);

            widgetRightBox.append(stickdivS);
            widgetRightBox.append(stickdiv);
            widgetRightBox.append( $('<hr style="margin-left: -20px;margin-top: 10px">'));
            //发布时间
            var timeDivs = $("<div></div>");
            var time = $('<i class="icon-time"></i> <strong id="time">立即</strong><span>发布</span>');
            var timebtnq =ECon.button({class:'btn-success btn-mini',title:"修改"}).attr("id","timebtnq").css("margin-left","20px").click(function(){
                $("#timeDiv").show();
                $("#timebtnq").hide();
            });
            timeDivs.append(time);
            timeDivs.append(timebtnq);

            var timeDiv = $("<div id='timeDiv'></div>").hide();
//                var timeStr = $('<input type="text" data-date="2013-11-30" data-date-format="yyyy-mm-dd" value="2013-11-30" class="datepicker span11">').addClass("span3");


            var timeStr = $('<div class="input-append date form_datetime span5" data-date="2012-12-21T15:25:00Z">'+
                '<input id = "date"size="16" type="text" value="" readonly class="span9">'+
                '<span class="add-on"><i class="icon-remove"></i></span>'+
                '<span class="add-on"><i class="icon-th"></i></span>'+
                '</div>');

            var timebtn =ECon.button({class:'btn-success btn-mini',title:"确认"}).css({'margin-left':'20px','margin-top':'3px'}).click(function(){
                $("#timeDiv").hide();
                $("#timebtnq").show();

                $("#time").html($("#date").val());
            });;
            var timebtnb =ECon.button({class:' btn-mini',title:"取消"}).css({'margin-left':'10px','margin-top':'3px'}).click(function(){
                $("#timeDiv").hide();
                $("#timebtnq").show();
            });;
            timeDiv.append(timeStr);

            timeDiv.append(timebtn);
            timeDiv.append(timebtnb);
            widgetRightBox.append(timeDivs);
            widgetRightBox.append(timeDiv);
            widgetRightBox.append($('<hr style="margin-left: -20px;margin-top: 10px">'));
            var fbbtn = $("<button type='submit' class='btn btn-primary  btn-large'>发布</button>").css({"float":"right",marginRight:'30px'}).click(function(){
                edit.sync();
                var selectCheck = getChildNodes();
                var pushData ={};
                pushData.titleStr =$("input[name='titleStr']").val();
                pushData.contentStr =$("#contentStr").val();
                pushData.author = "zuozhe";
                pushData.state = $("#statetext").text();
                pushData.top = $("#sticktext").text();
                pushData.time = $("#time").text();
                pushData.classify = selectCheck;
                pushData.tags = $("input[name='tags']").val();
                console.log( pushData.tags );
                $.ajax({
                    url: 'addArticle',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        console.log(result);
                    }
                });
            });
            widgetRightBox.append(fbbtn);
            var fbbox =ECon.widgetbox({title:"发布",icon:"icon-home",content:widgetRightBox}).addClass('span12').css('margin-left',' 0px');

            var flbox =ECon.widgetbox({title:"分类",icon:"icon-home",content:$('<ul id="treeDemo" class="ztree"></ul>')}).addClass('span12').css('margin-left',' 0px');
            var bqcon = ECon.controls();
            var bqinput = ECon.editview({width:'span8',title:'标签',name:"tags"});
            bqcon.append(bqinput);

            bqcon.append($("<br>"));
            bqcon.append("多个标签请用英文逗号（,）分开");
//                            var bqbox =ECon.widgetbox({title:"标签",icon:"icon-home",content:bqcon}).addClass('span12').css('margin-left',' 0px');
            var contentDiv = $("<div></div>").addClass('row-fluid');
            contentDiv.append($('<div class="span8"></div>').append( controls));
            contentDiv.append($('<div class="span4"></div>').append( fbbox).append(flbox));
            formbox.append(contentDiv);
            par.append(ECon.widgetbox({title:"添加文章",icon:"icon-home",content:formbox}));
            $("#content").html(par);
            $(".form_datetime").datetimepicker({
                language:  'zh-CN',
                showMeridian: true,
                autoclose: true,
                todayBtn: true
            });
            $(".form-horizontal .controls").css({'margin-left':"20px"});
            $('select').select2();





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

            edit = KindEditor.create('textarea[name="content"]', {
                uploadJson : '../imgUpload',
                fileManagerJson : '../fileManager',
                allowFileManager : true,
                items:[
                    'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                    'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                    'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                    'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                    'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                    'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
                    'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
                    'anchor', 'link', 'unlink'
                ]
            });
            $.ajax({
                url: '/admin/allArtClass',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    var zNodes =result.classList;
                    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
                }
            });
            function getChildNodes() {
                var returnArr = []
                var treeObj=$.fn.zTree.getZTreeObj("treeDemo"),
                    nodes=treeObj.getCheckedNodes(true),
                    v="";
                for(var i=0;i<nodes.length;i++){
                    v+=nodes[i].name + ",";
                    returnArr.push(nodes[i].id); //获取选中节点的值
                }
                return returnArr;
            }
        },
        AllWorks : function(){
            easycms().SelectMenu("allworks");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"作品管理",icon:"icon-home"},{title:"所有作品"}]});
            par.append(header);
            $.ajax({
                url: '/admin/allWorks',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var allbox = ECon.boxcheck();
                    var tbodyArr = [];
                    for(var i in result.data){
                        var arry = [];
                        console.log(result.data[i].id);
                        arry.push(ECon.boxcheck());
                        arry.push(result.data[i].title);
                        arry.push(result.data[i].author);
                        arry.push(result.data[i].createtime);
                        arry.push(result.data[i].classify);
                        arry.push(result.data[i].time);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        arry.push(czbox);
                        tbodyArr.push(arry);
                        var obj = result.data[i];
                        updateBtn.click(new ec.Article.UpdateEvent(obj));
                        delBtn.click(new ec.Article.DelEvent(obj));
                    }
                    var table = ECon.tableview({thead:[allbox,"标题","作者","创作时间","作品类型","上传时间","操作"],tbody:tbodyArr});
                    var content = $("<div></div>").addClass('row-fluid');
                    content.append(ECon.widgetbox({title:"所有作品",icon:"icon-home",content:table}));
                    par.append($('<div class="container-fluid"></div>').append(content));

                    ec.comstyle.TablStyle();

                }
            });
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Classfiy();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });



            var delmodal = {id:'DelMode',
                header : "删除提示",
                body : $("<div></div>").attr("id","delBody"),
                footer : $("<div></div>").attr("id","delFooter")
            };
            var Updatemodal = {id:'UpdateMode',
                header: "更改用户信息",
                body : $("<div></div>").attr("id","updateBody"),
                footer : $("<div></div>").attr("id","updateFooter")
            };
            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(Updatemodal));
            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        },
        AddWorks : function(){
            easycms().SelectMenu("addworks");
            var edit;
            //主体框架
            var par = $("<div></div>");//.addClass('row-fluid');

            //标题
            var header = ECon.headerview({nav:[{title:"作品管理",icon:"icon-home"},{title:"作品上传"}]});
            par.append(header);

            //标题输入框
            var controls = ECon.controls();
            controls.append(ECon.editview({width:'span12',name:"treeclass"}).hide());
            controls.append(ECon.editview({width:'span12',title:"作品标题",name:"title"}).css("margin-bottom","20px"));
            controls.append(ECon.editview({width:'span3',title:"规格 (单位cm)",name:"size"}));
            controls.append(ECon.editview({width:'span3',title:"材质",name:"texture"}).css("margin-left","21px"));
            controls.append(ECon.editview({width:'span3',title:"创作年代",name:"time"}).css("margin-left","22px"));
            controls.append(ECon.editview({width:'span3',title:"作者",name:"author"}).css("margin-left","22px"));
            controls.append(ECon.textviewislabel({width:'span12',title:"简介",name:"remark"}).css("margin-top","20px"));
            controls.append($('<div class="controls"><input type="file" id="photo" name="image" />  </div>'));
            //内容输入
//            var content = $('<textarea id="contentStr" name="content" style="height:500px;visibility:hidden;" class="span12" ></textarea>');
//            controls.append(content);
            var formbox =$("<form id='form-wizard' method='post'></form>").addClass('form-horizontal');

            //发布选项
            var widgetRightBox = ECon.controls().addClass('row-fluid');


            var subBtn = ECon.button({title:'发布',class:'btn btn-primary  btn-large'}).css({"float":"right",marginRight:'30px'});
            subBtn.click(function(){
                var data = {};
                $("#treeclass").val(getChildNodes());
//                $("treeclass").val();
                var adduser = function() {
                    var options = {
                        type : "post",
                        dataType : "json",
                        url : "addWorks",
                        beforeSubmit : function(){

//                            data.treeclass = getChildNodes();
//                            return false;
                        },
                        success : function(data){
                            console.log("成功了");
                            $("#modalBody").text(data.state);
                            $("#SaveMode").modal({show:true});
                        },
                        error : function(){
                            $("#ErrMode").modal({show:true});
                        }
                    };
                    // 异步提交登陆请求
                    $("#form-wizard").ajaxSubmit(options);
                };
                //表单验证
                $("#form-wizard").validate(ec.ValidateOption(adduser).Option);


            });
            widgetRightBox.append(subBtn);

            var fbbox =ECon.widgetbox({title:"作品发布",icon:"icon-home",content:widgetRightBox}).addClass('span12').css('margin-left',' 0px');

            var flbox =ECon.widgetbox({title:"作品分类",icon:"icon-home",content:$('<ul id="treeDemo" class="ztree"></ul>')}).addClass('span12').css('margin-left',' 0px');

//                            var bqbox =ECon.widgetbox({title:"标签",icon:"icon-home",content:bqcon}).addClass('span12').css('margin-left',' 0px');
            var contentDiv = $("<div></div>").addClass('row-fluid');
            contentDiv.append($('<div class="span8"></div>').append( controls));
            contentDiv.append($('<div class="span4"></div>').append( fbbox).append(flbox));
            formbox.append(contentDiv);
            par.append(ECon.widgetbox({title:"添加作品",icon:"icon-home",content:formbox}));


            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3 id='modalBody'></h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().AddWorks();
            });
            par.append(ECon.modaldialog(modal));

            $("#content").html(par);

            $(".form-horizontal .controls").css({'margin-left':"20px"});
            $('select').select2();
            $('input[type=file]').uniform({
                fileDefaultText: '没有选择作品',
                fileBtnText: '选择作品',
                fileButtonClass: 'btn btn-success'
            });
            var setting = {
                check: {
                    enable: true,
                    chkDisabledInherit: true,
                    chkStyle:'radio'
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                }
            };
            $.ajax({
                url: '/admin/allWorksClass',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    var zNodes =result.classList;
                    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
                }
            });
            function getChildNodes() {
                var returnArr = 0;
                var treeObj=$.fn.zTree.getZTreeObj("treeDemo"),
                    nodes=treeObj.getCheckedNodes(true),
                    v="";
                for(var i=0;i<nodes.length;i++){
                    v+=nodes[i].name ;
                    returnArr = nodes[i].id; //获取选中节点的值
                    return  returnArr;
                }
                return returnArr;
            }
            //图片格式判断
            $("#photo").change( function(){
                var filepath=$("input[name='image']").val();
                var extStart=filepath.lastIndexOf(".");
                var ext=filepath.substring(extStart,filepath.length).toUpperCase();
                if(ext!=".BMP"&&ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"&&ext!=".JPEG"){
                    alert("图片限于bmp,png,gif,jpeg,jpg格式");
                    return false;
                }
                var file_size = 0;
                if ( $.browser.msie) {
                    var img=new Image();
                    img.src=filepath;
                    while(true){
                        if(img.fileSize > 0){
                            if(img.fileSize>1024){

                                alert("图片不大于1MB。");
                            }else{
                                var num03 = img.fileSize/1024;
                                num04 = num03.toFixed(2)
                                $(".size02").text(num04+"KB");
                            }
                            break;
                        }
                    }
                } else {
                    file_size = this.files[0].size;
                    console.log(file_size/1024/1024 + " MB");

                    var size = file_size / 1024;
                    if(size > 1024){
                        alert("图片不大于1MB！");
                    }else{
                        var num01 = file_size/1024;
                        num02 = num01.toFixed(2)
                        $("#size01").text(num02 + " KB");
                    }
                }
                return true;
            });
        },
        Classfiy : function(){
            easycms().SelectMenu("programa");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"分类",icon:"icon-home"},{title:"分类目录"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            $.ajax({
                url: '/admin/allClassify',
                type: 'get',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    var textArr = [];
                    var valArr = [];
                    valArr.push(0);
                    textArr.push("无父级");
                    for(var i=0;i<result.pArr.length;i++){
                        valArr.push(result.pArr[i][0]);
                        textArr.push(result.pArr[i][1]);
                    }

                    var leftbox = $("<div></div>").attr("class","span6");
                    var name = ECon.editbox({title:'名称',name:'classname',width:'span5'});
                    var alias = ECon.editbox({title:'别名',name:'aliasname',width:'span5'});
                    var describe = ECon.editbox({title:'描述',name:"miaoshu",width:'span5'});
                    var dropbox = ECon.dropbox({title:'父级',array:textArr,val:valArr,name:"parName"});
                    var leftContent = $("<form method='post'></form>").addClass('form-horizontal').attr("id","form-wizard");
                    leftContent.append(name);
                    leftContent.append($('<span style="margin-left: 200px">这将是它在站点上显示的名字。</span>'));
                    leftContent.append(alias);
                    leftContent.append(dropbox);
                    leftContent.append($("<br/>"));
                    leftContent.append(describe);
                    leftContent.append($('<span style="margin-left: 200px">描述只会在一部分主题中显示。</span>'));
                    leftContent.append($('<hr>'));
                    leftContent.append(ECon.button({title:'添加新的分类',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'}).click(function(){

                        var addclass = function() {
                            var options = {
                                type : "post",
                                dataType : "json",
                                url : "addClassify",
                                beforeSubmit : function(){
                                },
                                success : function(){
                                    $("#SaveMode").modal({show:true});
                                },
                                error : function(){
                                    $("#ErrMode").modal({show:true});
                                }
                            };
                            // 异步提交登陆请求
                            $("#form-wizard").ajaxSubmit(options);
                        };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(addclass).Option);
                    }));


                    leftbox.append(ECon.widgetbox({title:"添加分类",icon:"icon-home",content:leftContent}));
                    var rightbox = $("<div></div>").attr("class","span6");

                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
//                        czbox.append(updateBtn).append(delBtn);
                    var tbodyArr = [];
                    for(var i in result.classList){
                        var array = [];
                        array.push(ECon.boxcheck());
                        array.push(result.classList[i].name);
                        array.push(result.classList[i].alias);
                        array.push(result.classList[i].pid);
                        array.push(result.classList[i].miaoshu);
                        array.push(result.classList[i].sumart);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbodyArr.push(array);
                        var obj = {};
                        obj.data = result.classList[i];
                        obj.valArr = valArr;
                        obj.textArr = textArr;
                        updateBtn.click(new ec.Classfiy.UpdateEvent(obj));
                        delBtn.click(new ec.Classfiy.DelEvent(obj));
                    }
                    var table = ECon.tableview({thead:[ECon.boxcheck(),"名称","别名","父分类","描述","文章","操作"],tbody:tbodyArr});
                    rightbox.append(ECon.widgetbox({title:"所有分类",icon:"icon-home",content:table}));
                    par.append(contentbox);
                    ec.comstyle.TablStyle();




                }
            });



            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Classfiy();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });



            var delmodal = {id:'DelMode',
                header : "删除提示",
                body : $("<div></div>").attr("id","delBody"),
                footer : $("<div></div>").attr("id","delFooter")
            };
            var Updatemodal = {id:'UpdateMode',
                header: "更改用户信息",
                body : $("<div></div>").attr("id","updateBody"),
                footer : $("<div></div>").attr("id","updateFooter")
            };
            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(Updatemodal));
            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);

        },
        Pages : function(){
            easycms().SelectMenu("allpage");
            $.ajax({
                url: '/admin/allPages',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    var par = $("<div></div>");
                    var header = ECon.headerview({nav:[{title:"页面",icon:"icon-home"},{title:"所有页面"}]});
                    par.append(header);
                    var tbodyArr = [];
                    for(var i in result.pagelist){
                        var array = [];
                        array.push(ECon.boxcheck());
                        array.push(result.pagelist[i].title);
                        array.push(result.pagelist[i].author);
                        array.push(result.pagelist[i].createtime);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbodyArr.push(array);
                    }





                    var table = ECon.tableview({thead:[ECon.boxcheck(),"页面名称","编辑人员","创建时间","操作"],tbody:tbodyArr});

                    var content = $("<div></div>").addClass('row-fluid');
                    content.append(ECon.widgetbox({title:"所有页面",icon:"icon-home",content:table}));
                    par.append($('<div class="container-fluid"></div>').append(content));
                    $("#content").html(par);
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
            });
        },
        AddPage : function(){
            var editor;
            easycms().SelectMenu("addpage");
            var par = $("<div></div>");//.addClass('row-fluid');
            var header = ECon.headerview({nav:[{title:"页面管理",icon:"icon-home"},{title:"添加页面"}]});
            par.append(header);
            var titleEditView = ECon.editview({width:'span12',title:"页面名称",name:"titleStr"}).css("margin-bottom","20px");
            var controls = ECon.controls().attr('style','margin-left:"-20px"');
            controls.append($("<div class='span12'></div>").append(titleEditView));
            var content = $('<textarea id="editor_id" name="content" style="height:500px;visibility:hidden;" class="span12" ></textarea>');
            controls.append(content);
            var formbox = $("<div></div>").addClass('form-horizontal');
            var widgetRightBox = ECon.controls().addClass('row-fluid');
//                var cgbtn = ECon.button({class:' ',title:"保存草稿"});
//                widgetRightBox.append(cgbtn);
//                widgetRightBox.append($('<hr>'));
//                var state = $('<h6>状态</h5>');
//                widgetRightBox.append(state);
//                var state = $('<h6>公开程度</h5>');
//                widgetRightBox.append(state);
//                var state = $('<h6>立即发布</h5>');
//                widgetRightBox.append(state);
//                widgetRightBox.append($('<hr>'));
            var fbbtn = $("<button class='btn btn-primary  btn-large'>发布</button>").css({"float":"right",marginRight:'30px'});
            widgetRightBox.append(fbbtn);
            var fbbox =ECon.widgetbox({title:"发布",icon:"icon-home",content:widgetRightBox}).addClass('span12').css('margin-left',' 0px');
            var flcon = ECon.controls();
            fbbtn.click(function(){
                var pushData ={};
                pushData.titleStr =$("input[name='titleStr']").val();
                editor.sync();
                pushData.contentStr =$("#editor_id").val();

                console.log( $("#editor_id").val());
                $.ajax({
                    url: 'addPage',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        console.log(result);
                    }
                });
            });




//                var bqcon = ECon.controls();
//                var bqinput =  ECon.dropbox({title:'父级',array:[12,33,44,55],val:[1,2,3,4]});
//                bqcon.append(bqinput);
//                var bqinput =  ECon.editbox({title:'排序',name:'paixu'});
////                bqcon.append(bqinput);
//                var bqbox =ECon.widgetbox({title:"页面属性",icon:"icon-home",content:bqcon}).addClass('span12').css('margin-left',' 0px');



            var contentDiv = $("<div></div>").addClass('row-fluid');
            contentDiv.append($('<div class="span8"></div>').append( controls));
            contentDiv.append($('<div class="span4"></div>').append( fbbox));//.append(bqbox));
            formbox.append(contentDiv);
            par.append(ECon.widgetbox({title:"添加页面",icon:"icon-home",content:formbox}));
            $("#content").html(par);
            $(".form-horizontal .controls").css({'margin-left':"20px"});
            editor = KindEditor.create('textarea[name="content"]', {
                uploadJson : '../imgUpload',
                fileManagerJson : '../fileManager',
                allowFileManager : true
            });
        },
        Mjtj : function(){
            easycms().SelectMenu("mjtj");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"作者管理",icon:"icon-home"},{title:"名家推荐"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");
            $.ajax({
                url: 'allMember',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var zuojiaArr = [];
                    var zuojiaID = [];
                    for(var i in result.data){
                        zuojiaArr.push(result.data[i].username);
                        zuojiaID.push(result.data[i].id);
                    }
                    //生成添加用户区域
                    var zjid = ECon.dropbox({title:'作家账号',array:zuojiaArr,val:zuojiaID,name:'zjid'});
                    var leftContent =$("<form id='form-wizard'></form>").addClass('form-horizontal');
                    leftContent.append(zjid.css('margin-top','10px'));
                    leftContent.append($('<br>'));
                    leftContent.append($('<hr>'));
                    var subBtn = ECon.button({title:'添加推荐',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
                    subBtn.click(function(){
                        var adduser = function() {
                            var options = {
                                type : "post",
                                dataType : "json",
                                url : "addHytj",
                                beforeSubmit : function(){
                                },
                                success : function(){
                                    $("#SaveMode").modal({show:true});
                                },
                                error : function(){
                                    $("#ErrMode").modal({show:true});
                                }
                            };
                            // 异步提交登陆请求
                            $("#form-wizard").ajaxSubmit(options);
                        };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(adduser).Option);
                    });
                    leftContent.append(subBtn);


                    leftbox.append(ECon.widgetbox({title:"添加作者推荐",icon:"icon-home",content:leftContent}));
                    $('select').select2();
                }
            });

            $.ajax({
                url: 'allHytj',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var rightbox = $("<div></div>").attr("class","span6");

                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        console.log(i);
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].username);
                        array.push(data[i].name);
                        array.push(data[i].grade);
                        array.push($('<img src='+ data[i].icon+'>'));
                        array.push(data[i].remark);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"作者账号","作者姓名","会员等级","头像","备注","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
//                    content.append($("<div></div>").addClass("fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix").append(ECon.paginationbox({list:[1,2,3,4,5,6,7]})));
                    rightbox.append(ECon.widgetbox({title:"所有推荐作者",icon:"icon-home",content:table}));


                    ec.comstyle.TablStyle();
                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>添加成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Mjtj();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>添加失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });

            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        } ,
        Hygl : function(){
            easycms().SelectMenu("hygl");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"作者管理",icon:"icon-home"},{title:"会员管理"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");

            $.ajax({
                url: 'allDengji',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var dengjiarr = [];
                    var dengid = [];
                    for(var i in result.data){
                        dengjiarr.push(result.data[i][1]);
                        dengid.push(result.data[i][0]);
                    }

                        var username = ECon.editbox({title:'作家账号',name:'username',width:'span5',type:"text"});
                        var name = ECon.editbox({title:'作家姓名',name:'name',width:'span5',type:"text"});
                        var email = ECon.editbox({title:'邮箱地址',name:'email',width:'span5',type:"text"});
                        var image = $('<div class="control-group"><label class="control-label">头像 : </label><div class="controls"><input type="file" id="photo" name="image" />  </div></div>');
                        var dengji = ECon.dropbox({title:'会员等级',array:dengjiarr,val:dengid,name:'dengji'});
                        var password = ECon.editbox({title:'密码',name:'password',width:'span5',type:"password"});
                        var password2 = ECon.editbox({title:'确认密码',name:'password2',width:'span5',type:"password"});
                        var state =ECon.textviewbox({title:'简介',name:'remark',width:'span5',type:"text"});
                        var leftContent =$("<form id='form-wizard'></form>").addClass('form-horizontal');
                        leftContent.append(username);
                        leftContent.append(name);
                        leftContent.append(email);
                        leftContent.append(image);
                        leftContent.append(dengji);
                        leftContent.append($('<br>'));
                        leftContent.append(password);
                        leftContent.append(password2);
                        leftContent.append(state.css('margin-top','10px'));
                        leftContent.append($('<br>'));
                        leftContent.append($('<hr>'));
                        var subBtn = ECon.button({title:'添加新会员',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
                        subBtn.click(function(){
                            var adduser = function() {
                                var options = {
                                    type : "post",
                                    dataType : "json",
                                    url : "addMember",
                                    beforeSubmit : function(){
                                    },
                                    success : function(){
                                        $("#SaveMode").modal({show:true});
                                    },
                                    error : function(){
                                        $("#ErrMode").modal({show:true});
                                    }
                                };
                                // 异步提交登陆请求
                                $("#form-wizard").ajaxSubmit(options);
                            };
                            //表单验证
                            $("#form-wizard").validate(ec.ValidateOption(adduser).Option);
                        });
                        leftContent.append(subBtn);


                        leftbox.append(ECon.widgetbox({title:"添加新会员",icon:"icon-home",content:leftContent}));
                        $('select').select2();
                }
            });

            $.ajax({
                url: 'allMember',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    console.log(result);
                    var rolelist = result.rolelist;
                    //生成添加用户区域

                    var rightbox = $("<div></div>").attr("class","span6");

                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        console.log(i);
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].username);
                        array.push(data[i].name);
                        array.push(data[i].grade);
                        array.push($('<img src='+ data[i].icon+'>'));
                        array.push(data[i].remark);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"作者账号","作者姓名","会员等级","头像","备注","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
//                    content.append($("<div></div>").addClass("fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix").append(ECon.paginationbox({list:[1,2,3,4,5,6,7]})));
                    rightbox.append(ECon.widgetbox({title:"所有会员信息",icon:"icon-home",content:table}));


                    ec.comstyle.TablStyle();
                    $('input[type=checkbox],input[type=radio],input[type=file]').uniform();
                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>添加成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Hygl();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>添加失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });

            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        } ,
        Banner : function(){
            easycms().SelectMenu("banner");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"多媒体",icon:"icon-home"},{title:"Banner管理"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");
            //生成添加用户区域

            $.ajax({
                url: 'allBannerlist',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    var artidarray = [];
                    var arttitlearray = [];
                    var worksidarray = [];
                    var workstitlearray = [];


                    for(var i in result.artlist){
                        artidarray.push(result.artlist[i].id);
                        arttitlearray.push(result.artlist[i].title);
                    }
                    for(var i in result.worklist){
                        worksidarray.push(result.worklist[i].id);
                        workstitlearray.push(result.worklist[i].title);
                    }


                    var artclass = ECon.editbox({name:'artclass',width:'span5'}).hide();
                    $("input[name='artclass']").val("文章");
                    var title = ECon.editbox({title:'Banner名称',name:'title',width:'span5'});
                    var remark = ECon.editbox({title:'内容',name:'remark',width:'span5'});
                    var image = $('<div class="control-group"><label class="control-label">Banner图片 : </label><div class="controls"><input type="file" id="photo" name="image" />  </div></div>');
                    var ards =   $('<div class="control-group"><label class="control-label">指向类型 : </label><div class="controls"><label class="span2"><input type="radio" name="art"  checked/>  文章</label><label class="span2"><input type="radio" name="art" />  作品</label></div></div>');
                    var ardid =  $('<div></div>');
                    ardid.html(ECon.dropbox({title:'指向文章',array:arttitlearray,val:artidarray,name:'ardid'}));
                    var leftContent =$("<form id='form-wizard'></form>").addClass('form-horizontal');
                    leftContent.append(artclass);
                    leftContent.append(title);
                    leftContent.append(remark);
                    leftContent.append(image);
                    leftContent.append(ards);
                    leftContent.append(ardid);
                    leftContent.append($('<br>'));
                    leftContent.append($('<hr>'));
                    var subBtn = ECon.button({title:'添加新Banner',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
                    subBtn.click(function(){
                        var adduser = function() {
                            var options = {
                                type : "post",
                                dataType : "json",
                                url : "addBanner",
                                beforeSubmit : function(){
                                },
                                success : function(){
                                    $("#SaveMode").modal({show:true});
                                },
                                error : function(){
                                    $("#ErrMode").modal({show:true});
                                }
                            };
                            // 异步提交登陆请求
                            $("#form-wizard").ajaxSubmit(options);
                        };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(adduser).Option);

                    });
                    leftContent.append(subBtn);
                    leftbox.append(ECon.widgetbox({title:"添加Banner",icon:"icon-home",content:leftContent}));
                    ec.comstyle.TablStyle();

                    ards.change(function(){
                        console.log("改变"+$("input[name='art']")[0].checked);
                        console.log("改变"+$("input[name='art']")[1].checked);

                        if($("input[name='art']")[0].checked) {
                            $("input[name='artclass']").val("文章");
                            ardid.html( ECon.dropbox({title:'指向文章',array:arttitlearray,val:artidarray,name:'ardid'}));
                            $('select').select2();

                        } else{
                            $("input[name='artclass']").val("作品");
                            ardid.html(ECon.dropbox({title:'指向文章',array:workstitlearray,val:worksidarray,name:'ardid'}));
                            $('select').select2();
                        }
                    });
                }
            });







            contentbox.append(leftbox);
            $.ajax({
                url: 'allBanner',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var rightbox = $("<div></div>").attr("class","span6");
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        console.log(i);
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].name);
                        array.push(data[i].remark);
                        array.push($('<img src='+data[i].mappath+'/>'));
                        array.push(data[i].artClass);
                        array.push(data[i].artid);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"Banner名称","内容","图片","指向类型","指向文章","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
                    rightbox.append(ECon.widgetbox({title:"所有Banner信息",icon:"icon-home",content:table}));
                    ec.comstyle.TablStyle();


                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>添加成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Banner();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>添加失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });

            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        } ,
        MediaPartners : function(){
            easycms().SelectMenu("hzmt");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"媒体管理",icon:"icon-home"},{title:"合作媒体管理"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");

                    //生成添加用户区域
                    var title = ECon.editbox({title:'媒体名称',name:'title',width:'span5'});
                    var image = $('<div class="control-group"><label class="control-label">媒体封面 : </label><div class="controls"><input type="file" id="photo" name="image" />  </div></div>');
                    var url = ECon.editbox({title:'网址',name:'websiteURL',width:'span5'});
                    var remark = ECon.textviewbox({title:'简介',name:'remark',width:'span5',type:"text"});
                    var leftContent =$("<form id = 'form-wizard'></form>").addClass('form-horizontal');
                    leftContent.append(title);
                    //                leftContent.append($('<hr>'));
                    leftContent.append(image);
                    leftContent.append(url);
                    leftContent.append(remark);
                    leftContent.append($('<hr>'));
                    var subBtn = ECon.button({title:'添加合作媒体',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
            subBtn.click(function(){
                var adduser = function() {
                    var options = {
                        type : "post",
                        dataType : "json",
                        url : "addMediaPar",
                        beforeSubmit : function(){
                        },
                        success : function(){
                            $("#SaveMode").modal({show:true});
                        },
                        error : function(){
                            $("#ErrMode").modal({show:true});
                        }
                    };
                    // 异步提交登陆请求
                    $("#form-wizard").ajaxSubmit(options);
                };
                //表单验证
                $("#form-wizard").validate(ec.ValidateOption(adduser).Option);

            });
            leftContent.append(subBtn);


                    leftbox.append(ECon.widgetbox({title:"添加合作媒体",icon:"icon-home",content:leftContent}));

            $.ajax({
                url: 'allMediaPar',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){

                    var rightbox = $("<div></div>").attr("class","span6");

                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        console.log(i);
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].title);
                        array.push($('<img src='+data[i].mappath+'/>'));
                        array.push(data[i].remark);
                        array.push(data[i].url);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"媒体名称","媒体封面","简介","网址","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
//                    content.append($("<div></div>").addClass("fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix").append(ECon.paginationbox({list:[1,2,3,4,5,6,7]})));
                    rightbox.append(ECon.widgetbox({title:"所有合作媒体",icon:"icon-home",content:table}));

                    ec.comstyle.TablStyle();
                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>添加成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().MediaPartners();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>添加失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });

            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);

        },
        User : function(){
            easycms().SelectMenu("user");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"权限管理",icon:"icon-home"},{title:"用户管理"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");
            $.ajax({
                url: 'allUser',
                type: 'get',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    console.log(result);
                    var grouplistID = [];
                    var grouplistname = [];
                    for(var i in result.grouplist){
                        grouplistID.push(result.grouplist[i][0]);
                        grouplistname.push(result.grouplist[i][1]);
                    }
                    //生成添加用户区域
                    var username = ECon.editbox({title:'用户名（必填）',name:'username',width:'span5'});
                    var email = ECon.editbox({title:'电子邮件（必填）',name:'email',width:'span5'});
                    var name = ECon.editbox({title:'名字',name:'name',width:'span5'});
                    var password = ECon.editbox({title:'密码',name:'password',width:'span5',type:"password"});
                    var apassword = ECon.editbox({title:'确认密码',name:'password2',width:'span5',type:"password"});
                    var role = ECon.dropbox({title:'用户组',array:grouplistname,val:grouplistID,name:'groupid'});
                    var state = ECon.dropbox({title:'状态',array:['有效','无效'],val:['有效','无效'],name:'state'});
                    var leftContent =$("<form method='post'></form>").addClass('form-horizontal').attr("id","form-wizard");
                    leftContent.append(username);
                    leftContent.append(email);
                    leftContent.append(name);
                    leftContent.append(password);
                    leftContent.append(apassword);
                    leftContent.append(role);
                    leftContent.append($('<br>'));
                    leftContent.append(state.css('margin-top','10px'));
                    leftContent.append($('<br>'));
                    leftContent.append($('<hr>'));
                    var subBtn = ECon.button({title:'添加新用户',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
                    subBtn.click(function(){
                          var adduser = function() {
                              var options = {
                                  type : "post",
                                  dataType : "json",
                                  url : "addUser",
                                  beforeSubmit : function(){
                                  },
                                  success : function(){
                                      $("#SaveMode").modal({show:true});
                                  },
                                  error : function(){
                                      $("#ErrMode").modal({show:true});
                                  }
                              };
                              // 异步提交登陆请求
                              $("#form-wizard").ajaxSubmit(options);
                          };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(adduser).Option);

                    });
                    leftContent.append(subBtn);


                    leftbox.append(ECon.widgetbox({title:"添加用户",icon:"icon-home",content:leftContent}));
                    var rightbox = $("<div></div>").attr("class","span6");

                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        var array = [];
                        array.push($('<input type="checkbox" name="id'+data[i].id+'"/>'));
                        array.push(data[i].username);
                        array.push(data[i].name);
                        array.push(data[i].email);
                        array.push(data[i].groupname);
                        array.push(data[i].status);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                        var obj = {};
                        obj.data = data[i];
                        obj.grouplistname =  grouplistname;
                        obj.grouplistID =   grouplistID;
                        updateBtn.click(new ec.User.UpdateEvent(obj));
                        delBtn.click(new ec.User.DelEvent(obj));
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"用户名","姓名","电子邮件","用户组","状态","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
                    var allbtn = ECon.button({title:"选中删除",class:'btn-danger btn-mini'}).css({'float':'right','margin': '8px'});
                    allbtn.click(new ec.User.AllDelEvent(""));
                    rightbox.append(ECon.widgetbox({title:"所有用户",icon:"icon-home",btn:allbtn,content:table}));

                    ec.comstyle.TablStyle();
                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().User();
            });

            var errmodal = {id:'ErrMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });


            var delmodal = {id:'DelMode'};
            delmodal.header = "删除提示";
            delmodal.body = $("<div></div>").attr("id","delBody");
            delmodal.footer = $("<span></span>");

            delmodal.footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'delUser',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        $("#SaveMode").modal({show:true});
                    }
                });
            }));
            delmodal.footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
                return false;
            }));


            var Updatemodal = {id:'UpdateMode'};
            Updatemodal.header = "更改用户信息";
            Updatemodal.body = $("<div></div>").attr("id","updateBody");
            Updatemodal.footer = $("<div></div>").attr("id","updateFooter");



            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(Updatemodal));
            $("#content").html(par);



        },
        UserGroup : function(){
            easycms().SelectMenu("usergroup");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"权限管理",icon:"icon-home"},{title:"用户组管理"}]});
            par.append(header);
            $.ajax({
                url: 'allUserGroup',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    console.log(result);
                    var grouplistID = [];
                    var grouplistname = [];
                    var rolelistID = [];
                    var rolelistname = [];
                    grouplistID.push(0);
                    grouplistname.push("无父级");
                    for(var i in result.grouplist){
                        grouplistID.push(result.grouplist[i][0]);
                        grouplistname.push(result.grouplist[i][1]);
                    }

                    for(var i in result.rolelist){
                        rolelistID.push(result.rolelist[i][0]);
                        rolelistname.push(result.rolelist[i][1]);
                    }

                    var contentbox =  ECon.controls().addClass("row-fluid");
                    var leftbox = $("<div></div>").attr("class","span6");
                    var groupname = ECon.editbox({title:'用户组名称（必填）',name:'groupname',width:'span5'});
                    var state = ECon.dropbox({title:'状态',array:['有效','无效'],val:['有效','无效'],name:'state',width:'span5'});
                    var role = ECon.dropbox({title:'角色',array:rolelistname,val:rolelistID,name:'role',width:'span5',multiple:"multiple",id:"role"});
                    var parArr = ECon.dropbox({title:'父级',array:grouplistname,val:grouplistID,name:'par',width:'span5'});
                    var leftContent =$("<form method='post'></form>").addClass('form-horizontal').attr("id","form-wizard");
                    var describe = ECon.editbox({title:'备注',name:'beizhu',width:'span5'});
                    leftContent.append(groupname);
                    leftContent.append(state);
                    leftContent.append($('<br>'));
                    leftContent.append(parArr);
                    leftContent.append($('<br>'));
                    leftContent.append(describe);
                    leftContent.append(role);
                    leftContent.append($('<br>'));
                    leftContent.append($('<hr>'));
                    leftContent.append(ECon.button({title:'添加用户组',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'}).click(function(){
                        var addusergroup = function() {
                            var options = {
                                type : "post",
                                dataType : "json",
                                url : "addUserGroup",
                                beforeSubmit : function(){
                                },
                                success : function(){
                                    $("#SaveMode").modal({show:true});
                                },
                                error : function(){
                                    $("#ErrMode").modal({show:true});
                                }
                            };
                            // 异步提交登陆请求
                            $("#form-wizard").ajaxSubmit(options);
                        };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(addusergroup).Option);

                    }));
                    leftbox.append(ECon.widgetbox({title:"添加用户组",icon:"icon-home",content:leftContent}));
                    var rightbox = $("<div></div>").attr("class","span6");
                    contentbox.append(leftbox);
                    contentbox.append(rightbox);


                    //角色列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        console.log(i);
                        var array = [];
                        var rolearray = "";
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].groupname);
                        array.push(data[i].groupparname);
                        array.push(data[i].status);

                        for(var m =0;m< data[i].role.length;m++){
                            rolearray+=data[i].role[m];
                            if(m+1<data[i].role.length){
                                rolearray+="<br>";
                            }
                        }
                        array.push(rolearray);
                        array.push(data[i].sumuser);
                        array.push(data[i].remark);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);


                        var obj = {};
                        obj.data = data[i];
                        obj.grouplistname =  grouplistname;
                        obj.grouplistID =   grouplistID;
                        obj.rolelistID = rolelistID;
                        obj.rolelistname = rolelistname;
                        updateBtn.click(new ec.UserGroup.UpdateEvent(obj));
                        delBtn.click(new ec.UserGroup.DelEvent(obj));

                    }

                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"用户组名称","父级用户组","状态","角色","成员数","备注","操作"],tbody:tbody});
                    var allbtn = ECon.button({title:"选中删除",class:'btn-danger btn-mini'}).css({'float':'right','margin': '8px'});
                    rightbox.append(ECon.widgetbox({btn:allbtn,title:"所有用户组",icon:"icon-home",content:table}));
                    par.append(contentbox);

                    ec.comstyle.TablStyle();




                }
            });


            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>添加成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().UserGroup();
            });

            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>添加失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });


            var delmodal = {
                id:'DelMode',
                header:"删除提示",
                body: $("<div></div>").attr("id","delBody"),
                footer:$("<div></div>").attr("id","delFooter")
            };


            var Updatemodal = {
                id:'UpdateMode',
                header:"更改用户信息",
                body: $("<div></div>").attr("id","updateBody"),
                footer:$("<div></div>").attr("id","updateFooter")
            };


            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(Updatemodal));
            $("#content").html(par);
        },
        Role : function(){
            easycms().SelectMenu("role");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"权限管理",icon:"icon-home"},{title:"角色管理"}]});
            par.append(header);
            $.ajax({
                url: 'allRole',
                type: 'get',
//                    dataType: 'html',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    console.log(result);

                    var contentbox =  ECon.controls().addClass("row-fluid");
                    var leftbox = $("<div></div>").attr("class","span6");
                    var rolename = ECon.editbox({title:'角色名称（必填）',name:'rolename',width:'span5'});
                    var roleid = ECon.editbox({title:'角色标识（必填）',name:'roleid',width:'span5'});
                    var state = ECon.dropbox({title:'状态',array:['有效','无效'],val:['有效','无效'],name:'state',width:'span5'});


                    var box = $("<div></div>").attr("class","control-groups");
                    var label = $("<label></label>").attr("class","control-label");
                    label.append("权限");
                    label.append(' : ');
                    box.append(label);
                    box.append(ECon.editbox({name:'node',width:'span5'}).hide());
                    var nodeBtn = ECon.button({title:'管理',class:'btn btn-success'}).css({marginLeft:'20px',marginTop:'10px'});
                    nodeBtn.click(function(){
                       console.log("权限管理");
//                        $("#NodeMode").modal('show');
                        $("#NodeMode").modal({show:true});
                        $.ajax({
                            url:"allNav",
                            type:"get",
                            data:"",
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
                                $.fn.zTree.init($("#treeNode"), setting, zNodes);
                            }
                        });
                        return false;
                    });
                    box.append(nodeBtn);
                    var node =  box  ;
                    var leftContent =$("<form method='post'></form>").addClass('form-horizontal').attr("id","form-wizard");
                    var describe = ECon.textviewbox({title:'备注',name:'remark',width:'span5'});
                    leftContent.append(rolename);
//                leftContent.append($('<hr>'));
                    leftContent.append(roleid);

                    leftContent.append(state);
                    leftContent.append($('<br>'));
                    leftContent.append(node);
                    leftContent.append($('<br>'));
                    leftContent.append(describe);
                    leftContent.append($('<hr>'));
                    leftContent.append(ECon.button({title:'添加新角色',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'}).click(function(){
                        var addrole = function() {
                            var options = {
                                type : "post",
                                dataType : "json",
                                url : "addRole",
                                beforeSubmit : function(){
                                },
                                success : function(){
                                    $("#SaveMode").modal({show:true});
                                },
                                error : function(){
                                    $("#ErrMode").modal({show:true});
                                }
                            };
                            // 异步提交登陆请求
                            $("#form-wizard").ajaxSubmit(options);
                        };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(addrole).Option);

                    }));
                    leftbox.append(ECon.widgetbox({title:"添加角色",icon:"icon-home",content:leftContent}));
                    var rightbox = $("<div></div>").attr("class","span6");
                    contentbox.append(leftbox);
                    contentbox.append(rightbox);


                    //角色列表
                   var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        console.log(i);
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].name);
                        array.push(data[i].roleid);
                        array.push(data[i].status);
                        var checkbtn = ECon.button({title:'查看' ,class:'btn-success btn-mini'});
                        array.push(checkbtn);
                        array.push(data[i].remark);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                        checkbtn.click(new ec.Role.CheckEvent(data[i]));

                        updateBtn.click(ec.Role.UpdateEvent(data[i]));
                        delBtn.click(ec.Role.DelEvent(data[i]));
                    }

                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"角色名称","角色标识","状态","权限","备注","操作"],tbody:tbody});
                    rightbox.append(ECon.widgetbox({title:"所有角色",icon:"icon-home",content:table}));
                    par.append(contentbox);

                    ec.comstyle.TablStyle();
                }
            });


            var nodemodal = {id:'NodeMode'};
            nodemodal.header = "菜单权限管理";

            var mbody = $('<div><ul id="treeNode" class="ztree"></ul></div>');
            nodemodal.body = mbody;
            nodemodal.footer = ECon.button({title:'确定',class:'btn btn-success'}).click(function(){
                function getChildNodes() {
                    var returnArr = []
                    var treeObj=$.fn.zTree.getZTreeObj("treeNode"),
                        nodes=treeObj.getCheckedNodes(true),
                        v="";
                    for(var i=0;i<nodes.length;i++){
                        v+=nodes[i].name + ",";
                        returnArr.push(nodes[i].id); //获取选中节点的值
                    }
                    return returnArr;
                }
                $("input[name='node']").val(getChildNodes());

                $("#NodeMode").modal('hide');
//                easycms().Role();
            });

            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>添加成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Role();
            });

            var checkmodal = {id:'NodeCheckMode'};
            checkmodal.header = "菜单权限查看";

            var checkbody = $('<div><ul id="treeNode2" class="ztree"></ul></div>');
            checkmodal.body = checkbody;
            checkmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#NodeCheckMode").modal('hide');
            });

            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().Role();
            });


            var delmodal = {id:'DelMode'};
            delmodal.header = "删除提示";
            delmodal.body = $("<div></div>").attr("id","delBody");
            delmodal.footer = $("<span></span>");

            delmodal.footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'delRole',
                    type: 'POST',
                    dataType: 'html',
                    data:pushData,
                    error: function(){ $("#ErrMode").modal({show:true});},
                    success: function(result){
                        $("#SaveMode").modal({show:true});
                    }
                });
            }));
            delmodal.footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
            }));

            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(checkmodal));
            par.append(ECon.modaldialog(nodemodal));
            par.append(ECon.modaldialog(modal));
            $("#content").html(par);
        },

//        Node:function(){
//            easycms().SelectMenu("node");
//            $.ajax({
//                url: 'allRole',
//                type: 'get',
////                    dataType: 'html',
//                data:'',
//                error: function(result){alert(result);},
//                success: function(result){
//                    console.log(result);
//                    var par = $("<div></div>");
//                    var header = ECon.headerview({nav:[{title:"权限管理",icon:"icon-home"},{title:"权限管理"}]});
//                    par.append(header);
//                    var contentbox =  ECon.controls().addClass("row-fluid");
//
//                    var rightbox = $("<div></div>").attr("class","span12");
//
//                    contentbox.append(rightbox);
//
//
//                    //角色列表
//                    var tbody = [];
//                    var data = result.data;
//                    for(var i in data){
//                        console.log(i);
//                        var array = [];
//                        array.push($('<input type="checkbox" />'));
//                        array.push(data[i].name);
//                        array.push(data[i].pid);
//                        array.push(data[i].status);
//                        array.push(data[i].node);
//                        array.push(data[i].describe);
//                        var czbox = $("<div></div>");
//                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
//                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
//                        czbox.append(updateBtn).append(delBtn);
//                        array.push(czbox);
//                        tbody.push(array);
//                    }
//
//                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"权限名称","权限标识","状态","权限","描述","操作"],tbody:tbody});
//                    rightbox.append(ECon.widgetbox({title:"所有权限",icon:"icon-home",content:table}));
//                    par.append(contentbox);
//                    $("#content").html(par);
//                    $('.data-table').dataTable({
//                        "bJQueryUI": true,
//                        "sPaginationType": "full_numbers",
//                        "sDom": '<""l>t<"F"fp>',
//                        "oLanguage": {
//                            "sProcessing": "正在加载中......",
//                            "sLengthMenu": "每页显示 _MENU_ 条记录",
//                            "sZeroRecords": "对不起，查询不到相关数据！",
//                            "sEmptyTable": "没有数据存在！",
//                            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
//                            "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
//                            "sSearch": "搜索",
//                            "oPaginate": {
//                                "sFirst": "首页",
//                                "sPrevious": "上一页",
//                                "sNext": "下一页",
//                                "sLast": "末页"
//                            }
//                        }
//                    });
//                    $('select').select2();
//                    $('input[type=checkbox],input[type=radio],input[type=file]').uniform();
//
//                    $("span.icon input:checkbox, th input:checkbox").click(function() {
//                        var checkedStatus = this.checked;
//                        var checkbox = $(this).parents('.widget-box').find('tr td:first-child input:checkbox');
//                        checkbox.each(function() {
//                            this.checked = checkedStatus;
//                            if (checkedStatus == this.checked) {
//                                $(this).closest('.checker > span').removeClass('checked');
//                            }
//                            if (this.checked) {
//                                $(this).closest('.checker > span').addClass('checked');
//                            }
//                        });
//                    });
//                }
//            });
//        },
        Setting : function(){
            easycms().SelectMenu("setting");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"设置",icon:"icon-home"},{title:"常规选项"}]});
            par.append(header);
            $.ajax({
                url: 'getSyscfg',
                type: 'get',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    var contentbox =  ECon.controls().addClass("row-fluid");
                    var leftbox = $("<div></div>").attr("class","span11");
                    var rolename = ECon.editbox({title:'网站标题',name:'websitetitle',width:'span5'});
                    var roleid = ECon.editbox({title:'副标题',name:'websitesubtitle',width:'span5'});
                    var state = ECon.editbox({title:'关键字',name:'keyword',width:'span5'});
                    var leftContent =$("<div></div>").addClass('form-horizontal');
                    leftContent.append(rolename);
                    leftContent.append(roleid);
                    leftContent.append(state);
                    leftContent.append($('<hr>'));
                    leftContent.append(ECon.button({title:'保存更改',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'}).click(function(){
                        var pushData = {};
                        pushData.wstitle = $("input[name='websitetitle']").val();
                        pushData.wssubtitle = $("input[name='websitesubtitle']").val();
                        pushData.keyworks = $("input[name='keyword']").val();
                        $.ajax({
                            url: 'saveSyscfg',
                            type: 'post',
//                    dataType: 'html',
                            data:pushData,
                            error: function(result){alert("errr"+result);},
                            success: function(result){
                                console.log(result);
                                alert(result);
                            }
                        });
                    }));
//                    leftbox.append(ECon.widgetbox({title:"常规选项",icon:"icon-home",content:leftContent}));
//                    contentbox.append(leftbox);
//
//                    par.append(contentbox);


                    var content = $("<div></div>").addClass('row-fluid');
                    content.append(ECon.widgetbox({title:"常规选项",icon:"icon-home",content:leftContent}));
                    par.append($('<div class="container-fluid"></div>').append(content));


                    $("#content").html(par);
                    $("input[name='websitetitle']").val(result.wstitle);
                    $("input[name='websitesubtitle']").val(result.wssubtitle);
                    $("input[name='keyword']").val(result.keyworks);
                }
            });

        },
        FLinks : function(){
            easycms().SelectMenu("flinks");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"系统管理",icon:"icon-home"},{title:"友情链接管理"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");
            $.ajax({
                url: 'alllinks',
                type: 'get',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    //生成添加用户区域
                    var wsname = ECon.editbox({title:'网站名称（必填）',name:'websitename',width:'span5'});
                    var wsURL = ECon.editbox({title:'网站地址（必填）',name:'websiteURL',width:'span5'});
                    var wsms = ECon.editbox({title:'描述',name:'websiteMS',width:'span5'});
                    var leftContent =$("<form method='post'></form>").addClass('form-horizontal').attr("id","form-wizard");
                    leftContent.append(wsname);
                    leftContent.append(wsURL);
                    leftContent.append(wsms);
                    leftContent.append($('<hr>'));
                    var subBtn = ECon.button({title:'添加新链接',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
                    subBtn.click(function(){
                        var addink = function() {
                            var options = {
                                type : "post",
                                dataType : "json",
                                url : "addlinks",
                                beforeSubmit : function(){
                                },
                                success : function(){
                                    $("#SaveMode").modal({show:true});
                                },
                                error : function(){
                                    $("#ErrMode").modal({show:true});
                                }
                            };
                            // 异步提交登陆请求
                            $("#form-wizard").ajaxSubmit(options);
                        };
                        //表单验证
                        $("#form-wizard").validate(ec.ValidateOption(addink).Option);


                    }
                    );
                    leftContent.append(subBtn);
                    leftbox.append(ECon.widgetbox({title:"添加友情链接",icon:"icon-home",content:leftContent}));
                    var rightbox = $("<div></div>").attr("class","span6");
                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.data;
                    for(var i in data){
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].wsname);
                        array.push(data[i].wsurl);
                        array.push(data[i].remark);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                        updateBtn.click(ec.FLinks.UpdateEvent(data[i]));
                        delBtn.click(ec.FLinks.DelEvent(data[i]));
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"网站名称","网站链接","描述","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
                    rightbox.append(ECon.widgetbox({title:"所有友情链接",icon:"icon-home",content:table}));
                    ec.comstyle.TablStyle();
                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().FLinks();
            });
            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });
            var delmodal = {id:'DelMode'};
            delmodal.header = "删除提示";
            delmodal.body = $("<div></div>").attr("id","delBody");
            delmodal.footer = $("<span></span>");

            delmodal.footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'dellinks',
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
            delmodal.footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
                return false;
            }));
            var upmodal = {id:'UpdateMode'};
            upmodal.header = "更改提示";
            upmodal.body = $("<div></div>").attr("id","upBody");
            upmodal.footer = $("<span id='upFooter'></span>");

            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(upmodal));


            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        },
        Menus : function(){
            easycms().SelectMenu("menus");
            var par = $("<div></div>");
            var header = ECon.headerview({nav:[{title:"系统管理",icon:"icon-home"},{title:"菜单管理"}]});
            par.append(header);
            var contentbox =  ECon.controls().addClass("row-fluid");
            var leftbox = $("<div></div>").attr("class","span6");
            $.ajax({
                url: 'allmenus',
                type: 'get',
                data:'',
                error: function(result){alert(result);},
                success: function(result){
                    //生成添加用户区域
                    var pmenus = [];
                    var pmenusid = [];
                    for(var i in result.date){
                        pmenus.push(result.date[i].title);
                        pmenusid.push(result.date[i].id);
                    }

                    var menuname = ECon.editbox({title:'菜单名称（必填）',name:'menuname',width:'span5'});
                    var menutags = ECon.editbox({title:'菜单标签（必填）',name:'menutags',width:'span5'});
                    var pid =  ECon.dropbox({title:'父菜单',array:pmenus,val:pmenusid,name:'pid',width:'span5'});
                    var leftContent =$("<form method='post'></form>").addClass('form-horizontal').attr("id","form-wizard");
                    leftContent.append(menuname);
                    leftContent.append(menutags);
                    leftContent.append(pid);
                    leftContent.append($('<br>'));
                    leftContent.append($('<hr>'));
                    var subBtn = ECon.button({title:'添加新菜单',class:'btn btn-success'}).css({marginLeft:'200px',marginBottom:'30px'});
                    subBtn.click(function(){
                            var addink = function() {
                                var options = {
                                    type : "post",
                                    dataType : "json",
                                    url : "addmenus",
                                    beforeSubmit : function(){
                                    },
                                    success : function(){
                                        $("#SaveMode").modal({show:true});
                                    },
                                    error : function(){
                                        $("#ErrMode").modal({show:true});
                                    }
                                };
                                // 异步提交登陆请求
                                $("#form-wizard").ajaxSubmit(options);
                            };
                            //表单验证
                            $("#form-wizard").validate(ec.ValidateOption(addink).Option);


                        }
                    );
                    leftContent.append(subBtn);
                    leftbox.append(ECon.widgetbox({title:"添加友情链接",icon:"icon-home",content:leftContent}));
                    var rightbox = $("<div></div>").attr("class","span6");
                    contentbox.append(leftbox);
                    contentbox.append(rightbox);
                    //用户列表
                    var tbody = [];
                    var data = result.date;
                    for(var i in data){
                        var array = [];
                        array.push($('<input type="checkbox" />'));
                        array.push(data[i].title);
                        array.push(data[i].tags);
                        array.push(data[i].icons);
                        array.push(data[i].pid);
                        var czbox = $("<div></div>");
                        var updateBtn = ECon.button({title:'修改' ,class:'btn-warning btn-mini'}).css('margin-left','20px');
                        var delBtn = ECon.button({title:'删除' ,class:'btn-danger  btn-mini'}).css('margin-left','20px');
                        czbox.append(updateBtn).append(delBtn);
                        array.push(czbox);
                        tbody.push(array);
                        updateBtn.click(ec.FLinks.UpdateEvent(data[i]));
                        delBtn.click(ec.FLinks.DelEvent(data[i]));
                    }
                    var table = ECon.tableview({thead:[$('<input type="checkbox" />'),"菜单名称","菜单标签","菜单图标","父菜单","操作"],tbody:tbody});
                    var content = $("<div></div>").addClass("dataTables_wrapper").attr('role','grid');
                    content.append(table);
                    rightbox.append(ECon.widgetbox({title:"所有菜单",icon:"icon-home",content:table}));
                    ec.comstyle.TablStyle();
                }
            });

            par.append(contentbox);
            var modal = {id:'SaveMode'};
            modal.header = "提示";
            modal.body = $("<h3>操作成功</h3>");
            modal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
                easycms().FLinks();
            });
            var errmodal = {id:'SaveMode'};
            errmodal.header = "提示";
            errmodal.body = $("<h3>操作失败</h3>");
            errmodal.footer = ECon.button({title:'关闭',class:'btn btn-success'}).click(function(){
                $("#SaveMode").modal('hide');
            });
            var delmodal = {id:'DelMode'};
            delmodal.header = "删除提示";
            delmodal.body = $("<div></div>").attr("id","delBody");
            delmodal.footer = $("<span></span>");

            delmodal.footer.append(ECon.button({title:'确认',class:'btn btn-success'}).click(function(){
                $("#DelMode").modal('hide');
                var pushData = {};
                pushData.id = $("#udid").text();
                $.ajax({
                    url: 'dellinks',
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
            delmodal.footer.append(ECon.button({title:'关闭',class:'btn '}).click(function(){
                $("#DelMode").modal('hide');
                return false;
            }));
            var upmodal = {id:'UpdateMode'};
            upmodal.header = "更改提示";
            upmodal.body = $("<div></div>").attr("id","upBody");
            upmodal.footer = $("<span id='upFooter'></span>");

            par.append(ECon.modaldialog(delmodal));
            par.append(ECon.modaldialog(upmodal));


            par.append(ECon.modaldialog(modal));
            par.append(ECon.modaldialog(errmodal));
            $("#content").html(par);
        }
    }
}
