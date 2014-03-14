package controllers.admin;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSON;

import models.mag_page;
import play.mvc.Controller;

public class Page extends Controller{
	public static void add(){
		if(request.method=="GET"){
			render();
		}else{
			mag_page page = new mag_page();
			page.title = params.get("title");
			page.content = params.get("content");
			page.createtime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
			page.author =  session.get("username");
			page.save();
			
			flash("msg", "<div class='alert alert-success'>添加成功</div>");
			redirect("/admin/page");
		}
	}
	public static void allPages(){
		List<mag_page> pages = mag_page.find("order by id desc").fetch();
		
		String msg = flash.get("msg");
		render(pages, msg);
	}
	public static void edit(int id){
		mag_page page = mag_page.findById(id);
		if(request.method=="GET"){
			render(page);
		}else{
			page.title = params.get("title");
			page.content = params.get("content");
			page.save();
			
			flash("msg", "<div class='alert alert-success'>修改成功</div>");
			redirect("/admin/page");
		}
	}
	public static void delete(int id){
		mag_page page = mag_page.findById(id);
		page.delete();
		
		flash("msg", "<div class='alert alert-success'>删除成功</div>");
		redirect("/admin/page");
	}
}
