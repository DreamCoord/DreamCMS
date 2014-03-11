var ECon ={
    //按钮
    button:function(obj){
        var box = $("<button></button>").attr({class:'btn'});
        box.addClass(obj.class);
        box.append(obj.title);
        return box;
    },
    //Modal按钮
    modalbutton:function(obj){
        var box = $("<a></a>").attr({class:'btn',href:obj.href,'data-toggle':'modal'});
        box.addClass(obj.class);
        box.append(obj.title);
        return box;
    },
    boxcheck:function(){
        return $('<input type="checkbox" />');
    },
    labelcheck:function(obj){
        return $('<label><input type="checkbox" />'+obj.title+'</label>');
    },
    //输入文本框
    editview:function(obj){
        var type = null;
        if(obj.type == undefined){
            type = 'text';
        }else{
            type = obj.type;
        }
        var input = $("<input>").attr({type:type,class:obj.width,placeholder:obj.title,name:obj.name,id:obj.name});
        return    input;
    },
    controls:function(){
        var box = $("<div></div>").attr("class","controls");
        return box;
    },
    editbox:function(obj){
        var width = null;
        if(obj.width == undefined){
            width = 'span11';
        }else{
            width = obj.width;
        }
        var box = $("<div></div>").attr("class","control-group");
        var label = $("<label></label>").attr("class","control-label");
        label.append(obj.title);
        label.append(' : ');
        box.append(label);
        var editview = ECon.editview({width:width,title:obj.title,name:obj.name,type:obj.type});
        box.append($("<div></div>").addClass('controls').append(editview));
        return box;
    },
    textviewbox:function(obj){
        var width = null;
        if(obj.width == undefined){
            width = 'span11';
        }else{
            width = obj.width;
        }
        var box = $("<div></div>").attr("class","control-groups");
        var label = $("<label></label>").attr("class","control-label");
        label.append(obj.title);
        label.append(' : ');
        box.append(label);
        var input = $("<textarea  style='height: 150px'></textarea>").attr({type:'text',placeholder:obj.title,name:obj.name}).addClass(width);
        box.append($("<div></div>").addClass('controls').append(input));
        return box;
    },
    textviewislabel:function(obj){
        var width = null;
        if(obj.width == undefined){
            width = 'span11';
        }else{
            width = obj.width;
        }
        var box = $("<div></div>").attr("class","control-group");

        var input = $("<textarea  style='height: 150px'></textarea>").attr({type:'text',placeholder:obj.title,name:obj.name}).addClass(width);
        box.append($("<div></div>").append(input));
        return box;
    },
    dropbox:function(obj){
        var width = null;
        if(obj.width == undefined){
            width = 'span5';
        }else{
            width = obj.width;
        }
        var box = $("<div></div>").attr("class","control-groups");
        var label = $("<label></label>").attr("class","control-label");
        label.append(obj.title);
        label.append(' : ');
        box.append(label);
        var select = $("<select "+obj.multiple+"></select>").addClass(width).attr({'name':obj.name,'id':obj.id});
        for(var i in obj.array){

            select.append($('<option>').text(obj.array[i]).val(obj.val[i]));
        }
        box.append($("<div></div>").addClass('controls').append(select));
        return box;
    },

    droptimebox:function(obj){
        var width = null;
        if(obj.width == undefined){
            width = 'span5';
        }else{
            width = obj.width;
        }
        var select = $("<select "+obj.multiple+"></select>").addClass(width).attr('id',obj.id);
        for(var i in obj.array){
            select.append($('<option>').text(obj.array[i]));
        }
        return $("<div></div>").append(select);
    },
    defaultdropbox:function(obj){
        var width = null;
        if(obj.width == undefined){
            width = 'span3';
        }else{
            width = obj.width;
        }
        var select = $("<select "+obj.multiple+"></select>").addClass(width).attr('id',obj.id).css({marginTop:'5px',marginBottom:'5px'});
        for(var i in obj.array){
            select.append($('<option>').text(obj.array[i]));
        }
        return select;
    },
    formbox:function(obj){
        var box = $("<form  enctype='multipart.form-data'></form>").attr({class:"form-horizontal",action:obj.action, method:obj.method });
        return box;
    },
    //内容头部
    headerview:function(obj){
        var box = $("<div id='content-header'></div>");
        var title = $("<div id='breadcrumb'></div>");
        for(var i in obj.nav){
            var hf = $("<a href='javascript:' title="+obj.nav[i].title+" class='tip-bottom'><i class="+obj.nav[i].icon+"></i>"+obj.nav[i].title+"</a>");
            title.append(hf)
        }
        ;


        box.append(title);
        return box;
    },

    //表格
    tableview:function(obj){
        var table = $("<table></table>").attr("class","table table-bordered data-table");
        var thead = $("<thead></thead>");
        var htr = $("<tr></tr>").attr("role","row");
        for (var i in obj.thead){
            var hth = $("<th></th>");
            hth.append(obj.thead[i]);
            htr.append(hth);
        }
        thead.append(htr);
        table.append(thead);
        var tbody = $("<tbody></tbody>").attr({role:'alert','aria-live':'polite','aria-relevant':'all'});
        for(var i in obj.tbody){
            var tr = $("<tr></tr>").addClass("gradeA even");
            for(var j in obj.tbody[i]){

                var td = $("<td></td>").css("text-align","center");
                td.append(obj.tbody[i][j]);
                tr.append(td);
            }
            tbody.append(tr);
        }
        table.append(tbody);
        return table;
    },
    widgetbox:function(obj){
        var box = $("<div></div>").attr({"class":"widget-box"});
        var title = $("<div></div>").attr("class","widget-title");
        title.append($('<span class="icon"><i class='+obj.icon+'></i></span>'));
        title.append($("<h5>"+obj.title+"</h5>"));
        title.append(obj.btn);
        box.append(title);
        var content = $("<div></div>").attr({"class":"widget-content nopadding"});
        content.append(obj.content);
        box.append(content);
        return box;
    },
    modaldialog:function(obj){
        var box = $("<form></form>").attr({id:obj.id,class:'modal hide fade',tabindex:'-1', role:'dialog','aria-hidden':'true'});
        var header = $('<div></div>').attr('class','modal-header');
        header.append(obj.header);

        box.append(header);
        var body = $("<div></div>").attr("class","modal-body");
        body.append(obj.body);
        box.append(body);

        var footer = $("<div></div>").attr('class','modal-footer');
        footer.append(obj.footer);
        box.append(footer);
        return box;
    },
    paginationbox:function(obj){
        var box = $("<div></div>").addClass("pagination alternate");
        var list = $("<ul></ul>");
        for(var i in obj.list){
            list.append($("<li><a href='#'>"+obj.list[i]+"</a> </li>"));
        }
        box.append(list);
        return box;
    }

}
/**
 * Created by LYW on 13-11-28.
 */
