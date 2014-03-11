var listPageName;
var listPageExt;
//分页
function getPageNav(iTotalPage, iCurrPage, iDataCount, pageName, pageExt) {
	if (iTotalPage == 1) {
		return "";
	}
	listPageName = pageName;
	listPageExt = pageExt;
	iTotalPage = parseInt(iTotalPage);
	iCurrPage = parseInt(iCurrPage) + 1;
	iDataCount = parseInt(iDataCount);
	var sb = "";
	var iRemainPage = 2;
	var iPrePage = iCurrPage - 1;
	var iNextPage = iCurrPage + 1;

	/*
	if (iCurrPage>iRemainPage) {
		sb += "<li><a href=\"javascript:gotoListPage(1)" + "\"><span>首页</span></a></li>";
	}
	*/
	if (iCurrPage>1) {
		sb += "<li><a href=\"javascript:gotoListPage(1)" + "\"><span>首页</span></a></li>";
		sb += "<li><a href=\"javascript:gotoListPage(" + iPrePage + ")\"><span>上一页</span></a></li>";
	}	

	for (var i=iCurrPage-iRemainPage+1; i<=iCurrPage+iRemainPage-1; i++) {
		
		if (i<1) continue;
		if (i>iTotalPage) break;
		if (i != iCurrPage)
			sb += "<li><a href=\"javascript:gotoListPage(" + i + ")\"><span>" + i + "</span></a></li>";
		else
			sb += "<li><a href=\"javascript:gotoListPage(" + i + ")\" class=\"current\"><span>" + i + "</span></a></li>";
	}
		
	if (iCurrPage<iTotalPage) {
		sb += "<li><a href=\"javascript:gotoListPage(" + iNextPage + ")\"><span>下一页</span></a></li>";
		sb += "<li><a href=\"javascript:gotoListPage(" + iTotalPage + ")\"><span>尾页</span></a></li>";
	}
	/*
	if (iCurrPage<=iTotalPage-iRemainPage) {
		sb += "<li><a href=\"javascript:gotoListPage(" + iTotalPage + ")\"><span>尾页</span></a></li>";
	}
	*/
	sb += "<li><span class=\"page-info\">共" + iDataCount + "条</span></li>";
	sb += "<li><span class=\"page-info\">跳转到第</span></li>";
	sb += "<li><p class=\"box\"><input type=\"text\" id=\"inputpage\" size=\"4\"></p></li>";
	sb += "<li><span class=\"page-info\">页</span><input type=\"button\" onclick=\"jumpPage(" + iTotalPage + ")\" value=\"Go\" class=\"page_goto\"></li>";
	return sb;
}

function jumpPage(totalNum) {
	var inputPage = $("#inputpage").val();
	if(isNaN(inputPage)) {
		alert("请输入数字！");
	} else {
		if (inputPage > totalNum) {
			alert("您输入的页数超过最大页数，请重新输入！");
		} else {
			gotoListPage(inputPage);
		}
	}
}

function gotoListPage(iPage) {
	var pageName = listPageName + "." + listPageExt;
	if (iPage > 1) {
		pageName = listPageName + "_" + parseInt(iPage-1) + "." + listPageExt;
	}
	location.href = pageName;
}

function post(search_id) {
	//alert($("#sex a").html());
	var searchword = "";
	var checkbund = true;
	$("#" + search_id + " .searchcolumn").each(function(index) {
		//alert($(this).attr("id"));
		//check bund situation
		if ($(this).attr("bundid") && getValue($(this)) != '') {
			if (getValue($("#"+$(this).attr("bundid"))) == '') {
				alert('请输入' + $(this).attr("bundname"));
				checkbund = false;
				return false;
			}
			$("#"+$(this).attr("bundid")).attr("bundvalue", $(this).attr("bunddelim") + getValue($(this)));
		}
	});
	if (checkbund) {
		$("#" + search_id + " .searchcolumn").each(function(index) {
			if (!$(this).attr("bundid")) {
				if (getValue($(this)) != '') {
					searchword += " AND (" + getSearchWord($(this)) + ")";
				}
			}
		});
	}
	if (searchword != '') {
		searchword = searchword.substring(5,searchword.length);
		if (searchword.indexOf('AND') < 0) {
			searchword = searchword.replace('(','').replace(')','');
		}
		//alert("检索词：" + searchword);
		$("#" + search_id + " input[name='searchword']").val(searchword);
		//$("#" + search_id).submit();
	} else {
		alert("请输入检索词！");
		return false;
	}
	
}

function reset(search_id) {
	$("#" + search_id + " .searchcolumn").each(function(index) {
		if ($(this).attr("bundvalue")) {
			$(this).removeAttr("bundvalue");
		}
		if ($(this).attr("formtype") == 'inputtext') {
			$(this).val("");
		} else if ($(this).attr("formtype") == 'selectvalue') {
			$(this).find("a").html("请选择");
		}
	});
}

function getValue(obj) {
	var obj = $(obj);
	var value = "";
	if (obj.attr("formtype") == 'inputtext') {
		if (obj.val() == obj.attr("defaultvalue")) {
			value = "";
		} else {
			value = obj.val();
		}
	} else if (obj.attr("formtype") == 'selectvalue') {
		if (obj.find("a").html() == '请选择' || obj.find("a").html().trim() == obj.attr("defaultvalue")) {
			value = "";
		} else {
			value = obj.find("a").html().trim();
		}
	}
	if (value == '') {
		return '';
	} else {
		if (obj.attr("bundvalue")) {
			return value + obj.attr("bundvalue");
		} else {
			return value;
		}
	}
}

function getOperator(obj) {
	var value = "=";
	if (obj.attr("operator")){
		value = obj.attr("operator");
	}
	return value;
}

function getSearchWord(obj) {
	var obj = $(obj);
	var value = "";
	if (obj.attr("datatype") == 'char') {
		value = obj.attr("id") + getOperator(obj) + "'%" + getValue(obj) + "%'";
	} else if (obj.attr("datatype") == 'date') {
		value = obj.attr("id") + getOperator(obj) + getValue(obj);
	} else if (obj.attr("datatype") == 'fulltext') {
		value = getValue(obj);
	} 
	return value;
}
$(document).ready(function () {
	$("#overall_option li").click(function () {
		if (!$(this).children("a").length) {
			if ($(this).parents(".option-box").prev().is(".select-box")) {
				$(this).parents(".option-box").prev(".select-box").find("a").html($(this).html());
			} else {
				$(this).parents(".option-box").prev(".input-text").val($(this).html());
			}
		}
		$(this).parents(".option-box").hide();
		$("#overall_channelid").val($(this).attr("channelid"));
	});
});

function getExhDate(date) {
	var time = date.substring(date.length-5, date.length);
	if (time != "00:00") {
		document.write(date);
	} else {
		document.write(date.substring(0, date.length-6));
	}
}

function getActDate(date1, date2) {
	if (date1.substring(0,4) != date2.substring(0,4)) { //跨年
		document.write(date1 + " - " + date2);
	} else {
		if (date1.substring(0,10) == date2.substring(0,10)) { //一天的
			document.write(date1 + " - " + date2.substring(date2.length-5, date2.length));
		} else { //一年但不是同一天
			document.write(date1 + " - " + date2.substring(date2.length-11, date2.length));
		}
	}
}

String.prototype.trim= function(){  
    // 用正则表达式将前后空格  
    // 用空字符串替代。  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}

function showAlert(message, timeout) {
	$.blockUI({
		message:  message,
		timeout:   timeout || 1000
	}); 
}