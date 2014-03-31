package controllers.admin;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSON;

import models.admin_blogroll;
import models.admin_parameters;
import models.mag_article;
import models.mag_classify;
import models.mag_classify_art;
import models.rbac_users;
import play.mvc.Controller;

public class Systems extends Controller{
	/**
	 * 网站参数查询
	 */
	public static void changgui_query(){
		admin_parameters parameter=new admin_parameters();
		List<admin_parameters> parameters = admin_parameters.findAll();
		if(parameters.size()>0){
			parameter=parameters.get(0);
		}
		render("admin/Systems/changgui.html",parameter);
	}
	/**
	 * 网站参数修改
	 */
	public static void changgui_edit(String id,String title,String subhead,String keywords){
		String result="no";
		if(!id.equals("") && id!=null ){
			admin_parameters parameter = admin_parameters.findById(Integer.parseInt(id));
			parameter.title=title;
			parameter.subhead=subhead;
			parameter.keywords=keywords;
			parameter.save();
			result="yes";
		}	
		renderJSON("{\"state\":\""+result+"\"}");
	}
	/**
	 * 友情链接查询
	 */
	public static void link_query(){
		admin_blogroll parameter=new admin_blogroll();
		List<admin_blogroll> linklist = admin_blogroll.findAll();
		render("admin/Systems/links.html",parameter,linklist);
	}
	/**
	 * 友情连接添加
	 */
	public static void link_add(String name,String address,String remark,String state){
		try{
			admin_blogroll blogroll =new admin_blogroll(name, address, remark,state);
			blogroll.name=name;
			blogroll.address=address;
			blogroll.remark=remark;
			blogroll.state=state;
			blogroll.save();
		}catch(Exception e){
		}
		link_query();
	}
	/**
	 * 友情链接修改加载
	 */
	public static void link_editinit(int id){
		admin_blogroll blogroll = admin_blogroll.findById(id);
		render("admin/Systems/links_edit.html",blogroll);
	}
	/**
	 * 友情链接修改
	 */
	public static void link_edit(int id,String name,String address,String remark,String state){
		admin_blogroll blogroll= new admin_blogroll();
		try{
			blogroll = admin_blogroll.findById(id);
			blogroll.name=name;
			blogroll.address=address;
			blogroll.remark=remark;
			blogroll.state=state;
			blogroll.save();
		}catch(Exception e){
			e.printStackTrace();
		}
		flash("msg", "<div class='alert alert-success'>保存成功</div>");
		render("admin/Systems/links_edit.html",blogroll);
	}
	/**
	 * 友情链接删除
	 */
	public static void link_del(int id){
		admin_blogroll blogroll = admin_blogroll.findById(id);
		blogroll.delete();
		String fanhuizhi="yes";
		renderJSON("{\"state\":\""+fanhuizhi+"\"}");
	}
	public static void fenxi(){

            render();
    }
    public static void logs(){

            render();
    }


}
