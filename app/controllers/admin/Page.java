package controllers.admin;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSON;

import models.mag_page;
import play.mvc.Controller;

public class Page extends Controller{
	public static void addPage(String titleStr,String contentStr){
		System.out.println(titleStr+contentStr);
		DateFormat dt=DateFormat.getInstance();
		String createtime = dt.format(new Date()).toString(); 
		new mag_page(titleStr,contentStr,createtime,"admin").save();
		renderJSON("ok");
	}
	public static void allPages(){
		List<mag_page> pagelist = mag_page.find("order by id desc").fetch();
		String jsonStr = JSON.toJSONString(pagelist);
		String backJSON = "{\"pagelist\":"+jsonStr+"}";
		renderJSON(backJSON);
	}
	public static void getPage(){
		
	}
	public static void delPage(){
		
	}
}
