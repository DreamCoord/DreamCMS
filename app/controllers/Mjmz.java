package controllers;

import java.util.List;
import java.util.Map;

import models.mag_banner;
import models.mag_works;
import models.mag_worksclass;
import models.sys_member;
import play.mvc.Controller;

public class Mjmz extends Controller{
	public static void index(){
		mag_banner banner = new mag_banner();
		List<Map> zptj = banner.getBannerList("ceshi01");
		render("Application/Mjmz/mjmz.html",zptj);
	}
	public static void zzml(){
		sys_member m = new sys_member();
		List<Map> allMember = m.allMember();
		
		render("Application/Mjmz/zzml.html",allMember);
	}
	public static void zpzs(){
		mag_works works = new mag_works();
		List<Map> tuijian = works.getWorksList(9, "all");	
		
		mag_worksclass classlist = new mag_worksclass();
		List<Map> plist = classlist.getClassify(1);
		List<Map> llist = classlist.getClassify(2);

		render("Application/Mjmz/zpzs.html",tuijian,plist,llist);
	}
	public static void zxzl(){
		render("Application/Mjmz/zxzl.html");
	}
	public static void pages(int id){
		mag_works works = new mag_works();
		Map<String,Object> data = works.getNewsPage(id);
		render("Application/Mjmz/pages.html",data);
	}
	
	
	public static void ClassList(int id,String title){
		mag_worksclass classlist = new mag_worksclass();
		List<Map> plist = classlist.getWorksClass(id);
		
		
		render("Application/Mjmz/classlist.html",title,plist);
	}
}
